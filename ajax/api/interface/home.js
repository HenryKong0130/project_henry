import ajax from '../../http.js'
export const get_label_list = data => ajax({
	name: "get_label_list",
	data
})

//获取文章列表
export const get_article_list = data => ajax({
	name:"get_article_list",
	data
})

//收藏/取消指定的文章
export const update_save_likes = data => ajax({
	name:"update_save_likes",
	data
})

//获取搜索结果的文章列表
export const get_search_data = data => ajax({
	name:"get_search_data",
	data
})

// 修改用户保存的选项卡信息
export const update_label_list = data => ajax({
	name:"update_label_list",
	data
})
