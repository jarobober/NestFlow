<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import data from '@/config/defaultLayout.json'

const appStore = useAppStore()
const { logout } = appStore
const drawer = ref(false)
</script>
<template>
  <v-container class="nf-default-layout">
    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <img
          alt="NestFlow logo"
          src="@/assets/images/logo-light.png"
          class="nf-default-layout__logo"
        />
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list :items="data.drawerItems"></v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <main>
      <div :class="{ 'main-content--drawer-opened': drawer }" class="main-content">
        <slot />
      </div>
    </main>
  </v-container>
</template>

<style lang="scss">
.nf-default-layout {
  &__logo {
    height: 42px;
  }
  main {
    margin-top: 64px;
  }
  .main-content {
    margin-left: 0;
    // transition same as in nav drawer
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    &--drawer-opened {
      margin-left: 256px;
    }
  }
}
</style>
