// pages/shop/shop.js
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
		status:false,
		time:'2020-12-05'
	},{
		name:'小家',
		phone:'12345678951',
		data1:'15',
		data2:'2200.00',
		status:false,
		time:'2020-12-05'
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
  bind(e){
	  wx.showModal({
	    title: 'DJ1321313',
	    content: '是否绑定该设备到商家名下',
		confirmText:'绑定',
	    success (res) {
	      if (res.confirm) {
	        console.log('用户点击确定')
	      } else if (res.cancel) {
	        console.log('用户点击取消')
	      }
	    }
	  })
  },
  unbind(e){
	  wx.showModal({
	    title: 'DJ1321313',
	    content: '是否解绑该设备',
		confirmText:'解绑',
		confirmColor:'#F35959',
	    success (res) {
	      if (res.confirm) {
	        console.log('用户点击确定')
	      } else if (res.cancel) {
	        console.log('用户点击取消')
	      }
	    }
	  })
  }
})