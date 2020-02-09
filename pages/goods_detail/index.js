// pages/goods_detail/index.js
import { request } from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_detail:{} //用来存详情信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGoodsInfo(options);
  },
  //获取商品的详情信息
  getGoodsInfo: async function(params){
    // 1. 发送请求 获取产品详情信息
    const goods_detail = await request({
      url:"/goods/detail",
      data:params
    });
    console.log(goods_detail);
    this.setData({
      goods_detail
    })
  },
  //处理图片的点击预览事件
  handleImageClick:function(e){
    const { pics,current } = e.currentTarget.dataset;
    wx.previewImage({
      current:current,
      urls: pics.map(v => v.pics_mid),
    })
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