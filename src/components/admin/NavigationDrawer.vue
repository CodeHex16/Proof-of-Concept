<template>
  <v-toolbar app>
    <v-app-bar-nav-icon 
      @click="drawer = !drawer"
    />
    <v-toolbar-title>LLM System</v-toolbar-title>
  </v-toolbar>
  <v-navigation-drawer
    v-model="drawer"
    expand-on-hover
   
    app
  >
    <v-list>
      <v-list-item
        :prepend-avatar="userInfo.avatar"
        :subtitle="userInfo.email"
        :title="'Hello, ' + userInfo.name"
      />
    </v-list>

    <v-divider />

    <v-list
      v-model="page"
      density="compact"
      nav
    >
      <v-list-item
        to="/admin/dashboard"
        prepend-icon="mdi-home"
        title="Dashboard"
        value="dashboard"
      />
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Accounts"
        value="accounts"
        to="/admin/accounts"
      />
    </v-list>

    <template v-slot:append>
          <div class="pa-2">
            <v-btn  @click="toggleTheme" icon="mdi-theme-light-dark" variant="text">
            </v-btn>
          </div>
        </template>

  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const page = ref('home');

// Set the current page based on the route.
page.value = router.currentRoute.value.path.split('/').pop() || 'dashboard';



const userInfo = ref({
  name: 'Ergon Admin',
  email: 'test@test.com',
  avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
});

const drawer = ref(false);

import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>