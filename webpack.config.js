const path = require('path');

module.exports = {
	entry: './public/js/main.ts',
	resolve: {
		extensions: ['.webpack.js', '.js', '.ts']
	},
	mode: 'development',
	output: {
		filename: '[name].build.js',
		path: path.join(__dirname, 'js'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env']
					}
				}
			},
			{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
		]
	}
}