<script setup>
import ControlLoader from './ControlLoader.vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  controls: {
    type: Array,
  },
})

const positions = [
  'matrix(1, 0, 0, 1, 30, 70)',
  'matrix(1, 0, 0, 1, 120, 70)',
  'matrix(1, 0, 0, 1, 210, 70)',
  'matrix(1, 0, 0, 1, 30, 160)',
  'matrix(1, 0, 0, 1, 120, 160)',
  'matrix(1, 0, 0, 1, 210, 160)',
]
</script>

<template>
  <svg
    viewBox="0 0 320 290"
    class="cursor-default select-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      style="stroke: rgb(128, 128, 128); fill: rgb(201, 201, 201)"
      width="320"
      height="290"
      rx="5"
      ry="5"
    />

    <!-- Load Controls -->
    <g
      v-for="(position, index) in positions"
      :key="index"
      :transform="position"
    >
      <ControlLoader v-if="controls[index]" :control="controls[index]" />
    </g>

    <!-- screws -->
    <ellipse
      style="
        stroke: rgb(124, 124, 124);
        fill: rgb(167, 167, 167);
        paint-order: fill;
      "
      cx="16"
      cy="16"
      rx="6"
      ry="6"
    />
    <line
      style="
        fill: rgb(216, 216, 216);
        stroke: rgb(124, 124, 124);
        stroke-width: 2px;
      "
      x1="16"
      y1="10"
      x2="16"
      y2="22"
    />
    <ellipse
      style="
        stroke: rgb(124, 124, 124);
        fill: rgb(167, 167, 167);
        paint-order: fill;
      "
      cx="16"
      cy="274"
      rx="6"
      ry="6"
    />
    <line
      style="
        fill: rgb(216, 216, 216);
        stroke: rgb(124, 124, 124);
        stroke-width: 2px;
        transform-box: fill-box;
        transform-origin: 50% 50%;
      "
      x1="16"
      y1="268"
      x2="16"
      y2="280"
      transform="matrix(0.970966, -0.239217, 0.239217, 0.970966, 0.000002, 0)"
    />
    <ellipse
      style="
        stroke: rgb(124, 124, 124);
        fill: rgb(167, 167, 167);
        paint-order: fill;
      "
      cx="304"
      cy="16"
      rx="6"
      ry="6"
    />
    <line
      style="
        fill: rgb(216, 216, 216);
        stroke: rgb(124, 124, 124);
        stroke-width: 2px;
        transform-box: fill-box;
        transform-origin: 50% 50%;
      "
      x1="304"
      y1="10"
      x2="304"
      y2="22"
      transform="matrix(0.924154, 0.382021, -0.382021, 0.924154, -0.000001, 0.000004)"
    />
    <ellipse
      style="
        stroke: rgb(124, 124, 124);
        fill: rgb(167, 167, 167);
        paint-order: fill;
      "
      cx="304"
      cy="274"
      rx="6"
      ry="6"
    />
    <line
      style="
        fill: rgb(216, 216, 216);
        stroke: rgb(124, 124, 124);
        stroke-width: 2px;
        transform-origin: 304px 274px;
      "
      x1="309.869"
      y1="275.244"
      x2="298.129"
      y2="272.756"
    />
    <rect
      width="100"
      height="25"
      style="stroke: rgb(86, 86, 86)"
      x="109.965"
      y="15"
    />
    <text
      style="
        fill: rgb(229, 229, 229);
        font-family: Arial, sans-serif;
        font-size: 12px;
        text-anchor: middle;
        white-space: pre;
      "
      x="160"
      y="31"
    >
      {{ label }}
    </text>
  </svg>
</template>
