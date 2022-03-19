<!-- 我的页面 -->
<template>
	<view class="my_container">
		<u-navbar
			class="navbar"
			back-text=""
			:is-back="true"
			title="核查统计"
			height="120"
			back-icon-size="40"
			:is-fixed="true"
			:title-bold="true"
			title-color="black"
			title-size="35"
		></u-navbar>
		<view class="qiun-columns">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt"><view class="qiun-title-dot-light">演示</view></view>
			<view class="qiun-charts"><canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas></view>
		</view>
	</view>
</template>

<script>
// import { promptBox } from '@/common/common.js';
import uCharts from '@/components/u-charts/u-charts.js';

// 定义全局变量
var _self;
var canvaPie = null;
export default {
	data() {
		return {
			cWidth: '',
			cHeight: '',
			pixelRatio: 1
		};
	},
	// 页面加载执行的函数
	onLoad() {
		_self = this;
		// uni.upx2px(750) 这是uni-app自带的自适应，以750的尺寸为基准。动态变化
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(700);

		this.getServerData();
	},
	methods: {
		// 获取数据，发请求
		getServerData() {
			// const uChartsDatas = getApp().globalData.uChartsDatas;

			let Pie = { categories: [], series: [] };

			Pie.categories = [
				{
					value: 0.2,
					color: '#2fc25b'
				},
				{
					value: 0.8,
					color: '#f04864'
				},
				{
					value: 1,
					color: '#1890ff'
				}
			];
			Pie.series = [
				{
					name: '一号',
					data: 50
				},
				{
					name: '二号',
					data: 30
				},
				{
					name: '三号',
					data: 20
				},
				{
					name: '四号',
					data: 18
				},
				{
					name: '五号',
					data: 8
				}
			];
			// 找到id为canvasLineA的块
			_self.showGauge('canvasPie', Pie);
			// context: uni.createCanvasContext(canvasId, _self),
		},
		// 展示图标的函数 接收参数，一个块的id,一个数据
		showGauge(canvasId, chartData) {
			canvaPie = new uCharts({
				$this: _self,
				canvasId: canvasId,
				context: uni.createCanvasContext(canvasId, _self),
				type: 'pie',
				fontSize: 55,
				legend: true,
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				series: chartData.series,
				animation: true,
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				dataLabel: true,
				extra: {
					pie: {
						lableWidth: 15
					}
				}
			});
		},
		// 点击图表显示的内容
		touchPie(e) {
			canvaPie.showToolTip(e, {
				format: function(item) {
					return item.name + ':' + item.data;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// page {
// 	background: #f2f2f2;
// 	width: 750upx;
// 	overflow-x: hidden;
// }
.my_container {
	.navbar {
		margin-bottom: 20rpx;
	}
	.qiun-padding {
		padding: 2%;
		width: 96%;
	}
	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}
	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}
	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}
	.qiun-common-mt {
		margin-top: 10upx;
	}
	.qiun-bg-white {
		background: #ffffff;
	}
	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}
	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000;
	}
	.qiun-charts {
		width: 750upx;
		height: 700upx;
		background-color: #ffffff;
	}
	.charts {
		width: 750upx;
		height: 700upx;
		background-color: #ffffff;
	}
}
</style>
