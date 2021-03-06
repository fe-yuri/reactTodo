const { resolve } = require('path');
const webpack = require('webpack');

const HOST = 'localhost';
const PORT = 8080;
const URL = `http://${HOST}:${PORT}`;
const _PATH = resolve(__dirname, 'src');

module.exports = {
    entry: [
        `webpack-dev-server/client?${URL}`,
        './main.js'
    ],//당신의 번들의 엔트리포인트이다. 여러개의 엔트리 포인트를 허용하므로 배열로 쓴다.
    output: {//웹팩에 의해 출력
        path: _PATH, //출력될 번들 위치.
        filename: 'bundle.js', //번들 파일명.
        publicPath : '/'
    },
    context: _PATH,
    devtool: 'cheap-module-eval-source-map', //디버깅 목적.
    devServer: {
        contentBase: _PATH,
        publicPath: '/',
        compress: true,
        port: PORT
    },
    module: {
      /*loaders : [{ //모듈별 핸들링 정의
        test: /\.js$/, //정규표현식(조건 설정)
        exclude: [ /nod_modules/ ], //제외할 경로
          include: [ /src/ ], //포함할 경로
          loader: 'babel' //적용할 로더
      }]*/
        rules : [
            {
                test: /\.jsx?$/, //로더가 적용될 파일을 매칭하기 위한 정규식
                exclude: /node_modules/,
                loaders: 'babel-loader?cacheDirectory' //테스트에 매칭된 파일에 어떤 로더를 사용할지 결정. **** 로더를 인식하는 순서는 오른쪽에서 왼쪽.
            }
        ]
    },
    resolve: {
        modules: [_PATH, 'node_modules'],
        extensions: ['.js']
    },
    plugins: [ //플러그인들을 적을 배열
        new webpack.NamedModulesPlugin(),
        new webpack.EvalSourceMapDevToolPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
        /*new HtmlWebpackPlugin({
            template: './src/index.html'
        })*/
    ]
};