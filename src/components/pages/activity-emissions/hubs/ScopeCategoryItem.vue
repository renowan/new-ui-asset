<template>
  <li
    class="flex items-center border-b border-gray-100 px-4 py-2 text-sm text-gray-500"
  >
    <ZbCheckbox :label="item.label" :model-value="isChecked" @change="onCheck" />
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object as PropType<{ label: string; value: number }>,
    required: true,
  },
  scopeCategoryValue: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['onCheck'])

const isChecked = computed(() => {
  return props.scopeCategoryValue.some((item) => {
    return item.value === props.item.value
  })
})

const onCheck = (e) => {
  emit('onCheck', { checked: e.target.checked, item: props.item })
}
</script>
