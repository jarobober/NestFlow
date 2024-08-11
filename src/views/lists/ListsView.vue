<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import { VFab } from 'vuetify/labs/VFab'
import { useAsyncState } from '@vueuse/core'
import { apiGetLists } from '@/api/lists'

const { state } = useAsyncState(async () => {
  return apiGetLists()
}, null)
</script>

<template>
  <section-layout
    ><template #title>Lists view</template>
    {{ state }}
  </section-layout>
  <v-fab class="ms-4" icon="mdi-plus" app location="center end" size="small" absolute offset />
</template>
