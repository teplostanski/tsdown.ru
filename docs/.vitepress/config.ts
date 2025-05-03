import { defineConfig } from "vitepress";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";
import { sidebar, nav } from "./theme/configs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tsdown",
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/tsdown.svg" }],
    ["meta", { name: "theme-color", content: "#ff7e17" }],
    ["meta", { property: "og:title", content: "tsdown" }],
    [
      "meta",
      {
        property: "og:description",
        content: "tsdown По-русски | Элегантный сборщик библиотек",
      },
    ],
    [
      "meta",
      { property: "og:image", content: "https://tsdown.ru/og-image.png" },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://tsdown.ru/" }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      { property: "twitter:image", content: "https://tsdown.ru/og-image.png" },
    ],
  ],

  locales: {
    root: { label: "Русский" },
    en: { label: "English", link: "https://tsdown.dev" },
    zh: { label: "简体中文", link: "https://tsdown.dev/zh-CN/" },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/tsdown.svg", width: 24, height: 24 },
    nav: nav(''),
    sidebar: sidebar(''),
    outline: {
      label: "Навигация по странице",
      level: "deep",
    },
    lastUpdatedText: "Последнее обновление",
    darkModeSwitchLabel: "Тема",
    sidebarMenuLabel: "Меню",
    returnToTopLabel: "Наверх",
    langMenuLabel: "Выбрать язык",
    docFooter: {
      prev: "Предыдущая",
      next: "Следующая",
    },
    footer: {
      message: "Распространяется под лицензией MIT.",
      copyright:
        "Copyright © 2025-настоящее время VoidZero Inc. & Контрибьюторы",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/rolldown/tsdown" },
      { icon: "npm", link: "https://npmjs.com/package/tsdown" },
      { icon: "jsr", link: "https://jsr.io/@sxzz/tsdown" },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Поиск",
                buttonAriaLabel: "Поиск по документации",
              },
              modal: {
                noResultsText: "Ничего не найдено",
                resetButtonTitle: "Очистить поиск",
                footer: {
                  selectText: "Выбрать",
                  navigateText: "Навигация",
                  closeText: "Закрыть",
                },
              },
            },
          },
        },
      },
    },
  },

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
});

