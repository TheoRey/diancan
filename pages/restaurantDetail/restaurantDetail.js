// pages/restaurantDetail/restaurantDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restaurant: 
    {
        "id": "100001",
        "name": "沸腾鱼乡",
        "avatarImg": "http://static.boredpanda.com/blog/wp-content/uploads/2016/04/ginger-cat-adopts-mini-me-evin-minnie-23.jpg",
        "distance": "120km",
        "score": "4.7",
        "genre": "粤",
    },
    
    cusineList: [
        {
            "pic": "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
            "name": "鱼1",
            "price": "25",
            "description": "一种鱼"
        },

        {
            "pic": "https://static.pexels.com/photos/116188/pexels-photo-116188.jpeg",
            "name": "鱼2",
            "price": "25",
            "description": "一种鱼"
        },

        {
            "pic": "http://www.rd.com/wp-content/uploads/sites/2/2016/02/02-train-cat-treats.jpg",
            "name": "鱼3",
            "price": "25",
            "description": "一种鱼"
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})