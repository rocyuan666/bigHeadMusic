import {
  getBannerData,
  getHeatMusicData,
  getMusicList
} from "../../network/home/index"


Page({

  data: {
    banners: [],
    hyNewMusic: [],
    omNewMusic: [],
    biaoshengList: {},
    douyinList: {},
    shuochangList: {},
    huayujinquList: {}
  },

  
  onLoad: function (options) {
    // banner图片请求
    getBannerData().then(res => {
      // console.log(res.data.banners)
      this.setData({
        banners: res.data.banners
      })
    })
    /*
      全部:0
      华语:7
      欧美:96
      日本:8
      韩国:16
    */
    getHeatMusicData(7).then(res => {
      // console.log(res)
      this.setData({
        hyNewMusic: res.data.data
      })
    })
    getHeatMusicData(96).then(res => {
      // console.log(res)
      this.setData({
        omNewMusic: res.data.data
      })
    })
    /*
    排行榜
    "0": 云音乐新歌榜,
    "1": 云音乐热歌榜,
    "2": 网易原创歌曲榜,
    "3": 云音乐飙升榜,
    "4": 云音乐电音榜,
    "5": UK排行榜周榜,
    "6": 美国Billboard周榜
    "7": KTV嗨榜,
    "8": iTunes榜,
    "9": Hit FM Top榜,
    "10": 日本Oricon周榜
    "11": 韩国Melon排行榜周榜,
    "12": 韩国Mnet排行榜周榜,
    "13": 韩国Melon原声周榜,
    "14": 中国TOP排行榜(港台榜),
    "15": 中国TOP排行榜(内地榜)
    "16": 香港电台中文歌曲龙虎榜,
    "17": 华语金曲榜,
    "18": 中国嘻哈榜,
    "19": 法国 NRJ EuroHot 30周榜,
    "20": 台湾Hito排行榜,
    "21": Beatport全球电子舞曲榜,
    "22": 云音乐ACG音乐榜,
    "23": 云音乐说唱榜
    "24": 云音乐古典音乐榜
    "25": 云音乐电音榜
    "26": 抖音排行榜
    "27": 新声榜
    "28": 云音乐韩语榜
    "29": 英国Q杂志中文版周榜
    "30": 电竞音乐榜
    "31": 云音乐欧美热歌榜
    "32": 云音乐欧美新歌榜
    "33": 说唱TOP榜
    */
    getMusicList(3).then(res => {
      this.setData({
        biaoshengList: res.data.playlist
      })
      // console.log(res.data)
    })
    getMusicList(26).then(res => {
      this.setData({
        douyinList: res.data.playlist
      })
      console.log(res.data)
    })
    getMusicList(33).then(res => {
      this.setData({
        shuochangList: res.data.playlist
      })
      console.log(res.data)
    })
    getMusicList(17).then(res => {
      this.setData({
        huayujinquList: res.data.playlist
      })
      console.log(res.data)
    })
  },

  
  onReady: function () {
    
  },

  
  onShow: function () {
    
  },

  
  onHide: function () {

  },

  
  onUnload: function () {

  },

  
  onPullDownRefresh: function () {

  },

  
  onReachBottom: function () {

  },

  
  onShareAppMessage: function () {

  }
})