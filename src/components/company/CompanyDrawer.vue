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

 
  <v-app-bar
    density="compact"
    app
  >
    <template #prepend>
      <v-avatar
        rounded="0"
        size="50"
      >
        <!-- Get company name from url -->
        <v-img
          class="logo"
          :src="Logo"
          :cover="false"
        />
      </v-avatar>
    </template>
    <v-app-bar-title>{{ route.params.company }}</v-app-bar-title>
    <template #append>
      <v-btn icon="mdi-dots-vertical" />
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import Logo from '@/assets/logo_icon.png';
import { useRoute } from 'vue-router';
const route = useRoute();

const page = ref('chat');

// Set the current page based on the route.
page.value = route.path.split('/').pop() || 'chat';

const emit = defineEmits(['click:chat', 'click:setting', 'test']);
const onSelect = (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => {
  if(value.id == 'chat') emit('click:chat', value);
  if(value.id == 'setting') emit('click:setting');
};


</script>
<style scoped>

.v-theme--dark .logo {
  filter: invert(1);
}
</style>