module.exports = {
  title: "Web开发",
  base: "/note/",
  description: "Web开发常用技术整理",
  dest: "./dist",
  themeConfig: {
    // 导航栏
    nav: [
      // { text: "Home", link: "/" },
      { text: "Web", link: "/web" },
      {
        text: "Languages",
        items: [
          { text: "web", link: "/web" },
          { text: "vue", link: "/vue" },
          { text: "docker", link: "/docker" }
        ]
      },
      {
        text: "工具",
        items: [
          { text: "vscode", link: "/vscode" },
          { text: "Chrome apps", link: "/chrome_apps" }
        ]
      },
      {
        text: "其它",
        items: [
          { text: "Front-end-tutorial", link: "/Front-end-tutorial" },
          { text: "ESLint", link: "/ESLint" },
          { text: "android", link: "/android" },
          { text: "angular", link: "/angular" },
          { text: "api", link: "/api" },
          { text: "app", link: "/app" },
          { text: "blog", link: "/blog" },
          { text: "bugs", link: "/bugs" },
          { text: "cdn", link: "/cdn" },
          { text: "chrome_apps", link: "/chrome_apps" },
          { text: "cloud", link: "/cloud" },
          { text: "data", link: "/data" },
          { text: "doc", link: "/doc" },
          { text: "docker-cli", link: "/docker-cli" },
          { text: "docker", link: "/docker" },
          { text: "es6", link: "/es6" },
          { text: "flex", link: "/flex" },
          { text: "gitbook", link: "/gitbook" },
          { text: "go", link: "/go" },
          { text: "https", link: "/https" },
          { text: "hybrid", link: "/hybrid" },
          { text: "java", link: "/java" },
          { text: "javascript", link: "/javascript" },
          { text: "js坑", link: "/js坑" },
          { text: "keynote", link: "/keynote" },
          { text: "link", link: "/link" },
          { text: "list", link: "/list" },
          { text: "mac", link: "/mac" },
          { text: "mkdocs", link: "/mkdocs" },
          { text: "native", link: "/native" },
          { text: "node", link: "/node" },
          { text: "npm", link: "/npm" },
          { text: "npmpackage", link: "/npmpackage" },
          { text: "optimize", link: "/optimize" },
          { text: "other", link: "/other" },
          { text: "pm2", link: "/pm2" },
          { text: "project", link: "/project" },
          { text: "python", link: "/python" },
          { text: "react", link: "/react" },
          { text: "reactnative", link: "/reactnative" },
          { text: "shell", link: "/shell" },
          { text: "test", link: "/test" },
          { text: "tool", link: "/tool" },
          { text: "ubuntu", link: "/ubuntu" },
          { text: "ui", link: "/ui" },
          { text: "webpack", link: "/webpack" },
          { text: "wechat", link: "/wechat" },
          { text: "workflow", link: "/workflow" },
          { text: "信条", link: "/信条" },
          { text: "原生", link: "/原生" },
          { text: "构建", link: "/构建" },
          { text: "规范", link: "/规范" },
          { text: "资源", link: "/资源" },
          { text: "运维", link: "/运维" },
          { text: "黑科技", link: "/黑科技" },
          { text: "环境搭建", link: "/环境搭建" },
          { text: "前端资源离线化", link: "/前端资源离线化" },
          {
            text: "应该学习的编程语言框架和工具",
            link: "/应该学习的编程语言框架和工具"
          }
        ]
      }
      // { text: "External", link: "https://google.com" }
    ],
    // 侧边栏
    // sidebar: ["/", "/page-a", ["/page-b", "Explicit link text"]]
    sidebar: "auto", // 自动生成侧栏
    // sidebarDepth: 2
    lastUpdated: "Last Updated" // 最后更新时间
  }
};

// # 目录
//   - [自述](README.md)
//   - 开发
//   - [导航](book / blog.md)
//   - [环境搭建](book / 环境搭建.md)
//   - [web](book / web.md)
//   - [Flex 布局](book / flex.md)
//   - [mac](book / mac.md)
//   - [python](book / python.md)
//   - [react](book / react.md)
//   - [react native](book / reactnative.md)
//   - [Angular](book / angular.md)
//   - [微信公众号](book / wechat.md)
//   - [UI](book / ui.md)
//   - [API](book / api.md)
//   - [Hybrid](book / hybrid.md)
//   - [Node](book / node.md)
//   - [shell](book / shell.md)
//   - [Ubuntu](book / ubuntu.md)
//   - [docker](book / docker.md)
//   - 开发环境
//   - [vue 脚手架](book / vue.md)
//   - [ESLint](book / ESLint.md)
//   - [gitbook](book / gitbook.md)
//   - [云平台](book / cloud.md)
//   - 常用
//   - [软件](book / app.md)
//   - [Chrome](book / chrome_apps.md)
//   - [项目](book / project.md)
//   - [CDN](book / cdn.md)
//   - 其他
//   - [cloud](book / cloud.md)
//   - [other](book / other.md)
//   - [ui](book / ui.md)
//   - [原生](book / 原生.md)
//   - [构建](book / 构建.md)
//   - [黑科技](book / 黑科技.md)
