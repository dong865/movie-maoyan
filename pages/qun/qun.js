// pages/qun/qun.js
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
  // 返回
  goBack:function(e){
    wx.navigateBack({
      
    })
  },
  // 返回主页
  goHome: function () {
    wx.switchTab({
      url: '../new/new',
    })
  },
  // 复制
  copyqq:function(e){
    wx.setClipboardData({
      data: '18888899',
    })
  },
  copyweixin:function(){
    wx.setClipboardData({
      data: '865832',
    })
  },
  //浏览二维码
  previewImg:function(){
    wx.previewImage({
      urls: ["http://p54cgqdci.bkt.clouddn.com/weixin.png"],
    })
  }, 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})