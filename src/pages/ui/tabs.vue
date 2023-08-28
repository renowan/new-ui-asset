<template>
  <div class="p-6 flex flex-1 flex-col">
    <h1 class="mb-12 text-4xl font-semibold">Tabs</h1>
    <div class="mb-10">
      <h3 class="text-2xl mb-1">Tabs</h3>
      <p class="text-sm text-gray-600 mb-4">通常のタブ。最優先に使う。</p>
      <ZbTabs
        v-model="tabIndex"
        :options="tabsOptions"
        @change="onChangeTabs"
      />
      <div class="mt-4 p-3 bg-gray-50">tabIndex: {{ tabIndex }}</div>
    </div>
    <div class="mb-10">
      <h3 class="text-2xl mb-1">TabsPanel</h3>
      <p class="text-sm text-gray-600 mb-4">2〜3個の選択肢、以後の操作が変わる分岐点などで使う。</p>
      <div class="grid gap-2 md:grid-cols-3">
        <div
          class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 p-3"
        >
          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                name="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value=""
                class="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400 form-radio"
              />
            </div>
            <div class="ml-2 text-sm">
              <label
                for="helper-radio"
                class="font-medium text-gray-900 dark:text-gray-300"
                >Scope1 直接排出</label
              >
              <p
                id="helper-radio-text"
                class="text-xs font-normal text-gray-400 dark:text-gray-300"
              >
                選択肢Scope1に対する説明、詳細な違いなどを記述
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 p-3"
        >
          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                name="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value=""
                class="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400 form-radio"
              />
            </div>
            <div class="ml-2 text-sm">
              <label
                for="helper-radio"
                class="font-medium text-gray-900 dark:text-gray-300"
                >Scope2 エネルギー起源の間接排出</label
              >
              <p
                id="helper-radio-text"
                class="text-xs font-normal text-gray-400 dark:text-gray-300"
              >
              選択肢Scope2に対する説明、詳細な違いなどを記述
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 p-3"
        >
          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio"
                name="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value=""
                class="h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 text-primary-500 dark:text-primary-400 form-radio"
              />
            </div>
            <div class="ml-2 text-sm">
              <label
                for="helper-radio"
                class="font-medium text-gray-900 dark:text-gray-300"
                >Scope3 その他の関節排出</label
              >
              <p
                id="helper-radio-text"
                class="text-xs font-normal text-gray-400 dark:text-gray-300"
              >
              選択肢Scope2に対する説明、詳細な違いなどを記述
              </p>
            </div>
          </div>
        </div>
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

const onChangeTabs = (index) => {
  console.log('onChangeTabs', index)
}
</script>
