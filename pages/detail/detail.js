// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
import {getcartList} from "../../api/api.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:null,
      detaiList:[],
      productAll:'',
      num:[]
      
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
  goorder(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/order/order?join=' + "nowbuy" + "&id=" + id,
    })
   
    
  },
  addBuy(e){
    var that = this
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.request({
      method:'post',
      url: 'https://hua512.com/?s=api/cart/add/',
      data:{
        goods_id: id,
        goods_num: 1,
        goods_sku_id: 0,
        wxapp_id: 10001,
        token: "4fb1a200e7dbd6ad9590a09842c7b5cd",
      },
     
      success:function(res){
        
        var msg = res.data.msg
       
        console.log(msg)
        console.log(res.data)
        if (msg !="很抱歉，商品库存不足"){
          getcartList().then((res) => {
            console.log(res.data.data)
            that.setData({
              num: res.data.data
            })
          })
          wx.showToast({
            title: "添加购物车成功",
          })
         
        }else{
         
          wx.showToast({
            title: '很抱歉，商品库存不足',
            icon:"none"
          })
        }
       
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
    var that = this
    getcartList().then((res)=>{
      console.log(res.data.data)
      that.setData({
          num: res.data.data
        })
    })
    // var that =this
    // wx.request({
    //   method: 'post',
    //   url: 'https://hua512.com/?s=api/cart/add/',
    //   data: {
    //     goods_id: 628,
    //     goods_num: 1,
    //     goods_sku_id: 0,
    //     wxapp_id: 10001,
    //     token: "4fb1a200e7dbd6ad9590a09842c7b5cd",
    //   },
    //   success:function(res){
    //     console.log(res)
    //     that.setData({
    //       num: res.data.data.cart_total_num
    //     })
    //   }
    // })
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