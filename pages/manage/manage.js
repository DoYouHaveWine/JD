// pages/personal/personal.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		kinds1: [{
			src: '../../img/icon_m1.png',
			text: '下级代理',
			url:'/pages/agent/agent'
		}, {
			src: '../../img/icon_m2.png',
			text: '员工列表'
		}, {
			src: '../../img/icon_m3.png',
			text: '商家列表',
			url:'/pages/shop/shop'
		}, {
			src: '../../img/icon_m4.png',
			text: '开通下级'
		}, {
			src: '../../img/icon_m5.png',
			text: '开通员工'
		}, {
			src: '../../img/icon_m6.png',
			text: '商家入驻',
			url:'/pages/shopin1/shopin1'
		}],
		kinds2: [{
			src: '../../img/icon_m7.png',
			text: '订单明细',
			url:'/pages/order/order'
		}, {
			src: '../../img/icon_m8.png',
			text: '在线商城'
		}, {
			src: '../../img/icon_m9.png',
			text: '商城订单'
		}, {
			src: '../../img/icon_m10.png',
			text: '设备下发'
		}, {
			src: '../../img/icon_m11.png',
			text: '电宝次数',
			url:'/pages/count/count'
		}, {
			src: '../../img/icon_m12.png',
			text: '我的设备'
		}]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

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
	navigatorTo(e){
		wx.navigateTo({
			url:e.currentTarget.dataset.url
		})
	}
})
