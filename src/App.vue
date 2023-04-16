<template>
  <v-app ref="App" class="bg-primary">
    <audio-player ref="AudioPlayer" @ended="checkAudio" />
    <init-view :img-loading="imgLoading" v-if="loading" />
    <v-app-bar height="50" color="rgba(var(--v-theme-primary), 0.4)" elevation="0" v-if="!loading">
      <v-row class="pl-5">
        <v-hover v-slot="{ props }">
          <v-img
            :src="$vuetify.display.mdAndUp ? logo : logoSingle"
            :max-width="$vuetify.display.mdAndUp ? 240 : 45"
            class="ml-5 logo"
            v-bind="props"
            @click="initAnimation()"
          />
        </v-hover>
      </v-row>
      <v-spacer />
      <v-btn icon @click="showQuote = !showQuote">
        <v-icon color="secondary">
          {{ showQuote ? 'mdi-card-text' : 'mdi-card-bulleted-off' }}
        </v-icon>
      </v-btn>
      <v-btn icon @click="playAudio = !playAudio">
        <v-icon color="secondary">
          {{ playAudio ? 'mdi-music' : 'mdi-music-off' }}
        </v-icon>
      </v-btn>
      <v-btn icon @click="handleFullscreen()">
        <v-icon color="secondary">
          {{ fullScreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}
        </v-icon>
      </v-btn>
    </v-app-bar>
    <image-view
      ref="ImageView"
      :show-quote="showQuote"
      @switch-fullscreen="switchFullscreen"
      @loaded="loaded = true"
      @init-animation="initAnimation()"
      v-show="!loading"
    />
    <ns-footer v-if="!loading" />
  </v-app>
</template>

<script>
import Logo from '@/assets/img/logo-transparent.png'
import LogoSingle from '@/assets/img/single-logo.png'
import { APP_TITLE, LOADING_TIMEOUT } from '@/core/config'

import AudioPlayer from './components/AudioPlayer.vue'
import NsFooter from './components/Footer.vue'
import ImageView from './components/ImageView.vue'
import InitView from './components/InitView.vue'

export default {
  name: 'App',
  components: {
    AudioPlayer,
    NsFooter,
    ImageView,
    InitView
  },
  data: () => ({ 
    fullScreen: false,
    init: true,
    loaded: false,
    logo: Logo,
    logoSingle: LogoSingle,
    showQuote: true,
    playAudio: false,
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
    },
    playAudio() {
      this.checkAudio()
    }
  },
  created() {
    this.initAnimation()
  },
  methods: {   
    checkAudio() {
      this.$refs.AudioPlayer?.pause()
      if (this.playAudio) {
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
#app .logo-rounded {
  border-radius: 0 20px 20px 0;
}
#app .logo {
  cursor: pointer;
}
#app .mobile {
  font-size: 10px !important;
}
</style>
