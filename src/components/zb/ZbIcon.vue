<template>
  <span :class="name" />
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '',
  }
})
</script>
