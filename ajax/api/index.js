/* 批量进行文件导出 */
/**
 * . =>API目录的相对路径
 * true => 是否查询子目录
 * /.js/ => 需要查询的文件的后缀名
 */
const requireApi = require.context('.', true, /.js$/);
let module = {};
//requireApi.keys()的打印结果是：
//["./index.js", "./interface/home.js", "./interface/test.js"]
requireApi.keys().forEach((key, index) => {
	if (key === './index.js') return
	//遍历每个文件，汇总导出的请求方法
	Object.assign(module, requireApi(key))
})

export default module