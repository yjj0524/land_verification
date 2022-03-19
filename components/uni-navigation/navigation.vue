<template>
	<view class="navigation" :style="{ 'width': navigationWidth, 'height': navigationHeight + 'upx' }"></view>
</template>

<script>
	export default {
		props: {
			navigationHeight: {
				type: String,
				default: '38'
			}
		},
		// provide() {
		// 	return {
		// 		table: this
		// 	};
		// },
		data() {
			return {
				navigationWidth: '100%'
			};
		}
	}
</script>

<style lang="scss" scoped>
	.navigation {
		background-color: $theme_color;
		border-bottom: 1upx solid $theme_color;
	}
</style>
