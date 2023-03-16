<template>
  <v-app>
    <audio-player ref="AudioPlayer" @ended="checkAudio" />
    <init-view v-if="loading" />
    <v-app-bar height="50" color="rgba(var(--v-theme-primary), 0.4)" elevation="0" v-if="!loading">
      <v-row class="pl-5">
        <v-hover v-slot="{ props }">
          <v-img
            :src="$vuetify.display.mobile ? logoEagle : logo"
            :max-width="$vuetify.display.mobile ? 40 : 240"
            class="ml-5 logo"
            v-bind="props"
            @click="initAnimation()"
          />
        </v-hover>
      </v-row>
      <v-spacer />
      <v-btn icon>
        <v-icon color="secondary" @click="showQuote = !showQuote">
          {{ showQuote ? 'mdi-message-bulleted' : 'mdi-message-bulleted-off' }}
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="secondary" @click="playAudio = !playAudio">
          {{ playAudio ? 'mdi-music' : 'mdi-music-off' }}
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-layout v-if="!loading">
      <home-view :show-quote="showQuote" />
    </v-layout>
    <v-footer
      color="primary"
      class="font-weight-light text-overlay p-0"
      flat
      tile
      v-if="!loading"
    >
      <v-col class="text-center" cols="12">
        <span>
          {{ title }} &copy; {{ new Date().getFullYear() }} -
          <a
            href="https://www.linkedin.com/in/f%C3%A9lix-mart%C3%ADn-866245b9/"
            class="text-overlay"
            target="_blank"
          >
            &#64; Félix Martín
          </a>
        </span>
        <br />
        <span>Las Navas de la Concepción, Sevilla</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Song from '@/assets/audio/instant_crush.mp3'
import LogoEagle from '@/assets/img/logo-eagle.png'
import Logo from '@/assets/img/logo-transparent.png'
import { APP_TITLE, LOADING_TIMEOUT } from '@/core/config'

import AudioPlayer from './components/AudioPlayer.vue'
import HomeView from './components/HomeView.vue'
import InitView from './components/InitView.vue'

export default {
  name: 'App',
  components: {
    AudioPlayer,
    HomeView,
    InitView
  },
  data: () => ({ 
    loading: true,
    logo: Logo,
    logoEagle: LogoEagle,
    showQuote: true,
    song: Song,
    playAudio: false,
    title: APP_TITLE
  }),
  watch: {
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
    initAnimation() {
      this.loading = true
      const context = this
      setTimeout(function() {
        context.loading = false
      }, LOADING_TIMEOUT)
    }
  }
}
</script>

<style>
#app, #app .text-body-2 {
  font-family: 'Roboto', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
#app footer {
  font-size: 11px;
  max-height: 80px !important;
} 
#app footer a {
  text-decoration: none;
  font-weight: bold;
}
</style>
