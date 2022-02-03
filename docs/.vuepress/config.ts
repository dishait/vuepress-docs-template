import { resolve } from 'path'
import { defineUserConfig } from 'vuepress'
import postcssWindicss from 'postcss-windicss'
import AutoImport from 'unplugin-auto-import/vite'

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'Hero',
	description: '基于 vuepress 的文档模板',
	themeConfig: {
		logo: '/images/logo.png',
		logoDark: '/images/loadDarked.png'
	},
	theme: resolve(__dirname, './theme/index.ts'),
	bundlerConfig: {
		viteOptions: {
			plugins: [
				AutoImport({
					dts: resolve(
						__dirname,
						'./types/auto-imports.d.ts'
					),
					imports: ['vue', 'vue-router', '@vueuse/core']
				})
			],
			css: {
				postcss: {
					plugins: [postcssWindicss]
				}
			}
		}
	}
})
