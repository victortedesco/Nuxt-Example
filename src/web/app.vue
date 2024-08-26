<template>
  <NuxtRouteAnnouncer />
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Example Title",
  description: "Example Description",
});
</script>
