<script setup lang="ts">
import { ref } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { apiPostList } from '@/api/lists'
import BaseDialog from '@/components/base/BaseDialog.vue'
import BaseInput from '@/components/base/BaseInput.vue'

const dialogRef = ref()

const showListDialog = () => {
  dialogRef.value?.showDialog()
}

const hideListDialog = () => {
  dialogRef.value?.hideDialog()
}

const list = ref({
  listName: '',
  items: []
})

const { isLoading, execute: createList } = useAsyncState(
  async () => {
    await apiPostList(list.value)
    hideListDialog()
  },
  null,
  { immediate: false }
)

const formRef = ref()

const submitForm = async () => {
  const { valid } = await formRef.value.validate()
  if (valid) createList()
}

defineExpose({ showListDialog, hideListDialog })
</script>

<template>
  <base-dialog ref="dialogRef" @submit="submitForm">
    <template #title>Add list</template>
    <template #content>
      <v-form ref="formRef" validate-on="blur">
        <base-input v-model="list.listName" label="List name"></base-input>
      </v-form>
    </template>
  </base-dialog>
</template>
