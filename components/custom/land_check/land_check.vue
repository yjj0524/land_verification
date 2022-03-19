<template>
	<u-popup
		class="check_popup"
		v-model="isShow"
		@close="checkPopupClose"
		mode="bottom"
		:length="!isShrink ? '53%' : '34%'"
		:mask="false"
		border-radius="10"
		close-icon-color="black"
	>
		<view class="arrow_down">
			<image :src="!isShrink ? '../../static/images/arrow_down.png' : '../../static/images/arrow_up.png'" mode="aspectFit" @click="isShrink = !isShrink"></image>
		</view>
		<view class="land_check">
			<image src="@/static/images/land_check.png" mode="aspectFit"></image>
			<view class="title">土地核查</view>
			<u-button class="edit_btn" :class="{ editor: isEditor }" hover-class="none" :hair-line="false" @click="editFields" throttle-time="0">批量核查</u-button>
		</view>
		<view class="check_item">
			<view class="check_time">核查时间：{{ selectItem.checkTime }}</view>
			<view class="check_personnel">核查人：{{ selectItem.name }}</view>
		</view>
		<view class="fields">
			<view class="item" :class="{ select: item.isSelected }" v-for="(item, index) in checkDatas" :key="index" @click="selectFields(item)">{{ item.number }}</view>
		</view>
		<view class="information" v-show="!isShrink">
			<view class="title">
				种养户：
				<text class="info">{{ selectItem.targetName }}</text>
			</view>
			<view class="title">
				地块编号：
				<text class="info">{{ selectItem.landNumber }}</text>
			</view>
			<view class="title">
				总面积：
				<text class="info">{{ selectItem.totalArea }}</text>
			</view>
			<view class="title">
				生产用途：
				<text class="info">{{ selectItem.purpose }}</text>
			</view>
			<view class="title">
				种养户类型：
				<text class="info">{{ selectItem.targetType }}</text>
			</view>
			<view class="title">
				联系电话：
				<text class="info">{{ selectItem.telephone }}</text>
			</view>
		</view>
		<view class="btn_Container">
			<u-button class="btn submit_issue_btn" :hair-line="false" @click="submitIssue">问题提交</u-button>
			<u-button class="btn submit_btn" :hair-line="false" @click="submit">无问题提交</u-button>
		</view>
	</u-popup>
</template>

<script>
export default {
	name: 'landCheckPopup',
	props: ['land_check'],
	data() {
		return {
			isShow: false,
			isShrink: false,
			check_popup_length: '53%',
			checkDatas: [],
			issueDatas: [], // 问题提交时的数据
			selectItem: {},
			isEditor: false
		};
	},
	mounted() {
		let datas = getApp().globalData.planDatas;
		for (let i = 0; i < datas.length; i++) {
			datas[i].isSelected = false;
		}
		this.checkDatas = datas;
		if (this.checkDatas.length) {
			this.selectItem = this.checkDatas[0];
			this.checkDatas[0].isSelected = true;
			this.issueDatas.push(this.checkDatas[0]);
		}

		// console.log(this.checkDatas)
		// console.log(this.selectIndex)
		// console.log(this.selectItem)
	},
	methods: {
		// 关闭popup
		checkPopupClose: function() {
			this.$emit('landCheckClose', false);
			this.isEditor = false;
		},
		selectFields: function(data) {
			const selectedIndex = this.checkDatas.findIndex(val => val.number === data.number);
			this.selectItem = data;
			if (this.isEditor) {
				this.checkDatas[selectedIndex].isSelected = !data.isSelected;
				const deleteIndex = this.issueDatas.findIndex(val => val.number === data.number);
				if (deleteIndex != -1) {
					this.issueDatas.splice(deleteIndex, 1);
				} else {
					this.issueDatas.push(data);
				}
			} else {
				this.checkDatas[selectedIndex].isSelected = true;
				for (let i = 0; i < this.checkDatas.length; i++) {
					if (this.checkDatas[i].number != data.number) {
						this.checkDatas[i].isSelected = false;
					}
				}
				this.issueDatas[0] = data;
			}
			// console.log(item.id)
			// console.log(this.checkDatas[item.id].isSelected)
		},
		// 编辑地块
		editFields: function() {
			this.isEditor = !this.isEditor;
			this.issueDatas = [];
			for (let i = 0; i < this.checkDatas.length; i++) {
				this.checkDatas[i].isSelected = false;
			}

			if (!this.isEditor && this.checkDatas.length) {
				this.checkDatas[0].isSelected = true;
				this.selectItem = this.checkDatas[0];
			} else {
				this.selectItem = {};
			}
		},
		// 问题提交
		submitIssue: function() {
			// console.log(this.issueDatas);
			const datas = JSON.stringify(this.issueDatas);
			uni.navigateTo({
				url: `../../pages/submitIssue/submitIssue?datas=${datas}`
			});
		},
		submit: function() {
			console.log('提交成功');
		}
	},
	watch: {
		land_check(val) {
			this.isShow = val;
		}
	}
};
</script>

<style lang="scss" scoped>
.check_popup {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.arrow_down {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 10rpx;
		image {
			width: 28rpx;
			height: 28rpx;
		}
	}
	.land_check {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 25rpx;
		image {
			width: 40rpx;
			height: 32rpx;
			margin-right: 15rpx;
		}
		.title {
			font-size: 30rpx;
			font-weight: bold;
			color: black;
		}
		.edit_btn {
			margin-right: -25rpx;
			font-size: 26rpx;
			border: none;
			color: #b6b6b6;
		}
		.editor {
			color: red;
		}
	}
	.check_item {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #afafaf;
		font-size: 26rpx;
		padding: 0 25rpx 20rpx;
		.check_time {
			margin-right: 30rpx;
		}
		.check_personnel {
		}
	}
	.fields {
		display: flex;
		flex-direction: row;
		align-content: flex-start;
		height: 280rpx;
		padding: 0 15rpx;
		flex-wrap: wrap;
		justify-content: flex-start;
		.item {
			width: 21vw;
			height: 53rpx;
			line-height: 53rpx;
			font-size: 26rpx;
			text-align: center;
			border: 1rpx solid #999999;
			margin: 0 23rpx 15rpx 0;
			color: #999999;
		}
		.select {
			color: #0160fd;
			border: 2rpx solid #0061ff;
			border-image: -webkit-linear-gradient(#20c8fa, #2074ed) 30 30;
			border-image: -moz-linear-gradient(#20c8fa, #2074ed) 30 30;
			border-image: linear-gradient(#20c8fa, #2074ed) 30 30;
		}
	}
	.information {
		display: flex;
		flex-direction: column;
		padding: 0 12rpx;
		font-size: 26rpx;
		.title {
			padding-bottom: 15rpx;
			color: #666666;
			.info {
				color: black;
				font-weight: bold;
			}
		}
	}
	.btn_Container {
		position: absolute;
		bottom: 0;
		display: flex;
		.btn {
			width: 100vw;
			height: 100rpx;
			font-weight: bold;
			font-size: 32rpx;
			color: white;
		}
		.submit_issue_btn {
			width: 50vw;
			background-image: linear-gradient(#fdab7d, #fc6461);
		}
		.submit_btn {
			width: 50vw;
			background-image: linear-gradient(#01bff9, #025feb);
		}
	}
}
</style>
