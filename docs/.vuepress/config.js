const { defaultTheme } = require('@vuepress/theme-default')
const { head, navbar, sidebar } = require('./configs/index.js')

module.exports = {
  title: '前端项目手册',
  description: "leounce's front press",
  lang: 'zh-CN',
  base: '/',
  head: head,
  theme: defaultTheme({
    logo: 'images/logo.png',
    repo: 'leouncle/frontpress',
    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 2
  })
}
