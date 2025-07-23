<template>
  <div class="homepage-container">
    <div class="homepage-block">
      <h2 class="voidzero-title">Создано</h2>
      <a
        class="voidzero homepage-logo"
        href="https://voidzero.dev/"
        target="_blank"
        title="voidzero.dev"
        alt="VoidZero"
      />
    </div>

    <div class="homepage-sponsors">
      <img
        src="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.wide.svg"
        alt="Sponsors"
      />
    </div>
  </div>
</template>

<style scoped>
.homepage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.homepage-block {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.homepage-logo {
  display: block;
  height: 75px;
  width: 300px;
}

.homepage-sponsors {
  margin-top: 12px;
}

.homepage-version {
  color: #ff7e17;
}

.t-repo-link {
  text-decoration: underline;
  color: #ff7e17;
}

.voidzero-title {
  line-height: 32px;
  font-size: 24px;
  font-weight: 600;
}

.voidzero {
  background: url(https://voidzero.dev/logo.svg) no-repeat center;
  background-size: contain;
}

.dark .voidzero {
  background-image: url(https://voidzero.dev/logo-white.svg);
}

:deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
