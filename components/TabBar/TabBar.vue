<template>
	<view class="tab">
		<!-- 滚动区域 -->
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view 
					 class="tab-scroll-item"
					:class="{active: activeIndex === index }"  
					 v-for="(item,index) in labelList">{{item.name}}
				</view>
			</view>
		</scroll-view>
		<!-- 图标 -->
		<view class="tab-icon">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "TabBar",
		props: {
			labelList: Array
		},
		data() {
			return {
				activeIndex: 0,
				list: ['世界', '你好', '世界', '你好', '世界', '你好', '世界', '你好']
			};
		}
	}
</script>

<style lang="scss">
	@import "./css/TabBar.scss"
</style>