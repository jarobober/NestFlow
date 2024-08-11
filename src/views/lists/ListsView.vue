<script setup lang="ts">
import { ref } from 'vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import { VFab } from 'vuetify/labs/VFab'
import { useAsyncState } from '@vueuse/core'
import { apiGetLists } from '@/api/lists'
import ListDialog from '@/views/lists/components/ListDialog.vue'

const { state } = useAsyncState(async () => {
  return apiGetLists()
}, null)

const listDialogRef = ref()
</script>

<template>
  <section-layout
    ><template #title>Lists view</template>
    {{ state }}
  </section-layout>
  <v-fab
    class="ms-4"
    icon="mdi-plus"
    app
    location="center end"
    size="small"
    absolute
    offset
    @click="listDialogRef?.showListDialog()"
  />
  <list-dialog ref="listDialogRef" />
</template>
