<script setup lang="ts">
import { useData } from 'vitepress'
import Marquee from './Marquee.vue'
import { computed } from 'vue'

const { isDark } = useData()

const users = computed(() => {
  const jsdelivrBase = 'https://cdn.jsdelivr.net/gh/'
  const voidzeroBase = `${jsdelivrBase}voidzero-dev/community-design-resources/brand-assets`

  const theme = isDark.value ? 'light' : 'dark'
  return [
    {
      name: 'VoidZero',
      logo: `${voidzeroBase}/voidzero/voidzero-logo-${theme}.svg`,
      url: 'https://voidzero.dev',
    },
    {
      name: 'Vite',
      logo: `${voidzeroBase}/vite/vite-logo-color-${theme}.svg`,
      url: 'https://vite.dev',
    },
    {
      name: 'Vitest',
      logo: `${voidzeroBase}/vitest/vitest-logo-color-${theme}.svg`,
      url: 'https://vitest.dev',
    },
    {
      name: 'Oxc',
      logo: `${voidzeroBase}/oxc/oxc-logo-color-${theme}.svg`,
      url: 'https://oxc.rs',
    },

    {
      name: 'Vercel',
      logo: 'i-logos:vercel',
      url: 'https://vercel.com',
    },
    {
      name: 'Cloudflare',
      logo: 'i-logos:cloudflare',
      url: 'https://cloudflare.com',
    },
    {
      name: 'Linear',
      logo: 'i-logos:linear',
      url: 'https://linear.app',
    },
    {
      name: 'Tencent',
      logo: `${jsdelivrBase}/lobehub/lobe-icons/packages/static-png/dark/tencent-brand-color.png`,
      url: 'https://www.tencent.com',
      class: 'logo-h8',
    },
    {
      name: 'Binance',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg',
      url: 'https://www.binance.com',
      class: 'logo-h9',
    },
    {
      name: 'Supabase',
      logo: 'i-logos:supabase',
      url: 'https://supabase.com',
    },
    {
      name: 'Sentry',
      logo: 'i-logos:sentry',
      url: 'https://sentry.io',
    },
    {
      name: 'Baidu',
      logo: `${jsdelivrBase}/lobehub/lobe-icons/packages/static-png/dark/baidu-brand-color.png`,
      url: 'https://www.baidu.com',
      class: 'logo-h8 logo-scale-120',
    },

    {
      name: 'Vue',
      logo: 'i-logos:vue',
      url: 'https://vuejs.org',
      class: 'logo-text-3xl logo-scale-120',
    },
    {
      name: 'Nuxt',
      logo: `https://nuxt.com/assets/design-kit/logo-green-${isDark.value ? 'white' : 'black'}.svg`,
      url: 'https://nuxt.com',
      class: 'logo-h8',
    },
    {
      name: 'ESLint',
      logo: 'i-logos:eslint',
      url: 'https://eslint.org',
      class: 'logo-text-3xl logo-scale-130',
    },
    {
      name: 'Prettier',
      logo: 'i-logos:prettier',
      url: 'https://prettier.io',
      class: 'logo-text-3xl logo-scale-120',
    },
    {
      name: 'Slidev',
      logo: 'i-logos:slidev',
      url: 'https://sli.dev',
      class: 'logo-text-3xl logo-scale-120',
    },
    {
      name: 'Vue Macros',
      logo: 'https://vue-macros.dev/favicon.svg',
      url: 'https://vue-macros.dev',
      class: 'logo-h10',
    },
    {
      name: 'Vue Vine',
      logo: 'https://vue-vine.dev/vine-logo.png',
      url: 'https://vue-vine.dev',
      class: 'logo-h10 logo-scale-150',
    },
  ]
})
</script>

<template>
  <!--
    Copied from https://github.com/privatenumber/tsx
    MIT License: https://github.com/privatenumber/tsx/blob/master/LICENSE
  -->
  <div class="users-container">
    <a
      href="https://github.com/rolldown/tsdown/discussions/143"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>Кто использует tsdown?</h3>
    </a>

    <Marquee
      :velocity="40"
      class="marquee-wrapper dark-zebra-pattern"
    >
      <div class="marquee-content">
        <a
          v-for="user of users"
          :href="user.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            v-if="user.logo.startsWith('https://')"
            :src="user.logo"
            :alt="user.name"
            :class="user.class || 'logo-h6'"
          />
          <div v-else :class="[user.logo, user.class || 'logo-text-3xl']" />
        </a>
      </div>
    </Marquee>
  </div>
</template>

<style scoped>
.users-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.marquee-wrapper {
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 0.75rem;
}

.dark .marquee-wrapper {
  background-color: rgba(63, 63, 70, 0.3);
}

.dark .dark-zebra-pattern {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgb(0 0 0/ 0.05) 10px,
    rgb(0 0 0/ 0.05) 20px
  );
}

.marquee-content {
  display: flex;
  gap: 2.5rem;
  align-items: center;
  min-width: 100%;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

/* Logo size classes */
.logo-h6 {
  height: 1.5rem;
}

.logo-h8 {
  height: 2rem;
}

.logo-h9 {
  height: 2.25rem;
}

.logo-h10 {
  height: 2.5rem;
}

.logo-text-3xl {
  font-size: 1.875rem;
}

.logo-scale-120 {
  transform: scale(1.2);
}

.logo-scale-130 {
  transform: scale(1.3);
}

.logo-scale-150 {
  transform: scale(1.5);
}
</style>