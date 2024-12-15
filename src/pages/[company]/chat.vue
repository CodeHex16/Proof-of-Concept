<template>
  <CompanyDrawer
    app
    @click:chat="()=>(drawer=!drawer)"
  />

  <v-navigation-drawer
    v-model="drawer"
    app
  >
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

  <v-main 
    class="d-flex flex-column" 
    app
    max-height="100vh"
  >
    <v-virtual-scroll
      ref="scrollRef"
      class="flex-grow-1"
      :items="messages"
    >
      <template #default="{ item, /**index**/ }">
        <div
          v-if="item.user === 'chatbot'"
          class="d-flex justify-start pa-2"
        >
          <v-card
            class="pa-2"
            color="primary"
            max-width="75%"
          >
            <v-card-text>
              {{ item.message }}
              <br>
              <small class="text-caption float-inline-end">{{ new Date(item.timestamp).toLocaleTimeString() }}</small>
            </v-card-text>
          </v-card>
        </div>

        <div
          v-else
          class="d-flex justify-end pa-2"
        >
          <v-card
            class="pa-2"
            color="secondary"
            max-width="75%"
          >
            <v-card-text>
              {{ item.message }}
              <br>
              <small class="text-caption float-inline-end">{{ new Date(item.timestamp).toLocaleTimeString() }}</small>
            </v-card-text>
          </v-card>
        </div>
      </template>
    </v-virtual-scroll>
    <v-container class="position-sticky bottom-0 flex-shrink-0 flex-grow-0">
      <v-sheet
        rounded="xl"
      >
        <v-text-field
          v-model="input"
          class="mb-4 "
          hide-details
          rounded="xl"
          variant="outlined"
          density="comfortable"
          single-line
          append-inner-icon="mdi-send"
          @click:append-inner="sendMessage"
          @keydown.enter="sendMessage"
        />
      </v-sheet>
    </v-container>
  </v-main>
</template>
<script lang="ts" setup>
definePage({
  meta: {
    title: 'Chat',
    description: 'The page for users to chat with our company.',
    requiresAuth: true,
    adminOnly: false,
  },
});
import { ref, onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
import Logo from '@/assets/logo_icon.png';
import generateChatMessages from './demo';

const companies = ref([
  { name: 'Ergon', users: 10 },
  { name: 'Test', users: 20 },
]);

if (!companies.value.find((company) => company.name === route.params.company)) {
  router.push('/404');
}

const input = ref('');
const scrollRef = ref();
const messages = ref<{ id: number; user: string; message: string; timestamp: number; }[]>([]);

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
const users = ['chatbot', 'user'];


// Initialize with 15 messages
for (let i = 0; i < 15; i++) {
  messages.value.push({
    id: i,
    user: users[random(0, 1)],
    message: generateChatMessages(),
    timestamp: (messages.value[messages.value.length - 1]?.timestamp ?? Date.now() - 10000) + random(1000, 10000),
  });
}

onMounted(() => {
  scrollRef.value.scrollToIndex(messages.value.length - 1);
});


const sendMessage = () => {
  messages.value.push({
    id: messages.value[messages.value.length - 1]?.id + 1,
    user: users[1],
    message: input.value,
    timestamp: (messages.value[messages.value.length - 1]?.timestamp ?? Date.now() - 10000) + random(1000, 10000)
  });
  input.value = '';

  // scroll after render
  setTimeout(() => {
    scrollRef.value.scrollToIndex(messages.value.length - 1);
  },1000);
};

const drawer = ref(true);
//
</script>

<style scoped>

.v-theme--dark .logo {
  filter: invert(1);
}
.v-virtual-scroll {
  scrollbar-width: thin;
}
.float-inline-end{
  float: inline-end;
}
</style>

