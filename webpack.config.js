const {merge} = require('webpack-merge');

const commonConfiguration = require('./webpack/common');

module.exports = (_env, {mode}) => {
  const properlyConfig = require(`./webpack/${mode}`)
  const mergetConfig = merge(commonConfiguration, properlyConfig)

  return mergetConfig;
}