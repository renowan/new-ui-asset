<template>
  <li class="mr-2">
    <a
      :class="classes"
      class="inline-block p-2 border-b-2 rounded-t-lg cursor-pointer"
      @click="onClick" >{{ item?.label }}</a
    >
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object as PropType<{ label: string; index: number } | null>,
    default: () => null,
  },
})

const emit = defineEmits(['onClick'])

const classes = computed(() => {
  return props.isActive ? ['text-primary-600', 'border-primary-600', 'active'] : ['border-transparent', 'hover:text-gray-600', 'hover:border-gray-300', 'dark:hover:text-gray-300']
})

const onClick = () => {
  emit('onClick', props.index)
}
</script>
