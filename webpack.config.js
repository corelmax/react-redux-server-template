'use strict'

const path  = require('path')

module.exports = (config) => {
    config = config == 'production'?'prod':'dev'

    return require(path.join(__dirname, 'webpack.' + config + '.config.js'))
}