<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
const items = [
  {
    title: 'Foo',
    value: 'foo'
  },
  {
    title: 'Bar',
    value: 'bar'
  },
  {
    title: 'Fizz',
    value: 'fizz'
  },
  {
    title: 'Buzz',
    value: 'buzz'
  }
]
</script>
<template>
  <v-container>
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
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
    <main>
      <slot />
    </main>
  </v-container>
</template>

<style lang="scss" scoped>
.nf-default-layout {
  &__logo {
    height: 42px;
  }
}
</style>
