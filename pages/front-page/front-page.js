// pages/front-page/front-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scan: "/images/scan.png",
    reservation: "/images/reservation.png",

    restaurantList: [
        {
            "id" : "100001",
            "name": "沸腾鱼乡",
            "avatarImg": "http://static.boredpanda.com/blog/wp-content/uploads/2016/04/ginger-cat-adopts-mini-me-evin-minnie-23.jpg",
            "distance": "120km",
            "score": "4.7",
            "genre": "粤",
        },

        {
            "id" : "100002",
            "name": "Tan Yu Tou Spicy Hotpot in San Gabriel",
            "avatarImg": "https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2016/03/30/19/cat.jpg",
            "distance": "99km",
            "score": "4.8",
            "genre": "川",
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
  }
})