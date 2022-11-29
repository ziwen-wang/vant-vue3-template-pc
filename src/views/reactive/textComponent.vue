<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "TextComponents",
  props: {
    msg: {
      type: String,
      default: "hello"
    }
  },
  setup(props) {
    return {
      ...toRefs(props)
    };
  }
});
</script>

<template>
  <div>{{ msg }}</div>
</template>

<style></style>
