// pages/process/process.js
Page({
  onLoad: function (e) {
    this.setData({code: e.code});
  },
  /**
   * Page initial data
   */
  data: {
    code: null
  },
})