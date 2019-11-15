// pages/moreCom/moreCom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detaiList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this
    console.log(options)
    wx.request({
      url: 'https://hua512.com/?s=/api_wap/comment/lists&wxapp_id=10018&sign=2228aa244438551c61f9c929b9a9e8e0&token=&page=1',
      data: {
        "goods_id": options.id
      },
      success: function (res) {
        var newarr = res.data.data.list.data
        var arr = newarr.slice(1)
        console.log(arr)
        that.setData({
          detaiList: arr
        })
      }
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

  },
  
  
})