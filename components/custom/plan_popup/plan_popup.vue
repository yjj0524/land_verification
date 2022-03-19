<template>
	<u-popup
		class="plan_popup"
		v-model="isShow"
		@close="planPopupClose"
		mode="bottom"
		:length="!isShrink ? '53%' : '34%'"
		:mask="false"
		border-radius="10"
		close-icon-color="black"
	>
		<view class="arrow_down">
			<image :src="!isShrink ? '../../static/images/arrow_down.png' : '../../static/images/arrow_up.png'" mode="aspectFit" @click="isShrink = !isShrink"></image>
		</view>
		<view class="formulate_plan">
			<image src="@/static/images/formulate_plan.png" mode="aspectFit"></image>
			<view class="title">制定计划</view>
			<u-button class="edit_btn" :class="{ editor: isEditor }" hover-class="none" :hair-line="false" @click="editFields" throttle-time="0">编辑地块</u-button>
		</view>
		<view class="check_item">
			<view class="check_time">核查时间：{{ selectItem.checkTime }}</view>
			<view class="check_personnel">核查人：{{ selectItem.name }}</view>
		</view>
		<view class="fields">
			<view class="item" :class="{ select: item.isSelected }" v-for="(item, index) in planDatas" :key="index" @click="selectFields(item)">{{ item.number }}</view>
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
			<u-button class="btn submit_plan_btn" :hair-line="false" v-show="!isEditor">提交计划</u-button>
			<u-button class="btn delete_plan_btn" @click="deletePlan" :hair-line="false" v-show="isEditor">删除地块</u-button>
		</view>
	</u-popup>
</template>

<script>
export default {
	name: 'planPopup',
	props: ['plan_popup'],
	data() {
		return {
			isShow: false,
			isShrink: false,
			plan_popup_length: '53%',
			planDatas: [],
			deletePlanDatas: [], // 删除的地块
			selectItem: {},
			isEditor: false
		};
	},
	mounted() {
		let datas = getApp().globalData.planDatas;
		for (let i = 0; i < datas.length; i++) {
			datas[i].isSelected = false;
		}
		this.planDatas = datas;
		if (this.planDatas.length) {
			this.selectItem = this.planDatas[0];
			this.planDatas[0].isSelected = true;
		}

		// console.log(this.planDatas)
		// console.log(this.selectIndex)
		// console.log(this.selectItem)
	},
	methods: {
		// 关闭popup
		planPopupClose: function() {
			this.$emit('planPopupClose', false);
			this.isEditor = false;
		},
		selectFields: function(data) {
			const selectedIndex = this.planDatas.findIndex(val => val.number === data.number);
			this.selectItem = data;
			if (this.isEditor) {
				this.planDatas[selectedIndex].isSelected = !data.isSelected;
				const deleteIndex = this.deletePlanDatas.findIndex(val => val.number === data.number);
				if (deleteIndex != -1) {
					this.deletePlanDatas.splice(deleteIndex, 1);
				} else {
					this.deletePlanDatas.push(data);
				}
			} else {
				this.planDatas[selectedIndex].isSelected = true;
				for (let i = 0; i < this.planDatas.length; i++) {
					if (this.planDatas[i].number != data.number) {
						this.planDatas[i].isSelected = false;
					}
				}
			}
			// console.log(item.id)
			// console.log(this.planDatas[item.id].isSelected)
		},
		// 编辑地块
		editFields: function() {
			this.isEditor = !this.isEditor;
			for (let i = 0; i < this.planDatas.length; i++) {
				this.planDatas[i].isSelected = false;
			}

			if (!this.isEditor && this.planDatas.length) {
				this.planDatas[0].isSelected = true;
				this.selectItem = this.planDatas[0];
			} else {
				this.selectItem = {};
			}
		},
		// shrink: function() {
		// 	this.isShrink = !this.isShrink;
		// },
		// 删除地块
		deletePlan: function() {
			for (let i = 0; i < this.deletePlanDatas.length; i++) {
				const item = this.deletePlanDatas[i];
				const deleteIndex = this.planDatas.findIndex(val => val.number === item.number);
				if (deleteIndex != -1) {
					this.planDatas.splice(deleteIndex, 1);
				}
			}

			this.deletePlanDatas = [];
			this.selectItem = {};
			// console.log(this.planDatas)
		}
	},
	watch: {
		plan_popup(val) {
			this.isShow = val;
		}
	}
};
</script>

<style lang="scss" scoped>
.plan_popup {
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
	.formulate_plan {
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
		.btn {
			width: 100vw;
			height: 100rpx;
			font-weight: bold;
			font-size: 32rpx;
			color: white;
		}
		.submit_plan_btn {
			background-image: linear-gradient(#01bff9, #015eea);
		}
		.delete_plan_btn {
			background-image: linear-gradient(#fdab7d, #fc6461);
		}
	}
}
</style>
