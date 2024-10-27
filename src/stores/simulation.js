import { defineStore } from 'pinia'
import { reactive, watch, ref } from 'vue'

export const useSimulationStore = defineStore('simulation', () => {
  const time = ref(0)

  const config = reactive({
    trackPixelStart: 792,
    trackPixelLength: null,
    trackLengthM: 665.07,
    numberOfBoats: 20,
  })

  const options = reactive({
    speed: 5,
    speedAdjustmentFactor: 0.18,
    zenMode: false,
  })

  const ui = reactive({
    fps: 60,
    followElement: null,
    markerM: null,
    location: 'workshop',
    controlPanel: null,
    shiftPressed: null,
    locations: {
      /* indicate the default control panel at each location */
      workshop: 'PCS1',
      los1: 'LOS1',
      loadStation: 'LSOC',
      towerBos1: 'BOS12',
      towerBos2: 'BOS2',
      miningTunnel: 'LOS2',
      towerBos4: 'BOS4',
      unloadStation: 'USOC',
    },
    boatHomes: [
      'translate(608, 60) rotate(110,7,2.5)',
      'translate(620, 50) rotate(160,7,2.5)',
      'translate(640, 50) rotate(210,7,2.5)',
      'translate(630, 65) rotate(340,7,2.5)',
      'translate(652, 66) rotate(270,7,2.5)',
      'translate(648, 83) rotate(300,7,2.5)',
      'translate(630, 90) rotate(0,7,2.5)',
      'translate(618, 107) rotate(270,7,2.5)',
      'translate(625, 107) rotate(270,7,2.5)',
      'translate(632, 107) rotate(270,7,2.5)',
      'translate(639, 107) rotate(270,7,2.5)',
      'translate(646, 107) rotate(270,7,2.5)',
      'translate(653, 107) rotate(270,7,2.5)',
      'translate(660, 107) rotate(270,7,2.5)',
      'translate(667, 107) rotate(270,7,2.5)',
      'translate(674, 107) rotate(270,7,2.5)',
      'translate(681, 107) rotate(270,7,2.5)',
      'translate(687, 107) rotate(270,7,2.5)',
      'translate(694, 107) rotate(270,7,2.5)',
      'translate(701, 107) rotate(270,7,2.5)',
    ],
    get clock() {
      const hours = Math.floor(time.value / 3600)
      const minutes = Math.floor((time.value % 3600) / 60)
      const seconds = Math.floor(time.value % 60)
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    },
  })

  const test = reactive({
    number: 5,
    get calc() {
      return options.speed * 2
    },
  })

  const boats = reactive(
    Array.from({ length: config.numberOfBoats }, (item, index) => ({
      inService: false,
      elementId: 'boat' + (index + 1),
      trackPixel: null,
      get distanceFromStartPx() {
        return Math.round(
          this.trackPixel - config.trackPixelStart < 0
            ? this.trackPixel - config.trackPixelStart + config.trackPixelLength
            : this.trackPixel - config.trackPixelStart,
        )
      },
      get distanceFromStartM() {
        return (
          Math.round(
            ((this.distanceFromStartPx * config.trackLengthM) /
              config.trackPixelLength) *
              10,
          ) / 10
        )
      },
    })),
  )

  const trackSections = reactive([
    {
      belt: 'LIFT1',
      description: 'Lift #1',
      positionM: 0,
      speed: 0.7,
    },
    {
      description: 'Flume 100%',
      positionM: 37,
      speed: 1,
    },
    {
      belt: 'LS1',
      description: 'LS - Ready',
      positionM: 63.68,
      speed: 0.7,
    },
    {
      belt: 'LS2',
      description: 'LS - Load 1',
      positionM: 68.56,
      speed: 0.7,
    },
    {
      belt: 'LS3',
      description: 'LS - Load 2',
      positionM: 73.44,
      speed: 0.7,
    },
    {
      belt: 'LS4',
      description: 'LS - Dispatch',
      positionM: 78.32,
      speed: 0.7,
    },
    {
      description: 'Flume 100%',
      positionM: 83.2,
      speed: 1,
    },
    {
      description: 'Flume 70%',
      positionM: 180,
      speed: 0.7,
    },
    {
      description: 'Brake #1',
      brake: 'BRAKE1',
      positionM: 205.5,
      speed: 0.7,
    },
    {
      description: 'Flume 70%',
      positionM: 206.5,
      speed: 0.7,
    },
    {
      description: 'Brake #2',
      brake: 'BRAKE2',
      positionM: 329.5,
      speed: 0.7,
    },
    {
      description: 'Flume 70%',
      positionM: 330.5,
      speed: 0.7,
    },
    {
      description: 'Flume Fast',
      positionM: 350,
      speed: 1.4,
    },
    {
      description: 'Brake #3',
      brake: 'BRAKE3',
      positionM: 419,
      speed: 1,
    },
    {
      belt: 'LIFT2',
      description: 'Lift #2',
      positionM: 420,
      speed: 0.7,
    },
    {
      description: 'Flume 100%',
      positionM: 465,
      speed: 1,
    },
    {
      description: 'Brake #4',
      brake: 'BRAKE4',
      positionM: 508.5,
      speed: 1,
    },
    {
      description: 'Flume 100%',
      positionM: 509.5,
      speed: 1,
    },
    {
      description: 'Chute Runoff',
      positionM: 519,
      speed: 1.5,
    },
    {
      description: 'Flume 100%',
      positionM: 543,
      speed: 1,
    },
    {
      description: 'Flume 70%',
      positionM: 593,
      speed: 0.7,
    },
    {
      description: 'Flume 50%',
      positionM: 608,
      speed: 0.5,
    },
    {
      belt: 'US1',
      description: 'US - Entry',
      positionM: 628.3,
      speed: 0.7,
    },
    {
      belt: 'US2',
      description: 'US - Unload 1',
      positionM: 633.18,
      speed: 0.7,
    },
    {
      belt: 'US3',
      description: 'US - Unload 2',
      positionM: 638.06,
      speed: 0.7,
    },
    {
      description: 'Flume 100%',
      positionM: 642.94,
      speed: 1,
    },
  ])

  const trackPhotocell = reactive({
    SPE6: {
      interrupted: false,
      note: 'Load Station Entry',
      positionM: 54,
    },
    SPE7: {
      interrupted: false,
      note: 'Load Station Entry',
      positionM: 55,
    },
    DPE8A: {
      interrupted: false,
      note: 'Load Station Belt 1',
      positionM: 67.23,
    },
    DPE8B: {
      interrupted: false,
      note: 'Load Station Belt 1',
      positionM: 67.38,
    },
    DPE9A: {
      interrupted: false,
      note: 'Load Station Belt 2',
      positionM: 72.11,
    },
    DPE9B: {
      interrupted: false,
      note: 'Load Station Belt 2',
      positionM: 72.26,
    },
    DPE10A: {
      interrupted: false,
      note: 'Load Station Belt 3',
      positionM: 76.99,
    },
    DPE10B: {
      interrupted: false,
      note: 'Load Station Belt 3',
      positionM: 77.14,
    },
    DPE11A: {
      interrupted: false,
      note: 'Load Station Belt 4',
      positionM: 81.87,
    },
    DPE11B: {
      interrupted: false,
      note: 'Load Station Belt 4',
      positionM: 82.02,
    },
    SPE12: {
      interrupted: false,
      note: 'Brake 1',
      positionM: 196,
    },
    SPE13: {
      interrupted: false,
      note: 'Brake 1',
      positionM: 197,
    },
    DPE14A: {
      interrupted: false,
      note: 'Brake 1',
      positionM: 205,
    },
    DPE14B: {
      interrupted: false,
      note: 'Brake 1',
      positionM: 205.15,
    },
    DPE15A: {
      interrupted: false,
      note: 'Brake 1',
      positionM: 210,
    },
    DPE15B: {
      interrupted: false,
      note: 'Brake 1',
      positionM: 210.15,
    },
    SPE16: {
      interrupted: false,
      note: 'Brake 2',
      positionM: 321,
    },
    SPE17: {
      interrupted: false,
      note: 'Brake 2',
      positionM: 322,
    },
    DPE18A: {
      interrupted: false,
      note: 'Brake 2',
      positionM: 329,
    },
    DPE18B: {
      interrupted: false,
      note: 'Brake 2',
      positionM: 329.15,
    },
    DPE19A: {
      interrupted: false,
      note: 'Brake 2',
      positionM: 333,
    },
    DPE19B: {
      interrupted: false,
      note: 'Brake 2',
      positionM: 333.15,
    },
    SPE20: {
      interrupted: false,
      note: 'Brake 3',
      positionM: 410,
    },
    SPE21: {
      interrupted: false,
      note: 'Brake 3',
      positionM: 411,
    },
    SPE22: {
      interrupted: false,
      note: 'Brake 3',
      positionM: 419,
    },
    SPE23: {
      interrupted: false,
      note: 'Brake 3 - Mid lift 2',
      positionM: 440,
    },
    SPE24: {
      interrupted: false,
      note: 'Brake 4',
      positionM: 504,
    },
    SPE25: {
      interrupted: false,
      note: 'Brake 4',
      positionM: 504.25,
    },
    DPE26A: {
      interrupted: false,
      note: 'Brake 4',
      positionM: 508,
    },
    DPE26B: {
      interrupted: false,
      note: 'Brake 4',
      positionM: 508.15,
    },
    DPE27A: {
      interrupted: false,
      note: 'Brake 4 - on chute',
      positionM: 515,
    },
    DPE27B: {
      interrupted: false,
      note: 'Brake 4 - on chute',
      positionM: 515.15,
    },
    DPE28A: {
      interrupted: false,
      note: 'Brake 4 - after chute runout',
      positionM: 554,
    },
    DPE28B: {
      interrupted: false,
      note: 'Brake 4 - after chute runout',
      positionM: 554.15,
    },
    SPE1: {
      interrupted: false,
      note: 'Unload Station Entry',
      positionM: 622,
    },
    SPE2: {
      interrupted: false,
      note: 'Unload Station Entry',
      positionM: 623,
    },
    DPE3A: {
      interrupted: false,
      note: 'Unload Station Belt 1',
      positionM: 632,
    },
    DPE3B: {
      interrupted: false,
      note: 'Unload Station Belt 1',
      positionM: 632.15,
    },
    DPE4A: {
      interrupted: false,
      note: 'Unload Station Belt 2',
      positionM: 636.88,
    },
    DPE4B: {
      interrupted: false,
      note: 'Unload Station Belt 2',
      positionM: 637.03,
    },
    DPE5A: {
      interrupted: false,
      note: 'Unload Station Belt 3',
      positionM: 641.76,
    },
    DPE5B: {
      interrupted: false,
      note: 'Unload Station Belt 3',
      positionM: 641.91,
    },
  })

  const stations = reactive({
    ls: {
      endM: 94.5,
      startM: 52.5,
      trackPixelLength: null,
    },
  })

  const status = reactive({
    PUMP: [
      {
        _note: 'Pump #1',
        RUNNING: true,
        get OKSTART() {
          return (
            !this.RUNNING &&
            !status.WATERLEVEL_LIFT1_BOTTOM &&
            status.RIDECONTROL
          )
        },
      },
      {
        _note: 'Pump #2',
        RUNNING: true,
        get OKSTART() {
          return (
            !this.RUNNING &&
            !status.WATERLEVEL_LIFT1_BOTTOM &&
            status.RIDECONTROL
          )
        },
      },
      {
        _note: 'Pump #3',
        RUNNING: true,
        get OKSTART() {
          return (
            !this.RUNNING &&
            !status.WATERLEVEL_LIFT2_BOTTOM &&
            status.RIDECONTROL
          )
        },
      },
      {
        _note: 'Pump #4',
        RUNNING: true,
        get OKSTART() {
          return (
            !this.RUNNING &&
            !status.WATERLEVEL_LIFT2_BOTTOM &&
            status.RIDECONTROL
          )
        },
      },
    ],
    RIDECONTROL: true,
    BRAKE: {
      BRAKE1: {
        _note: 'Brake #1',
        MANUALSET: false,
        TIMER: 0,
        DELAY: 12,
        get SET() {
          return this.TIMER || this.MANUALSET || status.BRAKE.BRAKE2.ENTRYFULL
        },
        get ENTRYFULL() {
          return (
            trackPhotocell.SPE12.interrupted &&
            trackPhotocell.SPE13.interrupted &&
            this.SET
          )
        },
      },
      BRAKE2: {
        _note: 'Brake #2',
        MANUALSET: false,
        TIMER: 0,
        DELAY: 12,
        SYSTEMON: true,
        get SET() {
          return (
            (this.TIMER || this.MANUALSET || status.BRAKE.BRAKE3.ENTRYFULL) &&
            this.SYSTEMON
          )
        },
        get ENTRYFULL() {
          return (
            trackPhotocell.SPE16.interrupted &&
            trackPhotocell.SPE17.interrupted &&
            this.SET
          )
        },
      },
      BRAKE3: {
        _note: 'Brake #3',
        MANUALSET: false,
        TIMER: 0,
        DELAY: 12,
        SYSTEMON: true,
        get SET() {
          return (
            (this.TIMER || this.MANUALSET || status.BRAKE.BRAKE4.ENTRYFULL) &&
            this.SYSTEMON
          )
        },
        get ENTRYFULL() {
          return (
            trackPhotocell.SPE20.interrupted &&
            trackPhotocell.SPE21.interrupted &&
            this.SET
          )
        },
      },
      BRAKE4: {
        _note: 'Brake #4',
        MANUALSET: false,
        TIMER: 0,
        DELAY: 12,
        get SET() {
          return this.TIMER || this.MANUALSET || status.US_ENTRYFULL
        },
        get ENTRYFULL() {
          return (
            trackPhotocell.SPE24.interrupted &&
            trackPhotocell.SPE25.interrupted &&
            this.SET
          )
        },
      },
    },
    LIFT: {
      LIFT1: {
        MOTOR: true,
        CLUTCH: true,
      },
      LIFT2: {
        MOTOR: true,
        CLUTCH: true,
      },
    },
    LS_MOTORS: true,
    US_MOTORS: true,
    get BELT_LIFT1() {
      return this.LIFT.LIFT1.MOTOR && this.LIFT.LIFT1.CLUTCH
    },
    get BELT_LIFT2() {
      return this.LIFT.LIFT2.MOTOR && this.LIFT.LIFT2.CLUTCH
    },
    BELT_LS1: true,
    BELT_LS2: true,
    BELT_LS3: true,
    BELT_LS4: true,
    BELT_US1: true,
    BELT_US2: true,
    BELT_US3: true,
    CHUTE_SYSTEM: true,
    CHUTE_OCCUPIED: false,
    WATERLEVEL_LIFT1_BOTTOM: false,
    WATERLEVEL_LIFT1_TOP: false,
    WATERLEVEL_LIFT2_BOTTOM: false,
    WATERLEVEL_LIFT2_TOP: false,
    WATERLEVEL_CHUTE: false,
    ALARM: false,
    ALARM_BUZZER: false,
    AIR_PRESSURE_LOW: false,
    get LS_ENTRYFULL() {
      return trackPhotocell.SPE6.interrupted && trackPhotocell.SPE7.interrupted
    },
    get US_ENTRYFULL() {
      return trackPhotocell.SPE1.interrupted && trackPhotocell.SPE2.interrupted
    },
  })

  const controlPanels = reactive({
    PCS1: {
      label: 'PCS #1',
      layout: '2x2',
      location: 'workshop',
      description: 'Near pumps in maintenance building',
      controls: [
        {
          type: 'single_indicator',
          label: ['#1 PUMP', 'OK TO START'],
          get indicator() {
            return status.PUMP[0].OKSTART
          },
        },
        {
          type: 'single_indicator',
          label: ['#2 PUMP', 'OK TO START'],
          get indicator() {
            return status.PUMP[1].OKSTART
          },
        },
        {
          type: 'toggle_button',
          label: ['#1 PUMP', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.PUMP[0].RUNNING
          },
          clickAction() {
            actions.togglePump(1)
          },
        },
        {
          type: 'toggle_button',
          label: ['#2 PUMP', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.PUMP[1].RUNNING
          },
          clickAction() {
            actions.togglePump(2)
          },
        },
      ],
    },
    LOS1: {
      label: 'LOS #1',
      layout: '3x2',
      location: 'los1',
      description: 'Top of maintenance building lift hill',
      controls: [
        {
          type: 'single_indicator',
          label: ['#1 LIFT', 'WATER LEVEL'],
          get indicator() {
            return status.WATERLEVEL_LIFT1_TOP
          },
        },
        {
          type: 'single_indicator',
          label: ['LOAD STATION', 'ENTRY FULL'],
          get indicator() {
            return status.LS_ENTRYFULL
          },
        },
        {
          type: 'key',
          label: ['JOG #1 LIFT'],
        },
        {
          type: 'toggle_button',
          label: ['#1 LIFT MOTORS', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.LIFT.LIFT1.MOTOR
          },
          clickAction() {
            status.LIFT.LIFT1.MOTOR = !status.LIFT.LIFT1.MOTOR
          },
        },
        {
          type: 'knockout',
        },
        {
          type: 'toggle_button',
          label: ['#1 LIFT', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.LIFT.LIFT1.CLUTCH
          },
          clickAction() {
            actions.toggleLiftClutch(1)
          },
        },
      ],
    },
    LSOC: {
      label: 'LSOC',
      layout: 'XL',
      location: 'loadStation',
      description: 'Load Station',
      controls: [
        {
          type: 'single_indicator',
          label: ['CHUTE', 'SYSTEM ON'],
          get indicator() {
            return status.CHUTE_SYSTEM
          },
        },
        {
          type: 'single_indicator',
          label: ['CHUTE RUN-OUT', 'WATER LEVEL'],
          get indicator() {
            return status.WATERLEVEL_CHUTE
          },
        },
        {
          type: 'toggle_button',
          label: ['#1 LIFT', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.BELT_LIFT1
          },
          clickAction() {
            actions.toggleLiftClutch(1)
          },
        },
        {
          type: 'single_indicator',
          label: ['#1 LIFT', 'WATER LEVEL'],
          get indicator() {
            return status.WATERLEVEL_LIFT1_BOTTOM
          },
        },
        {
          type: 'single_indicator',
          label: ['ALARM'],
          get indicator() {
            return status.ALARM
          },
        },
        {
          type: 'button',
          label: ['ALARM SILENCE'],
          clickAction() {
            status.ALARM_BUZZER = false
          },
        },
        {
          type: 'toggle_button',
          label: ['EMERGENCY STOP', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.RIDECONTROL
          },
          clickAction() {
            console.log("E-STOP BUTTON PRESSED (doesn't do anything now)")
          },
        },
        {
          type: 'key',
          label: ['MAINTENANCE   /  RUN'],
        },
        {
          type: 'toggle_button',
          label: ['BELT MOTORS', '', 'PULL START/PUSH STOP'],
          get indicator() {
            return status.LS_MOTORS
          },
          clickAction() {
            status.LS_MOTORS = !status.LS_MOTORS
          },
        },
        {
          type: 'single_indicator',
          label: ['#1 BRAKE', 'SET'],
          get indicator() {
            return status.BRAKE.BRAKE1.SET
          },
        },
        {
          type: 'single_indicator',
          label: ['#2 BRAKE', 'SET'],
          get indicator() {
            return status.BRAKE.BRAKE2.SET
          },
        },
        {
          type: 'single_indicator',
          label: ['#3BRAKE', 'SET'],
          get indicator() {
            return status.BRAKE.BRAKE3.SET
          },
        },
        {
          type: 'single_indicator',
          label: ['#4 BRAKE', 'SET'],
          get indicator() {
            return status.BRAKE.BRAKE4.SET
          },
        },
        {
          type: 'dual_indicator',
          label: ['AIR PRESSURE', 'LOW         OK', ''],
          get indicator() {
            return status.AIR_PRESSURE_LOW
          },
        },
        {
          type: 'key',
          label: ['DISPATCH', 'SINGLE / DOUBLE'],
        },
        {
          type: 'single_indicator',
          label: ['#1 PUMP', 'RUNNING'],
          get indicator() {
            return status.PUMP[0].RUNNING
          },
        },
        {
          type: 'single_indicator',
          label: ['#2 PUMP', 'RUNNING'],
          get indicator() {
            return status.PUMP[1].RUNNING
          },
        },
        {
          type: 'single_indicator',
          label: ['#3 PUMP', 'RUNNING'],
          get indicator() {
            return status.PUMP[2].RUNNING
          },
        },
        {
          type: 'single_indicator',
          label: ['#4 PUMP', 'RUNNING'],
          get indicator() {
            return status.PUMP[3].RUNNING
          },
        },
        {
          type: 'single_indicator',
          label: ['DISPATCH', 'READY'],
          get indicator() {
            return true
          },
        },
        {
          type: 'button',
          label: ['RUN BELTS', 'DISPATCH'],
        },
        {
          type: 'button',
          label: ['RUN BELTS', 'ADVANCE & DISPATCH'],
        },
        {
          type: 'button',
          label: ['RUN BELTS', 'FILL STATION'],
        },
        {
          type: 'single_indicator',
          label: ['LOAD STATION', 'ENTRY FULL', ''],
          get indicator() {
            return status.LS_ENTRYFULL
          },
        },
      ],
    },
    BOS1: {
      label: 'BOS #1',
      layout: '2x2',
      location: 'towerBos1',
      description: 'In the brake housing',
      controls: [
        {
          type: 'dual_indicator',
          label: ['#1 BRAKE', 'SET            RELEASED'],
          get indicator() {
            return status.BRAKE.BRAKE1.SET
          },
        },
        {
          type: 'single_indicator',
          label: ['#2 BRAKE', 'SYSTEM ON'],
          get indicator() {
            return status.BRAKE.BRAKE2.SYSTEMON
          },
        },
        {
          type: 'single_indicator',
          label: ['#1 BRAKE', 'ENTRY FULL'],
          get indicator() {
            return status.BRAKE.BRAKE1.ENTRYFULL
          },
        },
        {
          type: 'toggle_button',
          label: ['#1 BRAKE', 'PULL TO RELEASE', 'PUSH TO SET'],
          get indicator() {
            return status.BRAKE.BRAKE1.MANUALSET
          },
          clickAction() {
            actions.manualBrakeToggle(1)
          },
        },
      ],
    },
    BOS12: {
      label: 'BOS #1-2',
      description: 'In the tower',
      location: 'towerBos1',
      layout: '5x2',
      controls: [
        {
          type: 'dual_indicator',
          label: ['#1 BRAKE', 'SET            RELEASED'],
          get indicator() {
            return status.BRAKE.BRAKE1.SET
          },
        },
        {
          type: 'knockout',
        },
        {
          type: 'dual_indicator',
          label: ['#2 BRAKE', 'SET            RELEASED'],
          get indicator() {
            return status.BRAKE.BRAKE2.SET
          },
        },
        {
          type: 'knockout',
        },
        {
          type: 'single_indicator',
          label: ['#3 BRAKE', 'SYSTEM ON'],
          get indicator() {
            return status.BRAKE.BRAKE3.SYSTEMON
          },
        },
        {
          type: 'single_indicator',
          label: ['#1 BRAKE', 'ENTRY FULL'],
          get indicator() {
            return status.BRAKE.BRAKE1.ENTRYFULL
          },
        },
        {
          type: 'toggle_button',
          label: ['#1 BRAKE', 'PULL TO RELEASE', 'PUSH TO SET'],
          get indicator() {
            return status.BRAKE.BRAKE1.MANUALSET
          },
          clickAction() {
            actions.manualBrakeToggle(1)
          },
        },
        {
          type: 'single_indicator',
          label: ['#2 BRAKE', 'ENTRY FULL'],
          get indicator() {
            return status.BRAKE.BRAKE2.ENTRYFULL
          },
        },
        {
          type: 'toggle_button',
          label: ['#2 BRAKE', 'PULL TO RELEASE', 'PUSH TO SET'],
          get indicator() {
            return status.BRAKE.BRAKE2.MANUALSET
          },
          clickAction() {
            actions.manualBrakeToggle(2)
          },
        },
        {
          type: 'single_indicator',
          label: ['#3 BRAKE', 'ENTRY FULL'],
          get indicator() {
            return status.BRAKE.BRAKE3.ENTRYFULL
          },
        },
      ],
    },
    BOS2: {
      label: 'BOS #2',
      layout: '2x2',
      location: 'towerBos2',
      description:
        'In tower (there might be a matching one in the brake housing too)',
      controls: [
        {
          type: 'dual_indicator',
          label: ['#2 BRAKE', 'SET            RELEASED'],
          get indicator() {
            return status.BRAKE.BRAKE2.SET
          },
        },
        {
          type: 'single_indicator',
          label: ['#3 BRAKE', 'SYSTEM ON'],
          get indicator() {
            return status.BRAKE.BRAKE3.SYSTEMON
          },
        },
        {
          type: 'single_indicator',
          label: ['#2 BRAKE', 'ENTRY FULL'],
          get indicator() {
            return status.BRAKE.BRAKE2.ENTRYFULL
          },
        },
        {
          type: 'toggle_button',
          label: ['#2 BRAKE', 'PULL TO RELEASE', 'PUSH TO SET'],
          get indicator() {
            return status.BRAKE.BRAKE2.MANUALSET
          },
          clickAction() {
            actions.manualBrakeToggle(2)
          },
        },
      ],
    },
    BOS3: {
      label: 'BOS #3',
      layout: '2x2',
      location: 'miningTunnel',
      description: 'Bottom of Lift 2 (mining tunnel) at brake',
      controls: [
        {
          type: 'dual_indicator',
          label: ['#3 BRAKE', 'SET            RELEASED'],
          get indicator() {
            return status.BRAKE.BRAKE3.SET
          },
        },
        {
          type: 'single_indicator',
          label: ['#1 LIFT', 'RUNNING'],
          get indicator() {
            return status.BELT_LIFT1
          },
        },
        {
          type: 'single_indicator',
          label: ['#3 BRAKE', 'ENTRY FULL'],
          get indicator() {
            return status.BRAKE.BRAKE3.ENTRYFULL
          },
        },
        {
          type: 'toggle_button',
          label: ['#3 BRAKE', 'PULL TO RELEASE', 'PUSH TO SET'],
          get indicator() {
            return status.BRAKE.BRAKE3.MANUALSET
          },
          clickAction() {
            actions.manualBrakeToggle(3)
          },
        },
      ],
    },
    PCS2: {
      label: 'PCS #2',
      layout: '2x2',
      location: 'miningTunnel',
      description: 'Near pumps in mining tunnel',
      controls: [
        {
          type: 'single_indicator',
          label: ['#3 PUMP', 'OK TO START'],
          get indicator() {
            return status.PUMP[2].OKSTART
          },
        },
        {
          type: 'single_indicator',
          label: ['#4 PUMP', 'OK TO START'],
          get indicator() {
            return status.PUMP[3].OKSTART
          },
        },
        {
          type: 'toggle_button',
          label: ['#3 PUMP', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.PUMP[2].RUNNING
          },
          clickAction() {
            actions.togglePump(3)
          },
        },
        {
          type: 'toggle_button',
          label: ['#4 PUMP', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.PUMP[3].RUNNING
          },
          clickAction() {
            actions.togglePump(4)
          },
        },
      ],
    },
    LOS2: {
      label: 'LOS #2',
      description: 'Top of mining tunnel',
      location: 'miningTunnel',
      layout: '5x2',
      controls: [
        {
          type: 'dual_indicator',
          label: ['#3 BRAKE', 'SET            RELEASED'],
          get indicator() {
            return status.BRAKE.BRAKE3.SET
          },
        },
        {
          type: 'single_indicator',
          label: ['#3 BRAKE', 'ENTRY FULL'],
          get indicator() {
            return status.BRAKE.BRAKE3.ENTRYFULL
          },
        },
        {
          type: 'single_indicator',
          label: ['#2 LIFT', 'WATER LEVEL'],
          get indicator() {
            return status.WATERLEVEL_LIFT2_TOP
          },
        },
        {
          type: 'key',
          label: ['JOG #2 LIFT'],
        },
        {
          type: 'single_indicator',
          label: ['CHUTE', 'SYSTEM ON'],
          get indicator() {
            return status.CHUTE_SYSTEM
          },
        },
        {
          type: 'toggle_button',
          label: ['#3 BRAKE', 'PULL TO RELEASE', 'PUSH TO SET'],
          get indicator() {
            return status.BRAKE.BRAKE3.MANUALSET
          },
          clickAction() {
            actions.manualBrakeToggle(3)
          },
        },
        {
          type: 'knockout',
        },
        {
          type: 'toggle_button',
          label: ['LIFT MOTOR', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.LIFT.LIFT2.MOTOR
          },
          clickAction() {
            status.LIFT.LIFT2.MOTOR = !status.LIFT.LIFT2.MOTOR
          },
        },
        {
          type: 'toggle_button',
          label: ['#2 LIFT', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.LIFT.LIFT2.CLUTCH
          },
          clickAction() {
            actions.toggleLiftClutch(2)
          },
        },
        {
          type: 'single_indicator',
          label: ['#4 BRAKE', 'ENTRY FULL'],
          get indicator() {
            return status.BRAKE.BRAKE4.ENTRYFULL
          },
        },
      ],
    },
    BOS4: {
      label: 'BOS #4',
      layout: '3x2',
      location: 'towerBos4',
      description: 'Top of chute',
      controls: [
        {
          type: 'single_indicator',
          label: ['#4 BRAKE', 'ENTRY FULL'],
          get indicator() {
            return status.BRAKE.BRAKE4.ENTRYFULL
          },
        },
        {
          type: 'single_indicator',
          label: ['CHUTE RUN-OUT', 'WATER LEVEL'],
          get indicator() {
            return status.WATERLEVEL_CHUTE
          },
        },
        {
          type: 'single_indicator',
          label: ['UNLOAD STATION', 'ENTRY FULL'],
          get indicator() {
            return status.US_ENTRYFULL
          },
        },
        {
          type: 'toggle_button',
          label: ['#4 BRAKE •', 'PULL TO RELEASE', 'PUSH TO SET'],
          get indicator() {
            return status.BRAKE.BRAKE4.MANUALSET
          },
          clickAction() {
            actions.manualBrakeToggle(4)
          },
        },
        {
          type: 'dual_indicator',
          label: ['#4 BRAKE', 'SET            RELEASED'],
          get indicator() {
            return status.BRAKE.BRAKE4.SET
          },
        },
        {
          type: 'toggle_button',
          label: ['CHUTE SYSTEM', 'PULL TO START', 'PUSH TO STOP'],
          get indicator() {
            return status.CHUTE_SYSTEM
          },
          clickAction() {
            status.CHUTE_SYSTEM = !status.CHUTE_SYSTEM
            status.CHUTE_OCCUPIED = false
          },
        },
      ],
    },
    USOC: {
      label: 'USOC',
      layout: 'Large',
      location: 'unloadStation',
      description: 'Unload station',
      controls: [
        {
          type: 'single_indicator',
          label: ['LIFT #1', '', 'RUNNING'],
          get indicator() {
            return status.BELT_LIFT1
          },
        },
        {
          type: 'single_indicator',
          label: ['RIDE CONTROL'],
          get indicator() {
            return status.RIDECONTROL
          },
        },
        {
          type: 'single_indicator',
          label: ['STATION', '', 'ENTRY FULL'],
          get indicator() {
            return status.US_ENTRYFULL
          },
        },
        {
          type: 'toggle_button',
          label: ['LIFT #1 (???)', '', 'PULL START/PUSH STOP'],
          get indicator() {
            return status.BELT_LIFT1
          },
          clickAction() {
            actions.toggleLiftClutch(1)
          },
        },
        {
          type: 'toggle_button',
          label: ['BELT MOTORS', '', 'PULL START/PUSH STOP'],
          get indicator() {
            return status.US_MOTORS
          },
          clickAction() {
            status.US_MOTORS = !status.US_MOTORS
          },
        },
        {},
        {
          type: 'button',
          label: ['UNLOAD 2'],
        },
        {
          type: 'button',
          label: ['UNLOAD 1'],
        },
        {
          type: 'button',
          label: ['READY'],
        },
      ],
    },
  })

  const actions = reactive({
    togglePump(number) {
      console.log('Pump #' + number + ' toggled')
      if (status.PUMP[number - 1].RUNNING) {
        //Stop the pump
        status.PUMP[number - 1].RUNNING = false
      } else if (status.PUMP[number - 1].OKSTART) {
        //Start the pump
        status.PUMP[number - 1].RUNNING = true
      }
    },
    toggleLiftClutch(number) {
      //this toggles the clutch, and ensures the lift can't be started if there is a water level signal from the top of the lift
      console.log('Toggle Lift ' + number)
      if (status.LIFT['LIFT' + number].CLUTCH) {
        status.LIFT['LIFT' + number].CLUTCH = false
      } else if (!status['WATERLEVEL_LIFT' + number + '_TOP']) {
        //only start lift if no water level warning at top
        status.LIFT['LIFT' + number].CLUTCH = true
      }
    },
    manualBrakeToggle(number) {
      console.log('toggle manual brake set' + number)
      status.BRAKE['BRAKE' + number].MANUALSET =
        !status.BRAKE['BRAKE' + number].MANUALSET
    },
  })

  // Watchers: Trigger a function when something changes
  watch(
    () => status.WATERLEVEL_LIFT1_TOP,
    (newValue, oldValue) => {
      console.log(
        `Lift 1 top water level changed from ${oldValue} to ${newValue}`,
      )
      if (newValue == true) {
        status.LIFT.LIFT1.CLUTCH = false
      }
    },
  )

  watch(
    () => status.WATERLEVEL_LIFT2_TOP,
    (newValue, oldValue) => {
      console.log(
        `Lift 2 top water level changed from ${oldValue} to ${newValue}`,
      )
      if (newValue == true) {
        status.LIFT.LIFT2.CLUTCH = false
      }
    },
  )

  watch(
    () => trackPhotocell.DPE15A.interrupted,
    newValue => {
      if (newValue == true) {
        console.log('Brake 1 cleared, set brake')
        status.BRAKE.BRAKE1.TIMER = status.BRAKE.BRAKE1.DELAY
      }
    },
  )

  watch(
    () => trackPhotocell.DPE19A.interrupted,
    newValue => {
      if (newValue == true) {
        console.log('Brake 2 cleared, set brake')
        status.BRAKE.BRAKE2.TIMER = status.BRAKE.BRAKE2.DELAY
      }
    },
  )

  watch(
    () => trackPhotocell.SPE22.interrupted,
    newValue => {
      if (newValue == false) {
        console.log('Brake 3 cleared, set brake')
        status.BRAKE.BRAKE3.TIMER = status.BRAKE.BRAKE3.DELAY
      }
    },
  )

  watch(
    () => trackPhotocell.DPE27A.interrupted,
    newValue => {
      if (newValue == true) {
        console.log('Brake 4 cleared, set brake')
        status.BRAKE.BRAKE4.TIMER = status.BRAKE.BRAKE4.DELAY
      }
    },
  )

  return {
    time,
    config,
    options,
    ui,
    test,
    boats,
    trackSections,
    trackPhotocell,
    stations,
    status,
    controlPanels,
    actions,
  }
})

/*

TO USE THE STORE:

import { useSimulationStore } from '@/stores/simulation'
const sim = useSimulationStore()

*/
