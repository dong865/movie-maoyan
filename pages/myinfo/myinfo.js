//logs.js
// const util = require('../../utils/util.js')
let app=getApp();
let server=require("../../utils/server.js");
Page({
  data: {

  },
  onShow: function () {
    
    let login=app.globalData.login;
    // login的值判断用户的登陆状态。
    switch (login){
      case "offLine":
        wx.removeStorageSync('openid');
        wx.removeStorage({
          key: 'userinfo',
          complete: res => {
            this.setData({
              info:null,
            })
          },
        })
        break;
      case "onLine":
        wx.getStorage({
          key: 'userinfo',
          success: res => {
            console.log(res.data)
            this.setData({
              info: res.data,
            })
          },
        })
        break;
      default:
        wx.getStorage({
          key: 'userinfo',
          success: res => {
            console.log(res.data)
            this.setData({
              info: res.data,
            })
          },
        })
        break;
    }
    // let openid = app.globalData.userinfo.openid;
    // server.userinfo(this, openid,"myinfo");
  },

  // 登陆按钮
  getInfo: function (e) {
    e.detail.userInfo.headPic=e.detail.userInfo.avatarUrl;
    e.detail.userInfo.name = e.detail.userInfo.nickName;
    this.setData({
      info: e.detail.userInfo,
    })
    console.log(app.globalData.userinfo);
    e.detail.userInfo.openid = app.globalData.userinfo.openid;
    app.globalData.userinfo = e.detail.userInfo;
    
    wx.setStorage({
      key: 'userinfo',
      data: e.detail.userInfo,
    })
    app.globalData.login="onLine";
    server.updateUser(e.detail.userInfo);//更新用户信息
  },
  // 打赏作者
  reward:function(){
    wx.previewImage({
      urls: ["http://p54cgqdci.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180305204034.jpg"],
    })
  },
  // 加入群
  qun:function(e){
    wx.navigateTo({
      url: '../qun/qun',
    })
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

  }
})
