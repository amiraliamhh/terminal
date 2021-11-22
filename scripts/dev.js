/* eslint-disable @typescript-eslint/no-var-requires */
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { Command } = require('commander')

const { applyOptionsToWebpackConfig, progressHandler } = require('./utils')
const webpackConfig = require('../webpack.config')

const program = new Command()
program.version('0.0.1')
program
  .option('-a, --analyzer', 'runs webpack-bundle-analyzer')
  .option('-p, --port <port>', 'dev server port')

program.parse(process.argv)

const options = program.opts()
applyOptionsToWebpackConfig(webpackConfig, options)

const compiler = Webpack(webpackConfig)
const devServerOptions = {
  ...webpackConfig.devServer,
  open: true,
}
const server = new WebpackDevServer(devServerOptions, compiler)

const runServer = async () => {
  await server.start()
}

runServer()
