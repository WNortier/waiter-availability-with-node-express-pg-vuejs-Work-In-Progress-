// module.exports = {
//     devServer: {
//         proxy: 'http://localhost:4007/'
//     }
// };

module.exports = {
    // modify the location of the generated HTML file.
    // make sure to do this only in production.
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.plugin('html').tap((opts) => {
                opts[0].filename = './dist/client.html';
                return opts;
            });
        }
     },
};