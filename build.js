const webpack = require('webpack')
const legacyConfig = require('./webpack.config')
const modernConfig = require('./webpack.config.modern')

const configs = [
    //  modernConfig, 
     legacyConfig,
]


// let compiler = webpack(configs)

// compiler.run((err, status) => {
//     if (err) {
//         throw err
//     }
// })


async function build(webpackConfig) {
    const compiler = webpack(webpackConfig)
    return new Promise((resolve, reject) => {
      compiler.run((err, status) => {
        if (err) {
          reject()
          throw err
        }
        resolve()
      })
    })
  }

async function handle() {
    await build(modernConfig)

    await build(legacyConfig)
}

handle()