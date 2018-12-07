//app.js
App({
  onLaunch: function () {
    var that=this;
    var server = require('utils/server.js');
    var openid = wx.getStorageSync("openid");
    console.log(openid);   
    if (openid){
      // 从本地缓存调用用户信息。
      wx.getStorage({
        key: 'userinfo',
        success: function(res) {
          // 如果有该缓存,将其数据赋值给全局变量。
          console.log('调取异步缓存')
          that.globalData.userinfo = res.data;
          that.globalData.userinfo.openid = openid;
        },
        fail:function(){
          console.log('如果没有该缓存数据，从服务器获取用户信息')
          // 如果没有该缓存数据，从服务器获取用户信息
          server.userinfo(that, openid);
        }
      })
      
    }else{
      // 载入小程序，获取用户openid。
      
      server.wxlogin(that);
    }
  },
  globalData: {
    userinfo: {},
    manage:null,
  }
})