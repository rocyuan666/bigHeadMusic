//app.js
App({
  gData: {
    innerAudioContext: {}
  },
  onLaunch(){
    // 定义全局音频
    // this.gData.innerAudioContext  = wx.createInnerAudioContext()
    // 使用背景音频
    this.gData.innerAudioContext  = wx.getBackgroundAudioManager()
    wx.showModal({
      title: "声明",
      content: '本小程序为RocYuan原创开源项目，无任何盈利目的，仅为学习交流，项目开源地址：https://github.com/yuanpeng666/bigHeadMusic，个人网站：https://luojing.top，反馈邮箱：yp66666@outlook.com',
      showCancel: false
    })
  }
})