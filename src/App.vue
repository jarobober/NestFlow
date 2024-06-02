<script setup lang="ts">
import { useLayouts } from '@/composables/useLayouts'

const { layout } = useLayouts()
</script>

<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<style lang="scss" scoped></style>
