const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = env => {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  return {
    entry: {
      index: `${PATHS.source}/pages/index/index.js`
      // точки вхождения. страницы
    },
    output: {
      filename: isProd ? 'js/[name].[chunkhash].js' : 'js/[name].js?[hash]',
      publicPath: '/',
      path: PATHS.build
    },
    devtool: !isProd ? 'inline-cheap-source-map' : '',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        },
        {
          test: /\.css$/,
          use: isProd
            ? ExtractTextPlugin.extract({
                publicPath: '../',
                fallback: 'style-loader',
                use: [
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  'postcss-loader'
                ]
              })
            : [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader'
              ]
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
            name: isProd
              ? 'images/[name].[hash:8].[ext]'
              : 'images/[name].[ext]?[hash:8]'
          }
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: isProd
              ? 'fonts/[name].[hash:8].[ext]'
              : 'fonts/[name].[ext]?[hash:8]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        // pug шаблоны для каждоый страницы делаем ещё один если надо
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: `${PATHS.source}/pages/index/index.pug`
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new SpritesmithPlugin({
        // багано работает при запуске dev server пересобирает 12 раз, а дальше работает нормально
        // указываем папку со спрайтом если надо больше то ещё один плагин с другим именем
        src: {
          cwd: `${PATHS.source}/sprites/icons`,
          glob: '*.png'
        },
        target: {
          image: `${PATHS.source}/spritesmith-generated/sprite.png`,
          css: `${PATHS.source}/spritesmith-generated/sprite.css`
        },
        apiOptions: {
          cssImageRef: './sprite.png'
        }
      }),
      ...(isProd
        ? [
            new webpack.optimize.UglifyJsPlugin({
              sourceMap: true,
              compress: {
                warnings: false
              }
            }),
            new ExtractTextPlugin('styles/[name].[contenthash].css')
          ]
        : [new webpack.HotModuleReplacementPlugin()])
    ],
    devServer: {
      contentBase: PATHS.build,
      port: 3000,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: true,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true
      },
      hot: false
    }
  };
};
