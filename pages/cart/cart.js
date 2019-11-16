// pages/cart/cart.js
import { getcartList, delectList } from "../../api/api.js"
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: null,
    isSelect: false,
    isAll: false,
    inputValue: 0,
    endPrice: "0.00",
    id: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    getcartList().then(res => {
      console.log(res.data.data.goods_list);
      var list = res.data.data.goods_list;
      list.forEach((item) => {
        item.num = 1;
        item.ischange = false;
      })
      that.setData({
        productList: list,
      })
      console.log(this.data.productList)
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
  change: function () {
    this.setData({
      isSelect: !this.data.isSelect
    })
  },
  sub: function (event) {
    var arr = this.data.productList;
    var index = event.currentTarget.dataset.index;
    if (arr[index].num <= 0) {
      arr[index].num = 0;
    } else {
      arr[index].num--;
    }
    this.setData({
      productList: arr
    })
    this.suan();
  },
  add: function (event) {
    var arr = this.data.productList;
    var index = event.currentTarget.dataset.index;
    arr[index].num++;
    this.setData({
      productList: arr
    })
    this.suan();
  },
  offInput: function (event) {
    var arr = this.data.productList;
    var index = event.currentTarget.dataset.index;
    arr[index].num = event.detail.value;
    this.setData({
      productList: arr
    })
    this.suan();
  },
  select: function (event) {
    var arr = this.data.productList;
    var index = event.currentTarget.dataset.index;
    arr[index].ischange = !arr[index].ischange;
    var selectall = arr.every((item) => {
      return item.ischange == true;
    });
    this.setData({
      productList: arr,
      isAll: selectall
    });
    this.suan();
  },
  selectall: function () {
    var arr = this.data.productList;
    arr.forEach((item) => {
      item.ischange = !this.data.isAll;
    });
    this.setData({
      isAll: !this.data.isAll,
      productList: arr
    });
    this.suan();
  },
  suan: function () {
    var arr = this.data.productList;
    var total = arr.reduce((total, item) => {
      if (item.ischange) {
        total += item.num * item.goods_price;
        return total;
      } else {
        return total;
      }
    }, 0);

    this.setData({
      endPrice: total
    })
  },
  delect: function () {
    var arr = this.data.productList;
    wx.showModal({
      title: '确定',
      content: '您确定要移除选择的商品吗?',
      success: (res) => {
        if (res.confirm) {
          var ids = [];
          var indexs = [];
          arr.forEach((item, index) => {
            if (item.ischange) {
              ids.push(item.goods_sku.goods_id + "_0");
              indexs.push(index);
            }
          })
          var id = ids.join(",");
          console.log(id);
          delectList(id).then(res => {
            if (res.data.msg == "success") {
              indexs.forEach((item) => {
                arr.splice(item, 1)
              })
            }
            this.setData({
              productList: arr,
            })
          });
        }
      }
    })
  },
  pay: function () {
    var arr = this.data.productList;
    var rewrite = arr.every((item) => {
      return item.ischange == false;
    })
    if (rewrite) {
      wx.showModal({
        title: "确定",
        showCancel: false,
        content: '您还没有选择商品',
      })
    } else {
      var idlist = [];
      var indexlist = [];
      arr.forEach((item, index) => {
        if (item.ischange) {
          idlist.push(item.goods_sku.goods_id + "_0");
          indexlist.push(index);
        }
      })
      var id = idlist.join(",");
      // console.log(id);
      wx.navigateTo({
        url: '/pages/order/order?id=' + id,
      })
    }
  }
})