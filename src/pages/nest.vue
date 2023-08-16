<template>
  <div class="flex-col p-6">
    <div>this is nest index page</div>
    <NuxtPage />
  </div>
</template>

<script>

export default {
  setup() {
    console.log('nest parent page setup')
    return {
    }
  }
}
</script>