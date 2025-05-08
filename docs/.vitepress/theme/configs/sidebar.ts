import { type DefaultTheme } from "vitepress";

export function sidebar(prefix: string): DefaultTheme.SidebarItem[] {
  return [
    {
      base: `${prefix}/guide`,
      items: [
        {
          text: "Руководство",
          items: [
            { text: "Введение", link: "/" },
            { text: "Начало работы", link: "/getting-started" },
            { text: "Миграция с tsup", link: "/migrate-from-tsup" },
          ],
        },
        {
          text: "Рецепты",
          items: [
            { text: "Точка входа", link: "/entry" },
            { text: "Файл конфигурации", link: "/config-file" },
            { text: "Файлы деклараций (dts)", link: "/dts" },
            { text: "Формат вывода", link: "/output-format" },
            { text: "Директория вывода", link: "/output-directory" },
            { text: "Очистка", link: "/cleaning" },
            {
              text: "Обработка зависимостей",
              link: "/dependency-handling",
            },
            { text: "Режим наблюдения (Watch Mode)", link: "/watch-mode" },
            { text: "Цель (Target)", link: "/target" },
            { text: "Платформа", link: "/platform" },
            { text: "Tree-shaking", link: "/tree-shaking" },
            {
              text: "Карты исходного кода (Source Maps)",
              link: "/sourcemap",
            },
            { text: "Минификация", link: "/minification" },
            { text: "Тихий режим (Silent Mode)", link: "/silent-mode" },
            { text: "Прослойки (Shims)", link: "/shims" },
          ],
        },
        {
          text: "Продвинутые возможности",
          items: [
            { text: "Плагины", link: "/plugins" },
            { text: "Хуки", link: "/hooks" },
            { text: "Опции Rolldown", link: "/rolldown-options" },
          ],
        },
        { text: "FAQ", link: "/faq" },
      ],
    },
    {
      text: "Справочник API",
      base: `${prefix}/reference`,
      items: [
        { text: "Параметры конфигурации", link: "/config-options" },
        { text: "Интерфейс командной строки", link: "/cli" },
      ],
    },
  ];
}
