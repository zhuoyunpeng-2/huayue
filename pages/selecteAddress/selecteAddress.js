// pages/selecteAddress/selecteAddress.js
const app = getApp()
import bMap from "../../libs/baidulbs.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
      name:'',
      call:'',
      diqu:'',
      xx:'',
    multiArray: [],
    multiIndex: [0, 0, 0],
    provinces: '',
    btn:"选择省、市、区"
  },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    var that=this
    wx.request({
      url: 'http://api.map.baidu.com/shangquan/forward/?qt=sub_area_list&ext=1&level=3&areacode=1&business_flag=0',
      success:function(res){
        console.log(res.data.content.sub)
        var provinces = res.data.content.sub
        that.setData({
          provinces: provinces,
          multiArray: [provinces, provinces[0].sub, provinces[0].sub[0].sub]
        })
        console.log(res.data)
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
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,
    };
    //更新滑动的第几列e.detail.column的数组下标值e.detail.value
    data.multiIndex[e.detail.column] = e.detail.value;
    //如果更新的是第一列“省”，第二列“市”和第三列“区”的数组下标置为0
    if (e.detail.column == 0) {
      data.multiIndex = [e.detail.value, 0, 0];
    } else if (e.detail.column == 1) {
      //如果更新的是第二列“市”，第一列“省”的下标不变，第三列“区”的数组下标置为0
      data.multiIndex = [data.multiIndex[0], e.detail.value, 0];
    } else if (e.detail.column == 2) {
      //如果更新的是第三列“区”，第一列“省”和第二列“市”的值均不变。
      data.multiIndex = [data.multiIndex[0], data.multiIndex[1], e.detail.value];
    }
    var temp = this.data.provinces;
    data.multiArray[0] = temp;
    if ((temp[data.multiIndex[0]].sub).length > 0) {
      //如果第二列“市”的个数大于0,通过multiIndex变更multiArray[1]的值
      data.multiArray[1] = temp[data.multiIndex[0]].sub;
      var areaArr = (temp[data.multiIndex[0]].sub[data.multiIndex[1]]).sub;
      //如果第三列“区”的个数大于0,通过multiIndex变更multiArray[2]的值；否则赋值为空数组
      data.multiArray[2] = areaArr.length > 0 ? areaArr : [];
    } else {
      //如果第二列“市”的个数不大于0，那么第二列“市”和第三列“区”都赋值为空数组
      data.multiArray[1] = [];
      data.multiArray[2] = [];
    }
    //data.multiArray = [temp, temp[data.multiIndex[0]].citys, temp[data.multiIndex[0]].citys[data.multiIndex[1]].areas];
    //setData更新数据
    this.setData({
      btn: this.data.multiArray[0][this.data.multiIndex[0]].area_name + this.data.multiArray[1][this.data.multiIndex[1]].area_name + this.data.multiArray[2][this.data.multiIndex[2]].area_name
    });
    this.setData(data);
    
   
    

  },
  getAddress:function(){
    console.log("da")
    var that = this;
    var BMap = new bMap.BMapWX({
      ak: 'sXq4GWno6tfvR4UmoBC97XGytd0bE96r'
    });
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        BMap.regeocoding({
          location: res.latitude + ',' + res.longitude,
          success: function (res) {
            that.setData({
              btn: res.originalData.result.formatted_address
            })
          },
          fail: function () {
            wx.showToast({
              title: '请检查位置服务是否开启',
            })
          }
        })
      },
    })
    
    
  },
  name:function(event){
    this.setData({
      name:event.detail.value
    })
  },
  call: function (event) {
    this.setData({
      call: event.detail.value
    })
  },
  xx: function (event) {
    this.setData({
      xx: event.detail.value
    })
  },
  getAddress2:function(){
    var that=this;


    if(this.data.name==""||this.data.call==""||this.data.xx==""||this.data.btn==""){
      console.log("wer")
      wx.showToast({
        title: '以上信息均不能为空',
      })
    }else{
      wx.setStorageSync("address", that.data.name + that.data.call + that.data.btn + that.data.xx)
    }
    
  }
})