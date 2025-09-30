import type { Theme } from 'vitepress'
import Layout from './Layout.vue'

import './custom.css'
import 'virtual:group-icons.css'

const theme: Theme = {
  Layout: Layout
}

export default theme
