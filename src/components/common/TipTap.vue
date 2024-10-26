<script lang="ts" setup>
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Text from '@tiptap/extension-text'
import { Editor, EditorContent } from '@tiptap/vue-3'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const editor = new Editor({
  content: props.modelValue,
  extensions: [
    Document,
    Paragraph,
    Text,
    TaskList,
    TaskItem.configure({
      nested: true
    })
  ],
  onUpdate: () => {
    emit('update:modelValue', editor.getHTML())
  }
})
</script>

<template>
  <editor-content :editor="editor" />
</template>

<style lang="scss">
/* Basic editor styles */
.tiptap {
  :first-child {
    margin-top: 0;
  }

  /* List styles */
  ul,
  ol {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;

    li p {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  }

  /* Task list specific styles */
  ul[data-type='taskList'] {
    list-style: none;
    margin-left: 0;
    padding: 0;

    li {
      align-items: flex-start;
      display: flex;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }
    }

    input[type='checkbox'] {
      cursor: pointer;
    }

    ul[data-type='taskList'] {
      margin: 0;
    }
  }
}
</style>
