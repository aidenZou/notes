# Webpack


```javascript
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3",
        ap1: "./admin/page1",
        ap2: "./admin/page2"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
        new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
    ]
};
// <script>s required:
// page1.html: commons.js, p1.js
// page2.html: commons.js, p2.js
// page3.html: p3.js
// admin-page1.html: commons.js, admin-commons.js, ap1.js
// admin-page2.html: commons.js, admin-commons.js, ap2.js
```



[Webpack 2/3 中一些常见的优化措施](https://github.com/dwqs/blog/issues/52)



### Plugins

- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

npx webpack --config webpack.config.js --profile --json > stats.json
npx webpack --config ./build/webpack.prod.conf.js --profile --json > stats.json

npx webpack-bundle-analyzer bundle/output/path/stats.json
npx webpack-bundle-analyzer ./stats.json ./dist -m static -r report.html
stats.json 是 webpack 构建生成 stats.json，dist 是输出目录
