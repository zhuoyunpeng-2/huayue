//index.js

var WxParse = require('../../wxParse/wxParse.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    homeData: '',
    f1:'',
    sousuo:''
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

      }

    })
  },
  getUserInfo: function (e) {

  }
})