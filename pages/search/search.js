// pages/search/search.js

import {
  searchMusicData
} from "../../network/home/index"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchData: '',
    title: "",
    searchDataList: [],
    limit: 100,
  },
  // 搜索数据请求
  searchClick(){
    if(this.data.searchData){
      this.setData({
        title: this.data.searchData
      })
      searchMusicData(this.data.searchData,this.data.limit).then(res => {
        this.setData({
          searchDataList: res.data.result.songs
        })
        wx.hideLoading()
      })
    }else{
      wx.showToast({
        title: '搜索内容不能为空',
        icon: "none"
      })
    }
  },

  // 模拟双向数据绑定
  getInputValue(e){
    this.setData({
      searchData: e.detail.value
    })
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