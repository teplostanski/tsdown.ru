<script setup lang="ts">
import { onMounted, ref } from 'vue'

const sponsors = ref<string>()
onMounted(async () => {
  sponsors.value = await fetch(
    'https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.wide.svg',
  ).then((res) => res.text())
})
</script>

<template>
  <div class="sponsors-container">
    <div class="sponsors-header">
      <h3 class="voidzero-title">Создано</h3>
      <a
        class="voidzero"
        href="https://voidzero.dev/"
        target="_blank"
        title="voidzero.dev"
        alt="VoidZero"
      />
    </div>

    <div class="sponsors-content">
      <div v-if="sponsors" v-html="sponsors" />
      <img
        v-else
        src="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.wide.svg"
      />
    </div>
  </div>
</template>

<style scoped>
.sponsors-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sponsors-header {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.voidzero-title {
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 600;
}

.voidzero {
  display: block;
  height: 75px;
  width: 300px;
  background: url(https://cdn.jsdelivr.net/gh/voidzero-dev/community-design-resources/brand-assets/voidzero/voidzero-logo-dark.svg)
    no-repeat center;
  background-size: contain;
}

.dark .voidzero {
  background-image: url(https://cdn.jsdelivr.net/gh/voidzero-dev/community-design-resources/brand-assets/voidzero/voidzero-logo-light.svg);
}

.sponsors-content {
  margin-top: 3rem;
}

:deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
