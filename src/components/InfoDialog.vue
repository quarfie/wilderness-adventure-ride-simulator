<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white rounded-lg p-6 w-1/2 shadow-lg relative text-black">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
      <h2 class="text-xl font-semibold mb-4">About the WAR Simulator</h2>
      <div class="mb-4 space-y-4 max-h-[80vh] overflow-y-auto">
        <p>
          The Wilderness Adventure Ride (abbreviated as WAR) was a flume ride at
          Ontario Place from 1985 to 2011. While portions of the flume were
          filled in before Ontario Place re-opened as a park in 2018, much of
          the ride infrastructure remained until it was ultimately demolished in
          October, 2024.
        </p>
        <p>
          The objective of this app is to simulate the original ride operations
          with high fidelity.
        </p>
        <p>
          The control panel layouts are reproduced from the real control panels,
          except for the load station control panel, which had been removed
          prior to the re-opening in 2018. The load station control panel is
          currently just a jumble of things that I know would have been there.
          There may be many more buttons and indicators on this panel. Most of
          the control panels were damaged when I viewed them, and missing most
          of the buttons and light filters, so I've made some assumptions.
        </p>
        <p>
          One of the biggest mysteries is how the station belts worked. The
          unload station control panel had 3 controls that almost certainly
          relate to the station's 3 belts. The 3 belts were named "Ready",
          "Unload 1", and "Unload 2". My leading theory is that the 3 buttons
          would be used to advance boats from Ready to Unload 1, Unload 1 to
          Load 2, and Unload 2 to the flume. Boats would be loaded onto Ready
          automatically. The Ready belt would run continuously or start when the
          entry sensors are interrupted, then stop when the boat reaches the
          Ready sensors. The first button would run belts Ready and Unload 1,
          conditional on the Unload 1 sensors being open OR Unload 2 also
          operating at the same time. I believe that most likely the buttons
          would not need to be held down - rather they would run until the
          photoelectric sensors met certain conditions. A push to stop button
          for the belt motors was located nearby and could be used as an
          emergency stop. There were also photoelectric sensors running the
          length of the station next to the flume. These would prevent Load 1
          and Load 2 belts from running during unloading.
        </p>
        <p>
          The Load Station had a 4th belt called "Dispatch". The Load 1 and Load
          2 boats would likely be loaded at the same time. The first boat could
          be immediately released and the second could be moved to the Dispatch
          belt so that 2 more boats could start loading. It is unclear what
          level of automation would be involved in this.
        </p>
        <p>
          The original ride had 42 photoelectric sensors placed throughout the
          flume (many were mounted in pairs and are difficult to differentiate
          in the simulator even if zoomed all the way in). These are visible on
          the simulator as small green dots which turn red when a boat is
          passing. These sensors are involved in the workings of belts and
          brakes, as well as warning indicators at many control panels.
          Additional photoelectric sensors were located in the stations to
          ensure safety when loading/unloading boats.
        </p>
        <p>How to use the simulator</p>
        <p>
          Click the structures on the map to access the control panels available
          at those structures. The following locations are available:
        </p>
        <ul class="list-disc pl-6">
          <li>
            Maintenance Building - Operate pumps 1&2 (PCS #1), add/remove boats
            from flume.
          </li>
          <li>
            Lift #1 (LOS #1) - Operate Lift #1, which starts at the maintenance
            building and ends near the Load Station.
          </li>
          <li>
            Load Station (LSOC) - Control station belts, monitor key systems,
            emergency stop, etc.
          </li>
          <li>Brake Housing #1 (BOS #1) - Monitor & operate Brake #1</li>
          <li>Brake Station #1 (BOS #1-2) - Monitor & operate Brake #1 & 2</li>
          <li>Brake Station #2 (BOS #2) - Monitor & operate Brake #2</li>
          <li>
            Mining Tunnel - Monitor Brake #3 (BOS #3), Operate Pumps #3&4 (PCS
            #2), Operate Lift #2 (LOC #2)
          </li>
          <li>
            Brake Station #4 (BOS #4) - Monitor & operate Brake #4 & the Chute
          </li>
          <li>Unload Station (USOC) - Control station belts</li>
          <li>
            Ticket Booth - In a future version of the simulator, you may be able
            to edit pricing and monitor demand & profit/loss from here!
          </li>
        </ul>
        <p>TO DO:</p>
        <ul class="list-disc pl-6">
          <li>Station belt buttons</li>
          <li>
            Pumps affect water levels in profile views and water level sensors
            (prevent lifts from running, prevent brake 4 (chute) from releasing)
          </li>
          <li>Automatic braking to maintain spacing</li>
          <li>Unload station profile view</li>
          <li>Maintenance/Lift #1 Profile View</li>
          <li>Mining Tunnel/Lift #2 Profile View</li>
          <li>Passenger view (sync ride videos from YouTube with boats)</li>
          <li>Game mode - set pricing, hire workers, track revenue, etc.</li>
        </ul>
        <p>Information Needed!</p>
        <p>
          There is so much I don't know! Almost all of the information I have
          came from my own explorations of the decomissioned ride. It would be
          extremely helpful to have additional original documentation or
          first-hand knowledge to improve the accuracy of the simulation!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['close'])
</script>
