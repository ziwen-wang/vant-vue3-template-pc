<template>
  <div class="container">
    <QRcode v-for="item in qrcodeList" ref="qrcode" :key="item.id" :qr-url="item.label" :qr-text="item.label" />
    <el-button @click="downloadAll">downlaod</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const qrcode = ref()
const qrcodeList = reactive([
  { id: 1, label: '山卡拉OK' },
  { id: 2, label: '伍六七' },
  { id: 3, label: '梅小姐' },
  { id: 4, label: '鸡大保' },
  { id: 5, label: '小飞鸡' }
])

const downloadAll = () => {
  qrcode.value.map((item: any) => {
    item.savePic()
  })
}
</script>

<style lang="scss" scoped></style>
