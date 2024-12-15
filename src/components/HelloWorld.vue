<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4 logo"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">
          Welcome to
        </div>

        <h1 class="text-h2 font-weight-bold">
          Vuetify
        </h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="outlined"
          >
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">
                Get started
              </h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Replace this page by removing <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in <v-kbd>pages/index.vue</v-kbd>.
              </div>
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/"
            prepend-icon="mdi-text-box-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Learn about all things Vuetify in our documentation."
            target="_blank"
            title="Documentation"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            prepend-icon="mdi-star-circle-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Explore available framework Features."
            target="_blank"
            title="Features"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/components/all"
            prepend-icon="mdi-widgets-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Discover components in the API Explorer."
            target="_blank"
            title="Components"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://discord.vuetifyjs.com"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Connect with Vuetify developers."
            target="_blank"
            title="Community"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
























        <v-col cols="4">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-lock-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Login to the superadmin dashboard, where you can create and manage sub-admins."
            target="_blank"
            title="Admin Login"
            to="/admin/login"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-lock-reset"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Reset the superadmin password. May can use for sub-admins."
            target="_blank"
            title="Admin Password Reset"
            variant="text"
            to="/admin/reset-password"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Admin Dashboard"
            target="_blank"
            title="Admin Dashboard"
            variant="text"
            to="/admin/dashboard"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-login"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Ergon company login page"
            target="_blank"
            title="Company Login"
            variant="text"
            to="/Ergon/login"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-chat"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Ergon company chat page"
            target="_blank"
            title="Company chat"
            variant="text"
            to="/Ergon/chat"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Ergon company profile page"
            target="_blank"
            title="Company account profile"
            variant="text"
            to="/Ergon/profile"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-cog"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Ergon company setting page"
            target="_blank"
            title="Company setting"
            variant="text"
            to="/Ergon/setting"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  //
</script>

<style scoped>
.v-theme--dark .logo {
  filter: invert(1);
}
</style>