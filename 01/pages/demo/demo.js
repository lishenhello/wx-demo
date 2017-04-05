Page({
data: {
  slider: [
  {picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000rVobR3xG73f.jpg'},
  {picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000j6Tax0WLWhD.jpg'},
  {picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000a4LLK2VXxvj.jpg'},
  ],
  swiperCurrent: 0,
},
swiperChange: function(e){
  this.setData({
    swiperCurrent: e.detail.current
  })
}
})