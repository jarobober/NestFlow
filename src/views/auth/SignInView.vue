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

const { state, isReady, isLoading, execute } = useAsyncState(
  async () => {
    try {
      const { data } = await apiAuthSignIn(credentials.value)
      saveSession(data.data)
    } catch (error) {
      console.log(error)
    }
  },
  null,
  {
    immediate: false
  }
)
</script>

<template>
  <Card class="nf-auth-card">
    <template #title>Sign In</template>
    <template #subtitle>Welcome to NestFlow</template>
    <template #content>
      <div>
        <label>Email</label>
        <BaseInput v-model="credentials.email" />
      </div>
      <div class="nf-auth-card__password-section">
        <label>Password</label>
        <Password v-model="credentials.password" toggleMask :feedback="false" />
      </div>
      <Button label="Submit" @click="execute()" />
    </template>
  </Card>
</template>

<style lang="scss">
.nf-auth-card {
  width: 350px;
  &__password-section {
    margin-top: 12px;
  }
  .p-card-header {
    text-align: center;
  }
  img {
    width: 200px;
    margin: 24px auto 0 auto;
  }
  label {
    display: block;
  }
  .p-inputtext {
    width: 100%;
  }
  .p-password {
    display: block;
  }
  .p-button {
    margin-top: 24px;
  }
}
</style>
