<script setup>
import { defineProps } from 'vue'

defineProps({
  location: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div v-if="location == 'workshop'" class="space-y-2">
    <h2 class="text-xl font-semibold mb-4">Maintenance Building</h2>
    <h3 class="text-l font-semibold">Structure</h3>
    <p>
      The maintenance building consists of the bottom part of Lift #1, a pump
      room with a small reservoir and 2 large pumps, an electrical room, a valve
      and chemical room, a workshop, and an additional small room for storage.
    </p>
    <h3 class="text-l font-semibold">Ride Systems</h3>
    <p>
      The electrical room contained all of the programmable logic controllers
      that connected to all of the control panels and sensors throughout the
      ride. These systems were spread across 3 separate panels. I believe they
      were collectively referred to as the "Main Control Panel" or MCP. Althoguh
      there were no lights, switches, or buttons on the exterior of these
      panels.
    </p>
    <h3 class="text-l font-semibold">Pumps</h3>
    <p>PCS #1 is the control panel for Pumps #1-2.</p>
  </div>

  <div v-if="location == 'los1'" class="space-y-2">
    <h2 class="text-xl font-semibold mb-4">Lift #1</h2>
    <h3 class="text-l font-semibold">Control Panel</h3>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>

  <div v-if="location == 'loadStation'" class="space-y-2">
    <h2 class="text-xl font-semibold mb-4">LOAD STATION</h2>
    <h3 class="text-l font-semibold">Control Panel</h3>
    <p>
      I have never seen the load station control panel and I have no information
      about its layout. I have viewed an incomplete set of wiring diagrams,
      which informed me about many of the controls and indicators that appeared
      on this panel, but I do not know the form (for example, the Dispatch
      Single/Double component and the Maintenance/Run component appear as keys,
      but may be a switch of some kind), nor do I know if there were any
      variations in colour, so I've only implemented component styles and
      colours that I have observed in the ruins.
    </p>
    <p>
      The wiring diagrams confirm that this panel was named "LSOC", which
      presumably stands for "Load Station Operator Control".
    </p>
    <h3 class="text-l font-semibold">Belts</h3>
    <p>
      The Load Station has 4 belts. The names of these belts are Ready, Load 1,
      Load 2, and Dispatch. These names appear on an additional control panel
      mounted near the belts. This panel appears to require a key to operate,
      and was at the back of the station, which may have been difficult to
      access, but it was close to the belt motors, so presumably it was used for
      testing/maintenance.
    </p>
    <p>
      The operation of the station belts is one of the greatest mysteries. I
      don't know how many buttons there were or how they were labeled. I don't
      know if they had to be held down for safety or if a momentary press would
      be sufficient to start a programmed sequence.
    </p>
    <p>
      Each belt had a pair of photoelectric sensors near the front of the belt
      where the boat would have stopped. Presumably these sensors were used to
      make it impossible for boats to collide due to operator error, and to make
      it easy for operators to position the boats correctly.
    </p>
    <p>
      An additional pair of photoelectric sensors were laid across the length of
      the station next to the flume. Presumably an interruption of either sensor
      would immediately stop the belts from operating, either all belts or just
      Load 1 & Load 2.
    </p>
    <p>
      In the current implementation, I've added 3 buttons and a "Dispatch Ready"
      indicator. The Dispatch Ready indicator would turn off for a programmed
      length of time (eg: 15 seconds) after each boat is dispatched to ensure
      spacing. There was surely also a "Brake 1 Entry Full" light, similar to
      many other control panels. This state being on would likely also prevent a
      new boat from being dispatched.
    </p>
    <p>
      I think it is likely that the Ready belt runs automatically whenever its
      sensors are open. My best guess is that a single operator button, "Fill
      Station" would operate the Load 2, Load 1, and Ready belts as necessary to
      get boats on both loading platforms. After that, I don't see a clear
      picture of what the controls would look like and I don't have a good idea
      about what the DISPATCH SINGLE / DOUBLE switch would be doing exactly.
      Naturally, when the boats are loaded, the operator would want to advance
      both boats, dispatch the front boat, and leave the second boat on the
      dispatch belt. The operator could then bring in the next two boats and
      start loading while waiting for spacing to dispatch the second boat. I've
      implemented my best guess about how the controls for that would be
      implemented.
    </p>
    <p>
      Note: belt control is not currently implemented and all belts are running
      full time in the simulation.
    </p>
    <h3 class="text-l font-semibold">Water</h3>
    <p>
      The water level is a few inches above the belt level (confirmed in a
      YouTube video). The flume widens to at least double the normal width as it
      approaches the station and then returns to normal after the station exit.
      This significantly reduces the speed that water moves through the station.
    </p>
    <p>
      A stream from a separate source (see Brake 4 / The Chute) flows under the
      station and over the waterfall into the main reservoir.
    </p>
  </div>

  <div v-if="location == 'towerBos1'" class="space-y-2">
    <h2 class="text-xl font-semibold mb-4">Tower 1 / Brake Station 1</h2>
    <h3 class="text-l font-semibold">Control Panel</h3>
    <p>
      BOS#1 is located inside the brake housing and would not have been manned.
      The real control panel was in good condition when I first viewed it so
      this is an accurate reproduction of all labels & colours.
    </p>
    <p>
      BOS possibly stands for "Brake Operator Station" or "Brake Operation
      System".
    </p>
    <p>
      BOS#1-2 was located inside the first observation tower where workers would
      monitor the ride to ensure safety and enforce rules (using a loudspeaker).
      When I first viewed this control panel, most of the controls had been
      removed, but the labels were in tact and I believe the appearance is
      accurate.
    </p>
    <p>
      My assumption is that the "Entry Full" indicators turn on when 1) The
      brake is set, and 2) an additional boat or boats are waiting behind the
      brake, as determined by the farthest back photoelectric sensors near the
      brake (the photoelectric sensors appear as small green lights on the map,
      or red when interrupted)
    </p>
    <p>
      The toggle button "Pull to Release / Push to Set" presumably allows the
      operator to set the brake when it would otherwise be released, but when
      the brake is set automatically, I doubt that this could be overridden
      manually.
    </p>
    <p>
      It is unclear to me why this station would have the ability to set Brake
      2, and why it has visibility all teh way to Brake 3.
    </p>
    <h3 class="text-l font-semibold">Brake</h3>
    <p>
      The brake is a pneumatically acuated system that narrows the walls and
      squeezes a boat from both sides. The air system is broken into two
      branches. One branch pushes the brake open, and the other pushes it
      closed. Both have an electronically controlled valve which opens or closes
      supply to that branch, and when closed, exhausts pressure from that
      branch. One of the branches has an electronic pressure sensor. I was
      unable to confirm if this is the brake or the release branch, but most
      likely it is the brake branch. Presumably, this acts as confirmation when
      the brake is physically set, and likely triggers an alarm at the Load
      Station control panel if the brake cannot be confirmed to be physically
      set soon after being electronically set. It is unclear how such a
      situation would be indicated at this control panel. Perhaps the SET /
      RELEASED dual indicator is off during the transition from RELEASED to SET.
      This delay is not implemented in the simulation.
    </p>
    <h3 class="text-l font-semibold">Brake Photoelectric Sensors</h3>
    <p>
      Most of the brakes have 6 photoelectric sensors in their vacinity. The
      first two are approximately 2 feet apart and are labeled SPE-[number]
      (likely "Single Photoelectric"). These sensors are likely used to detect
      the condition known as "BRAKE ENTRY FULL". The next pair are only a few
      inches apart and are located immediately before the brake. It is not clear
      to me exactly what these do but it would indicate that there is a boat in
      the brake. These sensors were labeled DPE=[number]A and DPE-[same number]B
      ("Double Photoelectric"). The last pair of sensors (also "DPE") is after
      the brake. I believe that when these sensors are interrupted, this would
      indicate that the boat had cleared the brake, and this would likely
      trigger the brake to set for a programmed amount of time to maintain boat
      spacing.
    </p>
    <p>
      The BRAKE ENTRY FULL condition likely causes the previous brake to SET,
      and this is implemented in the simulation. You'll find that if you
      manually set Brake #4, for example, this will evenually result in all
      brakes being set with a few boats waiting at each brake.
    </p>
  </div>

  <div v-if="location == 'towerBos2'" class="space-y-2">
    <h2 class="text-xl font-semibold mb-4">Tower 2 / Brake Station 2</h2>
    <h3 class="text-l font-semibold">Control Panel</h3>
    <p>BOS #2 was located in the second tower.</p>
    <p>
      Go to Brake Station #1 for more information about brakes, sensors, and
      Entry Full.
    </p>
  </div>

  <div v-if="location == 'miningTunnel'" class="space-y-2">
    <h2 class="text-xl font-semibold mb-4">
      Mining Tunnel / Lift #2 / Brake #3 / Pump #3-4
    </h2>
    <h3 class="text-l font-semibold">Structure</h3>
    <p>
      The mining tunnel was the second lift and the only lift used by
      passengers. It consists of a large conveyor belt at 20&deg; incline and
      unknown length/height, a brake (Brake #3) inside the lower entrance, a
      pump room with a small reservoir, two large pumps, and a large air
      compressor, an electrical room, a catwalk along both sides of the lift, a
      small area containing audio equipment for 3 sound effects, and a watch
      tower at the top of the lift.
    </p>
    <p>
      There was also theming throughout the mining tunnel, including a number of
      animatronic features, including animatronic miners and a hopper that would
      be raised and lowered. One miner used a plunger detonator to active an
      explosive charge, which would cause flashing lights and sound near the
      lift exit.
    </p>
    <p>
      The mining tunnel was enclosed by a fibreglass & concrete structure
      designed to look like granite. The exterior needed to be periodically
      painted to keep its reddish appearance. Over the years, areas most exposed
      to rain turned grey as the paint washed away.
    </p>
    <h3 class="text-l font-semibold">Control Panels</h3>
    <p>
      BOS #3 was located at the bottom of the lift next to the brake. This was
      likely used for testing & maintenance only and was not manned.
    </p>
    <p>
      PCS #3 was located on the left catwalk directly above the pump room. PCS
      likely stands for "Pump Control System".
    </p>
    <p>
      LOS #2 was located in the watch tower at the top of the lift. LOS likely
      stands for "Lift Operation System"
    </p>
    <p>
      LOS #2 includes an indicator for "#2 Lift Water Level". The structure
      contains at least 2 water level sensors. One is located near the pumps and
      the other is located at the exit. Most likely this indicator refers the
      the former.
    </p>
    <p>
      I believe the sensor near the pumps is referred to as the sump water level
      sensor. It is likely that a low water level condition from this sensor
      would cause the pumps to shut off. Very quickly this would result in a low
      water level condition at the lift exit, which presumably would release the
      clutch on the lift, ensuring that no boat would be released into a dry
      flume.
    </p>
    <p>
      There are 3 controls relating to the lift. LIFT MOTOR - PULL TO START/PUSH
      TO STOP would start stop the motor, which is located near the top of the
      lift. This would run continuously. The second button #2 LIFT - PULL TO
      START/PUSH TO STOP would operate a pneumatic clutch which would connect
      the belt to the motor. The third control JOG #2 LIFT required a key. I
      believe this was used for maintenance and allowed the belt to operate in
      small increments.
    </p>
    <p>
      CHUTE SYSTEM ON I believe may be equivalent to BRAKE SYSTEM ON, and refers
      to BRAKE 4 which is at the top of the CHUTE. See Brake #4 for information
      about this.
    </p>
    <h3 class="text-l font-semibold">Brake #3 differences</h3>
    <p>
      Unlike all other brakes, Brake #3 has only 4 photoelectric sensors in its
      vacinity, and all are SPE (Single Photoelectric). Like other breaks, there
      is a pair of sensors approximately 2 feet apart in the approach area.
      These can be seen in some ride videos. According to wiring diagrams, there
      are only two more SPE sensors before the Brake #4 sensors (I know this
      because of the numbering and the Brake #4 sensors were still physically
      present).
    </p>
    <p>
      I also know that there was a photoelectric sensor midway up the lift
      (because I have seen it), however I'm uncertain if that sensor was used to
      time theming (such as the explosion), or if it was the last sensor
      relating to the brake.
    </p>
    <p>
      Go to Brake Station #1 for more information about brakes, sensors, and
      Entry Full.
    </p>
  </div>

  <div v-if="location == 'towerBos4'" class="space-y-2">
    <h2 class="text-xl font-semibold mb-4">Tower 2 / Brake Station 2</h2>
    <h3 class="text-l font-semibold">Control Panel</h3>
    <p>
      BOS #4 was located in the fourth and final watch tower at the top of the
      CHUTE.
    </p>
    <p>
      This control panel has a control CHUTE SYSTEM - PULL TO START / PUSH TO
      START. I'm not exactly clear on what this does, but a former employee
      informed me that a photoelectric sensor at the end of the chute run-out
      area occasionally got splashed and needed to be cleaned otherwise the
      brake would not release and boats would start to back up. For brakes 1-3,
      I have assumed that distance between boats was enforced by timing, but for
      Brake 4, there is obviously a higher level of assurance required so the
      sensor confirms that the boat has cleared the area before the next boat
      can be sent down the chute. Does the CHUTE SYSTEM button enable/disable
      that feature? I find it hard to believe that this safety feature could be
      disabled so easily, but it's the only explanation I am aware of.
    </p>
    <p>
      This control panel also has an indicator CHUTE RUN-OUT WATER LEVEL.
      Presumably if the water level is insufficient in the run-out, Brake 4 will
      set.
    </p>
    <p>
      Go to Brake Station #1 for more information about brakes, sensors, and
      Entry Full.
    </p>
  </div>

  <div v-if="location == 'unloadStation'" class="space-y-2">
    <h2 class="text-xl font-semibold mb-4">Unload Station</h2>
    <h3 class="text-l font-semibold">Control Panel</h3>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>

  <div v-if="location == 'tickets'" class="space-y-2">
    <h2 class="text-xl font-semibold mb-4">Ticket Booth</h2>
    <h3 class="text-l font-semibold">Admission</h3>
    <p>
      When the Wilderness Adventure Ride opened, it was $2 per person to ride.
    </p>
    <p>By the time the ride closed, you needed a Play All Day Pass to ride.</p>
    <h3 class="text-l font-semibold">Queue</h3>
    <p></p>
    <p></p>
  </div>
</template>
