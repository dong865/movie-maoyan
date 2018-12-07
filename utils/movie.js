var movieMore=require("movieMore.js");
var API_NEW ="https://m.maoyan.com/ajax/comingList?ci=1&token=&limit=10";
var API_HOT = "http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000";
var API_MORE_1 = "https://m.maoyan.com/ajax/moreComingList?ci=1&token=&limit=10&movieIds=";
var API_MORE_2;
var API_DETAIL="https://m.maoyan.com/ajax/detailmovie?movieId="
var API_SEARCH_1 ="https://m.maoyan.com/ajax/search?kw=";
var API_SEARCH_2 = "&cityId=1&stype=-1";
var newIds,hotIds;
function doubleDimension(arr,index) {//一维数组转二维数组
  var idArr = arr;
  var idsArr = [];
  var result = Math.ceil(idArr.length / 10);
  var n
  var m
  var s = index;
  for (var i = 1; i < result; i++) {
    idsArr[i] = []
    n = s;
    s += 10;
    m = s;
    for (var j = n; j < m; j++) {
      if (idArr[j]){
        idsArr[i].push(idArr[j])
      }     
    }
  }
  return idsArr
}

function replaceImg(result) {//替换原来的img地址。
  result.forEach(function (e) {
    if(e.img){
      e.img = e.img.replace("w.h", "130.180");
    } 
  });
}

function newTouchButtom(that,n){//触底刷新
  API_MORE_2 = newIds[n].join("%2C");
  movieMore.loadMore(that, n, API_MORE_1, API_MORE_2, replaceImg);  
}

function hotTouchButtom(that, n) {//触底刷新
  API_MORE_2 = hotIds[n].join("%2C");
  movieMore.loadMore(that, n, API_MORE_1, API_MORE_2, replaceImg);
}

function movieList(that){//加载影片列表
  console.log(arguments)
  switch(arguments.length){
    case 2:
      wx.request({
        url: arguments[1],
        data: {},
        method:"get",
        header: { "Content-Type": "json" },
        success: function (res) {
            console.log(res);
          if (res.data.coming.length==0){//正在热映
            var hotList = res.data
            hotIds = doubleDimension(hotList.movieIds,12)
            replaceImg(hotList.movieList);
            that.setData({
              movieList: hotList.movieList,
            })
          }else{//将要上映
            var newList = res.data;
            newIds = doubleDimension(newList.movieIds,10)
            replaceImg(newList.coming);
            that.setData({
              movieList: newList.coming,
            })
          }
        }
      })
      break;
    case 3:
      wx.request({
        url: arguments[1] + arguments[2],
        data:{},
        header: { "Content-Type": "json" },
        success: function (res) {//电影详情
          var imgReplace = res.data.detailMovie.img;
          res.data.detailMovie.imgmini = imgReplace.replace("w.h", "1.1")
          res.data.detailMovie.imgBg = imgReplace.replace("w.h","6.10")
          res.data.detailMovie.img = imgReplace.replace("w.h", "250.350")
          that.setData({
            movieDetail:res.data.detailMovie
          })
          console.log(that.data.movieDetail)
        }
      })
      break;
    case 4:
      wx.request({
        url: arguments[1]+arguments[2]+arguments[3],
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          console.log(res)
        }
      })
      break;
  }  
}
// 搜索电影
function search(that,result){
  let URL = API_SEARCH_1 + result + API_SEARCH_2;
  wx.request({
    url: URL,
    data:{},
    header:{'content-type':'json'},
    success:function(res){
      console.log(res);
      if(!res.data.hot){
        var movies = res.data.movies.list;
        replaceImg(movies);
        that.setData({
          movieList: movies,
        })
      }
      
      // console.log(that.data.movieList);
    }
  })
}
module.exports={
  API_NEW: API_NEW,
  API_HOT: API_HOT,
  API_DETAIL: API_DETAIL,
  movieList: movieList,
  newIds: newIds,
  hotIds: hotIds,
  newTouchButtom: newTouchButtom,
  hotTouchButtom: hotTouchButtom,
  search: search,
}