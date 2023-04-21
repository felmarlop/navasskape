<template>
  <v-app-bar height="50" color="rgba(var(--v-theme-primary), 0.4)" elevation="0">
    <v-row class="pl-5">
      <v-hover v-slot="{ props }">
        <v-img
          :src="$vuetify.display.mdAndUp ? logo : logoSingle"
          :max-width="$vuetify.display.mdAndUp ? 240 : 45"
          class="ml-5 logo"
          v-bind="props"
          @click="$emit('initAnimation')"
        />
      </v-hover>
    </v-row>
    <v-spacer />
    <v-btn icon @click="$emit('switchShowquote')">
      <v-icon color="secondary">
        {{ showQuote ? 'mdi-card-text' : 'mdi-card-bulleted-off' }}
      </v-icon>
    </v-btn>
    <v-btn icon @click="playAudio = !playAudio">
      <v-icon color="secondary">
        {{ playAudio ? 'mdi-music' : 'mdi-music-off' }}
      </v-icon>
    </v-btn>
    <v-btn icon @click="$emit('handleFullscreen')">
      <v-icon color="secondary">
        {{ fullScreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Logo from '@/assets/img/logo-transparent.png'
import LogoSingle from '@/assets/img/single-logo.png'

export default {
  name: 'NsHeader',
  props: {
    fullScreen: {
      type: Boolean,
      required: false,
      default: false
    },
    showQuote: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: () => ({ 
    logo: Logo,
    logoSingle: LogoSingle,
    playAudio: false
  }),
  watch: {
    playAudio(v) {
      this.$emit('checkAudio', v)
    }
  }
}
</script>

<style>
#app .logo {
  cursor: pointer;
}
</style>
