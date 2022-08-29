import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// postcss
import autoprefixer from 'autoprefixer';
// element-plus
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 8080
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            dts: 'types/auto-imports.d.ts'
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            dts: 'types/components.d.ts'
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue']
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/assets/styles/global-scss-var.scss";` // 添加公共样式
            }
        },
        // vite 中已集成了 postcss
        postcss: {
            plugins: [
                autoprefixer({
                    overrideBrowserslist: [
                        'Android 4.1',
                        'iOS 7.1',
                        'Chrome > 31',
                        'ff > 31',
                        'ie >= 8',
                        '> 1%'
                    ],
                    grid: true
                }),
                {
                    // 去除警告: [WARNING] "@charset" must be the first rule in the file
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: (atRule) => {
                            if (atRule.name === 'charset') {
                                atRule.remove();
                            }
                        }
                    }
                }
            ]
        }
    }
});
