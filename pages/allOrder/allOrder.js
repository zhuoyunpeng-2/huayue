// pages/allOrder/allOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:["全部","待付款","待发货","待收货","待评价"],
    productList:[],
    currentIndex:0
  },
  myshowModal(e){
    var that=this
    var index =e.currentTarget.dataset.id
    that.setData({
      currentIndex:index
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'https://hua512.com/?s=api/user.order/lists&dataType=payment&wxapp_id=10001&token=4fb1a200e7dbd6ad9590a09842c7b5cd',
      success:function(res){
        console.log(res.data.data.list[0])
        that.setData({
          productList:res.data.data.list
        })
      }
    })
  },
  godetail(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail?id='+id,
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