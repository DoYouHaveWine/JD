import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    color: ["#37A2DA"],
    grid: {
      containLabel: false,
	  left:25,
	  top:15,
	  bottom:20
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }]
  };

  chart.setOption(option);
  return chart;
}
Page({
	data: {
		ec: {
		  onInit: initChart
		},
		earnSwitch: true
	},
	onLoad: function() {

	},
	switch () {
		this.setData({
			earnSwitch: !this.data.earnSwitch
		})
	}
})
