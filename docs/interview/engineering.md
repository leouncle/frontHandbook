# 工程化

## 如何实现 tree-shaking

1. 使用 ES2015 模块语法

Tree Shaking 只能对 ES2015 模块语法进行静态分析，对于 CommonJS 等其他格式的模块，需要先转换为 ES2015 模块语法。可以使用 Babel 等工具进行转换。

2. 使用 production 模式

Tree Shaking 只在 production 模式下才会生效，因为只有在 production 模式下，Webpack 才会开启代码压缩和优化。

3. 配置 Webpack

在 Webpack 的配置文件中，需要配置 optimization 选项，并将其设置为一个对象，其中包含 minimize 和 usedExports 两个属性。

minimize 属性表示是否开启代码压缩，将其设置为 true 即可。

usedExports 属性表示是否开启 Tree Shaking，将其设置为 true 即可。

4. 确保模块可以被 Tree Shaking

为了确保模块可以被 Tree Shaking，需要将模块的 package.json 文件中的 sideEffects 字段设置为 false 或者一个正则表达式，以告诉 Webpack 该模块没有副作用，可以被 Tree Shaking。

5. 使用 ESLint 等工具消除无用代码

在代码编写过程中，可以使用 ESLint 等工具对代码进行静态分析，消除无用的代码，以提高 Tree Shaking 的效率。

总之，实现 Tree Shaking 需要遵循一定的规则，并对 Webpack 进行合适的配置，才能有效地消除无用代码，提高代码的运行效率。

## 如何提高 webpack 构建速度

1. 使用最新版本的 webpack 和相关插件
2. 减少模块依赖的层级
3. 使用 babel-loader 的缓存
4. 使用 Thread-loader 或 HappyPack 开启多线程处理
5. 使用 DllPlugin 预编译第三方库
6. 使用 webpack-bundle-analyzer 分析打包结果
7. 将构建结果缓存到内存中
8. 避免在生产环境中使用 devtool 选项
9. 避免在开发环境中使用 Hot Module Replacement
10. 使用 externals 选项分离第三方库
11. 在开发环境中使用 cheap-module-eval-source-map 选项
12. 使用 loader 的 include 和 exclude 选项限制处理文件的范围
