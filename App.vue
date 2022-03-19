<script>
export default {
	globalData: {
		planDatas: [
			// 测试数据
			{
				id: 0,
				number: '75412365',
				name: '张三',
				targetName: '测试1',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 1,
				number: '95123547',
				name: '李四',
				targetName: '测试2',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 2,
				number: '69874123',
				name: '王五',
				targetName: '测试3',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 3,
				number: '95841235',
				name: '赵六',
				targetName: '测试4',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 4,
				number: '62514896',
				name: '田七',
				targetName: '测试5',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 5,
				number: '65987123',
				name: '三丰',
				targetName: '测试6',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 6,
				number: '14785423',
				name: '无极',
				targetName: '测试7',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 7,
				number: '98123546',
				name: '东方',
				targetName: '测试8',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 8,
				number: '95412354',
				name: '不败',
				targetName: '测试9',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 9,
				number: '95412458',
				name: '独孤',
				targetName: '测试10',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 10,
				number: '98451247',
				name: '求败',
				targetName: '测试11',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 11,
				number: '32154756',
				name: '马化腾',
				targetName: '测试12',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 12,
				number: '95412456',
				name: '马云',
				targetName: '测试13',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 13,
				number: '84512365',
				name: '刘德华',
				targetName: '测试14',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 14,
				number: '95471254',
				name: '张学友',
				targetName: '测试15',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			},
			{
				id: 15,
				number: '35412567',
				name: '黎明',
				targetName: '测试16',
				landNumber: '262',
				totalArea: '29.06亩',
				purpose: '粮田、水稻',
				targetType: '家庭农场',
				telephone: '13588888888',
				checkTime: '2020/03/14'
			}
		]
	},
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';

@font-face {
	font-family: my-font;
	src: url('~@/static/font-family/NotoSansHans-Light.otf');
}

html,
body,
page {
	margin: 0;
	padding: 0;
	font-family: my-font !important;
	font-size: 30rpx;
}
</style>
