<!-- 我的页面 -->
<template>
	<view class="my_container">
		<u-navbar
			class="navbar"
			back-text=""
			:is-back="true"
			title="我"
			height="120"
			back-icon-size="40"
			:is-fixed="true"
			:title-bold="true"
			title-color="black"
			title-size="35"
		></u-navbar>
		<view class="">
			<view class="info_container">
				<view class="img"><image src="@/static/images/my.png" mode="aspectFit"></image></view>
				<view class="info">
					<text class="address">某某镇/某某村</text>
					<text class="full_name">王某某</text>
				</view>
			</view>
			<view class="option_container">
				<view class="item notice" @click="JumpToMessage(2)">
					<image src="@/static/images/notice.png" mode="aspectFit"></image>
					<text class="item_name">公告</text>
					<u-badge class="notice_badge" type="error" :absolute="false" count="2"></u-badge>
				</view>
				<view class="item" @click="JumpToMessage(5)">
					<image src="@/static/images/system_message.png" mode="aspectFit"></image>
					<text class="item_name">系统消息</text>
					<u-badge class="system_badge" type="error" :absolute="false" count="5"></u-badge>
				</view>
				<view class="item" @click="JumpToMessage(1)">
					<image src="@/static/images/complaints_suggestions.png" mode="aspectFit"></image>
					<text class="item_name">投诉建议</text>
					<u-badge class="suggestions_badge" type="error" :absolute="false" count="1"></u-badge>
				</view>
				<view class="item">
					<image src="@/static/images/version.png" mode="aspectFit"></image>
					<text class="item_name">版本号</text>
					<text class="version_name">V1.0.1</text>
					<u-badge class="version_badge" type="error" :absolute="false" count="新版本"></u-badge>
				</view>
				<view class="item" @click="signOut">
					<image src="@/static/images/sign_out.png" mode="aspectFit"></image>
					<text class="item_name">退出登录</text>
				</view>
			</view>
			<u-action-sheet :list="list" v-model="show" :cancel-btn="false" border-radius="10" @click="isSignOut"></u-action-sheet>
		</view>
	</view>
</template>

<script>
// import { promptBox } from '@/common/common.js';

export default {
	data() {
		return {
			list: [
				{
					text: '确认',
					color: '#01bff9'
				},
				{
					text: '取消',
					color: '#fc6461'
				}
			],
			show: false
		};
	},
	onLoad() {},
	onReady() {},
	created() {},
	mounted() {},
	methods: {
		signOut: function() {
			this.show = true;
		},
		isSignOut: function(index) {
			if(!index) {
				uni.reLaunch({
				    url: '../login/login'
				});
			}
		},
		JumpToMessage: function(count) {
			uni.navigateTo({
				url: `../message/message?count=${count}`
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.my_container {
	.navbar {
		margin-bottom: 20rpx;
	}
	.info_container {
		width: 100%;
		height: 320rpx;
		background: url(../../static/images/my_background.png) no-repeat center;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.img {
			width: 220rpx;
			height: 220rpx;
			border-radius: 50%;
			border: 8rpx solid white;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.info {
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-right: 90rpx;
			margin-left: -80rpx;
			.address {
			}
			.full_name {
			}
		}
	}
	.option_container {
		display: flex;
		flex-direction: column;
		padding: 0 1vw;
		.item {
			display: flex;
			align-items: center;
			width: 100%;
			height: 120rpx;
			border-bottom: 1rpx solid #dfdfdf;
			image {
				width: 40rpx;
				height: 40rpx;
				padding-left: 50rpx;
			}
			.item_name {
				font-size: 35rpx;
				color: black;
				font-weight: bold;
				padding-left: 100rpx;
			}
			.notice_badge {
				margin-left: 400rpx;
			}
			.system_badge {
				margin-left: 330rpx;
			}
			.suggestions_badge {
				margin-left: 330rpx;
			}
			.version_name {
				margin-left: 210rpx;
			}
			.version_badge {
				margin-left: 20rpx;
			}
		}
		.notice {
			height: 130rpx;
		}
	}
}
</style>
