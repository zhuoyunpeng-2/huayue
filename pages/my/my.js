// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    isshowModel:false,
    userInfo:''
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
  onShow: function () {
    //判断是否登陆
    var isLogin = wx.getStorageSync("isLogin");
    if (!isLogin) {
      //如果没有登录，显示登录框
      this.setData({
        isshowModel: true
      })
    } else {
      //肯定已经含有用户信息了
      this.setData({
        isShow: true,
        userInfo: wx.getStorageSync("userInfo")
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
  getUserInfo(res) {
    console.log(res);
    wx.setStorageSync("userInfo", res.detail.userInfo);
    wx.setStorageSync("isLogin", true);
    this.setData({
      userInfo: wx.getStorageSync("userInfo"),
      isShow: true,
      isshowModel: false
    })
  },
  cancle(){
    this.setData({
      isshowModel: false
    })
  },
  goSendFlower(){
    wx.navigateTo({
      url: '/pages/sendFlower/sendFlower'
    })
  },
  goAddress(){
    //Address
    // wx.navigateTo({
    //   url: '/pages/Address/Address',
    // })
  },
  goGiveMoney(){
    //allOrder
    wx.navigateTo({
      url: '/pages/allOrder/allOrder',
    })
  }
})