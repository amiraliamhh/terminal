/* eslint-disable @typescript-eslint/no-var-requires */
const Webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const cliProgress = require('cli-progress')
const colors = require('colors')

const actions = {
  analyzer: (webpackConfig) => {
    webpackConfig.plugins.push(
      new BundleAnalyzerPlugin()
    )
  },
  port: (webpackConfig, port) => {
    webpackConfig.devServer.port = parseInt(port)
  }
}
exports.actions = actions

const bar = new cliProgress.SingleBar({
  format: `Build Progress | ${colors.cyan('{bar}')} | {percentage}%`,
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
})
bar.start(100, 0)
function progressHandler(percentage) {
  bar.update(Math.floor(percentage * 1000) / 10)
  if (percentage === 1) {
    bar.stop()
  }
}
exports.progressHandler = progressHandler

exports.applyOptionsToWebpackConfig = function applyOptionsToWebpackConfig(webpackConfig, opts) {
  webpackConfig.plugins.push(
    new Webpack.ProgressPlugin(progressHandler)
  )
  Object.entries(opts).forEach(([key, value]) => {
    actions[key](webpackConfig, value)
  })
}
