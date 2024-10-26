<script setup lang="ts">
import { ref } from 'vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import { VFab } from 'vuetify/labs/VFab'
import { useAsyncState } from '@vueuse/core'
import { apiGetLists } from '@/api/lists'
import ListDialog from '@/views/lists/components/ListDialog.vue'

const { state: listsData } = useAsyncState(async () => {
  const { data } = await apiGetLists()
  return data
}, null)

const listDialogRef = ref()
</script>

<template>
  <section-layout
    ><template #title>Lists view</template>
    <div>
      <v-card v-for="item in listsData" :key="item._id">
        <v-card-item>
          <v-card-title v-if="item.name">
            {{ item.name }}
          </v-card-title>
        </v-card-item>
        <v-card-text>
          <div v-if="item.body" v-html="item.body"></div>
        </v-card-text>
      </v-card>
    </div>
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
