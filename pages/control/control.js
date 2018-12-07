// pages/control/control.js
var app=getApp();
var current;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    onTime: true,
    onInform: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id,
      title: options.title,
      bg: options.bg,
      cover: options.cover,
    })
    // console.log(this.data.id);
  },

  // 返回按钮
  goBack: function (e) {
    // console.log(e);
    wx.navigateBack({

    })
  },
  // 返回主页
  goHome: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  // 点击添加字幕
  clickTime:function(){
    this.setData({
      onTime: true,
      onInform: false,
      index:0,
    })
  },
   // 点击添加通知
  clickInform: function () {
    this.setData({
      onTime: false,
      onInform: true,
      index:1
    })
  },
  // 滑动swiper
  slide:function(res){
    console.log(res.detail.current);
    current = res.detail.current;
    switch (current){
      case 0:
        this.setData({
          onTime:true,
          onInform: false
        })
        break;
      case 1:
        this.setData({
          onTime: false,
          onInform:true
        })
    }
  },
  // 提交form表单（场灯和备注）
  formtime_admin:function(e){
    let id=this.data.id;
    let movie = e.detail.value;
    if(movie.time.length<6){
      wx.showToast({
        title: '字幕时间不能为空',
        icon:'none',
      })
    }else{
      movie.id=this.data.id;
      movie.title = this.data.title;
      movie.creator = app.globalData.userinfo.openid;
      wx.request({
        url: 'https://wxapp.super21.cn/totime',
        data: e.detail.value,
        header:{"Content-type":"Json"},
        method: "GET",
        success:function(e){
          // console.log(e);
          wx.redirectTo({
            url: '../detail/detail?id='+id,
          })
        }
      })
    }
  },
  // 提交form表单（通知）
  forminform_admin: function (e) {
    let id = this.data.id;
    let movie = e.detail.value;
    movie.id = this.data.id;
    movie.title = this.data.title;
    movie.creator = app.globalData.userinfo.openid;
    wx.request({
      url: 'https://wxapp.super21.cn/totime',
      data: e.detail.value,
      header: { "Content-type": "Json" },
      method: "GET",
      success: function (e) {
        console.log(e);
        wx.redirectTo({
          url: '../detail/detail?id=' + id,
        })
      }
    })
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})