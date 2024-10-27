<script setup>
import { onMounted, ref, computed } from 'vue'
import ControlPanel2x2 from './components/ControlPanel2x2.vue'
import ControlPanel3x2 from './components/ControlPanel3x2.vue'
import ControlPanel5x2 from './components/ControlPanel5x2.vue'
import ControlPanelLarge from './components/ControlPanelLarge.vue'
import ControlPanelXL from './components/ControlPanelXL.vue'
import MapView from './components/MapView.vue'
import LoadStationView from './components/LoadStationView.vue'
import InfoDialog from './components/InfoDialog.vue'

import { useSimulationStore } from './stores/simulation'
const sim = useSimulationStore()

import _ from 'lodash' // For ESModule specific versions
import svgPanZoom from 'svg-pan-zoom'
import Hammer from 'hammerjs'
import MusicPlayer from './components/MusicPlayer.vue'
import LocationInformation from './components/LocationInformation.vue'
import BoatControl from './components/BoatControl.vue'

const showInfoModal = ref(false)

const playWelcome = () => {
  var audio = document.getElementById('welcomeAudio')
  audio.play()
}

const playStoneChippers = () => {
  var audio = document.getElementById('stoneChippersAudio')
  audio.loop = true
  audio.play()
}

const stopStoneChippers = () => {
  var audio = document.getElementById('stoneChippersAudio')
  audio.pause()
  //audio.currentTime = 0 // Resets the audio to the start
}

// Computed property to filter control panels by location
const currentLocationControlPanels = computed(() => {
  return Object.fromEntries(
    Object.entries(sim.controlPanels).filter(
      ([, panel]) => panel.location === sim.ui.location,
    ),
  )
})

onMounted(() => {
  console.log('onMounted is running...')

  const svgmap = document.getElementById('map')
  const track = document.getElementById('track')
  const trackElement_LS = document.getElementById('trackElement_LS') //load station

  var boatElements = []
  var boatElements_LS = []
  sim.boats.forEach((boat, index) => {
    boatElements[index] = document.getElementById(boat.elementId)
    boatElements_LS[index] = document.getElementById('LS_' + boat.elementId)
  })

  const marker = document.getElementById('marker')

  // Get the length of the track path
  sim.config.trackPixelLength = track.getTotalLength()
  sim.stations.ls.trackPixelLength = trackElement_LS.getTotalLength()

  // Declare utility functions
  function getTransformedCenter(element) {
    const bbox = element.getBBox()
    const ctm = element.getCTM()
    const centerX = bbox.x + bbox.width / 2
    const centerY = bbox.y + bbox.height / 2
    // Create a point at the center of the bounding box
    const point = svgmap.createSVGPoint()
    point.x = centerX
    point.y = centerY
    // Transform this point by the element's CTM
    const transformedPoint = point.matrixTransform(ctm)
    return {
      x: transformedPoint.x,
      y: transformedPoint.y,
    }
  }

  // Enable panning/zooming of the map and the follow boat feature
  const panZoomInstance = svgPanZoom(svgmap, {
    zoomEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true,
    minZoom: 1,
    maxZoom: 10,
    contain: true,
    dblClickZoomEnabled: true,
  })

  // Initialize Hammer.js on the SVG element
  const hammer = new Hammer(svgmap)
  hammer.get('pinch').set({ enable: true })
  hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL })

  let initialScale = 1
  hammer.on('pinchstart', () => {
    initialScale = panZoomInstance.getZoom()
  })

  hammer.on('pinch', ev => {
    panZoomInstance.zoom(initialScale * ev.scale)
  })
  //This works kind of sort of... it doesn't update until you release the pinch. if you change "pinch" to "pinchmove", it just doesn't work at all. Unsure why...

  //I don't think this section is needed because pan already works fine without hammer.js
  //hammer.on('pan', (ev) => {
  //    panZoomInstance.panBy({ x: ev.deltaX, y: ev.deltaY });
  //});

  function getAngle(boatPosition, track) {
    let point = track.getPointAtLength(boatPosition)
    let nextPoint = track.getPointAtLength(boatPosition + 1)
    let angle =
      Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI)
    return angle
  }

  function metersToTrackPixel(meters) {
    //first convert meters to pixels
    let pixels =
      (meters * sim.config.trackPixelLength) / sim.config.trackLengthM
    // then convert to trackPixels
    pixels = pixels + sim.config.trackPixelStart
    if (pixels > sim.config.trackPixelLength) {
      pixels = pixels - sim.config.trackPixelLength
    }
    return pixels
  }

  //Determine the coordinates of each photocell sensor
  Object.keys(sim.trackPhotocell).forEach(sensorKey => {
    const sensor = sim.trackPhotocell[sensorKey]
    // Step 1: Convert positionM to trackPixel
    const trackPixel = metersToTrackPixel(sensor.positionM)
    // Step 2: Get the x and y coordinates from the track path
    const { x, y } = track.getPointAtLength(trackPixel)
    const angle = getAngle(trackPixel, track)
    const angleRadians = (angle + 90) * (Math.PI / 180)
    const offsetDistance = 4
    const offsetX = x + offsetDistance * Math.cos(angleRadians)
    const offsetY = y + offsetDistance * Math.sin(angleRadians)
    // Step 3: Add mapTransform to the sensor object
    sensor.mapTransform = `translate(${offsetX}, ${offsetY})`
  })

  //Find the corresponding pixel in the load station (LS) SVG from the main track pixel
  function getLoadStationPixel(trackPixel) {
    let stationTrackStart = metersToTrackPixel(sim.stations.ls.startM)
    let stationTrackEnd = metersToTrackPixel(sim.stations.ls.endM)
    if (trackPixel < stationTrackStart || trackPixel > stationTrackEnd) {
      return 0
    }
    let percentDistance =
      (trackPixel - stationTrackStart) / (stationTrackEnd - stationTrackStart)
    let pixel = sim.stations.ls.trackPixelLength * percentDistance
    return pixel
  }

  // MAIN REPEATING FUNCTION

  let fpsFrameCount = 0
  let fpsStartTime = 0

  let timerFrameCount = 0

  function animate(timestamp) {
    // Start tracking time on the first frame
    if (fpsFrameCount === 0) {
      fpsStartTime = timestamp
    }
    fpsFrameCount++
    // Every 60 frames, calculate the average FPS
    if (fpsFrameCount === 60) {
      const elapsedTime = timestamp - fpsStartTime // Time for 60 frames
      //console.log(elapsedTime)
      sim.ui.fps = Math.round(1000 / (elapsedTime / 60)) // Calculate average FPS
      fpsFrameCount = 0
    }

    timerFrameCount++
    if (timerFrameCount >= 60 / sim.options.speed) {
      timerFrameCount = 0
      sim.time++ //add 1 second to the simulation clock

      //For each pump,
      //  if the pump is on and the water level is <100, increase the water level.
      //  if the pump is off and the water level is >0, decrease the water level.
      //    lifts & alarms should watch the water level and update accordingly
      //For each brake,
      //  if the brake has a countdown, decrement the countdown.
      //    if the countdown reaches zero, release the brake (unless manually set)
      Object.values(sim.status.BRAKE).forEach(element => {
        if (element.TIMER) {
          element.TIMER--
          //once the timer reaches zero, the brake will automatically open
        }
      })
    }
    // Note: the simulation is desinged to run at approximately real-time when speed is 1

    // For each boat
    sim.boats.forEach((boat, index) => {
      // If the boat is in service or it's not parked (going out of service at next circuit end)
      if (boat.inService || boat.trackPixel !== null) {
        // Move the boat to the track if necessary
        if (boat.trackPixel === null) {
          boat.trackPixel = sim.config.trackPixelStart
          //record the parking position of the boat
          boat.homeLocation = boatElements[index].getAttribute('transform')
        }

        // Get the point at the current distance along track
        const point = track.getPointAtLength(boat.trackPixel)

        const angle = getAngle(boat.trackPixel, track)

        // Update the boat's position
        boatElements[index].setAttribute(
          'transform',
          `translate(${point.x}, ${point.y}) rotate(${angle}) translate(-7, -2.5)`,
        )

        // Determine the speed adjustment at the current position
        const meters = boat.distanceFromStartM
        // Sort the array by position in ascending order
        const rideSpeedsSorted = _.sortBy(sim.trackSections, 'positionM')
        // Find the last element with a position less than or equal to the given position
        const lastChange = _.findLast(
          rideSpeedsSorted,
          change => change.positionM <= meters,
        )
        // Return the speed of that element, or a default value if no such element is found
        var speed = lastChange
          ? lastChange.speed * sim.options.speed
          : sim.options.speed
        speed = speed * sim.options.speedAdjustmentFactor //to make it about real time when speed setting is 1

        //get the belt name if on a belt
        const belt = lastChange
          ? lastChange.belt
            ? lastChange.belt
            : null
          : null

        // If on a conveyor belt, set speed to 0 if belt is not running
        if (belt) {
          speed = sim.status['BELT_' + belt] ? speed : 0
        }

        //get the brake name if in a brake
        const brake = lastChange
          ? lastChange.brake
            ? lastChange.brake
            : null
          : null

        // If in a brake, set speed to 0 if brake is set
        if (brake) {
          speed = sim.status.BRAKE[brake].SET ? 0 : speed
        }

        // Check if any boat is within 15 pixels in front of the current boat
        // Changed the 15's to 16 so that photoelectric sensors can detect individual boats reliably.
        const isBoatInFront = _.some(sim.boats, otherBoat => {
          const otherPosition = otherBoat.trackPixel
          return (
            otherPosition !== null &&
            ((otherPosition > boat.trackPixel &&
              otherPosition < boat.trackPixel + 16) ||
              (boat.trackPixel + 16 > sim.config.trackPixelLength &&
                otherPosition < 16))
          )
        })
        // Set speed to 0 if another boat is found in front
        if (isBoatInFront) {
          speed = 0
        }

        //Load Station
        //Map the boat.trackPixel to an equivalent trackPixel in the Load Station

        const trackPixelLoadStation = getLoadStationPixel(boat.trackPixel)
        if (speed > 0 && trackPixelLoadStation > 0) {
          //Boat is in or near load station
          // Get the point at the current distance along track
          const point_LS = trackElement_LS.getPointAtLength(
            trackPixelLoadStation,
          )
          const angle_LS =
            getAngle(trackPixelLoadStation, trackElement_LS) - 180
          // Update the boat's position in the station
          boatElements_LS[index].setAttribute(
            'transform',
            `translate(${point_LS.x}, ${point_LS.y}) rotate(${angle_LS}) translate(-41, -25)`,
          )
        }

        // Check if boat is going out of service and at the end of the track
        if (
          !boat.inService &&
          boat.trackPixel <= sim.config.trackPixelStart &&
          boat.trackPixel + speed >= sim.config.trackPixelStart
        ) {
          boat.trackPixel = null
          //return to original location
          boatElements[index].setAttribute('transform', boat.homeLocation)
          return //exit this iteration now and move on to the next boat
        }

        // Increment the distance travelled.
        boat.trackPixel += speed

        // Loop the boat back to the start if it reaches the end
        if (boat.trackPixel > sim.config.trackPixelLength) {
          boat.trackPixel = boat.trackPixel - sim.config.trackPixelLength
        }
      }
      //The remainder completes even if the boat is parked

      // UI follow the boat?
      if (sim.ui.followElement == boat.elementId) {
        const center = getTransformedCenter(boatElements[index])

        // Get the current pan
        const currentPan = panZoomInstance.getPan()
        // Tells us where the top left of the SVG is relative to the view.

        // New pan position is the center point of the view minus the center of the boat plus the current pan position
        const panX = svgmap.clientWidth / 2 - center.x + currentPan.x
        const panY = svgmap.clientHeight / 2 - center.y + currentPan.y
        const pan = { x: panX, y: panY }

        // Set the zoom and pan
        panZoomInstance.pan(pan)
        panZoomInstance.zoomAtPoint(3, center)

        //Add event listener to stop following on click
        const stopFollowing = () => {
          sim.ui.followElement = null
        }
        svgmap.addEventListener('mousedown', stopFollowing, { once: true })
        svgmap.addEventListener('touchstart', stopFollowing, { once: true })
      }
    }) //end of model.boats.foreach()

    // The rest is only animated once per animation frame - anything not specific to individual boats.

    // Load station conveyor belt animation
    if (sim.ui.location == 'loadStation') {
      const animateBelts = ['LS1', 'LS2', 'LS3', 'LS4']
      animateBelts.forEach(id => {
        if (sim.status['BELT_' + id] === true) {
          //Rotate the drums

          // Select the element with id 'wheel'
          var wheel1 = document.getElementById('belt_' + id + '_front')
          var wheel2 = document.getElementById('belt_' + id + '_rear')
          // Get the current transform attribute
          var transform1 = wheel1.getAttribute('transform')
          var transform2 = wheel2.getAttribute('transform')

          // Parse the current rotation
          var rotateMatch1 = transform1.match(
            /rotate\(([-+]?\d*\.?\d+),\s*([-+]?\d*\.?\d+),\s*([-+]?\d*\.?\d+)\)/,
          )
          var rotateMatch2 = transform2.match(
            /rotate\(([-+]?\d*\.?\d+),\s*([-+]?\d*\.?\d+),\s*([-+]?\d*\.?\d+)\)/,
          )

          if (rotateMatch1) {
            var currentAngle = parseFloat(rotateMatch1[1])
            var cx = parseFloat(rotateMatch1[2])
            var cy = parseFloat(rotateMatch1[3])

            // Calculate the new angle
            var newAngle = currentAngle - sim.options.speed * 3

            // Create the new transform string
            var newTransform = 'rotate(' + newAngle + ',' + cx + ',' + cy + ')'

            // Set the new transform attribute
            wheel1.setAttribute('transform', newTransform)
          } else {
            console.error('No rotation transform found on the element')
          }

          if (rotateMatch2) {
            currentAngle = parseFloat(rotateMatch2[1])
            cx = parseFloat(rotateMatch2[2])
            cy = parseFloat(rotateMatch2[3])

            // Calculate the new angle
            newAngle = currentAngle - sim.options.speed * 3

            // Create the new transform string
            newTransform = 'rotate(' + newAngle + ',' + cx + ',' + cy + ')'

            // Set the new transform attribute
            wheel2.setAttribute('transform', newTransform)
          } else {
            console.error('No rotation transform found on the element')
          }
        }
      })
    }

    //Check all track photocell sensors and update status
    Object.values(sim.trackPhotocell).forEach(sensor => {
      //Use this version instead of above when you need to enable the console.log to output the sensor activity.
      //Object.entries(sim.trackPhotocell).forEach(([id, sensor]) => {

      // boats are 14px long, so check if any boat is within 7 pixels of the sensor

      // warning - no handling for sensor within 7 pixels of end of track (none exist)

      const sensorPixel = metersToTrackPixel(sensor.positionM)
      const lowerBound = sensorPixel - 7
      const upperBound = sensorPixel + 7

      //this is only needed for the console log for testing
      //const startStatus = sensor.interrupted

      const currentStatus = _.some(
        sim.boats,
        obj => obj.trackPixel >= lowerBound && obj.trackPixel <= upperBound,
      )

      sensor.interrupted = currentStatus

      /*
      if (sensor.interrupted != startStatus) {
        console.log(
          'Sensor update: ',
          id,
          sensor.interrupted ? 'Interrupted' : 'Clear',
        )
      }
        */
    })

    // Developer can set model.markerM to place a marker at any distance along the track.
    if (sim.ui.markerM === 0 || sim.ui.markerM) {
      // Convert distance from start in meters to track position
      const markerTrackPixel = metersToTrackPixel(sim.ui.markerM)
      // Get the point at the current distance
      const markerpoint = track.getPointAtLength(markerTrackPixel)
      // Update the boat's position
      marker.setAttribute(
        'transform',
        `translate(${markerpoint.x}, ${markerpoint.y})`,
      )
    }

    // Request the next animation frame
    requestAnimationFrame(animate)
  }

  // Start the animation
  requestAnimationFrame(animate)
})
</script>

<template>
  <header class="relative flex justify-center items-end mb-5">
    <img
      alt="Wilderness Adventure Ride Logo"
      class="m-auto"
      src="./assets/WildAdvLogoNoBG.svg"
      width="250"
    />

    <div class="absolute right-0 bottom-0 flex items-end space-x-2">
      <MusicPlayer />
      <!--
      <span id="playButton" class="material-icons">play_arrow</span>
      <span id="pauseButton" class="material-icons">pause</span>
      -->
      <button @click="showInfoModal = true" class="material-icons">info</button>
    </div>
  </header>

  <InfoDialog
    v-if="showInfoModal"
    :isOpen="showInfoModal"
    title="Confirmation"
    @close="showInfoModal = false"
  />

  <main>
    <p>
      Speed:
      <span class="inline-block w-6">{{ sim.options.speed }}</span>
      &nbsp;
      <input
        v-model="sim.options.speed"
        type="range"
        min="0"
        max="20"
        value="5"
      />&nbsp; FPS: {{ sim.ui.fps }}, Current Time: {{ sim.ui.clock }}
    </p>
    <p>
      Set a Marker (meters):
      <input type="text" v-model="sim.ui.markerM" class="text-black w-16" />
    </p>
    <p>
      <button @click="playWelcome" class="hover:text-red-500">
        Play Welcome Audio
      </button>
    </p>
    <p>
      <button @click="playStoneChippers" class="hover:text-red-500">
        Start Stone Chippers Audio</button
      >&nbsp;
      <button @click="stopStoneChippers" class="hover:text-red-500">
        Stop Audio
      </button>
    </p>

    <MapView />

    <BoatControl v-show="sim.ui.location == 'workshop'" :boats="sim.boats" />

    <LoadStationView v-show="sim.ui.location == 'loadStation'" />

    <!-- Multiple Control Panel Selector -->
    <div
      v-if="Object.keys(currentLocationControlPanels).length > 1"
      class="flex justify-center"
    >
      <span
        v-for="(panel, name) in currentLocationControlPanels"
        :key="name"
        class="px-2 hover:text-orange-500"
      >
        <button @click="sim.ui.locations[panel.location] = name">
          {{ panel.label }}
        </button>
      </span>
    </div>

    <!-- Control Panel -->
    <div class="py-5">
      <div
        v-for="(panel, panelId) in sim.controlPanels"
        :key="panelId"
        class=""
      >
        <div v-show="panelId == sim.ui.locations[sim.ui.location]">
          <ControlPanel2x2
            v-if="panel.layout == '2x2'"
            :label="panel.label"
            :controls="panel.controls"
            class="max-h-80"
          />
          <ControlPanel3x2
            v-if="panel.layout == '3x2'"
            :label="panel.label"
            :controls="panel.controls"
            class="max-h-80"
          />
          <ControlPanel5x2
            v-if="panel.layout == '5x2'"
            :label="panel.label"
            :controls="panel.controls"
            class="max-h-80"
          />
          <ControlPanelLarge
            v-if="panel.layout == 'Large'"
            :label="panel.label"
            :controls="panel.controls"
            class="max-h-80"
          />
          <ControlPanelXL
            v-if="panel.layout == 'XL'"
            :label="panel.label"
            :controls="panel.controls"
            class="max-h-80"
          />
        </div>
      </div>
    </div>

    <LocationInformation :location="sim.ui.location" />
  </main>
  <!-- AUDIO FILES -->
  <audio id="welcomeAudio" preload="auto">
    <source
      src="./assets/audio/effects/WelcomeWildernessAdventureRide.mp3"
      type="audio/mpeg"
    />
  </audio>
  <audio id="stoneChippersAudio" preload="auto">
    <source src="./assets/audio/effects/StoneChippers.mp3" type="audio/mpeg" />
  </audio>
  <audio id="clickAudio" preload="auto">
    <source
      src="./assets/audio/effects/mouse-click-sound-233951.mp3"
      type="audio/mpeg"
    />
  </audio>
</template>
