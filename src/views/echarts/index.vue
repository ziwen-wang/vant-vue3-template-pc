<script setup lang="ts">
import { ref } from "vue";
import echartThemeVue from "./echartTheme.vue";
import ringChartsVue from "./ringCharts.vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("theme");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <div>echarts</div>

  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="黑白主题" name="theme" :lazy="true">
      <echart-theme-vue></echart-theme-vue>
    </el-tab-pane>
    <el-tab-pane label="环形图" name="ring" :lazy="true">
      <ring-charts-vue></ring-charts-vue>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped></style>
