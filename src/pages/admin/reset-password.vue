<template>
  <v-main>
    <v-img
      class="mx-auto my-6 logo"
      max-width="228"
      :src="Logo"
    />

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-h5">
        Reset password
      </div>
      <div class="text-subtitle-1 text-medium-emphasis">
        For security reasons, we need to verify your identity. Please enter your email address below to receive a reset link.
      </div>
      <v-form v-model="valid">
        <v-text-field
          v-model="input_email"
          :rules="[(value:string) => !rules.isEmpty(value) || 'Please enter your email address.',
                   (value:string) => rules.isEmail(value) || 'Please enter a valid email address.']"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        />
      </v-form>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        :disabled="input_email == '' || !valid"
        block
        @click="submit"
      >
        Reset
      </v-btn>
    </v-card>
  </v-main>
  <v-snackbar
    v-model:model-value="snackbar_options.isShow"
    :timeout="2000"
    :color="snackbar_options.color"
    elevation="24"
  >
    {{ snackbar_options.message }}
  </v-snackbar>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import Logo from '@/assets/logo.png';
import rules from '@/utils/rules.js';

definePage({
  meta: {
    title: 'Forgot password',
    description: 'The page for users to reset their passwords.',
    requiresAuth: false,
  },
});

const input_email = ref('');
const valid = ref(true);

const snackbar_options = reactive({
  isShow: false,
  color: 'success',
  message: '',
});
/**
 * Submit the form.
 * - Send a reset link to the email address.
 */
const submit = () => {
  // TODO: Implement the actual reset password logic here.

  new Promise<void>((resolve, reject) => {
    //-------------------------------------
    // random successful and failed responses
    Math.random() < 0.5? resolve() : reject();
    //------------------------------------- 
  }).then(() => {
    snackbar_options.isShow = true;
    snackbar_options.color = 'success';
    snackbar_options.message = `Reset link sent to ${input_email.value}`;
  }).catch(() => {
    snackbar_options.isShow = true;
    snackbar_options.color = 'error';
    snackbar_options.message = 'Failed to send reset link';
  });
};
</script>

<style scoped>
.v-theme--dark .logo {
  filter: invert(1);
}
</style>