<template>
  <div class="text-sm" :class="wrapperClass">
    <!-- <ZbRadio v-for="method of options" :key="method.label" v-model="pick" :label="method.label" v-bind="$attrs" /> -->
    <template v-for="item of options" :key="item.label">

        <div class="flex items-center" :class="innerClass">
          <input :id="name" :value="item.value" v-model="pick" :name="name" :disabled="disabled" :class="inputClass" type="radio" class="form-radio" >
          <label :for="`${name}-${item.value}`">
            {{item.label}}
          </label>
        </div>

    </template>
  </div>
</template>

<script setup lang="ts">
import appConfig from './appConfig'
import { classNames } from './utils'

const props = defineProps({
  // value: {
  //   type: [String, Number, Boolean],
  //   default: null,
  // },
  modelValue: {
    type: [String, Number, Boolean, Object],
    default: null,
  },
  options: {
    type: Array as PropType<{ label: string; value: string | number }[]>,
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
  label: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  layout: {
    type: String,
    default: 'vertical', // vertical horizontal
  },
  color: {
      type: String,
      default: () => appConfig.ui.radio.default.color,
      validator (value: string) {
        return appConfig.ui.colors.includes(value)
      }
    },
})


const emit = defineEmits(['update:modelValue', 'change'])
const ui = computed(() => appConfig.ui.radio)

const wrapperClass = computed(() => {
      return props.layout === 'vertical' ? '' : 'flex'
    })

const innerClass = computed(() => {
      return props.layout === 'vertical' ? '' : 'mr-4'
    })

const inputClass = computed(() => {
      return classNames(
        ui.value.base,
        ui.value.background,
        ui.value.border,
        ui.value.ring.replaceAll('{color}', props.color),
        ui.value.color.replaceAll('{color}', props.color),
        'mr-1'
      )
    })

const pick = computed({
      get () {
        return props.modelValue
      },
      set (value) {
        console.log('emit')
        emit('update:modelValue', value)
      }
    })


</script>
