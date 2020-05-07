// pages/details.js
import {
  getHeatMusicData,
  getMusicList
} from "../../network/home/index"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    NewMusic: [],
    title: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type && options.type == 7){
      this.setData({
        title: "华语新歌"
      })
    }
    if(options.type && options.type == 96){
      this.setData({
        title: "欧美新歌"
      })
    }
    if(options.type){
      getHeatMusicData(options.type).then(res => {
        this.setData({
          NewMusic: res.data.data
        })
        wx.hideLoading()
      })
    }
    if(options.list){
      getMusicList(options.list).then(res => {
        // console.log(res.data)
        this.setData({
          NewMusic: res.data.playlist.tracks,
          title:  res.data.playlist.name
        })
        wx.hideLoading()
      })
    }
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