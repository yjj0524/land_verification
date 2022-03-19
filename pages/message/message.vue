<!-- 我的页面 -->
<template>
	<view class="container">
		<u-navbar
			class="navbar"
			back-text=""
			:is-back="true"
			title="消息列表"
			height="120"
			back-icon-size="40"
			:is-fixed="true"
			:title-bold="true"
			title-color="black"
			title-size="35"
		></u-navbar>
		<view class="option_container">
			<view class="item" @click="JumpToMessageContent" v-for="(item, index) of datas.slice(0, count)" :key="index">
				<image src="@/static/images/notice.png" mode="aspectFit"></image>
				<text class="item_name">{{ item.text }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
			datas: [
				{
					text: '消息一',
				},
				{
					text: '消息二',
				},
				{
					text: '消息三',
				},
				{
					text: '消息四',
				},
				{
					text: '消息五'
				}
			]
		};
	},
	onLoad(option) {
		this.count = option.count;
		console.log(option.count);
	},
	onReady() {},
	created() {},
	mounted() {},
	methods: {
		JumpToMessageContent: function() {
			uni.navigateTo({
				url: '../messageContent/messageContent'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	.navbar {
		margin-bottom: 20rpx;
	}
	.option_container {
		display: flex;
		flex-direction: column;
		padding: 0 1vw;
		.item {
			display: flex;
			align-items: center;
			width: 100%;
			height: 80rpx;
			border-bottom: 1rpx solid #a5a5a5;
			image {
				width: 40rpx;
				height: 40rpx;
				padding-left: 50rpx;
			}
			.item_name {
				font-size: 35rpx;
				color: black;
				font-weight: bold;
				padding-left: 50rpx;
				color: #007AFF;
			}
		}
	}
}
</style>
