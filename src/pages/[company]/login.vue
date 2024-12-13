<template>
  <v-main>
    <!-- <v-img
    class="mx-auto my-6 logo"
    max-width="228"
    :src="Logo"
  /> -->
    <!-- TODO: dynamic change to company logo-->
    <h1>{{ route.params.company }} Login</h1>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-form v-model="valid">
        <div class="text-subtitle-1 text-medium-emphasis">
          Account
        </div>

        <v-text-field
          v-model="input_email"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          :rules="[(value:string) => !rules.isEmpty(value) || 'Please enter your email address.',
                   (value:string) => rules.isEmail(value) || 'Please enter a valid email address.']"
        />

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <RouterLink
            class="text-caption text-decoration-none text-blue"
            to="/admin/reset-password"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?
          </RouterLink>
        </div>

        <v-text-field
          v-model="input_password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :rules="[(value:string) => !rules.isEmpty(value) || 'Please enter your password.',
                   (value:string) => rules.isPassword(value) || 'Please enter a valid password.']"
          @click:append-inner="visible = !visible"
        />

        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If
            you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text>
        </v-card>

        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          :disabled="input_email == '' || input_password == '' || !valid"
          @click="submit"
        >
          Log In
        </v-btn>
      </v-form>
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
import { ref,reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
// import Logo from '@/assets/logo.png';
import rules from '@/utils/rules';

definePage({
  meta: {
    title: 'Login',
    description: 'The page for users to log in to their accounts.',
    requiresAuth: false,
  },
});

const visible = ref(false);
const valid = ref(true);

const input_email = ref('user@user.com');
const input_password = ref('');

const error_attemps = ref(0);

const snackbar_options = reactive({
  isShow: false,
  color: 'success',
  message: '',
});


/**
 * Login to the account.
 * - Authenticate the user.
 * - Save login status to the local storage.
 * - Redirect to the dashboard.
 * - Show an error message if the login fails.
 */

const submit = () => {
  // TODO: Implement the login logic.
  if(input_email.value == 'user@user.com' && input_password.value == '12345678') {
    localStorage.setItem('token', 'This.Will.Be.The.Token.JWT.Token.user');
    router.push('chat');
  } else {
    // if need, it needs store in the database
    error_attemps.value++;
    if(error_attemps.value >= 3) {
      snackbar_options.isShow = true;
      snackbar_options.color = 'error';
      snackbar_options.message = 'Your account has been temporarily locked. Please try again in three hours.';
    } else {
      snackbar_options.isShow = true;
      snackbar_options.color = 'error';
      snackbar_options.message = 'Invalid email address or password. Please try again.';
    }
  }
};



</script>

<style scoped>
.v-theme--dark .logo {
  filter: invert(1);
}
</style>