<template>
  <div>
    <tree-select v-model="state.select" :tree-data="state.treeData" :default-props="state.defaultProps"></tree-select>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}
const state = reactive({
  select: "123",
  treeData: [
    {
      id: 1,
      label: "Level one 1",
      children: [
        {
          id: 11,
          label: "Level two 1-1",
          children: [
            {
              label: "Level three 1-1-1"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "Level one 2",
      children: [
        {
          id: 21,
          label: "Level two 2-1"
        },
        {
          id: 22,
          label: "Level two 2-2",
          children: [
            {
              id: 23,
              label: "Level three 2-2-1"
            }
          ]
        }
      ]
    }
  ] as Tree[],
  defaultProps: {
    id: "id",
    children: "children",
    label: "label"
  }
});
</script>

<style scoped></style>
