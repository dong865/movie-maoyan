
function wxlogin(that){
  // 登陆
  wx.login({
    success: function(res) {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      // console.log(res);
      if (res.code) {      
        // 添加用户
        wx.request({
          url: 'https://wxapp.super21.cn/adduser.php',
          data: res,
          success: function(res) {
            if (res.data) {
              var manage = res.data.manage;
              var openid = res.data.openid;
              wx.setStorageSync("openid", openid);
              that.globalData.userinfo = res.data;//存储用户信息为全局变量。
              that.globalData.manage = manage;//存储用户权限为全局变量。
              // console.log(that.globalData.userinfo);
            }
          }
        })
      }
    }
  })
}
// 更新用户表数据信息
function updateUser(userinfo){
  // console.log(userinfo);
  wx.request({
    url: 'https://wxapp.super21.cn/updateuser.php',
    data: {
      info: userinfo,
    },
    success: function (res) {
      //  console.log(res);
    }
  })
}

// 获取用户信息。
function userinfo(that, openid,page=null){
  var URL = 'https://wxapp.super21.cn/userinfo.php?creator=' + openid;
  wx.request({
    url: URL,
    data: {},
    header: { "Content-Type": "Json" },
    success: function (res) {
      
      var app = getApp();
      var manage = res.data[0].manage;
      switch (page){
        case "myinfo":
          that.setData({
            info: res.data[0]
          })
          break;
        case "detail":
          app.globalData.manage = manage;
          app.globalData.userinfo = res.data[0];
          console.log(app.globalData.userinfo);
          var name = res.data[0].name//用户名，不为null表示用户已经登陆
          // 满足条件时，说明该用户是管理员。
          if (manage <= 1 && name) {
            that.setData({
              admin: 1,//设置用户权限。
            })
          }
          break;
        default:
          
          that.globalData.userinfo = res.data[0];//存储用户信息为全局变量。
          that.globalData.manage = manage;//存储用户权限为全局变量。
          // console.log(that.globalData.userinfo);
          break;
      }
  
    }
  })
}
// 获取用户留言
function message(that, movieid){
  wx.request({
    url: 'https://wxapp.super21.cn/getUserTime.php?id=' + movieid,
    data:{},
    header:{"content-type":"json"},
    success:function(res){
      // console.log(res.data);
      that.setData({
        messageList: res.data,
      })
    }
  })
}

function lightTime(that,movieid) {//获取亮灯时间
  var URL = movieid ? "https://wxapp.super21.cn/lighttime.php?id=" + movieid : "https://wxapp.super21.cn/lighttime.php";
  console.log(URL);
  wx.request({
    url: URL,
    data: {},
    header: { "Content-Type": "Json" },
    success: function (res) {
      // console.log(res.data)
      if (res.data){
        if (movieid){//获取该电影的亮灯时间及其他信息。
          that.setData({
            timeList: res.data[0],
          })
          // console.log(res.data[0].inform);
          var creator_t = res.data[0].creator
          var creator_i = res.data[0].informCreator
          if (creator_t){
            bookInfo(that, creator_t, "light");//获取提供亮灯时间的用户信息。
          }
          if (creator_i){
            bookInfo(that, creator_i, "inform");//获取提通知的用户信息。
          }
        }else{//亮度时间列表
          that.setData({
            timeList: res.data,
          })
        }
      }
    }
  })
}
// 获取留言者用户信息。
function bookInfo(that, openid, sign){
  wx.request({
    url: 'https://wxapp.super21.cn/userinfo.php?creator='+openid,
    data:{},
    header:{"Content-Type":"Json"},
    success:function(res){
      if (res.data.length==1){
        // console.log(res.data[0])
        switch (sign){
          case "light":
            that.setData({
              creator: res.data[0],
              manage_remote: res.data[0].manage,
            }) 
            break;
          case "inform":
            that.setData({
              creator_2: res.data[0],
              manage_remote_2: res.data[0].manage,
            }) 
            break;
          case "message":
            that.setData({
              creator_2: res.data[0],
            })
        }
        
      }  
    }
  })
}
module.exports={
  wxlogin: wxlogin,
  userinfo: userinfo,
  lightTime: lightTime,
  bookInfo:bookInfo,
  updateUser, updateUser,
  message, message
}