// pages/order/order.js
import {addressList} from "../../api/api.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     orderInfo:null,
     isShow:false,
     animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    addressList("499_0,341_0").then((res)=>{
      console.log(res.data.data);
      this.setData({
        orderInfo:res.data.data
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
  selectTime:function(){
    console.log("展示日历")
  },
  open:function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    if(!this.data.isShow){
      animation.rotate(-45).step();
      this.setData({
        animationData: animation.export(),
        isShow: !this.data.isShow
      })
    }else{
      animation.rotate(0).step();
      this.setData({
        animationData: animation.export(),
        isShow: !this.data.isShow  
      })
    } 
  
  },
  toindex:function(){
    console.log("去首页")
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  tocate: function () {
    wx.switchTab({
      url: '/pages/category/category',
    })
  },
  tocart: function () {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  tomy: function () {
    wx.switchTab({
      url: '/pages/my/my',
    })
  },
  toselectadd:function(){
    wx.navigateTo({
      url: "/pages/selecteAddress/selecteAddress",
    })
  }
})