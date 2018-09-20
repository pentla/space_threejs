module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  devServer: {
    open: true,
    contentBase: `${__dirname}/dist`,
    host: '0.0.0.0',
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]?[hash]'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}