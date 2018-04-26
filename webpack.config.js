const path=require('path');

module.exports={
    entry:'./src/js/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          { test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
        },
          {
            test: /\.css$/,
             use: [ 'style-loader', 'css-loader' ]
          },
          { test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg)$/, loader: 'url-loader?limit=100000' }
        ]
      }
}