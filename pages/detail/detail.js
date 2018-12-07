// pages/detail/detail.js
var app=getApp();
var movie=require('../../utils/movie.js');
var server = require('../../utils/server.js');
Page({
  data: {
    status:0,
    timeBox:0,
  },
  onLoad: function (options) {
    console.log(app.globalData.userinfo);
    let openid = app.globalData.userinfo.openid;
    movie.movieList(this, movie.API_DETAIL, options.id);//加载电影
     server.userinfo(this,openid,"detail");//获取用户信息和权限（管理员）
     server.lightTime(this, options.id);//加载开灯时间和提供时间的用户信息（管理员）
    server.message(this, options.id);//获取留言者信息和权限
  },
  // 返回按钮
  goBack:function(e){
    // console.log(e);
    wx.navigateBack({
      
    })
  },
  // 返回主页
  goHome:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  on_off:function(){
    switch(this.data.status){
      case 1:
        this.setData({
          status: 0,
        })
        break;
      case 0:
        this.setData({
          status:1,
        })
    }
  },
// 管理员留言
  control_in:function(e){
    let detail=this.data.movieDetail;
    let id=detail.id;
    let bg = detail.imgmini;
    let title=detail.nm;
    let cover = detail.img
    wx.redirectTo({
      url: '../control/control?bg=' + bg + '&&title=' + title+'&&cover='+cover+'&&id='+id,
    })
  },
  // 用户留言
  message_in: function (e) {
    let detail = this.data.movieDetail;
    let id = detail.id;
    let bg = detail.imgmini;
    let title = detail.nm;
    let cover = detail.img
    if (app.globalData.userinfo.name && app.globalData.userinfo.openid){
      if (app.globalData.manage <= 2){
        wx.redirectTo({
          url: '../message/message?bg=' + bg + '&&title=' + title + '&&cover=' + cover + '&&id=' + id,
        })
      }else{
        wx.showToast({
          title: '您没有权限',
          icon:'none',
        })
      }
    }else{
      wx.showModal({
        title: '你还没有登陆',
        content: '登陆后才能操作',
        success:function(res){
          if(res.confirm){
            /* 
            由于跳转tab页面时不能带参数，所以定义一个全局变量login。
            在被跳转页面获取login值，做相应的操作。
            */
            app.globalData.login="offLine";
            wx.switchTab({
              url: '../myinfo/myinfo',
            })
          }
        }
      })
    }
  },
  addtime1:function(e){
    this.setData({
      timeBox:1,
    })
  },
  closBox:function(e){
    this.setData({
      timeBox: 0,
    })
  },
  mainBox:function(e){
   
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})