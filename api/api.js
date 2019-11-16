var baseUrl ="https://hua512.com/?s=api/";
export function getcartList(){
  return new Promise((reslove,reject)=>{
    wx.request({
      url:baseUrl+ 'cart/lists',
      data: {
        wxapp_id: 10001,
        token: "4fb1a200e7dbd6ad9590a09842c7b5cd"
      },
      success:function(res){
        // console.log(res);
        reslove(res)
      }
  })
})
}
export function delectList(id){
  return new Promise((reslove,reject)=>{
       wx.request({
         url:baseUrl+'cart/delete',
         method:"post",
        //  header:"application/json; charset=utf-8",
         data:{
           goods_sku_id: id,
           wxapp_id:10001,
           token:"4fb1a200e7dbd6ad9590a09842c7b5cd"
         },
         success:function(res){
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
        cart_ids:id,
        wxapp_id: 10001,
        token: "4fb1a200e7dbd6ad9590a09842c7b5cd"
      },
      success: function (res) {
        reslove(res);
      }
    })
  })
}