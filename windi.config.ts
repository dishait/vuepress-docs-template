import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	extract: {
		exclude: [
			'docs/.vuepress/.cache',
			'docs/.vuepress/.temp',
			'docs/.vuepress/dist'
		],
		include: [
			'docs/**/*.{vue,md}',
			'docs/.vuepress/**/*.{vue,jsx,tsx,md}',
			'components/**/*.{vue,jsx,tsx,md}'
		]
	}
})
