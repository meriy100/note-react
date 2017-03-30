module.exports = {
  entry: {
    application: './frontend/assets/javascripts/application.js'
  },
  output: {
    path: './app/assets/javascripts',
    filename: '[name].bundle.js'
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-2'
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
// Contact GitHub API Training Shop Blog About
