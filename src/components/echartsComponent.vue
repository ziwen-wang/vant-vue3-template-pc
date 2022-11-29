<template>
  <div :id="id" class="echart-div"></div>
</template>

<!-- <script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref, toRefs, watch } from "vue";
import * as echarts from "echarts";
import { ECOption } from "@/types/interface";
export default defineComponent({
  props: {
    id: {
      type: String,
      default: "echartDiv"
    },
    options: {
      type: Object as PropType<ECOption>,
      default: Function
    },
    theme: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const { options, id, theme } = toRefs(props);
    let chartDom: echarts.EChartsType | null = null;
    const handleOptionsChange = () => {
      if (chartDom != null) {
        chartDom.setOption({ ...options.value });
      }
    };
    const handleChartResize = () => {
      if (chartDom != null) {
        chartDom.resize();
      }
    };

    onMounted(() => {
      chartDom = echarts.init(document.getElementById(id.value)!, theme.value);
      chartDom.setOption({ ...options.value });
      window.addEventListener("resize", () => {
        handleChartResize();
      });
    });
    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        handleChartResize();
      });
    });
    watch(
      () => options.value,
      () => {
        console.log(clientWidth.value, clientHeight.value);
        handleOptionsChange();
      },
      { deep: true }
    );
    return {};
  }
});
</script> -->

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, PropType, watch } from "vue";
import * as echarts from "echarts";
import { ECOption } from "@/types/interface";

const props = defineProps({
  id: {
    type: String,
    default: "echartDiv"
  },
  options: {
    type: Object as PropType<ECOption>,
    default: Function
  },
  theme: {
    type: String,
    default: ""
  }
});

let chartDom: echarts.EChartsType | null = null;
const handleOptionsChange = () => {
  if (chartDom != null) {
    chartDom.setOption({ ...props.options });
  }
};
const handleChartResize = () => {
  if (chartDom != null) {
    chartDom.resize();
  }
};

onMounted(() => {
  chartDom = echarts.init(document.getElementById(props.id)!, props.theme);
  chartDom.setOption({ ...props.options });
  window.addEventListener("resize", () => {
    handleChartResize();
  });
});
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    handleChartResize();
  });
});

watch(
  () => props.options,
  () => {
    handleOptionsChange();
  },
  { deep: true }
);
</script>

<style scoped>
.echart-div {
  width: 100%;
  height: 100%;
}
</style>
