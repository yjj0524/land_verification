<template>
	<view class="view_plan_container">
		<u-navbar
			class="navbar"
			back-text=""
			:is-back="true"
			title="核查计划列表"
			height="120"
			back-icon-size="40"
			:is-fixed="true"
			:title-bold="true"
			title-color="black"
			title-size="35"
		></u-navbar>
		<view class="search_container">
			<view class="content">
				<text class="text">选择时间</text>
				<image class="arrow_down" src="@/static/images/view_plan_arrow_down.png" mode="aspectFit"></image>
				<view class="dev"><u-input class="input" type="text" placeholder="输入姓名" placeholderStyle="color: #828282" /></view>
				<image class="search_view_plan" src="@/static/images/search_view_plan.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="info_list">
			<view class="item" v-for="(item, index) in listDatas" :key="index">
				<image class="location_view_plan_img" src="@/static/images/location_view_plan.png" mode="aspectFit"></image>
				<view class="info">
					<text class="full_name">计划人：{{ item.name }}</text>
					<text class="plan_time">计划时间：{{ item.checkTime }}</text>
					<view class="check">
						<text class="check_name">核查主体：{{ item.targetName }}</text>
						<image class="navigation_img" src="@/static/images/navigation.png" mode="aspectFit"></image>
						<text class="start_check">进行核查</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			listDatas: []
		};
	},
	onLoad() {},
	onReady() {},
	created() {},
	mounted() {
		this.listDatas = getApp().globalData.planDatas;
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.view_plan_container {
	.navbar {
	}
	.search_container {
		height: 175rpx;
		top: 76rpx;
		z-index: 2;
		position: sticky !important;
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		.content {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			background: #f0f0f0;
			border-radius: 50rpx;
			height: 80rpx;
			.text {
				font-weight: bold;
				padding: 0 10rpx 0 50rpx;
			}
			.arrow_down {
				width: 30rpx;
				height: 30rpx;
				padding: 0 10rpx 0;
			}
			.dev {
				width: 55vw;
				/deep/ .input {
					.u-input__input {
						width: 500rpx;
						height: 100rpx;
						color: #828282;
						font-size: 35rpx;
						padding-left: 10rpx;
					}
					.u-input__right-icon.u-flex {
						display: none;
					}
				}
			}
			.search_view_plan {
				width: 40rpx;
				height: 40rpx;
				padding: 0 10rpx;
				margin-right: 20rpx;
			}
		}
	}
	.info_list {
		padding: 0 2vw;
		display: flex;
		flex-direction: column;
		.item {
			display: flex;
			padding-top: 50rpx;
			border-bottom: 1rpx solid #dfdfdf;
			height: 210rpx;
			.location_view_plan_img {
				width: 110rpx;
				height: 110rpx;
				padding-left: 6vw;
			}
			.info {
				display: flex;
				flex-direction: column;
				padding-left: 4vw;
				.full_name {
					color: black;
					font-weight: bold;
				}
				.plan_time {
					color: #989898;
				}
				.check {
					display: flex;
					align-items: center;
					.check_name {
						color: #989898;
						width: 300rpx;
					}
					.navigation_img {
						width: 30rpx;
						height: 30rpx;
					}
					.start_check {
						color: #0161fe;
						padding-left: 20rpx;
					}
				}
			}
		}
	}
}
</style>
