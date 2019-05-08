// console.log(process.env)
var multiPage = require('./multiPage.js');
module.exports = {
	publicPath: '/',
	pages: multiPage.getEntries(), //设置入口集合,
	// outputDir: 'dist',
    configureWebpack: {
        plugins: multiPage.getProdHtmlWebpackPluginList()
    }
};
