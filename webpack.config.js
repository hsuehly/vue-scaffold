const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const vueStyle = ['vue-style-loader','css-loader']
module.exports = {
//入口文件
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bandle.js'
  },
  //loader
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test:/\.css$/,
        use:[...vueStyle]
      },
      {
        test:/\.scss$/,
        use: [...vueStyle,'sass-loader']
      },
      {
        test: /\.less$/,
        use:[...vueStyle,'less-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,// 如果小于8k 用base64
              name: '[hash:8].[ext]',
              esModules: false //关闭es6的模块, 就会使用commonjs的模块
            }
          },
        ],
      },
      {
        test: /\.html$/,
        use:[
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  // 模式
  mode: 'development',
  // source-map
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname,"dist"),
    port: 8080,
    compress: true,
    open: true,
    hot:true,
    proxy: {
      '/api': 'http://127.0.0.1:3000'//http://127.0.0.1:3000/api
    }
  }
}