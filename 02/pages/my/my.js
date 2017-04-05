// pages/my/my.js
var initData = 'this is first line\nthis is second line'
var extraLine = [];
Page({
  data:{
    iconType : ['success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
      'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
      'info_circle', 'cancel', 'search', 'clear'],
      text: initData,
       add: function(e) {
    extraLine.push('other line');
    console.log(extraLine);
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function(e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },
  showLoading:true,
  hidden:true,
  nocancel:false,
  showBtn:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
      this.setData({showLoading:false})
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  confirm: function(){
        this.setData({
             hidden: true,
             showBtn:false
        });

    },
    cancel: function(){
        this.setData({
             hidden:true
        });   
        console.log("clicked confirm");
    },
    handleClick : function(){
      this.setData({
         hidden:false,
         nocancel:false
      })
    }
})