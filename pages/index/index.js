//index.js

var WxParse = require('../../wxParse/wxParse.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    homeData: '',
    f1:'',
    sousuo:'',
    f2:"",
    f3:'',
    f4:'',
    f5:'',
    f6:'',
    f7:''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://hua512.com/?s=api/page1/home&wxapp_id=10001&token=',
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          homeData: res.data.data.items,
          sousuo: res.data.data.items.n50214144672381.params.placeholder
        })
        var temp = WxParse.wxParse('f1', 'html', res.data.data.items.n255547080035139.params.content, that, 0); 
        var temp = WxParse.wxParse('f2', 'html', res.data.data.items.n9971340222749192.params.content, that, 0); 
        var temp = WxParse.wxParse('f3', 'html', res.data.data.items.n385584580857364.params.content, that, 0); 
        var temp = WxParse.wxParse('f4', 'html', res.data.data.items.n376112698762601.params.content, that, 0); 
        var temp = WxParse.wxParse('f5', 'html', res.data.data.items.n50155465490382856.params.content, that, 0); 
        var temp = WxParse.wxParse('f6', 'html', res.data.data.items.n859981085269553.params.content, that, 0); 
        var temp = WxParse.wxParse('f7', 'html', res.data.data.items.n4550484333418.params.content, that, 0); 
      }

    })
  },
  getUserInfo: function (e) {

  },
  goDetail:function(event){
    var id=event.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  }
})