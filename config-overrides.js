const {
  override,
  addBabelPlugin,
  addWebpackPlugin
} = require('customize-cra');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = override(
  addBabelPlugin([
    '@babel/syntax-dynamic-import',
    {}
  ]),
  addBabelPlugin([
    'babel-plugin-macros',
    {}
  ]),
  addBabelPlugin([
    'babel-plugin-styled-components',
    {}
  ]),
  addBabelPlugin([
    '@loadable/babel-plugin',
    {}
  ]),
  addWebpackPlugin(new LoadablePlugin({}))
);
