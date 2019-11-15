// pages/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     orderDetailList:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderDetail().then((res)=>{
      console.log(res);
      this.setData({
        orderDetailList:res.data.data.order
      })
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
  getOrderDetail(){
    return new Promise((resolve,reject)=>{
      wx.request({
          url: 'https://hua512.com/?s=api/user.order/detail',
        data:{
          order_id:'16307',
          wxapp_id:"10001",
          token:'4fb1a200e7dbd6ad9590a09842c7b5cd'
        },
        success:function(res){
          resolve(res)
        },
        fail:function(error){
          reject(error)
        }
      })
    })
  },
  getTitle(){
    wx.showModal({
      title: '提示',
      content: '确认取消订单？',
      success:function(res){
        //allOrder
        if(res.confirm){
          wx.navigateTo({
            url: '/pages/allOrder/allOrder'
          })
        }
      }
    })
  }
})