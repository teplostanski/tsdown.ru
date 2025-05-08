---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'tsdown'
  text: 'Элегантный<br>Сборщик Библиотек'
  tagline: Работает на Rolldown
  image:
    src: /tsdown.svg
    alt: tsdown
  actions:
    - theme: brand
      text: Начало работы
      link: /guide/
    - theme: alt
      text: Справочник API
      link: /reference/config-options.md
    #- theme: alt
      #text: Бета-версия
      #link: /beta/

features:
  - icon: 🚀
    title: Молниеносная скорость
    details: |
      Невероятно быстрая сборка проекта и генерация файлов деклараций благодаря Oxc и Rolldown!

  - icon: ♻️
    title: Мощная экосистема
    details: Поддержка плагинов Rollup, Rolldown, unplugin и некоторых плагинов Vite.

  - icon: ️🛠️
    title: Простота использования
    details: |
      tsdown предварительно настраивает всё необходимое для начала работы, позволяя вам сосредоточиться на написании кода.

  - icon: 🔄
    title: Плавная миграция
    details: |
      Совместимость с основными опциями и функциями tsup, обеспечивающая безболезненный переход.
---
