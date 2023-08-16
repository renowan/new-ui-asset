<template>
  <div
    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
  >
    <ul class="flex flex-wrap -mb-px">
      <ZbTab
        v-for="(item, index) of options"
        :key="item.label"
        :item="item"
        :index="index"
        :is-active="index === modelValue"
        @on-click="onTabClick"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // value: {
  //   type: [String, Number, Boolean],
  //   default: null,
  // },
  modelValue: {
    type: Number,
    default: 0,
  },
  options: {
    type: Array as PropType<{ label: string; index: number }[]>,
    default: () => [],
  },
  id: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  help: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue', 'change'])
const onTabClick = (index: number) => {
  emit('update:modelValue', index)
  emit('change', index)
}
</script>
