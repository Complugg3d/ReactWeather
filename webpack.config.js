const webpack = require('webpack');



module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  resolve: {
    root: __dirname,
    alias: {
      main: 'app/components/main.js',
      nav: 'app/components/nav.js',
      weather: 'app/components/weather.js',
      about: 'app/components/about.js',
      examples: 'app/components/examples.js',
      'weather-form': 'app/components/weather-form.js',
      'weather-message': 'app/components/weather-message.js',
      'open-weather-map': 'app/api/open-weather-map.js',
      'error-modal': 'app/components/error-modal.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  },
  devTool: 'cheap-module-eval-source-map'
};
