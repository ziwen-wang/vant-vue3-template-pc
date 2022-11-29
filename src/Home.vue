<script setup lang="ts">
import { useUserStore } from '@/store/modues/user'
import { userApi } from '@/api'
const user = useUserStore()
userApi.getMenu()
</script>

<template>
  <div>
    home
    <!-- {{ count }} -->
    {{ user.userName }}
    <hello-world></hello-world>
    <svg-icon name="logo"></svg-icon>
  </div>
</template>

<style></style>
