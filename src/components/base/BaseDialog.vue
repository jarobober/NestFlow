<script setup lang="ts">
import { ref } from 'vue'

const isDialogVisible = ref(false)

const showDialog = () => {
  isDialogVisible.value = true
}

const hideDialog = () => {
  isDialogVisible.value = false
}

defineExpose({ showDialog, hideDialog })
</script>

<template>
  <v-dialog v-model="isDialogVisible" max-width="480">
    <v-card>
      <v-card-item>
        <v-card-title>
          <slot name="title" />
        </v-card-title>
        <v-card-subtitle>
          <slot name="subtitle" />
        </v-card-subtitle>
      </v-card-item>
      <v-card-text><slot name="content" /></v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn variant="text" color="error" @click="hideDialog()">Close</v-btn>
        <v-btn variant="text" color="primary" @click="$emit('submit')">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
