// 对外提供对组件的引用,注意组件必须声明name
import WhTest from './src/test.vue'

// 为组件提供install安装方法,供按需引入
WhTest.install = Vue => {
    Vue.component(WhTest.name, WhTest)
}

export default WhTest
