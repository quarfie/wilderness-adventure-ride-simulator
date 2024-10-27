<script setup>
//import { ref } from 'vue'

//var active = ref(true)
// An ID should be passed in through propos,
// and then that should be used to lookup the
// active status from a pinia store.

defineProps({
  control: Object,
})
</script>

<template>
  <!--
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:bx="https://boxy-svg.com"
  >
-->
  <defs>
    <filter
      id="gaussian-blur-filter-0"
      color-interpolation-filters="sRGB"
      x="-50%"
      y="-50%"
      width="200%"
      height="200%"
      bx:preset="gaussian-blur 1 2.5"
    >
      <feGaussianBlur stdDeviation="2.5 2.5" edgeMode="none" />
    </filter>
  </defs>
  <rect width="80" height="80" style="stroke: rgb(86, 86, 86)" />
  <text
    style="
      fill: rgb(229, 229, 229);
      font-family: Arial, sans-serif;
      font-size: 6px;
      text-anchor: middle;
      white-space: pre;
    "
    class="uppercase"
  >
    <tspan x="40" y="8">{{ control.label[0] }}</tspan>
    <tspan x="40" dy="1em">&nbsp;</tspan>
    <tspan>{{ control.label[1] }}</tspan>
  </text>
  <text
    style="
      fill: rgb(229, 229, 229);
      font-family: Arial, sans-serif;
      font-size: 6px;
      text-anchor: middle;
      white-space: pre;
    "
    class="uppercase"
  >
    <tspan x="40" y="76">{{ control.label[2] }}</tspan>
  </text>
  <ellipse
    style="stroke: rgb(204, 71, 0); fill: rgb(135, 70, 0)"
    cx="40"
    cy="43"
    rx="25"
    ry="25"
  />
  <!-- light on -->
  <ellipse
    style="
      fill: rgb(255, 133, 0);
      fill-rule: nonzero;
      filter: url('#gaussian-blur-filter-0');
    "
    :style="{ opacity: control.indicator ? 1 : 0 }"
    cx="40"
    cy="43"
    rx="25"
    ry="25"
    _note="v-if and v-show broke on safari, so I'm using opacity instead"
  />
  <ellipse
    style="stroke: rgb(204, 71, 0); fill: none; stroke-opacity: 0.59"
    cx="40"
    cy="43"
    rx="22.5"
    ry="22.5"
  />
  <ellipse
    style="
      stroke: rgb(204, 71, 0);
      fill: none;
      stroke-opacity: 0.59;
      stroke-width: 2px;
    "
    cx="40"
    cy="43"
    rx="20"
    ry="20"
  />
  <ellipse
    style="stroke: rgb(204, 71, 0); fill: none; stroke-opacity: 0.59"
    cx="40"
    cy="43"
    rx="17.5"
    ry="17.5"
  />
  <ellipse
    style="stroke: rgb(204, 71, 0); fill: none; stroke-opacity: 0.59"
    cx="40"
    cy="43"
    rx="15"
    ry="15"
  />
  <ellipse
    style="stroke: rgb(204, 71, 0); fill: none; stroke-opacity: 0.59"
    cx="40"
    cy="43"
    rx="12.5"
    ry="12.5"
  />
  <ellipse
    style="stroke: rgb(204, 71, 0); fill: none; stroke-opacity: 0.59"
    cx="40"
    cy="43"
    rx="10"
    ry="10"
  />
  <ellipse
    style="stroke: rgb(204, 71, 0); fill: none; stroke-opacity: 0.59"
    cx="40"
    cy="43"
    rx="7.5"
    ry="7.5"
  />
  <ellipse
    style="stroke: rgb(204, 71, 0); fill: none; stroke-opacity: 0.59"
    cx="40"
    cy="43"
    rx="5"
    ry="5"
  />
  <ellipse
    style="stroke: rgb(204, 71, 0); fill: none; stroke-opacity: 0.59"
    cx="40"
    cy="43"
    rx="2.5"
    ry="2.5"
  />
  <!--</svg>-->
</template>
