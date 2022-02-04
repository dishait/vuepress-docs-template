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
		logo: '/images/logo.png',
		logoDark: '/images/loadDarked.png',
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
		'@use': resolve(__dirname, '../../composables'),
		'@components': resolve(__dirname, '../../components')
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: resolve(
					__dirname,
					'../../components'
				)
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
							resolve(__dirname, './'),
							resolve(__dirname, '../'),
							resolve(__dirname, '../../components')
						],
						exclude: [
							resolve(__dirname, './dist'),
							resolve(__dirname, './.cache'),
							resolve(__dirname, './.temp'),
							resolve(__dirname, './public'),
							resolve(__dirname, './types')
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
