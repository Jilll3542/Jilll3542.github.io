import { defaultTheme, defineUserConfig } from 'vuepress'


export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  head: [
    
  ],
  theme:defaultTheme({

    navbar:[
      {
        text:"jilll空间",
        link:"https://github.com/Jilll3542/Jilll3542.github.io"
      },
    ],
    repo:"Jilll3542/vuepress-theme-hope",
    sidebar:[]
  })
  
})