var webpack = require('webpack'),
       path = require('path');

module.exports = {

	context : __dirname + "/src/js",
	entry : {
		app : "./app.js",
		vendor : "./vendor.js",
	},
	output: {
        path: __dirname + '/js',
        filename: '[name].bundle.js'
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery",
         "Tether": 'tether'
      })
  ]
};
