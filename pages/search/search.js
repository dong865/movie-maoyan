// pages/search/search.js
var movie = require('../../utils/movie.js');
var server=require('../../utils/server.js')
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
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  // 提交搜索
  onShow: function (e) {
    server.lightTime(this, null);
    if(e){
      let result=e.detail.value;
      movie.search(this,result)//搜索列表
    } 
  },
  // 进入详情页
  toDetail:function(e){
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id,
    })
  },
// 返回
  goBack:function(){
    wx.navigateBack({
      
    })
  },
  // 返回主页
  goHome: function () {
    wx.switchTab({
      url: '../new/new',
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