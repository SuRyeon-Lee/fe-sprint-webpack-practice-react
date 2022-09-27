// git push -u origin main로 config 파일 나누기
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const port = process.env.PORT || 3000;
//https://webpack.kr/guides/production/
//npm run start > 서버 시작하기
//npm run dev > 파일 저장(in dev)
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: { 
        path: path.join(__dirname, 'dev'),
        filename: 'bundle.[hash].js',
        clean: true,
    },
    devServer: {
        static: './dev',
        host: 'localhost',
        port: port,
        open: true,
    },
});