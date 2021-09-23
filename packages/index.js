import WhTest from './test'
import WhTable from './Table'
// 存储组件列表
const components = [
    WhTest,
    WhTable
]

// 定义install方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
const install = function(Vue) {
    // 判断是否安装
    if(install.installed) return
    install.installed = true
    // 便利注册全局组件
    components.map(component => Vue.component(component.name, component))
    // 下面写法也可以
    // components.map(component => Vue.use(component))
}

// 判断是否直接引入文件
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有install，才能被Vue.use()方法安装
    install,
    // 以下是具体的组件列表
    ...components
}