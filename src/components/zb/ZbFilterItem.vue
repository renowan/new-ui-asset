<template>
  <span class="flex text-sm text-gray-500 mr-4">{{ item.label }}
    <span
      class="border h-5 w-5 ml-1 rounded flex align-items-center justify-content-center border-gray-200 cursor-pointer"
    >
      <span
        class="relative top-px left-px i-heroicons-x-mark h-4 w-4 text-gray-500"
        aria-hidden="true"
        @click="onClose"
      ></span>
    </span>
  </span>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: { type: Object, required: true },
})

const emit = defineEmits(['on-delete'])

const onClose = () => {
  emit('on-delete', props.item)
}
</script>
