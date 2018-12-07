var movie=require("movie.js");
function loadMore(that, k, API_1, API_2, replaceImg){
  // console.log(API_1 + API_2)
  switch (k) {
    case 1:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          console.log(res.data.coming);
          that.setData({
            movieMore_1: res.data.coming,
          })
        }
      })
      break;
    case 2:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_2: res.data.coming,
          })
        }
      })
      break;
    case 3:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_3: res.data.coming,
          })
        }
      })
      break;
    case 4:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_4: res.data.coming,
          })
        }
      })
      break;
    case 5:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_5: res.data.coming,
          })
        }
      })
      break;
    case 6:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_6: res.data.coming,
          })
        }
      })
      break;
    case 7:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_7: res.data.coming,
          })
        }
      })
      break;
    case 8:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_8: res.data.coming,
          })
        }
      })
      break;
    case 9:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_9: res.data.coming,
          })
        }
      })
      break;
    case 10:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_10: res.data.coming,
          })
        }
      })
      break;
    case 11:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_11: res.data.coming,
          })
        }
      })
      break;
    case 12:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_12: res.data.coming,
          })
        }
      })
      break;
    case 13:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_13: res.data.coming,
          })
        }
      })
      break;
    case 14:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_14: res.data.coming,
          })
        }
      })
      break;
    case 15:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_15: res.data.coming,
          })
        }
      })
      break;
    case 16:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_16: res.data.coming,
          })
        }
      })
      break;
    case 17:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_17: res.data.coming,
          })
        }
      })
      break;
    case 18:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_18: res.data.coming,
          })
        }
      })
      break;
    case 19:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_19: res.data.coming,
          })
        }
      })
      break;
    case 20:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_20: res.data.coming,
          })
        }
      })
      break;
    case 21:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_21: res.data.coming,
          })
        }
      })
      break;
    case 22:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_22: res.data.coming,
          })
        }
      })
      break;
    case 23:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_23: res.data.coming,
          })
        }
      })
      break;
    case 24:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_24: res.data.coming,
          })
        }
      })
      break;
    case 25:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_25: res.data.coming,
          })
        }
      })
      break;
    case 26:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_26: res.data.coming,
          })
        }
      })
      break;
    case 27:
      wx.request({
        url: API_1 + API_2,
        data: {},
        header: { "Content-Type": "json" },
        success: function (res) {
          replaceImg(res.data.coming);
          that.setData({
            movieMore_27: res.data.coming,
          })
        }
      })
      break;
  }  
}
module.exports={
  loadMore: loadMore,
}
