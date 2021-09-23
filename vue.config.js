const path = require('path')
module.exports = {
    // 修改pages入口
    pages: {
        index: {
            entry: 'examples/main.js', // 入口
            template: 'public/index.html', // 模板
            filename: 'index.html' // 输出文件
        }
    },
    // 扩展webpack配置
    chainWebpack: config => {
        // @默认只想src目录，这里要改成examples
        // 另外也可以新增一个~指向packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))

        // 把packages和examples加入编译,因为新增的文件默认是不被webpack处理的
        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/example/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改他的选项
                return options
            })
    }
}