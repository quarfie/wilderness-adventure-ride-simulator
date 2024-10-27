<script setup>
import { defineProps } from 'vue'

defineProps({
  boats: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div>
    <p>PUSH ALL THESE BUTTONS TO PUT ALL THE BOATS IN THE FLUME.</p>

    <div>
      <button
        v-for="(boat, index) in boats"
        :key="index"
        class="px-3 py-1 m-1 bg-blue-600 text-white select-none"
        :class="{ 'bg-blue-800': boat.inService }"
        @click="
          boat.inService = !boat.inService
          /* sim.ui.followElement = boat.elementId */
        "
      >
        {{ index + 1 }}
      </button>
    </div>
    <p>
      Press any button a second time and that boat will be removed from the
      flume when it reaches the maintenance building entrance.
    </p>
  </div>
</template>
