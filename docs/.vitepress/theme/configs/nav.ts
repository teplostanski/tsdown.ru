import { type DefaultTheme } from "vitepress";
import v from "../../../../versions.json";

const navVersion = [
  {
    text: `v${v.latest}`,
    link: "/",
  },
  {
    text: `v${v.beta}${v.beta_suffix}`,
    link: "/beta/",
  },
]

export function nav(prefix: string): DefaultTheme.Config["nav"] {
  return [
    {
      text: "Навигация",
      items: [
        { text: "Главная", link: `${prefix}/` },
        { text: "Руководство", link: `${prefix}/guide/`, activeMatch: `${prefix}/guide/` },
        {
          text: "Справочник API",
          link: `${prefix}/reference/config-options`,
          activeMatch: `${prefix}/reference/`,
        },
      ],
    },
    {
      text: "Репозиторий перевода",
      link: "https://github.com/teplostanski/tsdown.ru/",
    },
    {
      component: "NavVersion",
      props: {
        versions: navVersion,
      },
    },
  ];
} 