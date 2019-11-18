const path=require("path")

module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://cmsjapi.ffquan.cn',
          changeOrigin: true
        },
        '/index.php':{
          target:'http://www.mangguozhe.com',
          changeOrigin:true
        },
        '/ajax':{
          target:'https://m.lrts.me',
          changeOrigin:true
        },

      }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@store":path.join(__dirname,"./src/store"),
                "@router":path.join(__dirname,"./src/router"),
                "@components":path.join(__dirname,"./src/components"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@lib":path.join(__dirname,"./src/lib")
            }
        }
    }
  }