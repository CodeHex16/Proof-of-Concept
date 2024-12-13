<template>
  <CompanyDrawer />
  Profile page
</template>
<script lang="ts" setup>

definePage({
  meta: {
    title: 'Profile',
    description: 'The page for users to view their profile.',
    requiresAuth: true,
  },
});

</script>