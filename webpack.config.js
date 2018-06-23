const pkg = require('./package.json');

module.exports = {
  devServer: {
    hot: true,
    open: true,
  },
  entry: {
    [pkg.name]: `${__dirname}/${pkg.main}`,
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(bower_components|node_modules)/,
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
