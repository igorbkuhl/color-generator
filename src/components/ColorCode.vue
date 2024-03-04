<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ColorCode",
  props: {
    rgb: String,
  },
  setup(props) {
    const rgb = props.rgb;

    return rgb;
  },
});
</script>

<template>
  <p>{{ rgb }}</p>
</template>

<style scoped>
p {
  text-align: center;
}
</style>
