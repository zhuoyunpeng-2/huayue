// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:null,
      detaiList:[],
      productAll:''
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this
    console.log(options)
    wx.request({
      url: 'https://hua512.com/?s=/api_wap/goods/detail&wxapp_id=10018&sign=2228aa244438551c61f9c929b9a9e8e0&token=',
      data:{
        "goods_id":options.id
      },
      success:function(res){
        console.log(res.data.data.detail)
       that.setData({
          detaiList:res.data.data
        })
        WxParse.wxParse('productAll', 'html', res.data.data.detail.content, that, 5);
      }
    })
  },
  moreDetail(event){
    var id = event.currentTarget.dataset.d;
    console.log(id)
    wx.navigateTo({
      url: '/pages/moreCom/moreCom?id='+id
      })
  },
  gobuycart(){
    wx.switchTab({
      url: '/pages/cart/cart',
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