import { defineConfig } from 'vite'
import {
  groupIconVitePlugin,
  localIconLoader,
} from 'vitepress-plugin-group-icons'

export default defineConfig({
  plugins: [
    groupIconVitePlugin({
      customIcon: {
        rolldown: localIconLoader(import.meta.url, 'public/lightning-down.svg'),
        tsdown: localIconLoader(import.meta.url, 'public/tsdown.svg'),
      },
    }),
  ],
})
