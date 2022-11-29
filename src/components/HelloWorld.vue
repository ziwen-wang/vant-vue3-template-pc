<script setup lang="ts">
import { ref } from 'vue'
const name = 'test'
const value1 = ref('')

// defineProps<{ msg: string }>()

const count = ref(0)

const shortcuts = [
  {
    text: 'Today',
    value: new Date()
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    }
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }
  }
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
</script>

<template>
  <div class="block">
    <span class="demonstration">Default</span>
  </div>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button>中文</el-button>
</template>

<style scoped>
.page-content {
  width: 100%;
  height: 100%;
}
</style>
