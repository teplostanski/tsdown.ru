import { type DefaultTheme } from 'vitepress'
import pkg from '../../../../package.json' with { type: 'json' }

export function nav(prefix: string): DefaultTheme.Config['nav'] {
  return [
    {
      text: 'Навигация',
      items: [
        { text: 'Главная', link: `${prefix}/` },
        {
          text: 'Руководство',
          link: `${prefix}/guide/`,
          activeMatch: `${prefix}/guide/`,
        },
        {
          text: 'Справочник API',
          link: `${prefix}/reference/api/Interface.UserConfig`,
          activeMatch: `${prefix}/reference/`,
        },
        { text: 'FAQ', link: `${prefix}/guide/faq.md` },
      ],
    },
    {
      text: `v${pkg.version}`,
      items: [
        {
          items: [
            {
              text: `v${pkg.version}`,
              link: `https://github.com/rolldown/tsdown/releases/tag/v${pkg.version}`,
            },
            {
              text: 'История изменений',
              link: 'https://github.com/rolldown/tsdown/releases',
            },
          ],
        },
      ],
    },
    {
      text: 'Репозиторий перевода',
      link: 'https://github.com/teplostanski/tsdown.ru/',
    },
  ]
}
