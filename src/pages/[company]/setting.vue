<template>
  <CompanyDrawer />

  <v-list lines="three">
    <v-list-subheader>User Controls</v-list-subheader>
    <v-list-item
      v-for="item in userControls"
      :key="item.title"
      :subtitle="item.subtitle"
      :title="item.title"
    />
  </v-list>

  <v-divider />

  <v-list
    v-model:selected="settingsSelection"
    lines="three"
    select-strategy="leaf"
  >
    <v-list-subheader>General</v-list-subheader>
    <v-list-item
      v-for="item in settingsItems"
      :key="item.value"
      :subtitle="item.subtitle"
      :title="item.title"
      :value="item.value"
    >
      <template #prepend="{ isSelected }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="isSelected" />
        </v-list-item-action>
      </template>
    </v-list-item>
  </v-list>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

definePage({
  meta: {
    title: 'Company Setting',
    description: 'The page for users to set up their company.',
    requiresAuth: true,
    adminOnly: true,
  },
});


const userControls =reactive([
        { title: 'Content filtering', subtitle: 'Set the content filtering level to restrict appts that can be downloaded' },
        { title: 'Password', subtitle: 'Require password for purchase or use password to restrict purchase' },
      ])

const settingsItems = reactive([
        { value: 'notifications', title: 'Notifications', subtitle: 'Notify me about updates to apps or games that I downloaded' },
        { value: 'sound', title: 'Sound', subtitle: 'Auto-update apps at any time. Data charges may apply' },
        { value: 'widgets', title: 'Auto-add widgets', subtitle: 'Automatically add home screen widgets when downloads complete' },
      ])

      const settingsSelection =reactive([])
</script>