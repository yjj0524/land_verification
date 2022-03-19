<template>
	<view class="mapContainer">
		<!-- 按钮组 -->
		<view class="icon_container">
			<view class="icon_search" @click="search"><image src="@/static/images/search.png" mode="aspectFit"></image></view>
			<view class="icons">
				<view class="icon_item" :class="{ 'isHide': item.isHide }" @click="actionFun(item)" v-for="(item, index) in iconDatas" :key="index">
					<image class="icon_img" :src="item.icon" mode="aspectFit"></image>
					<view class="icon_text">{{ item.name }}</view>
					<image v-if="item.isLine" v-show="!fold" class="icon_line" :src="item.line_icon" mode="aspectFit"></image>
				</view>
			</view>
			<view class="icon_arrow" @click="shrink"><image :src="fold ? '../../static/images/arrow_down.png' : '../../static/images/arrow_up.png'" mode="aspectFit"></image></view>
			<view class="icon_location"><image class="location_img" src="@/static/images/location.png" mode="aspectFit"></image></view>
		</view>
		<!-- popup组件 -->
		<view class="popup_container">
			<searchPopup :dataList="searchDatas" :search_popup="search_popup" @searchPopupClose="searchPopupClose"></searchPopup>
			<planPopup :plan_popup="plan_popup" @planPopupClose="planPopupClose"></planPopup>
			<landCheckPopup :land_check="land_check" @landCheckClose="landCheckClose"></landCheckPopup>
		</view>
	</view>
</template>

<script>
import searchPopup from '@/components/custom/search_popup/search_popup.vue';
import planPopup from '@/components/custom/plan_popup/plan_popup.vue';
import landCheckPopup from '@/components/custom/land_check/land_check.vue';

export default {
	components: {
		searchPopup,
		planPopup,
		landCheckPopup
	},
	data() {
		return {
			fold: false,
			icon_index: null,
			search_popup: false, // 搜索
			plan_popup: false, // 制定计划
			land_check: false, // 土地核查
			iconDatas: [
				{
					id: 0,
					name: '制定计划',
					icon: '../../static/images/formulate_plan.png',
					isLine: true,
					line_icon: '../../static/images/icon_line.png',
					clickFunction: 'plan',
					isHide: false,
					isNewPage: false
				},
				{
					id: 1,
					name: '查看计划',
					icon: '../../static/images/see_plan.png',
					isLine: true,
					line_icon: '../../static/images/icon_line.png',
					clickFunction: 'jumpToViewPlan',
					isHide: false,
					isNewPage: true
				},
				{
					id: 2,
					name: '土地核查',
					icon: '../../static/images/land_check.png',
					isLine: true,
					line_icon: '../../static/images/icon_line.png',
					clickFunction: 'landCheck',
					isHide: false,
					isNewPage: false
				},
				{
					id: 3,
					name: '核查结果',
					icon: '../../static/images/check_result.png',
					isLine: true,
					line_icon: '../../static/images/icon_line.png',
					clickFunction: '',
					isHide: false,
					isNewPage: false
				},
				{
					id: 4,
					name: '核查统计',
					icon: '../../static/images/check_statistics.png',
					isLine: true,
					line_icon: '../../static/images/icon_line.png',
					clickFunction: 'jumpToCheckStatistics',
					isHide: false,
					isNewPage: true
				},
				{
					id: 5,
					name: '我的',
					icon: '../../static/images/my.png',
					isLine: false,
					line_icon: '',
					clickFunction: 'jumpToMy',
					isHide: false,
					isNewPage: true
				}
			],
			searchDatas: ['搜索关联词一', '搜索关联词一', '搜索关联词一']
		};
	},
	created() {},
	mounted() {
		// getApp().globalData.planDatas = this.planDatas;
	},
	methods: {
		actionFun: function(item) {
			if(!item.isNewPage) {
				const that = this;
				for (let i = 0; i < that.iconDatas.length; i++) {
					if(item.id != that.iconDatas[i].id) {
						that.iconDatas[i].isHide = true;
					}
				}
				this.fold = true;
			}
			if (item.clickFunction) {
				eval(`this.${item.clickFunction}()`);
			}
		},
		shrink: function() {
			const that = this;
			that.fold = !that.fold;
			if(that.fold) {
				for (let i = 0; i < that.iconDatas.length; i++) {
					if(i) {
						that.iconDatas[i].isHide = true;
					}
				}
			}
			else {
				for (let i = 0; i < that.iconDatas.length; i++) {
					that.iconDatas[i].isHide = false;
				}
			}
		},
		// 搜索
		search: function() {
			this.search_popup = true;
		},
		searchPopupClose: function(val) {
			const that = this;
			that.search_popup = val;
			for (let i = 0; i < that.iconDatas.length; i++) {
				that.iconDatas[i].isHide = false;
			}
			that.fold = false;
		},
		// 制定计划
		plan: function() {
			this.plan_popup = true;
		},
		planPopupClose: function(val) {
			const that = this;
			that.plan_popup = val;
			for (let i = 0; i < that.iconDatas.length; i++) {
				that.iconDatas[i].isHide = false;
			}
			that.fold = false;
		},
		// 土地核查
		landCheck: function() {
			this.land_check = true;
		},
		landCheckClose: function(val) {
			const that = this;
			that.land_check = val;
			for (let i = 0; i < that.iconDatas.length; i++) {
				that.iconDatas[i].isHide = false;
			}
			that.fold = false;
		},
		jumpToViewPlan: function() {
			uni.navigateTo({
				url: '../viewPlan/viewPlan'
			});
		},
		jumpToMy: function() {
			uni.navigateTo({
				url: '../my/my'
			});
		},
		jumpToCheckStatistics: function() {
			uni.navigateTo({
				url: '../checkStatistics/checkStatistics'
			});
		}
		
	}
};
</script>

<style lang="scss" scoped>
.mapContainer {
	width: 100vw;
	height: 100vh;
	font-size: 30rpx;
	padding: 5rpx 5rpx 0;
	box-sizing: border-box;
	background: #fffae8;
	background-image: url(@/static/images/indexMap.png);
	background-repeat: no-repeat;
	background-size: 100vw 100vh;
	position: relative;
	.icon_container {
		position: absolute;
		top: 100rpx;
		right: 25rpx;
		border-radius: 6rpx;
		.icon_search {
			width: $icon_width;
			height: $icon_height - 15rpx;
			border-radius: 6rpx;
			margin-bottom: 25rpx;
			background-color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			image {
				width: 49rpx;
				height: 49rpx;
			}
		}
		.icons {
			border-radius: 6rpx;
			.icon_item {
				width: $icon_width;
				height: $icon_height;
				background-color: white;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: -2px;
				position: relative;
				.icon_img {
					width: 58rpx;
					height: 48rpx;
				}
				.icon_text {
					font-weight: bold;
					font-size: 20rpx;
					padding-top: 2rpx;
				}
				.icon_line {
					width: 80rpx;
					height: 10px;
					background-size: 80rpx 2rpx;
					position: absolute;
					bottom: 0;
				}
			}
			.isHide {
				display: none;
			}
		}
		.icon_arrow {
			display: flex;
			flex-direction: column;
			justify-content: center;
			
			align-items: center;
			width: $icon_width;
			height: 25rpx;
			border-radius: 0 0 6rpx 6rpx;
			margin-bottom: 25rpx;
			background-color: white;
			image {
				width: 32rpx;
				height: 32rpx;
			}
		}
		.icon_location {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: $icon_width;
			height: $icon_height - 15rpx;
			background-color: white;
			border-radius: 6rpx;
			.location_img {
				width: 56rpx;
				height: 56rpx;
			}
		}
	}
}

// view::before {
// 	border: none;
// }
</style>
