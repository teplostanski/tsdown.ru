export const zhCN = {
  // nav
  Home: '首页',
  Guide: '指南',
  'API Reference': 'API 参考',

  // sidebar
  Introduction: '介绍',
  'Getting Started': '快速上手',
  'Migrate from tsup': ' 从 tsup 迁移',

  Recipes: '实践指南',
  Entry: '入口文件',
  Cleaning: '清理',
  'Handling Dependencies': '处理依赖',
  'Config File': '配置文件',
  Minification: '压缩',
  'Output Directory': '输出目录',
  'Output Format': '输出格式',
  Platform: '运行平台（Platform）',
  'Silent Mode': '静默模式',
  'Source Maps': '源映射（Source Maps）',
  Target: '构建目标（Target）',
  'Tree-shaking': '除屑优化（Tree-shaking）',
  'Watch Mode': '监听模式',
  Shims: 'Shims（兼容代码）',
  'Declaration Files (dts)': '声明文件（dts）',

  Advanced: '高级功能',
  'Rolldown Options': 'Rolldown 选项',
  Plugins: '插件',
  Hooks: '钩子（Hooks）',

  'Config Options': '配置选项',
  'Command Line Interface': '命令行接口',

  'The Elegant Bundler for Libraries': '优雅的库打包器',

  English: '简体中文',
  en: 'zh-CN',
}

export const ruRU = {
  // nav
  Home: 'Главная',
  Guide: 'Руководство',
  'API Reference': 'Справочник API',

  // sidebar
  Introduction: 'Введение',
  'Getting Started': 'Начало работы',
  'Migrate from tsup': 'Миграция с tsup',

  Recipes: 'Рецепты',
  Entry: 'Точка входа',
  Cleaning: 'Очистка',
  'Handling Dependencies': 'Обработка зависимостей',
  'Config File': 'Файл конфигурации',
  Minification: 'Минификация',
  'Output Directory': 'Директория вывода',
  'Output Format': 'Формат вывода',
  Platform: 'Платформа',
  'Silent Mode': 'Тихий режим (Silent Mode)',
  'Source Maps': 'Карты исходного кода (Source Maps)',
  Target: 'Цель (Target)',
  'Tree-shaking': 'Tree-shaking',
  'Watch Mode': 'Режим наблюдения (Watch Mode)',
  Shims: 'Прослойки (Shims)',
  'Declaration Files (dts)': 'Файлы деклараций (dts)',

  Advanced: 'Продвинутые возможности',
  'Rolldown Options': 'Опции Rolldown',
  Plugins: 'Плагины',
  Hooks: 'Хуки',

  'Config Options': 'Параметры конфигурации',
  'Command Line Interface': 'Интерфейс командной строки',

  'The Elegant Bundler for Libraries': 'Элегантный упаковщик библиотек',

  English: 'Русский',
  en: 'ru',
}

export const translateMap: Record<string, Record<string, string>> = {
  'zh-CN': zhCN,
  'ru': ruRU,
}
