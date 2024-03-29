// pages/sendFlower/sendFlower.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     flowerList:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFlowers().then((res)=>{
      console.log(res);
      this.setData({
        flowerList:res.data.data.category
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
  getFlowers:function(){
     return new Promise((resolve,reject)=>{
       wx.request({
         url: 'https://hua512.com/?s=/api_wap/article/index',
         method:"post",
         success:function(res){
           resolve(res)
         },
         fail:function(error){
           reject(error)
         }
       })
     })
  }
})