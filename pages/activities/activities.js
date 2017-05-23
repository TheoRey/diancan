// pages/activities/activities.js
Page({
    data: {
        "activities": [
            {
                "activityImg": "https://media.guim.co.uk/532cf499f348b378f769e01e2665229da6b6c931/0_0_5457_3276/2000.jpg",
                "activityName": "一条鱼"
            },

            {
                "activityImg": "https://media.guim.co.uk/532cf499f348b378f769e01e2665229da6b6c931/0_0_5457_3276/2000.jpg",
                "activityName": "一条鱼2"
            },
        ]
    },

    toRestaurantPage: function () {
        wx.navigateTo({
            url: '../restaurantList/restaurantList',
        })
    }
})