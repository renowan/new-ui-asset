<template>
  <div class="p-6 flex flex-1 flex-col">
    <h1 class="mb-12 text-4xl font-semibold">Tabs</h1>
    <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput From normal</label>
        <ZbInput
          v-model="textValue"
          placeholder="placeholder"
          :autofocus="true"
        />
      </div>
      <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput 単位付き</label>
        <ZbInput v-model="textValue" placeholder="placeholder" unit="CO2" />
      </div>
      <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput From disabled</label>
        <ZbInput
          v-model="textValue"
          placeholder="placeholder"
          :disabled="true"
        />
      </div>
      <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput From search icon</label>
        <ZbInput
          v-model="textValue"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="placeholder"
        />
      </div>
      <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput From search success。基本使うことはない。</label>
        <ZbInput v-model="textValue" color="green" placeholder="placeholder" />
      </div>
      <div class="mb-4">
        <label class="text-gray-600 text-sm">ZbInput From search error。バリデーションエラー。</label>
        <ZbInput v-model="textValue" color="red" placeholder="placeholder" />
      </div>

  </div>
</template>

<script setup>

</script>
