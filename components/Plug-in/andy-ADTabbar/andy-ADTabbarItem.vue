<template name="adTabbarItem">
	<view class="tabItem" @click="onClick" :data-cur="dataCur">
		<image class="tabIcon" :src="icon"></image>
		<!-- #ifdef MP-WEIXIN -->
		<view :style="{color: textColor, fontSize: textSize + 'rpx'}">{{text}}</view>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<view :style="{color: textColor}">{{text}}</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		name: 'adTabbarItem',
		components: {},
		props: {
			// 绑定页面
			dataCur: {
				type: String,
				default: ""
			},
			// 图标
			icon: {
				type: String,
				default: ""
			},
			// 文字
			text: {
				type: String,
				default: ""
			},
			// 文字颜色
			textColor: {
				type: String,
				default: "#5E5E5E"
			},
			// 文字大小
			textSize: {
				type: String,
				default: "22upx",
			}
		},
		methods: {
			// TabItem点击事件
			onClick(e) {
				this.$emit('click', e);
			}
		}
	}
</script>

<style lang="scss">
	.tabItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 100%;
		justify-content: center;
		font-size: 100upx;
	}
	.tabIcon {
		width: 150upx;
		height: 150upx;
		display: inline-block;
	}
</style>
