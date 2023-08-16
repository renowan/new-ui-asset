<template>
  <div class="p-6 flex flex-1 flex-col">
    <h1 class="mb-12 text-4xl font-semibold">Button</h1>
    <h3 class="mb-2">通常、アイコン付き</h3>
    <div class="flex mb-4">
      <ZbButton class="mr-1" color="primary" variant="solid">primary</ZbButton>
      <ZbButton class="mr-1" color="gray" variant="solid">gray</ZbButton>
      <ZbButton class="mr-1" color="gray" variant="link">gray link</ZbButton>
      <ZbButton class="mr-1" color="white" variant="solid" size="md"
        >md white</ZbButton
      >
      <ZbButton
        icon="i-heroicons-pencil-square"
        size="sm"
        color="primary"
        variant="solid"
        :trailing="false"
        class="mr-1"
        >sm Button</ZbButton
      >
      <ZbButton
        icon="i-heroicons-pencil-square"
        size="md"
        color="primary"
        variant="solid"
        :trailing="false"
        class="mr-1"
        >md Button</ZbButton
      >
      <ZbButton
        icon="i-heroicons-pencil-square"
        size="md"
        color="primary"
        variant="solid"
        :trailing="false"
        class="mr-1"
        >md ZbButton</ZbButton
      >
    </div>

    <div class="mb-4">
      <h3>Size</h3>
      <ZbButton class="mr-1" color="gray" variant="solid" size="xs"
        >gray xs</ZbButton
      >
      <ZbButton class="mr-1" color="gray" variant="solid" size="sm"
        >gray sm</ZbButton
      >
      <ZbButton class="mr-1" color="gray" variant="solid" size="md"
        >gray md</ZbButton
      >
      <ZbButton class="mr-1" color="gray" variant="solid" size="lg"
        >gray lg</ZbButton
      >
    </div>

    <div class="mb-4">
      <h3 class="mb-1">Block</h3>
      <div class="grid grid-cols-3 gap-3 mb-4">
        <ZbButton class="mr-1" color="primary" variant="solid" :block="true"
          >Button 1</ZbButton
        >
        <ZbButton class="mr-1" color="primary" variant="solid" :block="true"
          >Button 2</ZbButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const tabIndex = ref(0)
const tabsOptions = [
  { label: 'tab1', index: 0 },
  { label: 'tab2', index: 1 },
  { label: 'tab3', index: 2 },
  { label: 'tab4', index: 3 },
]
</script>
