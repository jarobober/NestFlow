<script setup lang="ts">
import { ref } from 'vue'
import { apiAuthSignIn } from '@/api/auth'
import { useAsyncState } from '@vueuse/core'
import { rules } from '@/utils/forms'
import { saveSession } from '@/utils/session'
import AuthCard from '@/views/auth/components/AuthCard.vue'
import router from '@/router'

const credentials = ref({
  email: '',
  password: ''
})

const formRef = ref()

const {
  state,
  isReady,
  isLoading,
  execute: signIn
} = useAsyncState(
  async () => {
    try {
      const { data } = await apiAuthSignIn(credentials.value)
      console.log('qqqqqq', data)
      saveSession(data)
      router.push({ name: 'home' })
    } catch (error) {
      console.log(error)
    }
  },
  null,
  {
    immediate: false
  }
)

const submitForm = async () => {
  const { valid } = await formRef.value.validate()
  if (valid) signIn()
}

const isPassVisible = ref(false)
</script>

<template>
  <auth-card>
    <template #title> Sign In </template>
    <template #subtitle>Welcome to NestFlow! 🚀 Dive in! </template>
    <template #form>
      <v-form ref="formRef" validate-on="blur">
        <v-text-field
          v-model="credentials.email"
          :rules="[rules.email, rules.required]"
          clearable
          label="Email"
          variant="outlined"
          density="compact"
          hide-details="auto"
          class="mb-4"
        ></v-text-field>
        <v-text-field
          v-model="credentials.password"
          :rules="[rules.required]"
          clearable
          :append-inner-icon="isPassVisible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isPassVisible ? 'text' : 'password'"
          density="compact"
          label="Password"
          variant="outlined"
          hide-details="auto"
          class="mb-4"
          @click:append-inner="isPassVisible = !isPassVisible"
        ></v-text-field>
      </v-form>
    </template>
    <template #buttons>
      <v-btn :loading="isLoading" color="primary" class="w-100 d-block" @click="submitForm()"
        >Sign in</v-btn
      >
      <v-btn :to="{ name: 'SignUp' }" class="w-100 ml-0 mt-2">Back to Sign up</v-btn>
      <v-btn class="w-100 d-block ml-0 mt-2">Forgot password?</v-btn>
    </template>
  </auth-card>
</template>

<style lang="scss">
.nf-auth-card {
  width: 350px;
  &__password-section {
    margin-top: 18px;
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
    margin-top: 30px;
  }
  .nf-error {
    color: red;
    margin: 2px 0;
    font-size: 12px;
    position: absolute;
  }
}
</style>
