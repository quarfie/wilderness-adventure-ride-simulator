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
<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
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
    <filter
      id="filter-1"
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
    class="uppercase pointer-default select-none"
  >
    <tspan class="whitespace-pre" x="40" y="8">{{ control.label[0] }}</tspan>
    <tspan x="40" dy="1em">&nbsp;</tspan>
    <tspan class="whitespace-pre">{{ control.label[1] }}</tspan>
  </text>
  <text
    style="
      fill: rgb(229, 229, 229);
      font-family: Arial, sans-serif;
      font-size: 6px;
      text-anchor: middle;
      white-space: pre;
    "
    class="uppercase pointer-default select-none"
    ><tspan class="whitespace-pre" x="40" y="76">{{
      control.label[2]
    }}</tspan></text
  >
  <g>
    <path
      d="M 40.001 18 C 33.026 18 26.724 20.861 22.189 25.469 L 40.001 43 L 57.501 25.188 C 52.99 20.757 46.824 18 40.001 18 Z"
      fill="#000000"
      fill-rule="nonzero"
      opacity="1"
      stroke="none"
    />
    <path
      d="M 40.001 22 C 34.139 22 28.842 24.408 25.033 28.282 L 26.47 29.688 C 29.917 26.184 34.698 24 40.001 24 C 45.192 24 49.885 26.095 53.314 29.469 L 54.689 28.032 C 50.9 24.314 45.728 22 40.001 22 Z"
      fill="#393939"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
  </g>
  <g>
    <path
      d="M 39.956 67.97 C 46.932 67.982 53.239 65.131 57.782 60.532 L 39.999 42.97 L 22.469 60.752 C 26.972 65.191 33.134 67.958 39.956 67.97 Z"
      fill="#000000"
      fill-rule="nonzero"
      opacity="1"
      stroke="none"
    />
    <path
      d="M 39.963 63.97 C 45.826 63.98 51.126 61.581 54.943 57.714 L 53.508 56.305 C 50.055 59.803 45.27 61.979 39.967 61.97 C 34.776 61.961 30.087 59.858 26.664 56.478 L 25.286 57.913 C 29.068 61.637 34.236 63.96 39.963 63.97 Z"
      fill="#393939"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
  </g>
  <g>
    <path
      d="M 14.971 42.938 C 14.958 49.913 17.808 56.221 22.408 60.764 L 39.971 42.982 L 22.189 25.451 C 17.75 29.954 14.983 36.115 14.971 42.938 Z"
      fill="#874600"
      fill-rule="nonzero"
      opacity="1"
      stroke="none"
    />
    <path
      d="M 14.971 42.938 C 14.958 49.913 17.808 56.221 22.408 60.764 L 39.971 42.982 L 22.189 25.451 C 17.75 29.954 14.983 36.115 14.971 42.938 Z"
      fill-rule="nonzero"
      stroke="none"
      style="fill: rgb(255, 133, 0); filter: url('#gaussian-blur-filter-0')"
      :style="{ opacity: control.indicator ? 1 : 0 }"
      class="control_light_on_left"
      _note="v-if and v-show broke on safari, so I'm using opacity instead"
    />
    <path
      d="M 36.971 42.977 C 36.969 43.816 37.319 44.558 37.873 45.104 L 38.562 44.386 C 38.201 44.024 37.97 43.531 37.971 42.979 C 37.972 42.437 38.216 41.964 38.567 41.605 C 38.574 41.598 38.56 41.58 38.567 41.574 L 37.849 40.885 C 37.317 41.425 36.972 42.159 36.971 42.977 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
    <path
      d="M 34.471 42.973 C 34.468 44.507 35.108 45.882 36.12 46.882 L 36.809 46.195 C 35.978 45.377 35.468 44.233 35.471 42.974 C 35.473 41.747 35.96 40.631 36.757 39.82 L 36.071 39.132 C 35.092 40.123 34.473 41.47 34.471 42.973 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
    <path
      d="M 31.971 42.968 C 31.967 45.202 32.893 47.206 34.367 48.66 L 35.087 47.942 C 33.793 46.67 32.967 44.928 32.971 42.97 C 32.974 41.062 33.77 39.359 35.011 38.098 L 34.293 37.378 C 32.872 38.82 31.975 40.784 31.971 42.968 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
    <path
      d="M 29.471 42.964 C 29.465 45.894 30.649 48.561 32.582 50.469 L 33.302 49.72 C 31.557 47.994 30.466 45.614 30.471 42.965 C 30.475 40.373 31.515 38.025 33.201 36.314 L 32.484 35.625 C 30.627 37.515 29.476 40.105 29.471 42.964 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
    <path
      d="M 26.971 42.959 C 26.964 46.59 28.465 49.853 30.86 52.216 L 31.549 51.53 C 29.335 49.348 27.965 46.315 27.971 42.961 C 27.976 39.688 29.294 36.722 31.423 34.561 L 30.737 33.872 C 28.427 36.214 26.977 39.41 26.971 42.959 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
    <path
      d="M 24.471 42.955 C 24.463 47.282 26.221 51.208 29.076 54.025 L 29.796 53.308 C 27.122 50.672 25.463 47.008 25.471 42.957 C 25.478 39 27.071 35.419 29.645 32.808 L 28.927 32.088 C 26.172 34.88 24.478 38.722 24.471 42.955 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
    <path
      d="M 21.971 42.95 C 21.962 47.977 24.038 52.501 27.354 55.772 L 28.043 55.086 C 24.907 51.996 22.962 47.703 22.971 42.952 C 22.979 38.314 24.85 34.116 27.867 31.055 L 27.181 30.366 C 23.982 33.608 21.979 38.036 21.971 42.95 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
    <path
      d="M 18.971 42.945 C 18.96 48.807 21.358 54.108 25.225 57.925 L 26.634 56.49 C 23.137 53.037 20.961 48.251 20.971 42.948 C 20.98 37.758 23.083 33.069 26.463 29.646 L 25.028 28.268 C 21.304 32.05 18.981 37.218 18.971 42.945 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
    <path
      d="M 16.971 42.941 C 16.959 49.365 19.609 55.148 23.848 59.329 L 24.536 58.642 C 20.479 54.643 17.96 49.09 17.971 42.943 C 17.981 36.94 20.405 31.511 24.311 27.548 L 23.624 26.859 C 19.538 31.003 16.982 36.662 16.971 42.941 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
    />
  </g>
  <g>
    <path
      d="M 39.803 42.987 C 39.79 49.962 42.64 56.27 47.24 60.813 L 64.803 43.031 L 47.021 25.5 C 42.582 30.003 39.815 36.164 39.803 42.987 Z"
      fill="#874600"
      fill-rule="nonzero"
      opacity="1"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, 0.000011, -0.000003)"
    />
    <path
      d="M 39.803 42.987 C 39.79 49.962 42.64 56.27 47.24 60.813 L 64.803 43.031 L 47.021 25.5 C 42.582 30.003 39.815 36.164 39.803 42.987 Z"
      fill-rule="nonzero"
      opacity="1"
      stroke="none"
      style="
        fill: rgb(255, 133, 0);
        filter: url('#filter-1');
        transform-box: fill-box;
        transform-origin: 50% 50%;
      "
      :style="{ opacity: control.indicator ? 0 : 1 }"
      transform="matrix(-1, 0.000004, -0.000004, -1, 0.000011, -0.000003)"
      class="control_light_on_right"
      _note="v-if and v-show broke on safari, so I'm using opacity instead"
    />
    <path
      d="M 41.205 43.252 C 41.203 44.091 41.553 44.833 42.107 45.379 L 42.796 44.661 C 42.435 44.299 42.204 43.806 42.205 43.254 C 42.206 42.712 42.45 42.239 42.801 41.88 C 42.808 41.873 42.794 41.855 42.801 41.849 L 42.083 41.16 C 41.551 41.7 41.206 42.434 41.205 43.252 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, 0.000005, 0.000002)"
    />
    <path
      d="M 42.965 43.223 C 42.962 44.757 43.602 46.132 44.614 47.132 L 45.303 46.445 C 44.472 45.627 43.962 44.483 43.965 43.224 C 43.967 41.997 44.454 40.881 45.251 40.07 L 44.565 39.382 C 43.586 40.373 42.967 41.72 42.965 43.223 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, -0.000004, -0.000005)"
    />
    <path
      d="M 44.687 43.194 C 44.683 45.428 45.609 47.432 47.083 48.886 L 47.803 48.168 C 46.509 46.896 45.683 45.154 45.687 43.196 C 45.69 41.288 46.486 39.585 47.727 38.324 L 47.009 37.604 C 45.588 39.046 44.691 41.01 44.687 43.194 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, 0, -0.000006)"
    />
    <path
      d="M 46.472 43.134 C 46.466 46.064 47.65 48.731 49.583 50.639 L 50.303 49.89 C 48.558 48.164 47.467 45.784 47.472 43.135 C 47.476 40.543 48.516 38.195 50.202 36.484 L 49.485 35.795 C 47.628 37.685 46.477 40.275 46.472 43.134 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, -0.00001, 0.000002)"
    />
    <path
      d="M 48.225 43.135 C 48.218 46.766 49.719 50.029 52.114 52.392 L 52.803 51.706 C 50.589 49.524 49.219 46.491 49.225 43.137 C 49.23 39.864 50.548 36.898 52.677 34.737 L 51.991 34.048 C 49.681 36.39 48.231 39.586 48.225 43.135 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, 0.000018, -0.000008)"
    />
    <path
      d="M 49.978 43.106 C 49.97 47.433 51.728 51.359 54.583 54.176 L 55.303 53.459 C 52.629 50.823 50.97 47.159 50.978 43.108 C 50.985 39.151 52.578 35.57 55.152 32.959 L 54.434 32.239 C 51.679 35.031 49.985 38.873 49.978 43.106 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, 0.000005, 0.000003)"
    />
    <path
      d="M 51.731 43.076 C 51.722 48.103 53.798 52.627 57.114 55.898 L 57.803 55.212 C 54.667 52.122 52.722 47.829 52.731 43.078 C 52.739 38.44 54.61 34.242 57.627 31.181 L 56.941 30.492 C 53.742 33.734 51.739 38.162 51.731 43.076 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, -0.000001, -0.000001)"
    />
    <path
      d="M 53.141 43.016 C 53.13 48.878 55.528 54.179 59.395 57.996 L 60.804 56.561 C 57.307 53.108 55.131 48.322 55.141 43.019 C 55.15 37.829 57.253 33.14 60.633 29.717 L 59.198 28.339 C 55.474 32.121 53.151 37.289 53.141 43.016 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, 0.000014, 0.000002)"
    />
    <path
      d="M 55.238 43.017 C 55.226 49.441 57.876 55.224 62.115 59.405 L 62.803 58.718 C 58.746 54.719 56.227 49.166 56.238 43.019 C 56.248 37.016 58.672 31.587 62.578 27.624 L 61.891 26.935 C 57.805 31.079 55.249 36.738 55.238 43.017 Z"
      fill="#cc4700"
      fill-rule="nonzero"
      opacity="0.598958"
      stroke="none"
      style="transform-box: fill-box; transform-origin: 50% 50%"
      transform="matrix(-1, 0.000004, -0.000004, -1, 0.000013, 0.000007)"
    />
  </g>
  <!--
</svg>
--></template>
