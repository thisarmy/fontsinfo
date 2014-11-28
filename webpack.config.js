var webpack = require('webpack');

module.exports = {
  resolve: {
    modulesDirectories: ["vendor"]
  },
  entry: {
    app: "./js/app.coffee",
    vendor: ["jquery", "underscore"],
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
}
