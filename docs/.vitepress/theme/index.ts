import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'

import './custom.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout: Layout
} satisfies Theme
