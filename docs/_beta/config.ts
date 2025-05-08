import { defineAdditionalConfig } from "vitepress";
import { sidebar, nav } from "../.vitepress/theme/configs";

// https://vitepress.dev/reference/site-config
export default defineAdditionalConfig({
  title: "tsdown βeta",
  themeConfig: {
    nav: nav('/beta'),
    sidebar: sidebar('/beta'),
  },
});
