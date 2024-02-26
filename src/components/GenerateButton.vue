<script lang="ts">
import { defineComponent } from 'vue';
import { useRgbStore } from "@/stores/useRgb.ts"

export default defineComponent({
  data() {
    return {
      colors: {
        // hex: `#${hex[0]}${hex[1]}${hex[2]}`,
        // rgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
      }
    }
  }
})
</script>

<template>
  <button>clica</button>
</template>

<style scoped>
button {
  height: 5em;
  width: 100%;
}
</style>