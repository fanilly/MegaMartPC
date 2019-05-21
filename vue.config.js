module.exports = {
    devServer: {
        open: true,
        host: "0.0.0.0",
        port: 8911,
        https: false,
        hotOnly: false,
        proxy: {
            '/mobile': {
                target: "http://quhuiguoshi.zzqcnz.com/mobile",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/mobile': '/'
                }
            }
        }
    }
}
