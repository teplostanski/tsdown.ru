import { DefaultTheme, defineConfig } from "vitepress";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";
import v from "../../versions.json";

const nav: DefaultTheme.Config["nav"] = [
  {
    text: "Навигация",
    items: [
      { text: "Главная", link: "/beta/" },
      { text: "Руководство", link: "/beta/guide/" },
      {
        text: "Справочник API",
        link: "/beta/reference/config-options.md",
      },
    ],
  },
  {
    text: "Репозиторий перевода",
    link: "https://github.com/teplostanski/vite-plugin-pretty-module-classnames/",
  },
  {
    component: "NavVersion",
    props: {
      versions: [
        {
          text: `v${v.latest}`,
          link: "/",
        },
        {
          text: `v${v.beta}${v.beta_suffix}`,
          link: "/beta/",
        },
      ],
    },
  },
];

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
    nav,
    sidebar: [
      {
        base: "/beta/guide/",
        items: [
          {
            text: "Руководство",
            items: [
              { text: "Введение", link: "/index.md" },
              { text: "Начало работы", link: "/getting-started.md" },
              { text: "Миграция с tsup", link: "/migrate-from-tsup.md" },
            ],
          },
          {
            text: "Рецепты",
            items: [
              { text: "Точка входа", link: "/entry.md" },
              { text: "Файл конфигурации", link: "/config-file.md" },
              { text: "Файлы деклараций (dts)", link: "/dts.md" },
              { text: "Формат вывода", link: "/output-format.md" },
              { text: "Директория вывода", link: "/output-directory.md" },
              { text: "Очистка", link: "/cleaning.md" },
              {
                text: "Обработка зависимостей",
                link: "/dependency-handling.md",
              },
              { text: "Режим наблюдения (Watch Mode)", link: "/watch-mode.md" },
              { text: "Цель (Target)", link: "/target.md" },
              { text: "Платформа", link: "/platform.md" },
              { text: "Tree-shaking", link: "/tree-shaking.md" },
              {
                text: "Карты исходного кода (Source Maps)",
                link: "/sourcemap.md",
              },
              { text: "Минификация", link: "/minification.md" },
              { text: "Тихий режим (Silent Mode)", link: "/silent-mode.md" },
              { text: "Прослойки (Shims)", link: "/shims.md" },
            ],
          },
          {
            text: "Продвинутые возможности",
            items: [
              { text: "Плагины", link: "/plugins.md" },
              { text: "Хуки", link: "/hooks.md" },
              { text: "Опции Rolldown", link: "/rolldown-options.md" },
            ],
          },
        ],
      },
      {
        text: "Справочник API",
        base: "/beta/reference/",
        items: [
          { text: "Параметры конфигурации", link: "/config-options.md" },
          { text: "Интерфейс командной строки", link: "/cli.md" },
        ],
      },
    ],
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
