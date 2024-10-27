<script setup>
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
    style="stroke: rgb(101, 101, 101); fill: rgb(202, 202, 202)"
    cx="40"
    cy="43"
    rx="25"
    ry="25"
  />
  <ellipse
    style="stroke: rgb(101, 101, 101); fill: rgb(137, 137, 137)"
    cx="40.027"
    cy="43.043"
    rx="20"
    ry="20"
  />
  <ellipse
    style="stroke: rgb(101, 101, 101); fill: rgb(137, 137, 137)"
    cx="40"
    cy="43"
    rx="15"
    ry="15"
  />
  <ellipse style="fill: rgb(101, 101, 101)" cx="40" cy="43" rx="3" ry="3" />
  <line
    style="fill: none; stroke: rgb(101, 101, 101); stroke-width: 3px"
    x1="40"
    y1="35"
    x2="40"
    y2="51"
  />
  <!--
</svg>
--></template>
