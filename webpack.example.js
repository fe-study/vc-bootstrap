var config = require('./webpack.config.js')

config.entry = {
  'app': './examples/index.js',
}

config.output = {
  filename: './dist/example.js',
  library: 'VueComponentDemo',
  libraryTarget: 'umd'
}


module.exports = config
