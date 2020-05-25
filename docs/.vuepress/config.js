module.exports = {
    title: '江南工业APP开发指南',
    description: 'JN-INFO-DEV-DOC',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
		themeConfig: {
			nav: [
				{ text: '主页', link: '/' },
				{ text: '文档', link: '/guide/' },
				{ text: '百度', link: 'https://www.baidu.com' },
			],
			sidebar: [
				['/guide/','命名规范'],
				['/naming-specifications/','命名规范参考表'],
				['/api/','API 接口规范'],
				['/the-front-end/','前端开发规范'],
			],
		},
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
}