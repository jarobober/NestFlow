<script setup lang="ts">
import { ref } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { apiPostList } from '@/api/lists'
import BaseDialog from '@/components/base/BaseDialog.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import TodoItem from '@/views/lists/components/TodoItem.vue'
import TipTap from '@/components/common/TipTap.vue'

const dialogRef = ref()

const showListDialog = () => {
  dialogRef.value?.showDialog()
}

const hideListDialog = () => {
  dialogRef.value?.hideDialog()
}

const DEFAULT_TASK = {
  completed: false,
  text: ''
}

const list = ref({
  name: '',
  body: `<ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
        </ul>`
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
    <template #subtitle>Provide list name and at least one list item to create a list</template>
    <template #content>
      <v-form ref="formRef" validate-on="blur">
        <base-input v-model="list.name" label="List name"></base-input>
        <tip-tap v-model="list.body"></tip-tap>
      </v-form>
    </template>
  </base-dialog>
</template>
