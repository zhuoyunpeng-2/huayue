var baseUrl = "https://hua512.com/?s=api/";
export function getcartList() {
  return new Promise((reslove, reject) => {
    wx.request({
      url: baseUrl + 'cart/lists',
      data: {
        wxapp_id: 10001,
        token: "4fb1a200e7dbd6ad9590a09842c7b5cd"
      },
      success: function (res) {
        // console.log(res);
        reslove(res)
      }
    })
  })
}
export function delectList(id) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: baseUrl + 'cart/delete',
      method: "post",
      //  header:"application/json; charset=utf-8",
      data: {
        goods_sku_id: id,
        wxapp_id: 10001,
        token: "4fb1a200e7dbd6ad9590a09842c7b5cd"
      },
      success: function (res) {
        reslove(res);
      }
    })
  })
}
export function addressList(id) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: baseUrl + 'order/cart',
      data: {
        cart_ids: id,
        wxapp_id: 10001,
        token: "4fb1a200e7dbd6ad9590a09842c7b5cd"
      },
      success: function (res) {
        reslove(res);
      }
    })
  })
}
export function addorder(id,text,name,tel) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: baseUrl + 'order/cart',
      method: "post",
      data: {
        cart_ids: id,
        coupon_id:null,
        remark:text,
        send_user_name:name,
        send_user_phone:tel,
        delivery_date:2019 - 11 - 16,
        delivery_time:3,
        wxapp_id:10001,
        token: "4fb1a200e7dbd6ad9590a09842c7b5cd"
      },
      success: function (res) {
        reslove(res);
      }
    })
  })
}