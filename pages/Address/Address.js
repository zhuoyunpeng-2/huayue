// pages/Address/Address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    address:'dsad',
    isYou:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var address=wx.getStorageSync('address')
    console.log(address)
    if(address){
      
    this.setData({
      isShow: false,
      address:address
    })
    console.log(this.data.address)
    }else{
      this.setData({
        
        addList:address
      })
    }
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
    if(this.data.address){

    }else{
      this.setData({
        isYou:true
      })
    }
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
  goselecteAddress:function(){
    console.log("dsa")
    wx.navigateTo({
      url: '/pages/selecteAddress/selecteAddress',
    })
  }
})