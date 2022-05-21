const { defaultTheme } = require('@vuepress/theme-default')
const { head } = require('./configs/head.js')

module.exports = {
  title: '前端项目手册',
  description: "leounce's front press",
  lang: 'zh-CN',
  base: '/',
  head: head,
  theme: defaultTheme({
    logo: 'images/logo.png',
    navbar: [
      {
        text: '前端简史',
        link: '/frontHistory/front.html'
      },
      {
        text: '浏览器发展史',
        link: '/browserHistory/browser.html'
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 2
  })
}
