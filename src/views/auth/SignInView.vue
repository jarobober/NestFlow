<script setup lang="ts">
import { ref } from 'vue'
import { apiAuthSignIn } from '@/api/auth'
import { useAsyncState } from '@vueuse/core'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { saveSession } from '@/utils/session'
import BaseInput from '@/components/base/BaseInput.vue'

import type { Rules } from 'async-validator'

const credentials = ref({
  email: '',
  password: ''
})
const rules: Rules = {
  email: [
    {
      type: 'email',
      required: true
    }
  ],
  password: [
    {
      required: true
    }
  ]
}
const isValidationManual = ref(true)

const {
  pass,
  isFinished,
  errorFields,
  execute: executeValidator
} = useAsyncValidator(credentials.value, rules, { immediate: false, manual: false })

const { state, isReady, isLoading, execute } = useAsyncState(
  async () => {
    try {
      const { pass } = await executeValidator()
      if (pass) {
        const { data } = await apiAuthSignIn(credentials.value)
        saveSession(data.data)
      } else {
        isValidationManual.value = false
      }
    } catch (error) {
      console.log(error)
    }
  },
  null,
  {
    immediate: false
  }
)

const isPassVisible = ref(false)
</script>

<template>
  <!-- <Card class="nf-auth-card">
    <template #title>Sign In</template>
    <template #subtitle>Welcome to NestFlow</template>
    <template #content>
      <div>
        <label>Email</label>
        <BaseInput v-model="credentials.email" type="email" :invalid="errorFields.email" />
        <p v-if="errorFields.email" class="nf-error">{{ errorFields.email[0].message }}</p>
      </div>
      <div class="nf-auth-card__password-section">
        <label>Password</label>
        <Password
          v-model="credentials.password"
          toggleMask
          :feedback="false"
          :invalid="errorFields.password"
        />
        <p v-if="errorFields.password" class="nf-error">{{ errorFields.password[0].message }}</p>
      </div>
      <Button label="Submit" @click="execute()" />
    </template>
  </Card> -->
  <v-card>
    <v-card-title> Sign In </v-card-title>
    <v-card-subtitle>
      Welcome to NestFlow! 🚀 Dive into a world of productivity and organization.
    </v-card-subtitle>
    <v-card-text>
      <v-form>
        <v-text-field label="Email" variant="outlined" density="compact"></v-text-field>
        <v-text-field
          :append-inner-icon="isPassVisible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isPassVisible ? 'text' : 'password'"
          density="compact"
          label="Password"
          variant="outlined"
          @click:append-inner="isPassVisible = !isPassVisible"
        ></v-text-field>
      </v-form>
    </v-card-text>
  </v-card>
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
