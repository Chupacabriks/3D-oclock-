const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),//каждый путь относителен контекста -папки разработки src
  entry: './index.js',
  output: {
    filename: 'js/main.js', //папка выхода
    path: path.resolve(__dirname, 'dist') //resolve объединяет пути dirname - корневой каталог, т е вся папка разработки, а dist - папка, куда помещается bundle.js
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true,
    }
  }
}