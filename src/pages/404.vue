<template>
  <v-main>
    <v-container class="fill-height">
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="4"
        >
          <v-card class="text-center py-6">
            <v-card-text>
              <v-icon
                size="80"
                color="grey"
                class="my-4"
              >
                mdi-alert-circle-outline
              </v-icon>
              <p class="text-h4">
                404
              </p>
              <p class="text-h6 mb-4">
                Page not found.
              </p>
              <v-btn
                color="primary"
                to="/"
              >
                <v-icon left>
                  mdi-home
                </v-icon>Go Home
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>
