const {merge} = require('webpack-merge');

const common = require('./webpack.config.common.js');


module.exports = merge(common, {
    mode: 'production',
    // add your configuration options here
});
