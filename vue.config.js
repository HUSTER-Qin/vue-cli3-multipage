var multipageHelper = require('./multipage-helper.js');
console.log(multipageHelper.getEntries());
console.log(multipageHelper.getProdHtmlWebpackPluginList());
module.exports = {
	
	publicPath: '/',
	pages: multipageHelper.getEntries(), //设置入口集合,
	// outputDir: 'dist',
    configureWebpack: {
        plugins: multipageHelper.getProdHtmlWebpackPluginList()
    }
};
