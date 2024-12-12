<template>
  <v-navigation-drawer
    expand-on-hover
    rail
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
      density="compact"
      nav
    >
      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        value="home"
        to="/admin/dashboard"
      />
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Accounts"
        value="accounts"
        to="/admin/dashboard/accounts"
      />
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const userInfo = ref({
  name: 'Ergon Admin',
  email: 'test@test.com',
  avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
});


</script>