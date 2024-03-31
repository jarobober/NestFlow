<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useAsyncState } from '@vueuse/core'
import BaseInput from '@/components/base/BaseInput.vue'

const credentials = ref({
  email: '',
  password: ''
})

const { state, isReady, isLoading, execute } = useAsyncState(async() => {
  axios
    .post('https://nestflow.api.deskree.com/api/v1/auth/accounts/sign-in/email', {
      ...credentials.value
    })
    .then(response => {
      console.log('qweqwe', response)
    })},
  null, {
    immediate: false
  }
)
</script>

<template>
  <Card>
    <template #title>Sign In</template>
    <template #content>
      <p class="m-0">
        <div>
          <label>Email</label>
          <BaseInput v-model="credentials.email" />
        </div>
        <div>
          <label>Password</label>
          <BaseInput v-model="credentials.password" />
        </div>
        <Button label="Submit" @click="execute()" />
      </p>
    </template>
  </Card>
</template>
