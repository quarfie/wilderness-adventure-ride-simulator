<script setup>
import { ref } from 'vue'

var active = ref(false)
// An ID should be passed in through propos,
// and then that should be used to lookup the
// active status from a pinia store.

defineProps({
  control: Object,
})
</script>

<template>
  <!--
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
-->
  <rect width="80" height="80" style="stroke: rgb(86, 86, 86)" />
  <text
    style="
      fill: rgb(229, 229, 229);
      font-family: Arial, sans-serif;
      font-size: 6px;
      text-anchor: middle;
      white-space: pre;
    "
    class="uppercase pointer-default select-none"
    ><tspan x="40" y="8">{{ control.label[0] }}</tspan
    ><tspan x="40" dy="1em">&nbsp;</tspan
    ><tspan>{{ control.label[1] }}</tspan></text
  >
  <text
    style="
      fill: rgb(229, 229, 229);
      font-family: Arial, sans-serif;
      font-size: 6px;
      text-anchor: middle;
      white-space: pre;
    "
    ><tspan x="40" y="76">{{ control.label[2] }}</tspan></text
  >
  <ellipse
    style="stroke: rgb(137, 137, 137); fill: rgb(96, 96, 96)"
    cx="40"
    cy="43"
    rx="20"
    ry="20"
  />
  <ellipse
    style="
      stroke-width: 0.5px;
      stroke: rgb(29, 133, 26);
      fill: rgb(35, 158, 32);
    "
    cx="40"
    cy="43"
    rx="16"
    ry="16"
  />
  <ellipse
    style="
      stroke-width: 0.5px;
      stroke: rgb(29, 133, 26);
      fill: rgb(30, 137, 27);
    "
    cx="40"
    cy="43"
    rx="16"
    ry="16"
    class="control_button_pressed"
    v-if="active"
  />
  <ellipse
    style=""
    cx="40"
    cy="43"
    rx="20"
    ry="20"
    opacity="0"
    class="control_button_click_here"
    @mousedown="active = true"
    @mouseup="active = false"
    @mouseleave="active = false"
    @touchstart="active = true"
    @touchend="active = false"
    @touchcancel="active = false"
  />
  <!--
</svg>
--></template>
