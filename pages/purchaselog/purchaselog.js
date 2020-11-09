// pages/userProfile/userProfile.js
Page({

  /**
   * Page initial data
   */
  data: {
    calendarUrl: "https://www.flaticon.com/svg/static/icons/svg/2370/2370264.svg",
    listUrl : "https://www.flaticon.com/svg/static/icons/svg/2645/2645879.svg",
    moneyUrl: "https://www.flaticon.com/svg/static/icons/svg/678/678931.svg",

    purchaseHistory: [
      {
        purchaseDate: "2020-11-11 13:22",
        purchaseItems: ["짬뽕", "탕수육"],
        purchasePrice: "Y250"
      },
      {
        purchaseDate: "2020-11-01 17:12",
        purchaseItems: ["전가복"],
        purchasePrice: "Y350"
      },
      {
        purchaseDate: "2020-10-24 14:52",
        purchaseItems: ["지삼선", "팔보채", "경장육슬"],
        purchasePrice: "Y725"
      },
      {
        purchaseDate: "2020-10-15 18:52",
        purchaseItems: ["마라샹궈", "꿔바로우"],
        purchasePrice: "Y475"
      }
    ],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // API 콜
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})