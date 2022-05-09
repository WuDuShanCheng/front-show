const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  // 选项...
  publicPath: "./",
  outputDir: './dist',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve('src/scss/index.scss')
      ]
    }
  },
  // 设置px2rem 进行适配
  chainWebpack: config => {
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader')
      .options({remUnit: 37.5, remPrecision: 8}) // 测试屏:375px dpr:1
      .end();
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'components': resolve('src/components'),
        'views': resolve('views')
      }
    }
  },
  //服务器配置
  // devServer: {
  //   //代理
  //   proxy: {
  //     '/': {
  //       //只要输入/api(该路径可自定义)会自动重定向(替换)为target中的地址(服务器地址)
  //       // target: 'http://192.168.1.27:8080',
  //       target: 'http://192.168.1.27:8081',
  //       //changeOrigin：true 允许跨域
  //       changeOrigin: true,
  //       //路径重写，/api是自定义路径，真正项目中是没有这个路径的，所以要去掉
  //       pathRewrite: {
  //         '^/': ''
  //       }
  //     }
  //   }
  // }
};
