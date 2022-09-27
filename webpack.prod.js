const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
//npm run build > 배포용 빌드(in prod)
module.exports = merge(common, {
   mode: 'production',
   output: {
      path: path.join(__dirname, 'prod'),
      filename: 'bundle.[hash].js',
      clean: true,
    },
});