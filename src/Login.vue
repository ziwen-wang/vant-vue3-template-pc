<script setup lang="ts">
import api from "@/api";
api.user.login({
  userName: "Elvis",
  password: "123456"
});
</script>

<template>
  <div>login</div>
</template>

<style></style>
