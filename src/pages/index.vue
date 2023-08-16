<template>
  <div class="p-6 flex flex-1 flex-col main-img">
    <div class="text-center h-96 flex flex-col justify-center items-center">
      <h1
        class="text-4xl font-extrabold tracking-tight font-display sm:text-5xl md:text-6xl xl:text-7xl mb-4"
      >
        <span class="block text-green-500 xl:inline mb-2"
          >ZeroBoard WebApp</span
        >
        <span cl class="block text-gray-600">UIデザインベース案</span>
      </h1>
      <div class="text-2xl text-gray-400">
        <UIcon class="mr-2" name="i-heroicons-light-bulb" />
        <UIcon class="mr-2" name="i-heroicons-pencil-square" />
        <UIcon class="mr-2" name="i-heroicons-arrow-path-20-solid" />
        <UIcon class="mr-2" name="i-heroicons-phone" />
        <UIcon class="mr-2" name="i-heroicons-server-solid" />
        <UIcon class="mr-2" name="i-heroicons-sparkles-solid" />
        <UIcon class="mr-2" name="i-heroicons-ticket" />
        <UIcon class="mr-2" name="i-heroicons-trash" />
        <UIcon class="mr-2" name="i-heroicons-tv" />
        <UIcon class="mr-2" name="i-heroicons-user" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.main-img {
  background-image: url('/asset/img/undraw_experience_design_re_dmqq.svg');
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: 53% 360px;
}
</style>
