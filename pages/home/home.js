// pages/home/home.js
import drRequest from '../../utils/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: [],
    recommondList: [],
    title: ['流行', '热销', '上新'],
    goodsList: [],
  },

  getBanner() {
    drRequest({
      url: 'http://localhost:7001/api/shop'
    }).then(res => {
      const list = res.data.map(item => {
        return item.img
      })
      this.setData({
        imageList: list
      })
      console.log(list)
    })
  },

  getRecommond() {
    drRequest({
      url: "http://localhost:7001/api/shop"
    }).then(res => {
      const list = res.data
      this.setData({
        goodsList: list,
        recommondList: list
      })
    })
  },

  changeCurrentIndex: (e) => {
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner();
    this.getRecommond();
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