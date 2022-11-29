<script setup lang="ts"></script>

<template>
  <div>
    premission
    <div v-permission="'add'">有权限</div>
    <div v-permission="false">无权限</div>
  </div>
</template>

<style lang="scss" scoped></style>
