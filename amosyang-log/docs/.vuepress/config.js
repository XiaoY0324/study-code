const Links = require('../../walk-test');

const Nav = [
  { text: '求虐', link: '/guide/' }
];

function genSidebarConfig() {
  return [
    {
      title: "前言",
      collapsable: false,
      children: [
        '/guide/',
      ]
    },
    ...Links,
  ]
}

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端求虐笔记',
      description: '估计是全网最屌的前端进阶项目'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  port: 8080,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: Nav,
    sidebar: {
      '/guide/': genSidebarConfig(),
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/FontEndArt/FontEndArt.github.io',
    repoLabel: 'GitHub',
    author: '前端小鹿🦌',
  },
  plugins: []
}