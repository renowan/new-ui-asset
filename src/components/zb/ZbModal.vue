<template>
  <ZbModalBase
    :model-value="modelValue"
    :prevent-close="preventClose"
    :transition="false"
    @close="onClose"
  >
    <ZbCard
      :ui="{
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: { padding: bodyClass },
        header: { padding: 'p-3' },
        footer: { padding: 'p-3' },
      }"
      :body-class="bodyClass"
    >
      <template #header>
        <h4 class="text-gray-600 text-lg font-medium">{{ title }}</h4>
      </template>

      <slot />

      <template #footer>
        <div class="text-right">
          <ZbButton
            v-if="showCancel"
            class="mr-1"
            color="gray"
            variant="ghost"
            @click="onClose"
            >{{ cancelLabel }}</ZbButton
          >
          <UButton v-if="showOk" color="green" variant="solid">{{ okLabel }}</UButton>
        </div>
      </template>
    </ZbCard>
  </ZbModalBase>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String, default: 'タイトル' },

  modelValue: { type: Boolean, default: false },
  preventClose: { type: Boolean, default: false },
  bodyClass: { type: String, default: 'p-3' },
  showOk: { type: Boolean, default: true },
  showCancel: { type: Boolean, default: true },
  okLabel: { type: String, default: '決定' },
  cancelLabel: { type: String, default: 'キャンセル' },
})

const emit = defineEmits(['update:modelValue', 'onClose'])

const onClose = () => {
  emit('update:modelValue', false)
  emit('onClose')
}
</script>
