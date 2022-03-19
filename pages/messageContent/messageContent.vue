<template>
	<view class="container">
		<u-navbar
			class="navbar"
			back-text=""
			:is-back="true"
			title="内容"
			height="120"
			back-icon-size="40"
			:is-fixed="true"
			:title-bold="true"
			title-color="black"
			title-size="35"
		></u-navbar>
		<view class="content">
			<text class="title">科学防疫 | 上海调整防控策略</text>
			<text class="info">
				&nbsp;&nbsp;整个策略上来讲，整体筛查范围做了明显的扩大，就是我们不限于原来传统的密接、次密接和一般风险人员筛查，我们是及时开展了一个大规模的，比如说重点行业人群的筛查。
				另外我们对划定重点区域的人群筛查，就是“条”和“块”结合做筛查。
				比如说我们“条”里边对公共服务人员都做了大规模的筛查。
				同时这两天16日、17日就是“块”上的，以划定重点区域为主的这样一个筛查。
				这个策略都是上海从前没有做过的，我们也是结合城市的特点来考虑的。
			</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	onReady() {},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.container {
	background: #f5f5f5;
	width: 100vw;
	height: 100vh;
	.navbar {
		margin-bottom: 20rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 1vw;
		.title {
			font-size: 35rpx;
			font-weight: bold;
		}
	}
}
</style>
