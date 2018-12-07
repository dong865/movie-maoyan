// pages/message/message.js
var app=getApp();
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
    this.setData({
      id: options.id,
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
  // 表单提交
  to_message:function(e){
    let data = e.detail.value;
    data.id=this.data.id;
    data.title = this.data.title;
    data.openid=app.globalData.userinfo.openid;
    data.name = app.globalData.userinfo.name;
    data.headPic = app.globalData.userinfo.headPic;
    data.manage = app.globalData.manage;
    wx.request({
      url: 'https://wxapp.super21.cn/setUserTime',
      data:data,
      header:{"content-type":"json"},
      success:function(e){
        console.log(e);
        if (e.data){
          wx.showToast({
            title: '添加成功',
          })
          wx.redirectTo({
            url: '../detail/detail?id='+data.id,
          })
        }else{
          wx.showToast({
            title: '添加失败',
          })
        }
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