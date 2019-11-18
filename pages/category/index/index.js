// pages/category/index/index.js
var WxParse = require('../../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    descData:[],
    list:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    
    wx.request({
     
      url: "https://hua512.com/?s=/api_wap/goods/lists&wxapp_id=10018&sign=2228aa244438551c61f9c929b9a9e8e0&token=&category_id=10002&search=&sortType=all&sortPrice=false&page=1",
     
      success: function (res) {
// console.log(res)
        that.setData({
          list: res.data.data.list.data,


        })
        console.log(res.data.data.list.data)
      }
              
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  selectOne(event) {
    var index = event.currentTarget.dataset.index;
    this.setData({
      currentIndex: index,
    })


  },
})