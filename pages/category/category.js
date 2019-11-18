// pages/category/category.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      currentIndex:0,
      childList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
    wx.request({
      url: "https://hua512.com/?s=/api_wap/category/index&wxapp_id=10018&sign=2228aa244438551c61f9c929b9a9e8e0&token=",
      success: function (res) {
      
        that.setData({
          list: res.data.data.list,
          childList: res.data.data.list[0].child
         
      
        })
        console.log(that.data.list)
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
  selectOne(event){
    var index = event.currentTarget.dataset.index;
this.setData({
currentIndex:index,
  childList: this.data.list[index].child
})


  },
titSeach:function(){
  wx.navigateTo({
    url: './seach/seach',
  })
},
index (event) {
  var id =event.currentTarget.dataset.id
    wx.navigateTo({
      url: './index/index?id='+id,
    })
  }
})