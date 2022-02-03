import { resolve } from 'path'
import { defineUserConfig } from 'vuepress'
import postcssWindicss from 'postcss-windicss'

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'Name',
	description: '基于 vuepress 的文档模板',
	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png'
	},
	theme: resolve(__dirname, './theme/index.ts'),
	bundlerConfig: {
		viteOptions: {
			css: {
				postcss: {
					plugins: [postcssWindicss]
				}
			}
		}
	}
})
