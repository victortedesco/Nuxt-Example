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

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    { rel: "icon", type: "image/x-icon", sizes: "any", href: "favicon.ico" },
  ],
});
</script>
