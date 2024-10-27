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
  'matrix(1, 0, 0, 1, 140, 70)',
  'matrix(1, 0, 0, 1, 30, 180)',
  'matrix(1, 0, 0, 1, 140, 180)',
]
</script>

<template>
  <svg
    viewBox="0 0 250 290"
    xmlns="http://www.w3.org/2000/svg"
    class="select-none cursor-default"
  >
    <rect
      style="stroke: rgb(128, 128, 128); fill: rgb(201, 201, 201)"
      width="250"
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
      cx="234"
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
      x1="234"
      y1="10"
      x2="234"
      y2="22"
      transform="matrix(0.924154, 0.382021, -0.382021, 0.924154, 0, 0)"
    />
    <ellipse
      style="
        stroke: rgb(124, 124, 124);
        fill: rgb(167, 167, 167);
        paint-order: fill;
      "
      cx="234"
      cy="274"
      rx="6"
      ry="6"
    />
    <line
      style="
        fill: rgb(216, 216, 216);
        stroke: rgb(124, 124, 124);
        stroke-width: 2px;
        transform-origin: 234px 274px;
      "
      x1="239.869"
      y1="275.244"
      x2="228.129"
      y2="272.756"
    />
    <!-- label -->
    <rect
      width="100"
      height="25"
      style="stroke: rgb(86, 86, 86)"
      x="74.965"
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
      x="125"
      y="31"
    >
      {{ label }}
    </text>
  </svg>
</template>
