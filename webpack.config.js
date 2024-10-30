const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    // 是一个全局变量，表示当前模块的目录名（即文件所在的文件夹的路径） 
    // 例如，如果你的 JavaScript 文件位于 /Users/username/project，那么 __dirname 的值就是 /Users/username/project
    // path.resolve(__dirname, 'dist')
    // 是一个方法，用于将路径解析为绝对路径
    // path.resolve 会根据传入的参数生成一个绝对路径。在这个例子中，它将 __dirname 和 'dist' 结合起来，生成一个指向 dist 文件夹的绝对路径
    // 如果 dist 文件夹在 __dirname 下，那么 path.resolve(__dirname, 'dist') 的结果将是 /Users/username/project/dist
    
    // 总结
    // __dirname 提供当前模块的目录路径
    // path.resolve(__dirname, 'dist') 用于构建一个指向 dist 文件夹的绝对路径
    // 使用 path.resolve 是处理路径的更安全和灵活的方式，尤其在处理不同操作系统（如 Windows 和 Unix）上的路径时
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 先执行 css-loader 再执行 style-loader
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  // production 生产环境
  mode: 'development'
}
