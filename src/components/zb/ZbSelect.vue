<template>
  <div class="relative">
    <select
      :id="name"
      class="form-select"
      :class="selectClass"
      :name="name"
      :value="modelValue"
      @input="onInput"
      @change="onChange"
    >
      <option v-for="(item, index) in options" :key="index" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <span class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-2.5">
      <span class="i-heroicons-chevron-down-20-solid flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5" aria-hidden="true"></span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { DropdownItem } from './types'
import appConfig from './appConfig'
import { classNames } from './utils'

const props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: '',
  },
  options: {
    type: Array as PropType<DropdownItem[]>,
    default: () => [],
  },
  name: {
    type: String,
    default: null,
  },
  optionsLabel: {
    type: String,
    default: 'label',
  },
  optionsValue: {
    type: String,
    default: 'label',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: () => appConfig.ui.select.default.size,
    validator(value: string) {
      return Object.keys(appConfig.ui.select.size).includes(value)
    },
  },
  color: {
    type: String,
    default: () => appConfig.ui.select.default.color,
    validator(value: string) {
      return [
        ...appConfig.ui.colors,
        ...Object.keys(appConfig.ui.select.color),
      ].includes(value)
    },
  },
  variant: {
    type: String,
    default: () => appConfig.ui.select.default.variant,
    validator(value: string) {
      return [
        ...Object.keys(appConfig.ui.select.variant),
        ...Object.values(appConfig.ui.select.color).flatMap((value) =>
          Object.keys(value),
        ),
      ].includes(value)
    },
  },
})

const ui = computed(() => appConfig.ui.select)
const emit = defineEmits(['update:modelValue', 'change'])

const onInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const selectClass = computed(() => {
  const variant =
    ui.value.color?.[props.color as string]?.[props.variant as string] ||
    ui.value.variant[props.variant]
  return classNames(
    ui.value.base,
    ui.value.bgColor,
    ui.value.rounded,
    ui.value.size[props.size],
    ui.value.padding[props.size],
    variant?.replaceAll('{color}', props.color),
    'pe-9',
  )
})

const onChange = (event: Event) => {
  emit('change', event)
}
</script>
