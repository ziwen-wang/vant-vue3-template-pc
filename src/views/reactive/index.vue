<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import TextComponent from "./textComponent.vue";

export default defineComponent({
  components: { TextComponent },
  setup() {
    const state = reactive({
      label: "hello"
    });
    setTimeout(() => {
      state.label = "111";
    }, 1000);
    return {
      ...toRefs(state)
    };
  }
});
</script>

<template>
  <div>
    {{ label }}
    <text-component :msg="label"></text-component>
  </div>
</template>

<style></style>
