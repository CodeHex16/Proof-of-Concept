<template>
  <v-navigation-drawer
    theme="dark"
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


</script>
