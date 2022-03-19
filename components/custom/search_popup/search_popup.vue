<template>
	<u-popup
		class="search_popup"
		v-model="isShow"
		@close="searchPopupClose"
		mode="bottom"
		length="95%"
		:mask="false"
		:closeable="true"
		close-icon-size="35rpx"
		border-radius="15"
		close-icon-color="black"
	>
		<view class="popup_search">
			<view class="dev">
				<image src="@/static/images/arrow_left.png" mode=""></image>
				<u-input class="input" placeholder="请输入主体名称" placeholderStyle="color: #b8b8b8" />
				<image class="line_img" src="@/static/images/icon_line.png" mode=""></image>
				<u-button class="search_btn" :hair-line="false" hover-class="none">搜索</u-button>
			</view>
		</view>
		<view class="popup_select">
			<view class="item">
				<image src="@/static/images/arrow_right.png" mode=""></image>
				<view class="select_item">选择镇</view>
			</view>
			<view class="item">
				<image class="line_img" src="@/static/images/icon_line.png" mode=""></image>
				<image src="@/static/images/arrow_right.png" mode=""></image>
				<view class="select_item">选择村</view>
			</view>
			<view class="item">
				<image class="line_img" src="@/static/images/icon_line.png" mode=""></image>
				<image src="@/static/images/arrow_right.png" mode=""></image>
				<view class="select_item">生产用途</view>
			</view>
		</view>
		<view class="popup_list"><view class="list-cell" v-for="(item, index) in dataList" :key="index">搜索关联词一</view></view>
	</u-popup>
</template>

<script>
export default {
	name: 'popupSearch',
	props: ['dataList', 'search_popup'],
	data() {
		return {
			isShow: false
		};
	},
	methods: {
		searchPopupClose: function() {
			this.$emit('searchPopupClose', false);
		}
	},
	watch: {
		search_popup(val) {
			this.isShow = val;
		}
	}
};
</script>

<style lang="scss" scoped>
.search_popup {
	.popup_search {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 6vh;
		.dev {
			width: 95vw;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-radius: 150rpx;
			background: #ededed;
			image {
				margin-left: 25rpx;
				width: 30rpx;
				height: 30rpx;
			}
			/deep/ .input {
				.u-input__input {
					width: 80%;
					height: 50rpx;
					padding-left: 10rpx;
					color: #828282;
					font-size: 30rpx;
				}
				.u-input__right-icon.u-flex {
					display: none;
				}
			}
			.line_img {
				width: 50rpx;
				height: 2rpx;
				margin-right: -25rpx;
				transform: rotate(90deg);
				-ms-transform: rotate(90deg); /* Internet Explorer */
				-moz-transform: rotate(90deg); /* Firefox */
				-webkit-transform: rotate(90deg); /* Safari 和 Chrome */
				-o-transform: rotate(90deg); /* Opera */
			}
			.search_btn {
				width: 140rpx;
				height: 3vh;
				font-size: 35rpx;
				border-radius: 75rpx;
				background: #ededed;
				color: #5993f9;
				border: none;
			}
		}
	}
	.popup_select {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-bottom: 1rpx solid #8b7e7e;
		padding-left: 50rpx;
		.item {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			image {
				width: 28rpx;
				height: 28rpx;
			}
			.line_img {
				width: 55rpx;
				height: 2rpx;
				margin-right: -10rpx;
				transform: rotate(90deg);
				-ms-transform: rotate(90deg); /* Internet Explorer */
				-moz-transform: rotate(90deg); /* Firefox */
				-webkit-transform: rotate(90deg); /* Safari 和 Chrome */
				-o-transform: rotate(90deg); /* Opera */
			}
			.select_item {
				width: 24vw;
				height: 90rpx;
				line-height: 90rpx;
				font-size: 30rpx;
				border: none;
			}
		}
	}
	.popup_list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 1vh 0 0 3vw;
		font-size: 30rpx;
		.list-cell {
			height: 75rpx;
			line-height: 75rpx;
		}
	}
}
</style>
