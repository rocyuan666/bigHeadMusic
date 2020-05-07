// components/roc-musicbox.js
import {
  playMusicData
} from "../../network/home/index"

const innerAudioContext = getApp().gData.innerAudioContext

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ""
    },
    musicData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isActive: -1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    moreClick(){
      this.triggerEvent('moreClick',{},{})
    },
    playMusic(event){
      const index = event.currentTarget.dataset.index
      const id = this.properties.musicData[index].id
      playMusicData(id).then(res => {
        // innerAudioContext.autoplay = true
        innerAudioContext.src = res.data.data[0].url
        innerAudioContext.title = this.properties.musicData[index].name
        innerAudioContext.onPlay(() => {
          wx.showToast({
            title: '开始播放',
            icon: "none"
          })
        })
        innerAudioContext.onPause(() => {
          wx.showToast({
            title: '暂停播放',
            icon: "none"
          })
        })
      })
    }
  }
})
