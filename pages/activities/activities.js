// pages/activities/activities.js
Page({
    data: {
        "activities": [
            {
                "activityImg": "https://media.guim.co.uk/532cf499f348b378f769e01e2665229da6b6c931/0_0_5457_3276/2000.jpg",
                "activityName": "中市打8折，晚市打9折"
            },

            {
                "activityImg": "http://1037640.51zfx.net/ADMIN/Uploads/2013/5/9/1037640/FCKeditorIMG/201305091005427482.jpg",
                "activityName": "每天一款特价海鲜，每天是不同的海鲜特价"
            },
        ]
    },

    toRestaurantPage: function () {
        wx.navigateTo({
            url: '../restaurantList/restaurantList',
        })
    }
})