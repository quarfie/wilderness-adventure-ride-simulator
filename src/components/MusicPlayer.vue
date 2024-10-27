<script>
import { ref } from 'vue'

export default {
  setup() {
    const audioFiles = [
      new URL('@/assets/audio/music/A Once in a Lifetime.mp3', import.meta.url)
        .href,
      new URL(
        '@/assets/audio/music/Wild Ride at Ontario Place.mp3',
        import.meta.url,
      ).href,
      new URL(
        '@/assets/audio/music/Ontario Place Funkiness.mp3',
        import.meta.url,
      ).href,
      new URL('@/assets/audio/music/Ontario Place Vibes.mp3', import.meta.url)
        .href,
      new URL(
        '@/assets/audio/music/Ontario Wild Adventure.mp3',
        import.meta.url,
      ).href,
    ]
    const currentAudio = ref(0)
    const audioPlayer = ref(null)
    const isPlaying = ref(false)

    const playAudio = () => {
      audioPlayer.value.src = audioFiles[currentAudio.value]
      audioPlayer.value.play()
      isPlaying.value = true
    }

    const pauseAudio = () => {
      audioPlayer.value.pause()
      isPlaying.value = false
    }

    const nextAudio = () => {
      currentAudio.value++
      if (currentAudio.value < audioFiles.length) {
        audioPlayer.value.src = audioFiles[currentAudio.value]
        audioPlayer.value.play()
      } else {
        currentAudio.value = 0 // Reset to the first audio if you want to loop
      }
    }

    return {
      playAudio,
      pauseAudio,
      nextAudio,
      isPlaying,
      audioPlayer,
    }
  },
}
</script>

<template>
  <div>
    <audio
      ref="audioPlayer"
      preload="auto"
      @play="isPlaying = true"
      @pause="isPlaying = false"
      @ended="nextAudio"
    ></audio>
    <span v-if="!isPlaying" class="material-icons" @click="playAudio"
      >play_arrow</span
    >
    <span v-if="isPlaying" class="material-icons" @click="pauseAudio"
      >pause</span
    >
  </div>
</template>
