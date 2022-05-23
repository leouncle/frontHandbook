const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { head, navbar, sidebar } = require('./configs/index.js')

module.exports = {
  title: '前端项目手册',
  description: "leounce's front handbook",
  lang: 'zh-CN',
  base: '/frontpress/',
  head,
  theme: defaultTheme({
    logo: 'images/logo.png',
    repo: 'leouncle/frontpress',
    editLink: false,
    lastUpdatedText: '最近一次更新',
    contributorsText: '贡献者',
    tip: '提示',
    navbar,
    sidebar,
    sidebarDepth: 2
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档'
        },
        '/zh/': {
          placeholder: '搜索文档'
        }
      },
      maxSuggestions: 10
    })
  ]
}
