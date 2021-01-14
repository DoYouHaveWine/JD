// pages/scan/scan.js
import drawImg from '../../utils/qrcode.js'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		qrcodeURL: "",
		codeText: "https://www.baidu.com",
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
this.drawImgs();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},
	drawImgs: function () {
	    console.log(this.data.codeText);
			console.log(drawImg)
	    let imgData = drawImg(this.data.codeText, {
	      typeNumber: 4,
	      errorCorrectLevel: 'M',
	      size: 500
	    })
			console.log(imgData)
	    this.setData({
	      qrcodeURL: imgData
	    })
	  }
})
