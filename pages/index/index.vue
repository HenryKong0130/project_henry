<template>
	<view class="container">
		<view class="">left</view>
		<view class="">center</view>
		<view class="">right</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
.container{
	@include flex(space-between,row)
	color:$base-color
}
</style>