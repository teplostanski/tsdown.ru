import { type DefaultTheme } from "vitepress";

export function nav(prefix: string): DefaultTheme.Config["nav"] {
  return [
    {
      text: "Навигация",
      items: [
        { text: "Главная", link: `${prefix}/` },
        {
          text: "Руководство",
          link: `${prefix}/guide/`,
          activeMatch: `${prefix}/guide/`,
        },
        {
          text: "Справочник API",
          link: `${prefix}/reference/api/Interface.UserConfig`,
          activeMatch: `${prefix}/reference/`,
        },
        { text: "FAQ", link: `${prefix}/guide/faq.md` },
      ],
    },
    {
      text: "Репозиторий перевода",
      link: "https://github.com/teplostanski/tsdown.ru/",
    },
  ];
}
