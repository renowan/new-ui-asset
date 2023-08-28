<template>
  <div class="inline-flex -space-x-px rounded shadow-sm">
    <ZbButton
      v-for="(item, index) in options"
      :key="index"
      :label="item.label"
      :class="myClass(index)"
      :rounded-off="true"
      :color="myColor(index)"
      @click="onClick(index)"
    ><i v-if="item.icon" :class="item.icon"></i>{{ item.label }}</ZbButton>
    <!-- <ZbButton label="ロケーション" class="rounded-e" :rounded-off="true" :color="color" /> -->
  </div>
</template>

<script setup lang="ts">
type SelectOption = {
  label: string
  value: string | number
  icon?: string
}
const props = defineProps({
  modelValue: {
    type: [Number, String],
    required: true,
  },
  color: {
    type: String,
    default: 'green',
  },
  size: {
    type: String,
    default: 'sm',
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

const myClass = (index: number) => {
  if (index === 0) {
    return 'rounded-s'
  }
  if (index === props.options.length - 1) {
    return 'rounded-e'
  }
  return ''
}

const myColor = (index: number) => {
  if (props.modelValue === props.options[index].value) {
    return props.color
  }
  return 'gray'
}

const onClick = (index: number)=> {
  const value = props.options[index].value
  emit('update:modelValue', value)
}
</script>
