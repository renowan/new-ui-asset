<template>
  <div class="p-6 flex flex-1 flex-col">
    <h1 class="mb-12 text-4xl font-semibold">Tabs</h1>
    <div class="mb-12">
      <div class="mb-6">
        <p class="text-sm text-gray-600 mb-1">通常ドロップダウン</p>
        <ZbDropdown :options="options" @on-click="onClick" />
      </div>
      <div class="mb-6">
        <p class="text-sm text-gray-600 mb-1">label, valueを変える</p>
        <ZbDropdown
          :options="options2"
          options-label="myLabel"
          @on-click="onClick"
        />
      </div>
      <div class="mb-6">
        <p class="text-sm text-gray-600 mb-1">プルダウンを左側に表示する（バグあり）</p>
        <ZbDropdown
          class="mr-1"
          :options="options2"
          options-label="myLabel"
          :right-aligned-menu="true"
          @on-click="onClick"
        />
      </div>
      <div class="mb-6">
        <p class="text-sm text-gray-600 mb-1">アイコンのみのパターン</p>
        <ZbDropdown
          icon-name="i-heroicons-ellipsis-horizontal"
          :options="options"
          :right-aligned-menu="true"
          @on-click="onClick"
        />
      </div>
      <div class="mb-6">
        <p class="text-sm text-gray-600 mb-1">ネイティブSelect。優先的に使う</p>
        <div class="flex">
          <ZbSelect
            v-model="onSelected"
            :options="options"
            class="w-32"
          />
        </div>
      </div>
      <div class="mb-6">
        <p class="text-sm text-gray-600 mb-1">色パターン</p>
        <div class="flex">
          <ZbSelect
            v-model="onSelected"
            :options="options"
            class="w-32 mb-2 mr-2"
            color="red"
          />
          <ZbSelect
            v-model="onSelected"
            :options="options"
            class="w-32 mb-2"
            color="blue"
          />
        </div>
      </div>
      <div class="mb-6">
        <div class="mb-6">
          <p class="text-sm text-gray-600 mb-1">Size</p>
          <div class="flex items-center">
            <ZbSelect
              v-model="onSelected"
              :options="options"
              class="w-32 mr-2"
              size="sm"
            />
            <ZbSelect
              v-model="onSelected"
              :options="options"
              class="w-32 mr-2"
              size="md"
            />
            <ZbSelect
              v-model="onSelected"
              :options="options"
              class="w-32 mr-2"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const options = [
  {
    label: 'Documentation',
    value: 'i-heroicons-book-open',
  },
  {
    label: 'Status',
    value: 'i-heroicons-signal',
  },
  {
    label: 'Documentation',
    value: 'i-heroicons-book-open',
  },
  {
    label: 'Status',
    value: 'i-heroicons-signal',
  },
]

const options2 = [
  {
    myLabel: 'Documentation',
    icon: 'i-heroicons-book-open',
  },
  {
    myLabel: 'Status',
    icon: 'i-heroicons-signal',
  },
  {
    myLabel: 'Documentation',
    icon: 'i-heroicons-book-open',
  },
  {
    myLabel: 'Status',
    icon: 'i-heroicons-signal',
  },
]

const onSelected = ref('')

const onClick = (value) => {
  console.log('dosome', value)
}
</script>
