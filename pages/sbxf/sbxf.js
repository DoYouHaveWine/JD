// pages/sbxf/sbxf.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		inkind1: true,
		inkind2: false,
		agent: '',
		shops: '',
		agentsObj: [{
			name: '杨同学135122442',
			id: 1
		}, {
			name: '张同学135122442',
			id: 2
		}, {
			name: '李同学135122442',
			id: 3
		}],
		shopsObj: [{
			name: '杨同学135122442',
			id: 1
		}, {
			name: '张同学135122442',
			id: 2
		}, {
			name: '李同学135122442',
			id: 3
		}],
		success: false,
		fail: false
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
	choicekinds1() {
		this.setData({
			inkind1: true,
			inkind2: false
		})
	},
	choicekinds2() {
		this.setData({
			inkind1: false,
			inkind2: true
		})
	},
	bindAgent(e) {
		let index = e.detail.value
		let data = this.data.agentsObj
		this.setData({
			agent: data[index].name
		})
	},
	bindShops(e) {
		let index = e.detail.value
		let data = this.data.shopsObj
		this.setData({
			shops: data[index].name
		})
	},
	hideBox() {
		this.setData({
			success: false,
			fail: false
		})
	},
	subApply() {
		wx.showModal({
			title: '是否确定下发设备',
			confirmText:'下发',
			success(res) {
				if (res.confirm) {
					//todo
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		})
	}
})
