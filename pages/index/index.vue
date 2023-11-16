<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :labelList="labelList"></TabBar>
	</view>
</template>

<script>
	import {get_label_list} from '../../ajax/api/interface/home.js'
	export default {
		onLoad() {
			//初始化首页的时候就要加载标签页
			this._initLabelList()
		},
		data() {
			return {
				labelList:[]
			}
		},
		methods: {
			async _initLabelList() {
				const labelList = await this.$http.get_label_list()
				this.labelList = labelList
				// uniCloud.callFunction({
				// 	name: 'get_label_list'
				// }).then(res=> {
				// 	this.labelList = res.result.data
				// }).catch((err) => {
				// 	console.error(err)
				// })
			}
		},
		
	}
</script>

<style scoped lang="scss">
	.container {
		@include flex(space-between, row) color: $base-color
	}
</style>