import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NavVersion from './components/NavVersion.vue'

import './custom.css'

const theme: Theme = {
  Layout: Layout,
  enhanceApp({app}) {
    app.component('NavVersion', NavVersion)
  }
}

export default theme
