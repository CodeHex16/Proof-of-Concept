<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const getSystemTheme = () => {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return dark ? 'dark' : 'light'
}
theme.global.name.value = getSystemTheme()

</script>
