export default ({
	name,
	data = {}
}) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({})
		uniCloud.callFunction({
			name,
			data
		}).then(({result}) => {
			//表示请求成功
			if(result.code === 0){
				//表示成功获取到数据
				resolve(result.data)
			}
			else{
				//请求虽然成功，但是后端没有获取到数据
				uni.showToast({
					title:result.msg,
					icon:"none"
				})
			}
		}).catch((err) => {
			//查询失败，网络原因或者是后端服务器原因
			reject(err)
		}).finally(() => {
			//表示此promise已完成,关闭loading
			uni.hideLoading()
		})
	})
}


// export default ({
// 	name,
// 	data = {}
// }) => {
// 	//返回一个Promise对象
// 	return new Promise((resolve, reject) => {
// 		//打开一个loading弹窗
// 		uni.showLoading({}),
// 			uniCloud.callFunction({
// 				name,
// 				data,
// 				success({
// 					result
// 				}) {
// 					if (result.code === 0) { //表示请求成功，能够拿到数据值
// 						resolve(result.data)
// 					} else {
// 						uni.showToast({ //提示框，一般是后端没有查询到数据值
// 							icon: 'none',
// 							title: result.msg,
// 						})
// 					}
// 				},
// 				fail(err) { //查询失败，网络原因或者是后端服务器原因
// 					reject(err)
// 				},
// 				complete() {  //完成的状态，关闭loading
// 					uni.hideLoading()
// 				}
// 			})
// 	})
// }