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
  'matrix(1, 0, 0, 1, 30, 60)',
  'matrix(1, 0, 0, 1, 210, 60)',
  'matrix(1, 0, 0, 1, 390, 60)',
  'matrix(1, 0, 0, 1, 30, 160)',
  'matrix(1, 0, 0, 1, 210, 160)',
  'matrix(1, 0, 0, 1, 390, 160)',
  'matrix(1, 0, 0, 1, 70, 260)',
  'matrix(1, 0, 0, 1, 210, 260)',
  'matrix(1, 0, 0, 1, 350, 260)',
]
</script>

<template>
  <svg
    viewBox="0 0 500 385"
    class="cursor-default select-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      style="stroke: rgb(128, 128, 128); fill: rgb(201, 201, 201)"
      width="500"
      height="385"
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
      cy="369"
      rx="6"
      ry="6"
    />
    <line
      style="
        fill: rgb(216, 216, 216);
        stroke: rgb(124, 124, 124);
        stroke-width: 2px;
        transform-origin: 16px 359px;
      "
      x1="14.565"
      y1="363.174"
      x2="17.435"
      y2="374.826"
    />
    <ellipse
      style="
        stroke: rgb(124, 124, 124);
        fill: rgb(167, 167, 167);
        paint-order: fill;
      "
      cx="484"
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
      x1="484"
      y1="10"
      x2="484.001"
      y2="22"
      transform="matrix(0.924154, 0.382021, -0.382021, 0.924154, -0.000001, -0.00001)"
    />
    <ellipse
      style="
        stroke: rgb(124, 124, 124);
        fill: rgb(167, 167, 167);
        paint-order: fill;
      "
      cx="484"
      cy="369"
      rx="6"
      ry="6"
    />
    <line
      style="
        fill: rgb(216, 216, 216);
        stroke: rgb(124, 124, 124);
        stroke-width: 2px;
        transform-origin: 484px 369px;
      "
      x1="489.869"
      y1="370.244"
      x2="478.129"
      y2="367.756"
    />
    <rect
      width="100"
      height="25"
      style="stroke: rgb(86, 86, 86)"
      x="199.965"
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
      x="250"
      y="31"
    >
      {{ label }}
    </text>
  </svg>
</template>
