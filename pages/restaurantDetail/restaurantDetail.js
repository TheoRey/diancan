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
        "avatarImg": "http://www.3vsheji.com/uploads/allimg/140612/1115136121_1.jpg",
        "distance": "12km",
        "score": "4.7",
        "genre": "清蒸石斑鱼、鼎湖上素、烟筒白菜",
    },
    
    cusineList: [
        {
            "pic": "http://1812.img.pp.sohu.com.cn/images/blog/2012/11/12/16/19/u404166336_13bb7adccb2g85_blog.jpg",
            "name": "清蒸石斑鱼",
            "price": "99",
            "description": "一种鱼"
        },

        {
            "pic": "http://ali.xinshipu.cn/20110530/original/1306730935573.jpg",
            "name": "鼎湖上素",
            "price": "35",
            "description": "一种鱼"
        },

        {
            "pic": "http://www.54hcz.com/wp-content/uploads/2015/03/%E7%83%9F%E7%AD%92%E7%99%BD%E8%8F%9C%E6%98%AF%E5%93%AA%E4%B8%AA%E5%9C%B0%E6%96%B9%E7%9A%84%E8%8F%9C2.jpg",
            "name": "烟筒白菜",
            "price": "28",
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