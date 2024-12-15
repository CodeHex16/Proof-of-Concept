<template>
  <v-navigation-drawer
    permanent
    rail
    app
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
      nav
    />

    <v-divider />

    <v-list
      v-model="page"
      density="compact"
      nav
      mandatory
      @click:select="onSelect"
    >
      <v-list-item
        prepend-icon="mdi-forum"
        value="chat"
        :to="page!='chat'? 'chat' : undefined"
      />
      <v-list-item
        prepend-icon="mdi-account"
        value="setting"
        :to="page!='setting' ? 'setting' : undefined"
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

import { useRoute } from 'vue-router';
const route = useRoute();

const page = ref('chat');

// Set the current page based on the route.
page.value = route.path.split('/').pop() || 'chat';

const emit = defineEmits(['click:chat', 'click:setting']);
const onSelect = (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => {
  if(value.id == 'chat') emit('click:chat');
  if(value.id == 'setting') emit('click:setting');
};


import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
