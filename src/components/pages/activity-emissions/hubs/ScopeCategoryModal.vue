<template>
  <ZbModal
    :model-value="showModal"
    title="Scope-Category選択"
    body-class="p-0"
    @on-close="onClose"
  >
    <div class="flex flex-col">
      <div
        class="flex flex-wrap border-b border-gray-100 px-4 py-2"
      >
        <ZbFilterItem
          v-for="item in scopeCategoryValue"
          :key="item.value"
          :item="item"
          class="mr-4 my-1"
          @on-delete="onRemoveItem"
        />

        <span
          v-if="!scopeCategoryValue.length"
          class="flex-1 text-center text-sm text-gray-600"
          >選択なし</span
        >
      </div>
      <div class="px-4 pt-3 pb-1 text-sm text-gray-500">
        <ZbInput
          v-model="filterText"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="絞り込み検索"
        />
      </div>
      <ul>
        <ScopeCategoryItem
          v-for="(item, index) in filtedList"
          :key="index"
          :item="item"
          :scope-category-value="scopeCategoryValue"
          @on-check="onCheck"
        />
        <!-- <li
          v-for="(item, index) in filtedList"
          :key="index"
          class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"
        >
          <ZbCheckbox :label="item.label" @change="onCheck" />
        </li> -->
        <div
          v-if="!filtedList.length"
          class="p-12 text-gray-400 text-sm text-center"
        >
          該当なし
        </div>
      </ul>
    </div>
  </ZbModal>
</template>

<script setup lang="ts">
import ScopeCategoryItem from './ScopeCategoryItem.vue'

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  scopeCategoryValue: {
    type: Array,
    default: () => [],
  },
  total: {
    type: Number,
    default: 0,
  },
})

const filtedList = computed(() => {
  if (filterText.value === '') {
    return myList
  }
  return myList.filter((item) => {
    return item.label.includes(filterText.value)
  })
})

const myList = [
  { label: 'Scope1', value: 1 },
  { label: 'Scope2', value: 2 },
  { label: 'Scope3 Category1', value: 3 },
  { label: 'Scope3 Category2', value: 4 },
  { label: 'Scope3 Category3', value: 5 },
  { label: 'Scope3 Category4', value: 6 },
  { label: 'Scope3 Category5', value: 7 },
  { label: 'Scope3 Category6', value: 8 },
  { label: 'Scope3 Category7', value: 9 },
]

const emit = defineEmits(['update:showModal', 'onClose', 'onCheck', 'onRemoveItem'])

const filterText = ref('')

const onClose = () => {
  emit('update:showModal', false)
  emit('onClose')
}

const onCheck = (order: {
  checked: boolean
  item: { label: string; value: number }
}) => {
  emit('onCheck', order)
}

const onRemoveItem = (item) => {
  emit('onRemoveItem', item)
}
</script>
