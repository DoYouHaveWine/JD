// pages/login/login.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		codeMsg: '获取验证码',
		loginCode: true
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
	switchLogin() {
		this.setData({
			loginCode: !this.data.loginCode
		})
	},
	loginIn(){
		//to do
		wx.switchTab({
		  url: '/pages/index/index'
		})
	}
})
