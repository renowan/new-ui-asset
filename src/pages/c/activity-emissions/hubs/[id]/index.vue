<template>
  <div class="flex flex-1 flex-col overflow-auto">
    <div class="px-6 pt-6 mb-6">
      <div class="flex mb-2">
        <h1 class="flex-1 text-2xl font-semibold text-green-500">
          GHG排出登録
        </h1>
        <div class="flex items-center">
          <span class="text-sm mr-1">対象年月</span>
          <div class="mr-1">
            <ZbSelect
              v-model="selectedYear"
              :options="yearOptions"
              option-attribute="label"
            />
          </div>
          <ZbSelect
            v-model="selectedMonth"
            :options="monthOptions"
            option-attribute="label"
          />
        </div>
      </div>
      <div class="text-sm mb-4">
        /
        <NuxtLink
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-normal rounded text-sm gap-x-1.5 px-2.5 py-1.5 text-primary-500 hover:text-primary-600 disabled:text-primary-500 dark:text-primary-400 dark:hover:text-primary-500 dark:disabled:text-primary-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          to="/c/activity-emissions/hubs"
        >
          拠点一覧
        </NuxtLink>
        / 拠点名hoge
      </div>
      <h3 class="text-gray-400 font-semibold mb-2">フィルター</h3>
      <div class="grid grid-cols-6 gap-3">
        <div class="col-span-2">
          <label class="text-sm text-gray-600 block mb-1">Scope-Category</label>
          <ZbSelectDisplay :model-value="scopeCategoryValue" @click="onCSelectCategory" @on-clear="scopeCategoryValue = []" />
        </div>
        <div class="col-span-2">
          <label class="text-sm text-gray-600 block mb-1">GHG</label>
          <ZbSelect v-model="selected" :options="people" />
        </div>
        <div class="col-span-2">
          <label class="text-sm text-gray-600 block mb-1">算定対象の活動</label>
          <ZbSelect v-model="selected" :options="people" />
        </div>
        <div class="col-span-3">
          <label class="text-sm text-gray-600 block mb-1">ラベル</label>
          <ZbInput
            v-model="textValue"
            placeholder="placeholder"
            :autofocus="true"
          />
        </div>
        <div class="col-span-3">
          <label class="text-sm text-gray-600 block mb-1">タグ</label>
          <ZbInput v-model="textValue" placeholder="placeholder" />
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-gray-50 p-2 border-gray-300 border-y">
      <div class="grid md:grid-cols-2 gap-3">
        <div>
          <ZbButton class="mr-1" color="gray" variant="solid"
            >入力項目追加</ZbButton
          >
          <ZbButton class="mr-1" color="gray" variant="solid"
            >一覧から新規追加</ZbButton
          >
        </div>
        <div class="md:text-right">
          <UButtonGroup size="sm" class="mr-1">
            <UButton label="マーケット" color="green" />
            <UButton label="ロケーション" color="white" />
          </UButtonGroup>
          <UButtonGroup size="sm">
            <UButton label="tCO2" color="green" />
            <UButton label="kgCO2" color="white" />
          </UButtonGroup>
        </div>
      </div>
    </div>

    <div class="flex flex-col bg-gray-50 px-3 py-2 border-gray-300 border-b">
      <div class="flex items-center">
        <span class="text-sm mr-2">0個のアイテムを選択中</span>
        <ZbButton class="mr-1" color="gray" variant="solid" size="xs"
          >コピー</ZbButton
        >
        <ZbButton class="mr-1" color="red" variant="solid" size="xs"
          >削除</ZbButton
        >
      </div>
    </div>

    <div class="flex flex-1 flex-col overflow-auto">
      <ActivityTable />
    </div>
    <div class="p-3 flex justify-end items-center">
      <span class="text-sm mr-1">全件: 443</span>
      <ZbPagination v-model="paginationValue" :page-count="10" :total="44" />
    </div>

    <ScopeCategoryModal
      :show-modal="showCategoryModal"
      :scope-category-value="scopeCategoryValue"
      :show-ok="false"
      cancel-label="閉じる"
      @on-close="showCategoryModal = false"
      @on-remove-item="onRemoveItem"
      @on-check="onCheckScopeCategoryItem"
    />
  </div>
</template>

<script setup lang="ts">
import ActivityTable from '@/components/pages/activity-emissions/hubs/ActivityTable.vue'
import ScopeCategoryModal from '@/components/pages/activity-emissions/hubs/ScopeCategoryModal.vue'

type SelectOption = {
  label: string
  value: number
}

const scopeCategoryValue = ref<SelectOption[]>([])

const yearOptions = [
  { label: '2020', value: '2020' },
  { label: '2021', value: '2021' },
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
]
const monthOptions = [
  { label: '1月', value: '01' },
  { label: '2月', value: '02' },
  { label: '3月', value: '03' },
  { label: '4月', value: '04' },
]

const selectedYear = ref(yearOptions[0].value)
const selectedMonth = ref(monthOptions[0].value)

const people = [
  { label: 'Wade Cooper', value: 1001 },
  { label: 'Arlene Mccoy', value: 1002 },
  { label: 'Devon Webb', value: 1003 },
  { label: 'Tom Cook', value: 1004 },
  { label: 'Tanya Fox', value: 1005 },
  { label: 'Hellen Schmidt', value: 1006 },
]

const selected = ref(people[0])
const textValue = ref('')
const paginationValue = ref(2)

const showCategoryModal = ref(false)
const onCSelectCategory = () => {
  showCategoryModal.value = true
}

const onCheckScopeCategoryItem = (order: {
  checked: boolean
  item: SelectOption
}) => {
  const { checked, item } = order
  if (checked) {
    scopeCategoryValue.value.push(item)
  } else {
    scopeCategoryValue.value = scopeCategoryValue.value.filter(
      (myItem) => myItem.value !== item.value,
    )
  }
}

const onRemoveItem = (item: SelectOption) => {
  scopeCategoryValue.value = scopeCategoryValue.value.filter(
    (myItem) => myItem.value !== item.value,
  )
}
</script>
