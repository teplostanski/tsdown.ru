import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
  UserConfig,
} from 'unocss'

const _default_1: UserConfig<object> = defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons()],
})
export default _default_1
