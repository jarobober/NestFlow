<script setup lang="ts">
import { ref } from 'vue'
import { apiAuthSignIn } from '@/api/auth' 
import { useAsyncState } from '@vueuse/core'
import { saveSession } from '@/utils/session'
import BaseInput from '@/components/base/BaseInput.vue'

const credentials = ref({
  email: '',
  password: ''
})

const { state, isReady, isLoading, execute } = useAsyncState(async() => {
  try {
    const { data } = await apiAuthSignIn(credentials.value)
    saveSession(data.data)
  } catch (error) {
    console.log(error)
  }
},
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
