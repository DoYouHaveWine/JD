// pages/agent/agent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
ifList:false,
testList:[
	{
		name:'小家',
		phone:'12345678951',
		data1:'15',
		data2:'2200.00',
		status:false
	},{
		name:'小家',
		phone:'12345678951',
		data1:'15',
		data2:'2200.00',
		status:false
	}
]
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

  },
	switch(e){
		let index = e.currentTarget.dataset.index
		let stage = 'testList[' + index + '].status'
		this.setData({
		  [stage]: !this.data.testList[index].status
		})
	},
	call(e){
		const phoneNum = e.currentTarget.dataset.phone
		wx.showModal({
		  title: phoneNum,
		  content: '是否拨打该代理商电话号码',
		  success (res) {
		    if (res.confirm) {
		      console.log('用户点击确定')
			  wx.makePhoneCall({
			    phoneNumber: phoneNum //仅为示例，并非真实的电话号码
			  })
		    } else if (res.cancel) {
		      console.log('用户点击取消')
		    }
		  }
		})
	}
})