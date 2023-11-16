<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<!-- 针对app和小程序设置的垫片，动态保留各终端不同的顶部状态栏高度-->
			<view :style="{marginTop:statusHeight + 'rpx'}"></view>
			<view @click="gotoSearchPage" class="nav-bar-container" :style="{marginRight:marginRight + 'rpx'}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-text">输入文章标题进行搜索</view>
			</view>
		</view>
		<!-- 导航栏底部的垫片，使用动态高度来设置 -->
		<view :style="{height:statusHeight + 20 + 60 + 'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name: "NavBar", //方便devtools进行组件的快速搜索
		created() {
			this.getSysInfo()
		},
		data() {
			return {
				statusHeight: 20,
				marginRight:0
			};
		},
		methods: {
			getSysInfo() {
				let sysInfo = uni.getSystemInfoSync()
				sysInfo.statusBarHeight && (this.statusHeight = sysInfo.statusBarHeight * 2)
				// #ifdef MP-WEIXIN
				let menuBtnInfo = uni.getMenuButtonBoundingClientRect()
				this.statusHeight = menuBtnInfo.top * 2
				this.marginRight = menuBtnInfo.width * 2
				// #endif
			},
			//跳转到搜索页
			gotoSearchPage(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		},
	}
</script>

<style lang="scss">
	@import 'css/NavBar.scss'
</style>