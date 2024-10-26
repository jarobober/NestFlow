<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'

interface ListItem {
  text: string
  completed: boolean
}

const props = defineProps<{ modelValue: ListItem }>()
const emit = defineEmits(['update:modelValue'])
const placeholderText = 'Click here to edit...'

// Computed property for editable text
const editableText = computed({
  get: () => props.modelValue.text,
  set: (value: string) => {
    emit('update:modelValue', { ...props.modelValue, text: value })
  }
})

// Clear placeholder when focused
const clearPlaceholder = (event: any) => {
  if (editableText.value === '') {
    event.target.innerText = ''
  }
}

// Save text and handle empty state
const saveText = async (event: any) => {
  const inputText = event.target.innerText
  if (inputText.trim() === '' && inputText !== placeholderText) {
    editableText.value = ''
    await nextTick()
    event.target.innerText = placeholderText
  } else {
    editableText.value = inputText
  }
}
</script>

<template>
  <div class="nf-todo-item">
    <v-checkbox hide-details density="compact" class="position-absolute"> </v-checkbox>
    <div
      contenteditable="true"
      @focus="clearPlaceholder"
      @blur="saveText"
      class="pl-8 w-100 nf-editable-element"
    >
      <span v-show="editableText === ''" class="placeholder">{{ placeholderText }}</span>
      <span>{{ editableText }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nf-todo-item {
  position: relative;
  .v-checkbox {
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% - 1px));
  }
  .nf-editable-element {
    outline: none;
  }
  .placeholder {
    opacity: 0.5;
    // position: absolute;
    pointer-events: none; /* Prevent interaction */
  }
}
</style>
