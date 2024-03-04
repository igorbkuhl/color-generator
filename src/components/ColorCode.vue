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
  <p class="bg-slate-800/50 backdrop-blur-sm
  mt-2 p-5 rounded-md text-center"
  >
    {{ rgb }}
  </p>
</template>
