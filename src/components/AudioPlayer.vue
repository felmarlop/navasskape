<template>
  <vue-plyr ref="plyr" :options="options" @ended="$emit('ended')">
    <audio>
      <source :src="song" type="audio/mp3" />
    </audio>
  </vue-plyr>
</template>

<script>
import Song from '@/assets/audio/instant_crush.mp3'

export default {
  name: 'AudioPlayer',
  data() {
    return {
      options: {
        hideControls: true,
        muted: false
      },
      song: Song
    }
  },
  computed: {
    player() {
      return this.$refs.plyr?.player
    }
  },
  methods: {
    play() {
      if (!this.player) {
        return false
      }
      this.player.play()
    },
    pause() {
      if (!this.player) {
        return false
      }
      this.player.pause()
    }
  }
}
</script>

<style>
#app .plyr--audio {
  position: absolute;
  z-index: 1000;
  display: none;
  top: 50px;
}
</style>
