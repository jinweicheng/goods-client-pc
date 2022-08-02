const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:8088/api',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
        }
      }
    }
  }
})
