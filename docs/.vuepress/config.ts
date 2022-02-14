import { resolve } from 'path'
import { defineUserConfig } from 'vuepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
	NaiveUiResolver,
	VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import Inspect from 'vite-plugin-inspect'

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'Hero',
	description: '基于 vuepress 的文档模板',
	themeConfig: {
		logo: '/images/logo.svg',
		navbar: [
			{
				text: '指南',
				link: '/guide/'
			},
			{
				text: '关于',
				link: '/about/'
			},
			{
				text: 'Gitee',
				link: 'https://github.com/name/repo'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/name/repo'
			}
		]
	},
	theme: resolve(__dirname, './theme/index.ts'),
	alias: {
		'~': resolve(__dirname, './')
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: resolve(__dirname, './components')
			}
		],
		[
			'@vuepress/plugin-search',
			{
				locales: {
					'/': {
						placeholder: 'Search'
					}
				}
			}
		]
	],
	bundlerConfig: {
		viteOptions: {
			plugins: [
				Inspect(),
				WindiCSS({
					scan: {
						dirs: [
							'../',
							resolve(__dirname, './components'),
							resolve(__dirname, './theme/layouts')
						]
					}
				}),
				Components({
					dirs: '',
					dts: resolve(
						__dirname,
						'./types/components.d.ts'
					),
					extensions: ['vue', 'md'],
					include: [/\.md$/, /\.vue$/],
					resolvers: [
						NaiveUiResolver(),
						VueUseComponentsResolver()
					]
				}),
				AutoImport({
					dts: resolve(
						__dirname,
						'./types/auto-imports.d.ts'
					),
					imports: ['vue', 'vue-router', '@vueuse/core']
				})
			]
		}
	}
})
