<!-- 我的页面 -->
<template>
	<view class="submit_issue">
		<u-navbar class="navbar" back-text="" :is-back="true" title="问题提交" height="120" back-icon-size="40" :is-fixed="true" :title-bold="true" title-color="black" title-size="35">
		</u-navbar>
		<view class="content">
			<view class="option_container">
				<u-input v-model="value" :type="type" :border="border" placeholder="选择问题类型" height="80" border-color="#aaaaaa" :custom-style="customStyle" @click="show = true" />
				<u-action-sheet :list="optionsList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
			</view>
			<view class="textarea">
				<text class="title">问题描述：</text>
				<u-input type="textarea" placeholder="" :auto-height="true" :border="true" border-color="#aaaaaa" :custom-style="customStyle" height="150" />
			</view>
			<view class="info_container">
				<view class="item" v-for="(item, index) in issueDatas" :key="index">
					<text class="title">地块编号：{{ item.number }}</text>
					<view class="image_container">
						<image class="img" src="@/static/images/photo.png" mode=""></image>
					</view>
					<image class="arrow_right" src="@/static/images/arrow_right.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			type: 'select',
			show: false,
			border: true,
			optionsList: [
				{
					text: '类型1'
				},
				{
					text: '类型2'
				},
				{
					text: '类型3'
				}
			],
			customStyle: {
				fontSize: '33rpx'
			},
			issueDatas: []
		};
	},
	onLoad(options) {
		var issueDatas = JSON.parse(options.datas);
		this.issueDatas = issueDatas;
		// console.log(issueDatas);
	},
	onReady() {},
	created() {},
	mounted() {
	},
	methods: {
		actionSheetCallback(index) {
			this.value = this.optionsList[index].text;
		}
	}
};
</script>

<style lang="scss" scoped>
.submit_issue {
	.navbar {
		margin-bottom: 35rpx;
	}
	.content {
		padding: 0 2vw;
		.option_container {
			
		}
		.textarea {
			padding-top: 35rpx;
			.title {
				font-size: 33rpx;
				font-weight: bold;
			}
		}
		.info_container {
			display: flex;
			flex-direction: column;
			padding-top: 50rpx;
			.item {
				height: 140rpx;
				display: flex;
				align-items: center;
				border-bottom: 1rpx solid #bababa;
				.title {
					font-weight: bold;
				}
				.image_container {
					width: 54vw;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					.img {
						width: 120rpx;
						height: 100rpx;
					}
				}
				.arrow_right {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
	}
	
}
</style>
