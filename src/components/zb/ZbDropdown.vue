<template>
  <Menu v-slot="{ open }" as="div" class="relative">
    <MenuButton as="div">
      <UButton v-if="iconName" color="gray" label="" variant="ghost" :icon="iconName" />
      <ZbButton
        v-else
        color="white"
        :label="label"
        trailing-icon="i-heroicons-chevron-down-20-solid"
      />
    </MenuButton>
    <div v-if="open && options.length" class="z-20 w-48 pt-1 absolute" :class="rightAlignedMenuClass">
      <MenuItems>
        <div
          class="relative focus:outline-none overflow-y-auto scroll-py-1 divide-y divide-gray-200 dark:divide-gray-700 ring-1 ring-gray-200 dark:ring-gray-700 rounded shadow-lg bg-white dark:bg-gray-800 bg-white"
        >
          <div class="p-1" role="none">
            <MenuItem
              v-for="(option, index) of options"
              :key="index"
              static
            >
              <button
                class="group flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100"
                @click="onClick(option)"
              >
                {{ option[props.optionsLabel] }}
              </button>
            </MenuItem>
          </div>
        </div>
      </MenuItems>
    </div>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import type { PropType } from 'vue'
import type { DropdownItem } from './types'

const props = defineProps({
  options: {
    type: Array as PropType<DropdownItem[]>,
    default: () => [],
  },
  optionsLabel: {
    type: String,
    default: 'label',
  },
  label: {
    type: String,
    default: 'label',
  },
  iconName: {
    type: String,
    default: '',
  },
  mode: {
    type: String,
    default: 'click',
    validator: (value: string) => {
      return ['click', 'hover'].includes(value)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rightAlignedMenu: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  onClick: [value: object]
}>()

const onClick = (value: DropdownItem) => {
  emit('onClick', value)
}

const rightAlignedMenuClass = computed(() => {
  return props.rightAlignedMenu ? 'right-0 left-auto' : ''
})
</script>
