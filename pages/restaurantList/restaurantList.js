// pages/restaurantList/restaurantList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name: "每天一款特价海鲜，每天是不同的海鲜特价",
      description: "",

      restaurantList: [
          {
              "id": "100001",
              "name": "沸腾鱼乡",
              "avatarImg": "http://www.3vsheji.com/uploads/allimg/140612/1115136121_1.jpg",
              "distance": "12km",
              "score": "4.7",
              "genre": "清蒸石斑鱼、鼎湖上素、烟筒白菜",
              "capacity": "有余位",
              "reservationBool": "可预订",
          },
      ]

  },
})