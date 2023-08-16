<template>
  <div class="relative flex items-center w-full">
    <span class="absolute z-30 left-auto right-14 flex items-center">
      <span
        class="relative self-center i-heroicons-x-mark h-5 w-5 text-gray-400 cursor-pointer"
        aria-hidden="true"
      ></span>
    </span>
    <div
      class="form-input relative flex-1 w-full w-px min-w-0 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 rounded-r-none pr-10"
    >{{ valueText }}<span v-if="!valueText" class="text-gray-400">未選択</span></div>
    <UButton
      color="gray"
      variant="solid"
      :ui="{ base: 'relative ml-[-1px] z-20 rounded-l-none' }"
      @click="onClickBtn"
      >選択</UButton
    >
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emits = defineEmits(['click'])

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
})

const valueText = computed(() => {
  return props.modelValue.map((v) => v.label).join(', ')
})


const onClickBtn = () => {
  emits('click')
}
</script>
