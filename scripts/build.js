/* eslint-disable @typescript-eslint/no-var-requires */
const Webpack = require('webpack')
const { Command } = require('commander')

const { applyOptionsToWebpackConfig, progressHandler } = require('./utils')
const webpackConfig = require('../webpack.config')

const program = new Command()
program.version('0.0.1')
program
  .option('-a, --analyzer', 'runs webpack-bundle-analyzer')

program.parse(process.argv)

const options = program.opts()
applyOptionsToWebpackConfig(webpackConfig, options)

const compiler = Webpack(webpackConfig)
compiler.run((err, stats) => {
  if (err) {
    console.error(err)
  }
})
