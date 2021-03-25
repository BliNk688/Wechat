// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1:'',
    value2:'',
warning:false
  },
  bindInputValue1: function(e){
    var that = this;
    // 获取相应的输入值
    var value1 = e.detail.value;
    console.log(value1)
    that.setData({
      value1: value1
    });
    // 在这里可以获取value2 继续操作
    var value2 = that.data.value2;
    console.log(value2)
    //这里可以继续操作
    //如实现联动更改
    if(value2 != value1){
      that.setData({
        warning: true
      });
    }
    else{
      that.setData({
        warning: false
      });
    }
  },
  bindInputValue2: function(e){
    var that = this;
    // 获取相应的输入值
    var value2 = e.detail.value;
    console.log(value2)
    that.setData({
      value2: value2
    });
    // 在这里可以获取value2 继续操作
    var value1 = that.data.value1;
    console.log(value1)
    //这里可以继续操作
    //如实现联动更改
    if(value1 != value2){
      warning: true
    }
    else{
      that.setData({
        warning: false
      });
    }
  },
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