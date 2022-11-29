<script setup lang="ts">
import { reactive } from "vue";
import EchartsComponent from "@/components/echartsComponent.vue";
import { ECOption } from "@/types/interface";
import * as echarts from "echarts";

const chartData = {
  total: 100,
  value: 77
};
const total = chartData.total;
const value = [chartData.value];
const color = "rgba(149, 212, 117)";
const bgColor = "rgba(149, 212, 117,.1)";

const lightOptions = reactive({
  angleAxis: {
    max: total,
    clockwise: true, // 逆时针
    // 隐藏刻度线
    show: false
  },
  radiusAxis: {
    type: "category",
    show: true,
    axisLabel: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  polar: {
    center: ["50%", "50%"],
    radius: "100%" //图形大小
  },
  series: [
    {
      stack: "round",
      type: "bar",
      data: value,
      showBackground: false,
      coordinateSystem: "polar",
      roundCap: true,
      barWidth: 15,
      silent: true,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: bgColor
            },
            {
              offset: 1,
              color: color
            }
          ])
        }
      }
    },
    {
      stack: "round",
      type: "bar",
      data: [0.01],
      showBackground: false,
      backgroundStyle: {
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowBlur: 10,
        shadowOffsetY: 2
      },
      coordinateSystem: "polar",
      roundCap: true,
      barWidth: 15,
      itemStyle: {
        color: color,
        borderColor: color,
        borderWidth: 5
      }
    }
  ]
} as ECOption);
</script>

<template>
  <div class="container">
    <!-- 亮色主题 -->
    <EchartsComponent :id="'lightRing'" :options="lightOptions" class="echarts-demo light-theme"> </EchartsComponent>
    <!-- 黑暗主题 -->
    <EchartsComponent
      :id="'darkRing'"
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
