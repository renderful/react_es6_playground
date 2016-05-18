// webpack.config.js
var path = require('path');
module.exports = {
  // Set up an ES6-ish environment
  entry: ['babel-polyfill', './src/app.jsx'],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
  module: {
	  loaders: [
				{
					test: /.jsx$/,
					loader: 'babel-loader',
                    query:
                    {
                        presets:['react']
                    }
				}
	  ]
  }
};
