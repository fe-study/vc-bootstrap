var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'vc-bootstrap.js',
    library: 'vcBootstrap',
    libraryTarget: 'umd'
  },
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue' },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {test: /\.ejs|\.tpl$/, exclude: /node_modules/, loader: 'ejs-compiled-loader?variable=data'},
      { test: /\.css$/, loader: "style-loader!css-loader?root=./docs/" },
      {test: /\.scss$/, loader: "style!css!sass"},
      {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
    ]
  },
  babel: {
  presets: ['es2015'],
  plugins: ['transform-runtime']
},
  devtool: 'source-map'
};


if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}