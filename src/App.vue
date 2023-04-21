<template>
  <v-app ref="App" class="bg-primary">
    <audio-player ref="AudioPlayer" @ended="checkAudio" />
    <init-view :img-loading="imgLoading" v-if="loading" />
    <ns-header
      :full-screen="fullScreen"
      :show-quote="showQuote"
      @switch-showquote="showQuote = !showQuote"
      @check-audio="checkAudio"
      @handle-fullscreen="handleFullscreen"
      @init-animation="initAnimation"
      v-if="!loading"
    />
    <image-view
      ref="ImageView"
      :show-quote="showQuote"
      @switch-fullscreen="switchFullscreen"
      @loaded="loaded = true"
      @init-animation="initAnimation"
      v-show="!loading"
    />
    <ns-footer v-if="!loading" />
  </v-app>
</template>

<script>
import { APP_TITLE, LOADING_TIMEOUT } from '@/core/config'

import AudioPlayer from './components/AudioPlayer.vue'
import NsFooter from './components/Footer.vue'
import NsHeader from './components/Header.vue'
import ImageView from './components/ImageView.vue'
import InitView from './components/InitView.vue'

export default {
  name: 'App',
  components: {
    AudioPlayer,
    NsFooter,
    NsHeader,
    ImageView,
    InitView
  },
  data: () => ({ 
    fullScreen: false,
    init: true,
    loaded: false,
    showQuote: true,
    title: APP_TITLE
  }),
  computed: {
    loading() {
      return !this.loaded || this.init
    },
    imgLoading() {
      return !this.loaded && !this.init
    }
  },
  watch: {
    loading(v) {
      if (!v) {
        this.$refs.ImageView?.setImageUrl()
      }
    }
  },
  created() {
    this.initAnimation()
  },
  methods: {   
    checkAudio(v) {
      this.$refs.AudioPlayer?.pause()
      if (v) {
        this.$refs.AudioPlayer?.play()
      }
    },
    switchFullscreen() {
      this.fullScreen = !this.fullScreen
    },
    handleFullscreen() {
      if (this.fullScreen) {
        document.exitFullscreen()
      } else {
        document.querySelector('#app').requestFullscreen()
      }
    },
    initAnimation(tm) {
      this.init = true
      const context = this
      setTimeout(function() {
        context.init = false
      }, tm || LOADING_TIMEOUT)
    }
  }
}
</script>

<style>
#app, #app .text-body-1, #app h4 {
  font-family: 'Roboto', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.9em !important;
}
#app .logo {
  cursor: pointer;
}
#app .mobile {
  font-size: 10px !important;
}
</style>
