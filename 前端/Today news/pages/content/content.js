//main.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // url:"/images/1.png",
    // url1: "/images/2.png",
    // url2: "/images/3.png",
    imglist:[
      'https://www.cuikuikui.top/images/P0_1.jpg',
      'https://www.cuikuikui.top/images/P0_2.jpg',
      'https://www.cuikuikui.top/images/P0_3.jpg',
      'https://www.cuikuikui.top/images/P1_1.jpg',
    ],
    newss: [],
    id:"",
    gloabalData: app.gloabalData
    
  },
    onLoad: function (options) {
    // this.loading();
    var this_ = this;
    wx.request({
      url: 'https://www.cuikuikui.top/WeChatApplet/Newslistjson',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function(res) {
        console.log("success");
        this_.setData({
          newss: res.data,
          loading: false,
          id:options.id
        })
      },
      complete: function () {
        console.log("complete")
      }
    })
  },


previewImage: function (e) {
   var current=e.target.dataset.src;  
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imglist // 需要预览的图片http链接列表  
    })
    console.log("previewImage is called");
  } , 


//注释掉
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    that.setData({ id:options.id});
    wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 10000
        })
    request.getBookById(that.data.id,function(res){
      that.setData({bookInfo:res.data.data});
    });
  },







  
    onShareAppMessage: function () {
    console.log("pageone onShareAppMessage is begin");
    return {
      "title": "分享 ",
      "path": "/pages/content/content"
    }
  },

  onglobaltap: function () {
    console.log("pagetwo ontap is begin");
    this.setData({
      collected: !this.data.collected,
      gloabalData: ++app.gloabalData//app.gloabalData,即获取当前gloabalData的值  
    });                               //并赋值给gloabalData进行更新.
    console.log("数据为:" + app.gloabalData)  //测试gloabalData是否改变
  }
})

