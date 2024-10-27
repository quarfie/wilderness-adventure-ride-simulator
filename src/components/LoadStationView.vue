<script setup>
import { useSimulationStore } from '@/stores/simulation'
const sim = useSimulationStore()

defineProps({
  label: Array,
})
</script>

<template>
  <svg
    id="svgLoadStation"
    height="100%"
    stroke-miterlimit="10"
    style="
      fill-rule: nonzero;
      clip-rule: evenodd;
      stroke-linecap: round;
      stroke-linejoin: round;
    "
    version="1.1"
    viewBox="0 0 650 67"
    width="100%"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:vectornator="http://vectornator.io"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs />
    <clipPath id="ArtboardFrame">
      <rect height="67" width="650" x="0" y="0" />
    </clipPath>
    <g
      clip-path="url(#ArtboardFrame)"
      id="LS_Layer_1"
      vectornator:layerName="Layer 1"
    >
      <g opacity="1" vectornator:layerName="Structure">
        <path
          d="M94 6.43929e-15L94 39"
          fill="none"
          opacity="1"
          stroke="#187216"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-width="3"
          vectornator:layerName="Line 1"
        />
        <path
          d="M204.667 6.21725e-15L204.667 39"
          fill="none"
          opacity="1"
          stroke="#187216"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-width="3"
          vectornator:layerName="Line 2"
        />
        <path
          d="M315.333 6.66134e-15L315.333 39"
          fill="none"
          opacity="1"
          stroke="#187216"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-width="3"
          vectornator:layerName="Line 4"
        />
        <path
          d="M426 6.66134e-15L426 39"
          fill="none"
          opacity="1"
          stroke="#187216"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-width="3"
          vectornator:layerName="Line 3"
        />
      </g>
      <path
        d="M90 47L430 47L430 38L90 38L90 47Z"
        fill="#187216"
        fill-rule="nonzero"
        opacity="1"
        stroke="none"
        vectornator:layerName="Deck"
      />

      <g
        v-for="(boat, index) in sim.boats"
        :key="index"
        opacity="1"
        vectornator:layerName="Boat with Passengers"
        :id="'LS_boat' + (index + 1)"
        transform="translate(700,25)"
      >
        <g
          opacity="1"
          vectornator:layerName="PassengerRear"
          v-if="boat.trackPixel > 1080 || boat.trackPixel < 685"
        >
          <path
            d="M61.9569 10.7153C61.9569 7.52524 63.0762 4.93917 64.4569 4.93917C65.8376 4.93917 66.9569 7.52524 66.9569 10.7153C66.9569 13.9054 65.8376 16.4915 64.4569 16.4915C63.0762 16.4915 61.9569 13.9054 61.9569 10.7153Z"
            fill="#818181"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="Oval 2"
          />
          <path
            d="M61.9569 2.5C61.9569 1.11929 63.0762 0 64.4569 0C65.8376 0 66.9569 1.11929 66.9569 2.5C66.9569 3.88071 65.8376 5 64.4569 5C63.0762 5 61.9569 3.88071 61.9569 2.5Z"
            fill="#818181"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="Oval 1"
          />
        </g>
        <g
          opacity="1"
          vectornator:layerName="PassengerMiddle"
          v-if="boat.trackPixel > 1083 || boat.trackPixel < 688"
        >
          <path
            d="M41.9569 10.7153C41.9569 7.52524 43.0762 4.93917 44.4569 4.93917C45.8376 4.93917 46.9569 7.52524 46.9569 10.7153C46.9569 13.9054 45.8376 16.4915 44.4569 16.4915C43.0762 16.4915 41.9569 13.9054 41.9569 10.7153Z"
            fill="#818181"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="Oval 3"
          />
          <path
            d="M41.9569 2.5C41.9569 1.11929 43.0762 0 44.4569 0C45.8376 0 46.9569 1.11929 46.9569 2.5C46.9569 3.88071 45.8376 5 44.4569 5C43.0762 5 41.9569 3.88071 41.9569 2.5Z"
            fill="#818181"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="Oval 4"
          />
        </g>
        <g
          opacity="1"
          vectornator:layerName="PassengerFront"
          v-if="boat.trackPixel > 1077 || boat.trackPixel < 683"
        >
          <path
            d="M21.9569 10.7153C21.9569 7.52524 23.0762 4.93917 24.4569 4.93917C25.8376 4.93917 26.9569 7.52524 26.9569 10.7153C26.9569 13.9054 25.8376 16.4915 24.4569 16.4915C23.0762 16.4915 21.9569 13.9054 21.9569 10.7153Z"
            fill="#818181"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="Oval 5"
          />
          <path
            d="M21.9569 2.5C21.9569 1.11929 23.0762 0 24.4569 0C25.8376 0 26.9569 1.11929 26.9569 2.5C26.9569 3.88071 25.8376 5 24.4569 5C23.0762 5 21.9569 3.88071 21.9569 2.5Z"
            fill="#818181"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="Oval 6"
          />
        </g>
        <g opacity="1" vectornator:layerName="Empty Boat">
          <path
            d="M6.85574 8.5L80.8557 8.5L80.8557 23.5L15.8557 23.5L5.85574 18.7747L5.85574 9.5C5.857 8.53701 5.85567 8.51547 6.85574 8.5Z"
            fill="#e4d5b7"
            fill-rule="nonzero"
            opacity="1"
            stroke="#797979"
            stroke-linecap="round"
            stroke-linejoin="miter"
            stroke-width="0.5"
            vectornator:layerName="Body"
          />
          <path
            d="M8.24492 15L78.2449 15.1"
            fill="none"
            opacity="1"
            stroke="#4f4f4f"
            stroke-linecap="round"
            stroke-linejoin="miter"
            stroke-width="1"
            vectornator:layerName="Side Bumper"
          />
          <path
            d="M6.02694 18.6702L81.0269 18.7693"
            fill="none"
            opacity="1"
            stroke="#8b8b8b"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-width="0.5"
            vectornator:layerName="Side Bumper 1"
          />
          <path
            d="M6.02694 16.9262L81.0269 17.0253"
            fill="none"
            opacity="1"
            stroke="#8b8b8b"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-width="0.5"
            vectornator:layerName="Side Bumper 2"
          />
          <path
            d="M6.02694 13.0262L81.0269 13.1253"
            fill="none"
            opacity="1"
            stroke="#8b8b8b"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-width="0.5"
            vectornator:layerName="Side Bumper 3"
          />
          <path
            d="M6.02694 11.0262L81.0269 11.1253"
            fill="none"
            opacity="1"
            stroke="#8b8b8b"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-width="0.5"
            vectornator:layerName="Side Bumper 4"
          />
          <g opacity="1" vectornator:layerName="Group 1">
            <path
              d="M70.8557 3.82624C70.8557 3.82624 72.8557 3.02624 74.8557 3.02624C76.8557 3.02624 78.8557 3.82624 78.8557 3.82624L78.8557 6.72624C78.8557 6.72624 76.8557 7.52624 74.8557 7.52624C72.8557 7.52624 70.8557 6.72624 70.8557 6.72624L70.8557 3.82624Z"
              fill="#e4d5b7"
              fill-rule="nonzero"
              opacity="1"
              stroke="#7b7b7b"
              stroke-linecap="round"
              stroke-linejoin="miter"
              stroke-width="0.5"
              vectornator:layerName="Barrel"
            />
            <path
              d="M72.5589 3.29248L72.5589 7.26248L73.1526 7.38248L73.1526 3.17248L72.5589 3.29248ZM76.5589 3.17248L76.5589 7.38248L77.1526 7.26248L77.1526 3.29248L76.5589 3.17248Z"
              fill="#7c7c7c"
              fill-rule="nonzero"
              opacity="1"
              stroke="none"
              vectornator:layerName="Curve 1"
            />
          </g>
          <path
            d="M5.85574 17.6181C5.85574 17.6181 0.855737 16.7109 0.855737 15.7986C0.855737 14.8862 5.85574 14.2542 5.85574 14.2542L5.85574 17.6181Z"
            fill="#3f3f3f"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="Bumper Front"
          />
          <path
            d="M81.0269 11.3262L82.6269 11.3262L82.6269 20.3262L81.0269 20.3262L81.0269 11.3262Z"
            fill="#3f3f3f"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="Bumper Rear"
          />
        </g>
      </g>

      <path
        d="M5.02376e-15 47L650 47L650 67L5.10703e-15 67L5.02376e-15 47Z"
        fill="#97bee9"
        fill-rule="nonzero"
        opacity="1"
        stroke="none"
        vectornator:layerName="Water"
      />

      <!-- BELTS -->
      <g opacity="1" vectornator:layerName="Belt1">
        <path
          d="M95 50L185 50L185 60L95 60L95 50Z"
          fill="none"
          opacity="1"
          stroke="#000000"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-width="1"
          vectornator:layerName="Rectangle 1"
        />
        <g
          id="belt_LS4_front"
          opacity="1"
          vectornator:layerName="RollerAssy"
          transform="rotate(60,94.5,55)"
        >
          <path
            d="M89 55C89 51.9624 91.4624 49.5 94.5 49.5C97.5376 49.5 100 51.9624 100 55C100 58.0376 97.5376 60.5 94.5 60.5C91.4624 60.5 89 58.0376 89 55Z"
            fill="#000000"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerDrum"
          />
          <path
            d="M93 55C93 54.1716 93.6716 53.5 94.5 53.5C95.3284 53.5 96 54.1716 96 55C96 55.8284 95.3284 56.5 94.5 56.5C93.6716 56.5 93 55.8284 93 55Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHub"
          />
          <path
            d="M94 52L95 52L95 54L94 54L94 52Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHubScrew"
          />
        </g>
        <g
          id="belt_LS4_rear"
          opacity="1"
          vectornator:layerName="RollerAssy 2"
          transform="rotate(310,185.5,55)"
        >
          <path
            d="M180 55C180 51.9624 182.462 49.5 185.5 49.5C188.538 49.5 191 51.9624 191 55C191 58.0376 188.538 60.5 185.5 60.5C182.462 60.5 180 58.0376 180 55Z"
            fill="#000000"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerDrum"
          />
          <path
            d="M184 55C184 54.1716 184.672 53.5 185.5 53.5C186.328 53.5 187 54.1716 187 55C187 55.8284 186.328 56.5 185.5 56.5C184.672 56.5 184 55.8284 184 55Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHub"
          />
          <path
            d="M185 52L186 52L186 54L185 54L185 52Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHubScrew"
          />
        </g>
      </g>
      <g opacity="1" vectornator:layerName="Belt2">
        <path
          d="M200 50L290 50L290 60L200 60L200 50Z"
          fill="none"
          opacity="1"
          stroke="#000000"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-width="1"
          vectornator:layerName="Rectangle 1"
        />
        <g
          id="belt_LS3_front"
          opacity="1"
          vectornator:layerName="RollerAssy"
          transform="rotate(80,199.5,55)"
        >
          <path
            d="M194 55C194 51.9624 196.462 49.5 199.5 49.5C202.538 49.5 205 51.9624 205 55C205 58.0376 202.538 60.5 199.5 60.5C196.462 60.5 194 58.0376 194 55Z"
            fill="#000000"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerDrum"
          />
          <path
            d="M198 55C198 54.1716 198.672 53.5 199.5 53.5C200.328 53.5 201 54.1716 201 55C201 55.8284 200.328 56.5 199.5 56.5C198.672 56.5 198 55.8284 198 55Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHub"
          />
          <path
            d="M199 52L200 52L200 54L199 54L199 52Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHubScrew"
          />
        </g>
        <g
          id="belt_LS3_rear"
          opacity="1"
          vectornator:layerName="RollerAssy 2"
          transform="rotate(280,290.5,55)"
        >
          <path
            d="M285 55C285 51.9624 287.462 49.5 290.5 49.5C293.538 49.5 296 51.9624 296 55C296 58.0376 293.538 60.5 290.5 60.5C287.462 60.5 285 58.0376 285 55Z"
            fill="#000000"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerDrum"
          />
          <path
            d="M289 55C289 54.1716 289.672 53.5 290.5 53.5C291.328 53.5 292 54.1716 292 55C292 55.8284 291.328 56.5 290.5 56.5C289.672 56.5 289 55.8284 289 55Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHub"
          />
          <path
            d="M290 52L291 52L291 54L290 54L290 52Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHubScrew"
          />
        </g>
      </g>
      <g opacity="1" vectornator:layerName="Belt3">
        <path
          d="M305 50L395 50L395 60L305 60L305 50Z"
          fill="none"
          opacity="1"
          stroke="#000000"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-width="1"
          vectornator:layerName="Rectangle 1"
        />
        <g
          id="belt_LS2_front"
          opacity="1"
          vectornator:layerName="RollerAssy"
          transform="rotate(220,304.5,55)"
        >
          <path
            d="M299 55C299 51.9624 301.462 49.5 304.5 49.5C307.538 49.5 310 51.9624 310 55C310 58.0376 307.538 60.5 304.5 60.5C301.462 60.5 299 58.0376 299 55Z"
            fill="#000000"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerDrum"
          />
          <path
            d="M303 55C303 54.1716 303.672 53.5 304.5 53.5C305.328 53.5 306 54.1716 306 55C306 55.8284 305.328 56.5 304.5 56.5C303.672 56.5 303 55.8284 303 55Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHub"
          />
          <path
            d="M304 52L305 52L305 54L304 54L304 52Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHubScrew"
          />
        </g>
        <g
          id="belt_LS2_rear"
          opacity="1"
          vectornator:layerName="RollerAssy 2"
          transform="rotate(60,395.5,55)"
        >
          <path
            d="M390 55C390 51.9624 392.462 49.5 395.5 49.5C398.538 49.5 401 51.9624 401 55C401 58.0376 398.538 60.5 395.5 60.5C392.462 60.5 390 58.0376 390 55Z"
            fill="#000000"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerDrum"
          />
          <path
            d="M394 55C394 54.1716 394.672 53.5 395.5 53.5C396.328 53.5 397 54.1716 397 55C397 55.8284 396.328 56.5 395.5 56.5C394.672 56.5 394 55.8284 394 55Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHub"
          />
          <path
            d="M395 52L396 52L396 54L395 54L395 52Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHubScrew"
          />
        </g>
      </g>
      <g opacity="1" vectornator:layerName="Belt4">
        <path
          d="M410.299 50.2932L500.191 54.7009L499.701 64.6889L409.809 60.2812L410.299 50.2932Z"
          fill="none"
          opacity="1"
          stroke="#000000"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-width="1"
          vectornator:layerName="Rectangle 1"
        />
        <g
          id="belt_LS1_front"
          opacity="1"
          vectornator:layerName="RollerAssy"
          transform="rotate(0,409.5,55)"
        >
          <path
            d="M404.061 54.9934C404.21 51.9595 406.79 49.6206 409.824 49.7694C412.858 49.9181 415.197 52.4982 415.048 55.5321C414.899 58.566 412.319 60.9049 409.285 60.7562C406.251 60.6074 403.912 58.0273 404.061 54.9934Z"
            fill="#000000"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerDrum"
          />
          <path
            d="M408.056 55.1893C408.097 54.3619 408.801 53.724 409.628 53.7646C410.455 53.8051 411.093 54.5088 411.053 55.3362C411.012 56.1637 410.309 56.8015 409.481 56.761C408.654 56.7204 408.016 56.0167 408.056 55.1893Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHub"
          />
          <path
            d="M409.202 52.2419L410.201 52.2908L410.103 54.2884L409.104 54.2395L409.202 52.2419Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHubScrew"
          />
        </g>
        <g
          id="belt_LS1_rear"
          opacity="1"
          vectornator:layerName="RollerAssy 2"
          transform="rotate(50,500.72,59.66)"
        >
          <path
            d="M494.952 59.45C495.101 56.4161 497.681 54.0772 500.715 54.226C503.749 54.3747 506.088 56.9548 505.939 59.9887C505.79 63.0227 503.21 65.3615 500.176 65.2128C497.142 65.064 494.803 62.4839 494.952 59.45Z"
            fill="#000000"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerDrum"
          />
          <path
            d="M498.947 59.6459C498.988 58.8185 499.691 58.1806 500.519 58.2212C501.346 58.2618 501.984 58.9654 501.944 59.7928C501.903 60.6203 501.199 61.2582 500.372 61.2176C499.545 61.177 498.907 60.4734 498.947 59.6459Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHub"
          />
          <path
            d="M500.093 56.6985L501.092 56.7475L500.994 58.7451L499.995 58.6961L500.093 56.6985Z"
            fill="#ffffff"
            fill-rule="nonzero"
            opacity="1"
            stroke="none"
            vectornator:layerName="RollerHubScrew"
          />
        </g>
      </g>
      <path
        id="trackElement_LS"
        d="M750 52L500 52L410 49L95 49L53 52L-150 52"
        fill="none"
        opacity="1"
        stroke="#ff0000"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-width="0"
        vectornator:layerName="FollowLine"
      />
    </g>
  </svg>
</template>
