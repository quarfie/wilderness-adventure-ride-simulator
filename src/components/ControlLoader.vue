<script setup>
import ControlIndicator from './ControlIndicator.vue'
import ControlToggleButton from './ControlToggleButton.vue'
import ControlDualIndicator from './ControlDualIndicator.vue'
import ControlButton from './ControlButton.vue'
import ControlKey from './ControlKey.vue'
import ControlKnockout from './ControlKnockout.vue'

defineProps({
  control: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <ControlIndicator
    v-if="control.type == 'single_indicator'"
    :control="control"
  />
  <ControlToggleButton
    v-if="control.type == 'toggle_button'"
    :control="control"
  />
  <ControlDualIndicator
    v-if="control.type == 'dual_indicator'"
    :control="control"
  />
  <ControlButton v-if="control.type == 'button'" :control="control" />
  <ControlKey v-if="control.type == 'key'" :control="control" />
  <ControlKnockout v-if="control.type == 'knockout'" :control="control" />
</template>
