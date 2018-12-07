var movie=require("../../utils/movie.js");
var server = require('../../utils/server.js');
var m=0;
// pages/reserve/reserve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    movie.movieList(this, movie.API_HOT);
    server.lightTime(this);
  },
  onReachBottom: function () {
    m++;
    if(m<=4){
      movie.hotTouchButtom(this,m, movie.API_HOT_MORE_1, movie.API_HOT_MORE_2);
      console.log(m);
    }
    
  },
  toDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id,
    })
  },

  // 搜索
  toSearch:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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
    movie.movieList(this, movie.API_HOT);
    server.lightTime(this);
    wx.stopPullDownRefresh();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})