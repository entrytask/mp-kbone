/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */
const path = require('path')

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        home: [
            '/(home|index)?',
        ],
        my: ["/my"],
        doc: ["/doc"],
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
    },
    generate: {
        autoBuildNpm: 'npm',
        tabBar: {
            color: '#7F8389',
            selectedColor: '#59BF74',
            backgroundColor: '#ffffff',
            list: [{
                pageName: 'home',
                text: '首页',
                iconPath: path.resolve(__dirname, '../src/img/icon_tabbar_home-nor@2x.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/icon_tabbar_home-sel@2x.png'),
            }, {
                pageName: 'doc',
                text: '文档',
                iconPath: path.resolve(__dirname, '../src/img/icon_tabbar_doc-nor@2x.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/icon_tabbar_doc-sel@2x.png'),
			}, {
                pageName: 'my',
                text: '我的',
                iconPath: path.resolve(__dirname, '../src/img/icon_tabbar_porfile-nor@2x.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/icon_tabbar_porfile-sel@2x.png'),
			}],
			// custom: path.resolve(__dirname, '../src/custom-tab-bar')
        },
    },
    app: {
        backgroundTextStyle: 'dark',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: 'kbone',
    },
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
    global: {
        // rem: true,
        share: true,
        windowScroll: false,
        backgroundColor: '#F7F7F7',
    },
    pages: {},
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
    projectConfig: {
        projectname: 'kbone-template-vue',
        appid: '',
    },
}
