module.exports = {
  '/projectIntro/': [
    {
      text: '环境搭建',
      children: ['/projectIntro/env.md'],
    },
    {
      text: '项目介绍',
      children: [
        '/projectIntro/README.md',
        '/projectIntro/mockApi.md',
        '/projectIntro/style.md',
        '/projectIntro/compositionApi.md',
      ],
    },
    {
      text: '组件&插件',
      children: [
        '/projectIntro/components/countTo.md',
        '/projectIntro/components/dragable.md',
        '/projectIntro/components/echarts.md',
        '/projectIntro/components/formTable.md',
        '/projectIntro/components/svgIcon.md',
        '/projectIntro/components/filter&directive.md',
      ],
    },
  ],
  '/devDoc/': [
    {
      text: '开发文档',
      children: ['/devDoc/README.md', '/devDoc/git.md', '/devDoc/business.md', '/devDoc/work.md'],
    },
  ],
  '/frontHistory/': [
    {
      text: '前端简史',
      children: [
        '/frontHistory/README.md',
        '/frontHistory/floodEra.md',
        '/frontHistory/browserWar.md',
        '/frontHistory/prototype.md',
        '/frontHistory/jQuery.md',
        '/frontHistory/nodejs+jquery.md',
        '/frontHistory/vue&react&angular.md',
        '/frontHistory/jsEcology.md',
        '/frontHistory/vuejs.md',
      ],
    },
  ],
  '/browserHistory/': [
    {
      text: '浏览器发展史',
      children: [
        '/browserHistory/README.md',
        '/browserHistory/earlyComplete.md',
        '/browserHistory/browserWar1.md',
        '/browserHistory/browserWar2.md',
        '/browserHistory/browserWar3.md',
      ],
    },
  ],
  '/interview/': [
    {
      text: '面试题',
      children: [
        '/interview/README.md',
        '/interview/html.md',
        '/interview/css.md',
        '/interview/js.md',
        '/interview/vue2.md',
        '/interview/vue3.md',
        '/interview/react.md',
        '/interview/http.md',
        '/interview/engineering.md',
      ],
    },
  ],
};
