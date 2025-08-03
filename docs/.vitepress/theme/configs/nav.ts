import { type DefaultTheme } from "vitepress";
import v from "../../../../versions.json";

const navVersion = [
  {
    text: `v${v.latest}`,
    link: "/",
  },
  //{
  //  text: `v${v.prerelease}${v.prerelease_suffix}`,
  //  link: "/_beta/",
  //},
]

export function nav(prefix: string): DefaultTheme.Config["nav"] {
  const versionNav: DefaultTheme.NavItem = navVersion.length === 1
    ?     {
      text: navVersion[0].text,
      link: "https://github.com/rolldown/tsdown/releases/tag/" + navVersion[0].text,
    }
    : {
        component: "NavVersion",
        props: {
          versions: navVersion,
        },
      };

  return [
    {
      text: "Навигация",
      items: [
        { text: "Главная", link: `${prefix}/` },
        { text: "Руководство", link: `${prefix}/guide/`, activeMatch: `${prefix}/guide/` },
        {
          text: "Справочник API",
          link: `${prefix}/reference/api/Interface.Options`,
          activeMatch: `${prefix}/reference/`,
        },
        { text: 'FAQ', link: `${prefix}/guide/faq.md` },
      ],
    },
    {
      text: "Репозиторий перевода",
      link: "https://github.com/teplostanski/tsdown.ru/",
    },
    versionNav,
  ];
} 