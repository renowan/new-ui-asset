<template>
  <div class="p-6 flex flex-1 flex-col">
    <h1 class="mb-12 text-4xl font-semibold">Button</h1>

    <h3 class="mb-2">通常</h3>
    <div class="mb-4">
      <ZbButton class="mr-1" color="primary">primary</ZbButton>
      <ZbButton class="mr-1" color="purple">purple</ZbButton>
      <ZbButton class="mr-1" color="orange">orange</ZbButton>
      <ZbButton class="mr-1" color="red">red</ZbButton>
      <ZbButton class="mr-1" color="white">white</ZbButton>
      <ZbButton class="mr-1" color="gray">gray</ZbButton>
      <ZbButton class="mr-1" color="blue">blue</ZbButton>
      <ZbButton class="mr-1" color="lime">lime</ZbButton>
      <ZbButton class="mr-1" color="yellow">yellow</ZbButton>
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

    <h3 class="mb-2">アイコン付き</h3>
    <div class="flex- mb-4">
      <p class="text-sm">sm, icon</p>
      <div class="flex mb-2">
        <ZbButton class="mr-1" color="primary">primary</ZbButton>
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
          size="sm"
          color="primary"
          variant="solid"
          loading
          :trailing="false"
          class="mr-1"
          >sm Button</ZbButton
        >
      </div>
      <p class="text-sm">md, icon</p>
      <div class="flex mb-2">
        <ZbButton class="mr-1" color="primary" size="md">primary</ZbButton>
        <ZbButton
          icon="i-heroicons-pencil-square"
          size="md"
          color="primary"
          variant="solid"
          :trailing="false"
          class="mr-1"
          >md Button</ZbButton
        >
      </div>
      <p class="text-sm">mix size, icon</p>
      <div class="mb-2">
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
          size="lg"
          color="primary"
          variant="solid"
          :trailing="false"
          class="mr-1"
          >md ZbButton</ZbButton
        >
      </div>
      <p class="text-sm">簡易icon、font awesome使用</p>
      <ZbButton class="mr-1" color="primary"><i class="icon-pencil"></i>primary</ZbButton>
      <ZbButton class="mr-1" color="primary"><i class="icon-comment"></i>comment</ZbButton>
      <ZbButton class="mr-1" color="primary"><i class="icon-plus"></i>plus</ZbButton>
      <ZbButton class="mr-1" color="primary"><i class="icon-spin3 animate-spin"></i>spin3</ZbButton>
    </div>

    <h3 class="mb-2">カラーテスト</h3>
    <div class="flex mb-4">
      <div class="w-3 h-3 bg-gray-500 mr-2"></div>
      <div class="w-3 h-3 bg-danger mr-2"></div>
      <div class="w-3 h-3 bg-purple-500 mr-2"></div>
      <div class="w-3 h-3 bg-purple-600 mr-2"></div>
      <div class="w-3 h-3 bg-orange-500 mr-2"></div>
      <div class="w-3 h-3 bg-orange-600 mr-2"></div>
      <div class="w-3 h-3 bg-red-500 mr-2"></div>
      <div class="w-3 h-3 bg-red-600 mr-2"></div>
      <div class="w-3 h-3 bg-blue-500 mr-2"></div>
      <div class="w-3 h-3 bg-blue-600 mr-2"></div>
      <div class="w-3 h-3 bg-lime-500 mr-2"></div>
      <div class="w-3 h-3 bg-lime-600 mr-2"></div>
      <div class="w-3 h-3 bg-yellow-500 mr-2"></div>
      <div class="w-3 h-3 ring-red-500 mr-2"></div>
      <div class="w-3 h-3 ring-blue-500 mr-2"></div>
      <div class="w-3 h-3 focus:ring-red-500 mr-2"></div>
      <div class="w-3 h-3 focus:ring-blue-500 mr-2"></div>
      <div class="w-3 h-3 focus-visible:ring-primary-500 mr-2"></div>
      <div class="w-3 h-3 focus-visible:ring-2 mr-2"></div>
    </div>

    <div class="mb-10">
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

    <div class="mb-10">
      <h3 class="mb-1">Group Button. Value: {{buttonGroupValue  }}</h3>
      <div class="x">
        <ZbButtonGroup v-model="buttonGroupValue" :options="buttonGroupOptions" color="green" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const tabIndex = ref(0)
const tabsOptions = [
  { label: 'tab1', index: 0 },
  { label: 'tab2', index: 1 },
  { label: 'tab3', index: 2 },
  { label: 'tab4', index: 3 },
]

const buttonGroupValue = ref('001')

const buttonGroupOptions = [
  { label: 'マーケット', value: '001', icon: 'icon-home' },
  { label: 'ロケーション', value: '002',  icon: 'icon-info-circled' },
  { label: 'アイコンなし', value: '003' },
]
</script>
