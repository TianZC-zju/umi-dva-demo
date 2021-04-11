import { defineConfig } from 'umi'
import routes from "./router.config";
const config = {
    antd: {},
    fastRefresh: {},
    dva: {
        immer: true,
        hmr: true
    },
    cssLoader: {
        localsConvention: 'camelCase'
    },
    routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/user/goods', component: '@/pages/user/goods' },
    ],
}


export default defineConfig(config)
