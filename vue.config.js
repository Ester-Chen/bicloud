const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  // 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // 打包的输出目录。当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: "dist",
  // 静态资源打包路径。放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "static",
  // 打包后的启动文件。指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath: "index.html",
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  filenameHashing: true,
  // 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件
  pages: {
    // 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '币云',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
  transpileDependencies: ['vuetify'],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // webpack 链式配置   默认已经配置好了  node_moudles/@vue
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
    // 修复Lazy loading routes  按需加载的问题，如果没有配置按需加载不需要写，会报错
    // config.plugin("html").tap(args => {
    //   args[0].chunksSortMode = "none";
    //   return args;
    // });
    //添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("layout", resolve("src/layout"))
      .set("base", resolve("src/base"))
      .set("static", resolve("src/static"));
    // 移除 prefetch 插件
    config.plugins.delete('prefetch-index')
    // 移除 preload 插件
    config.plugins.delete('preload-index');
  },
  // webpack 配置
  configureWebpack: config => {
    const plugins = [];
    config.plugins = [...config.plugins, ...plugins];
  },
  parallel: require("os").cpus().length > 1,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: undefined,
      enableInSFC: undefined
    }
  },
  pwa: {},
  //设置代理
  devServer: {
    port: 9001,
    https: false,
    open: false,
    openPage: "",
    hot: true,
    compress: true,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://localhost:8082",
        ws: true,
        changeOrigin: true,  //是否跨域
        secure: false,
        pathRewrite: {
          '^/api': '/'   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
        }
      },
      "/foo": {
        target: "https://cdn.awenliang.cn",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
