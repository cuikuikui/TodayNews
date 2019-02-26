var app = getApp();

Page({
  	data: {
      open : false,
  		userInfo: {},
      "gloabalData": app.gloabalData,
      mode: ['我的评论','系统通知','相关推荐','系统设置']
  	},


  // tap_ch: function(e){
  //     if(this.data.open){
  //     this.setData({
  //       open : false
  //     });
  //    }else{
  //     this.setData({
  //       open : true
  //     });
  //   }
  // }
 onShow: function () {
    //当切换页面时刷新全局变量的值
    this.setData({
      "gloabalData": app.gloabalData
    })

  },

  	onLoad: function() {
  		var that = this;
  		wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      });
  	},
    exit:function(){
      close()
    }
})