//main.js
//获取应用实例
var app = getApp()
Page({
  data: {
     menu: [{
                title: "推荐",
                // url: 'channel=__all__'
            }, {
                title: "热点",
                // url: 'channel=video'
            }, {
                title: "军事",
                // url: 'channel=news_hot'
            }, {
                title: "国际",
                // url: 'channel=news_society'
            }, {
                title: "历史",
                // url: 'channel=news_entertainment'
            }, {
                title: "国内",
                // url: 'channel=news_military'
            }, {
                title: "科技",
                // url: 'channel=news_tech'
            }, {
                title: "汽车",
                // url: 'channel=news_car'
            }, {
                title: "体育",
                // url: 'channel=news_sports'
            }, {
                title: "财经",
                // url: 'channel=news_finance'
            }, {
                title: "美食",
                // url: 'channel=news_world'
            }, {
                title: "时尚",
                // url: 'channel=news_fashion'
            }],

    act_index: 0, //当前选中的
    // idx:0,
    // act_idx:0,
    scrollLeft:0,  //定位menu 滚动条位置
    newss: [],
    windowHeight: "",
    windowWidth: "",
  },

  Onsearch: function () {
     wx.navigateTo({url: 'search'});  //在inde页面的点击事件中navigate跳转到url
  },

  onShow: function (e) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  },

    clickHandler: function(e) {
       console.log(e);
       var cur_index=e.currentTarget.dataset.index;
       // console.log("cur_index=:"+cur_index);
       var _scrollleft=e.currentTarget.dataset.scrollleft;
       var text=e.currentTarget.dataset.text;
      // console.log(e);
        this.setData({
            act_index: cur_index,
            scrollLeft:_scrollleft-58*2,
            text: text,
        });  
    },


//注释掉
   ontap: function(e) {
       console.log(e);
       var cur_idx=e.currentTarget.dataset.idx;
         console.log("cur_idx=:"+cur_idx);
        this.setData({
            cur_idx:cur_idx+1,
        });   
      
    },

  onLoad: function () {
    this.loading();
    var this_ = this;
    wx.request({
      url:"https://www.cuikuikui.top/WeChatApplet/Newslistjson",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function(res) {
        console.log("success");
        this_.setData({
          newss: res.data,
          loading: false
        })
      },
      complete: function () {
        console.log("complete")
      }
    })
  },

loading: function () {
  wx.showToast({
    title: '加载中',
    icon: 'loading',
    duration: 1000
  })
},
pullDownRefresh: function (e) {
  console.log("下拉刷新");
  this.loading();
},

pullUpLoad: function (e) {
  console.log("上拉加载");
  this.loading();
},
  onShareAppMessage: function () {
    console.log("pageone onShareAppMessage is begin");
    return {
      "title": "分享 ",
      "path": "/pages/content/content"
    }
  } 
})
 
