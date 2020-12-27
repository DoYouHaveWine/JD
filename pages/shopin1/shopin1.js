// pages/shopin1/shopin1.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		inkind1: true,
		inkind2: false,
		industry: '', //行业
		types: [{
			name: '网吧',
			id: 1
		}, {
			name: '商店',
			id: 2
		}, {
			name: '超市',
			id: 3
		}],
		location: '点击定位',
		shopInData:{
			city:''
		}
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
	bindType(e) {
		console.log(e)
		let index = e.detail.value
		let data = this.data.types
		this.setData({
			industry: data[index].name
		})
	},
	chooseLocation(){
		const _this = this
		wx.chooseLocation({
			success:(res)=>{
				console.log(res)
				_this.setData({
					location:res.name
				})
			}
		})
	},
	bindRegionChange(e){
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  ['shopInData.city']: e.detail.value.join()
		})
	}
})
