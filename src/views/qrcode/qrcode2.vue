<template>
  <div class="container">
    <QRcode v-for="item in qrcodeList" ref="qrcode" :key="item.id" :qr-url="item.label" :qr-text="item.label" />
    <el-button @click="downloadAll">downlaod</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      qrcodeList: [
        { id: 1, label: '山卡拉OK' },
        { id: 2, label: '伍六七' },
        { id: 3, label: '梅小姐' },
        { id: 4, label: '鸡大保' },
        { id: 5, label: '小飞鸡' }
      ]
    }
  },
  methods: {
    downloadAll() {
      const refs = this.$refs.qrcode as any[]
      refs.map((item: any) => {
        item.savePic()
      })
    }
  }
})
</script>
