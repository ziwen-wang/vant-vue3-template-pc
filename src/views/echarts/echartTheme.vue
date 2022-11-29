<script setup lang="ts">
import { reactive } from "vue";
import EchartsComponent from "@/components/echartsComponent.vue";
import { ECOption } from "@/types/interface";

const lightOptions = reactive({
  title: {
    text: "主题Demo"
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
} as ECOption);

setTimeout(() => {
  lightOptions.series = {
    name: "销量",
    type: "bar",
    data: [0, 0, 1, 10, 20, 30]
  };
  console.log(lightOptions);
}, 1000);
</script>

<template>
  <div class="container">
    <!-- 亮色主题 -->
    <EchartsComponent :id="'lightTheme'" :options="lightOptions" class="echarts-demo light-theme"> </EchartsComponent>
    <!-- 黑暗主题 -->
    <EchartsComponent
      :id="'darkTheme'"
      :options="lightOptions"
      :theme="'dark'"
      class="echarts-demo light-theme"
    ></EchartsComponent>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
}
.echarts-demo {
  height: 300px;
  width: 40%;
  margin: 20px;
}
</style>
