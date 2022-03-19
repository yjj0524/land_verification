<!-- 登录页面 -->
<template>
	<view>
		<!-- logo -->
		<view class="logoContainer"><image class="logo_img" src="@/static/images/logo.png" mode="aspectFit"></image></view>

		<!-- 登录 -->
		<u-form :model="form" ref="uForm">
			<u-form-item label="" prop="account">
				<view class="dev">
					<image src="@/static/images/account.png" mode="aspectFit"></image>
					<u-input class="input" v-model="form.account" placeholder="输入账号" placeholderStyle="color: #828282" />
				</view>
			</u-form-item>
			<u-form-item label="" prop="password">
				<view class="dev">
					<image src="@/static/images/password.png" mode="aspectFit"></image>
					<u-input class="input" v-model="form.password" :password="input_type" placeholder="输入密码" placeholderStyle="color: #828282" />
					<image class="eye_img" src="@/static/images/eye.png" mode="aspectFit"></image>
				</view>
			</u-form-item>
		</u-form>
		<u-button class="submit_btn" :ripple="true" @click="submit">登录</u-button>
	</view>
</template>
<script>
// import { verificationAccount, verificationPwd, promptBox } from '@/common/common.js';

export default {
	data() {
		return {
			input_type: true,
			form: {
				account: '',
				password: ''
			},
			rules: {
				account: [
					{
						required: false,
						message: '请输入账号',
						// 可以单个或者同时写两个触发验证方式
						trigger: ['change', 'blur']
					}
				],
				password: [
					{
						required: false,
						message: '请输入密码',
						// 可以单个或者同时写两个触发验证方式
						trigger: ['change', 'blur']
					}
				]
			},
			isHidePassword: true // 是否显示密码
		};
	},
	onLoad() {},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	created() {},
	methods: {
		/**
		 * 显示密码
		 */
		isHidePasswordClick() {
			this.isHidePassword = !this.isHidePassword;
		},
		/**
		 * 提交验证并登录
		 */
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log('验证通过');
					uni.reLaunch({
						url: '/pages/index/index'
					});
				} else {
					console.log('验证失败');
				}
			});
		}
	}
};
</script>
<style lang="scss" scoped>
.logoContainer {
	width: 100vw;
	height: 45vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.logo_img {
		width: 300rpx;
		height: 300rpx;
	}
}

button::after {
	border: none;
}

.u-border-bottom::after {
	border: none;
}

.u-form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.dev {
		width: 90vw;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border: 2rpx solid #e1e1e1;
		border-radius: 150rpx;
		image {
			margin-left: 40rpx;
			width: 25rpx;
			height: 25rpx;
		}
		.eye_img {
			margin-right: 40rpx;
		}
		/deep/ .input {
			.u-input__input {
				width: 80%;
				height: 75rpx;
				color: #828282;
				padding-left: 10rpx;
			}
		}
	}
}

.submit_btn {
	margin-top: 5vh;
	width: 90vw;
	height: 6vh;
	font-size: 35rpx;
	border-radius: 100rpx;
	color: white;
	background: blue;
	background-image: linear-gradient(#00befa, #0161eb);
	box-shadow: 2rpx 6rpx 8rpx #504e4e;
}
</style>
