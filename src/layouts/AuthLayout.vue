<template>
  <main class="nf-auth-layout">
    <img alt="NestFlow logo" src="@/assets/images/logo-light.png" class="nf-auth-layout__logo" />
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.nf-auth-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__logo {
    margin-bottom: 24px;
  }
}
</style>
