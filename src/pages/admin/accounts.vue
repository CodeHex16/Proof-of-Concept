<template>
  <NavigationDrawer />
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <div class="d-flex justify-space-between">
              <span>Account</span>
              <v-btn
                color="primary"
                @click="addAccount"
              >
                Add Account
              </v-btn>
            </div>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :items="datatableitems"
              :search="search"
            >
              <template #top>
                <div class="d-flex justify-space-between">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    variant="outlined"
                    density="compact"
                    single-line
                    hide-details
                    max-width="300"
                  />
                </div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


definePage({
  meta: {
    title: 'Dashboard',
    description: 'The page for administrators to manage the system.',
    requiresAuth: true,
    authLevel: 'admin',
  },
});

const search = ref('');


const datatableitems = ref([
  { name: 'Company 1', status: 'Active', users: 10, test: 'test' },
  { name: 'Company 2', status: 'Active', users: 20, test: 'test' },
  { name: 'Company 3', status: 'Active', users: 30, test: 'test' },
  { name: 'Company 4', status: 'Active', users: 40, test: 'test' },
  { name: 'Company 5', status: 'Active', users: 50, test: 'test' },
  { name: 'Company 6', status: 'Active', users: 60, test: 'test' },
  { name: 'Company 7', status: 'Active', users: 70, test: 'test' },
  { name: 'Company 8', status: 'Active', users: 80, test: 'test' },
  { name: 'Company 9', status: 'Active', users: 90, test: 'test' },
  { name: 'Company 10', status: 'Active', users: 100, test: 'test' },
]);

const addAccount = () => {
  // TODO: Add Account
  console.log('Add Account');
};
</script>