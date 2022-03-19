/**
 * 提示信息框
 */
export function promptBox(title, icon, duration) {
	uni.showToast({
		title: title,
		icon: icon ? icon : 'none',
		duration: duration
	})
}

/**
 * 验证登录账号（邮箱）
 */
export function verificationAccount(value) {
	if (!value) {
		promptBox('账号不能为空');
		return false;
	}
	// const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	// if (reg.test(value)) {
	// 	return true;
	// } else {
	// 	promptBox('账号格式不正确');
	// 	return false;
	// }
	return true;
}

/**
 * 验证登录密码
 */
export function verificationPwd(value) {
	if (!value) {
		promptBox('密码不能为空');
		return false;
	}
	return true;
}

/**
 * 验证重复密码
 */
export function verificationRepeatPwd(value1, value2) {
	if(!value2) {
	  promptBox('重复密码不能为空');
	  return false;
	}
	if(value1 !== value2) {
	  promptBox('两次密码不一致');
	  return false;
	}
	return true;
}

/**
 * 验证手机号
 */
export function verificationPhone(value) {
	if (!value) {
		promptBox('手机号不能为空');
		return false;
	}
	let reg = /^1\d{10}$/;
	if(reg.test(value)){
		return true;
	}
	promptBox('手机号格式不正确');
	return false
}

/**
 * 验证码验证
 */
export function verificationCode(value){
	if (!value) {
		promptBox('验证码不能为空');
		return false;
	}
	if(value.length == 4){
		return true;
	}
	promptBox('验证码必须是4位数字');
	return false
}
