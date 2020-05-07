// components/roc-detail/roc-detail.js
import {
  playMusicTool
} from "../../utils/util"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ""
    },
    NewMusic: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 播放音乐
    playMusic(e){
      playMusicTool(e)
    }
  }
})
