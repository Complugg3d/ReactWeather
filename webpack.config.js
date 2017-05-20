module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
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
      'open-weather-map': 'app/api/open-weather-map.js'
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
