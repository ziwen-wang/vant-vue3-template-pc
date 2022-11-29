<template>
  <div>
    {{ propsValue }}
  </div>
  <el-popover placement="bottom-start" :width="200" trigger="click">
    <template #reference>
      <el-input v-model="state.label" style="width: 240px" readonly placeholder="Please input" />
    </template>
    <el-tree :data="props.treeData" :props="props.defaultProps" @node-click="handleNodeClick" />
  </el-popover>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  treeData: {
    type: Array,
    default: () => []
  },
  defaultProps: {
    type: Object,
    default: () => {
      return {
        children: "children",
        label: "label"
      };
    }
  }
});
const propsValue = computed(() => props.modelValue);
const state = reactive({
  label: ""
});
const emit = defineEmits(["update:modelValue"]);
const handleNodeClick = (data: any) => {
  state.label = data.label;
  emit("update:modelValue", data.id);
};
</script>
