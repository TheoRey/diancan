// pages/front-page/front-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scan: "/images/scan.png",
    reservation: "/images/activity.png",

    restaurantList: [
        {
            "id" : "100001",
            "name": "沸腾鱼乡",
            "avatarImg": "http://www.3vsheji.com/uploads/allimg/140612/1115136121_1.jpg",
            "distance": "10km",
            "score": "4.9分",
            "genre": "清蒸石斑鱼、鼎湖上素、烟筒白菜",
            "capacity": "有余位",
            "reservationBool": "可预订",
        },

        {
            "id" : "100002",
            "name": "红龙川菜馆",
            "avatarImg": "http://www.tangrenjv.com/upload/images/news/newsPhoto26/0bc3bfbf270448bbb30b215788c26c05.jpg",
            "distance": "9km",
            "score": "4.8分",
            "genre": "宫保鸡丁、干烧鱼、回锅肉、麻婆豆腐",
            "capacity": "有余位",
            "reservationBool": "",
        },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getLocation({
          success: function (res) {
              var latitude = res.latitude
              var longitude = res.longitude
              var speed = res.speed
              var accuracy = res.accuracy
          }
      })
  },

  QRscan: function() {
    wx.scanCode({
        onlyFromCamera: true,
        success: (res) => {
            console.log(res)
        }
    })
  },

  toActivityPage: function() {
      wx.navigateTo({
          url: '../activities/activities',
      })
  }
})