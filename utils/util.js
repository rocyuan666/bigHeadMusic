
// 播放音乐
import {
  playMusicData
} from "../network/home/index"
const innerAudioContext = getApp().gData.innerAudioContext

export function playMusicTool(event){
  const id = event.currentTarget.dataset.id
  const item = event.currentTarget.dataset.item
  // 根据id 请求 歌曲播放链接
  playMusicData(id).then(res => {
    // console.log(item)
    if(res.data.data[0].url !== null){
      // innerAudioContext.autoplay = true
      innerAudioContext.src = res.data.data[0].url
      innerAudioContext.title = item.name
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
    }else{
      wx.showToast({
        title: '抱歉歌曲没有版权~',
        icon: "none"
      })
    }
  })
}