// pages/index/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filterId: 1,
    searchWords: '',
    placeholder: '军事',
    loading:false,
    plain:false,
    disabled:false,
  },

    // 是否禁用
 setDisabled: function(e) {
    this.setData({
      disabled: !searchWords.length
    })
  },

  // 按钮是否镂空，背景色透明
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },

  // 名称前是否带 loading 图标
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  },

   inputSearch: function (e) {
    this.setData({
      searchWords: e.detail.value
    });
  },
  doSearch: function() {
    this.setData({
      showResult: true
    });
  },

  //   tapFilter: function (e) {
  //   switch (e.target.dataset.id) {
  //     case '1':
  //       this.data.shops.sort(function (a, b) {
  //         return a.id > b.id;
  //       });
  //       break;
  //     case '2':
  //       this.data.shops.sort(function (a, b) {
  //         return a.sales < b.sales;
  //       });
  //       break;
  //     case '3':
  //       this.data.shops.sort(function (a, b) {
  //         return a.distance > b.distance;
  //       });
  //       break;
  //   }
  //   this.setData({
  //     filterId: e.target.dataset.id,
  //     shops: this.data.shops
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})