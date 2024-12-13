<template>
  <CompanyDrawer @test="()=>(drawer=!drawer)" app/>

  <v-navigation-drawer v-model="drawer" app>
    <h2 class="pa-2"> 
      Chats
    </h2>
    <v-list density="compact">
      <v-divider />
      <v-list-subheader>Today</v-list-subheader>
      <v-list-item
        title="Infomation about the product of a very long name"
        value="1234"
      />

      <v-list-item
        title="About the company"
        value="1233"
      />
      <v-divider />
      <v-list-subheader>Yesterday</v-list-subheader>

      <v-list-item
        title="Food or Drink?"
        value="1232"
      />
      <v-divider />
      <v-list-subheader>More 3 days ago</v-list-subheader>
      <v-list-item
        title="Welcome to the chat..."
        value="1231"
      />
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
definePage({
  meta: {
    title: 'Chat',
    description: 'The page for users to chat with our company.',
    requiresAuth: true,
  },
});

import { useRoute,useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const companies = ref([
  { name: 'Ergon', users: 10 },
  { name: 'Test', users: 20 },
]);

if (!companies.value.find((company) => company.name === route.params.company)) {
  router.push('/404');
}

import { ref } from 'vue';
import CompanyDrawer from '@/components/company/CompanyDrawer.vue';

const drawer = ref(true);
//
</script>

