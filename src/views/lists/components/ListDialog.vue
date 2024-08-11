<script setup lang="ts">
import { ref } from 'vue'
import BaseDialog from '@/components/base/BaseDialog.vue'

const dialogRef = ref()

const showListDialog = () => {
  dialogRef.value?.showDialog()
}

const hideListDialog = () => {
  dialogRef.value?.hideDialog()
}

defineExpose({ showListDialog, hideListDialog })
</script>

<template>
  <base-dialog ref="dialogRef">
    <template #title>Add list</template>
    <template #content>Content</template>
  </base-dialog>
</template>
