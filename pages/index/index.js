//index.js
//获取应用实例
var movie=require ('../../utils/movie.js');
var server = require('../../utils/server.js');
var n=0;
Page({
  data: {
    
  },
  onLoad: function () {
    movie.movieList(this, movie.API_NEW);
    server.lightTime(this,null);
  },
  toDetail:function(e){
    wx.navigateTo({
      url: '../detail/detail?id='+e.currentTarget.id,
    })
  },
  // 触底加载
  onReachBottom:function(){
    n++;
    movie.newTouchButtom(this, n);    
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    movie.movieList(this, movie.API_NEW);
    server.lightTime(this, null);
    wx.stopPullDownRefresh()
  },
  // 搜索
  toSearch:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
/**
 * 用户点击右上角分享
 */
onShareAppMessage: function () {

}
})