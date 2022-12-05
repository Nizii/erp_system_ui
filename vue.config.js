const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})

/*
export const devServer = {
  proxy: [
    {
      context: '/api/*',
      target: 'http://localhost:49146'
    }
  ]
}
*/