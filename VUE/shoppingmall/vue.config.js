const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// github page를 이용하여 실행할 때
// publicPath의 이름을 github의 레파지토리의 이름으로 설정
module.exports ={
  publicPath: "/vueclitest",
  outputdir: "docs"
}