import { defineClientAppEnhance } from '@vuepress/client'
import 'virtual:windi-devtools'
import 'virtual:windi.css'

const noop = () => {}

export default defineClientAppEnhance(noop)
