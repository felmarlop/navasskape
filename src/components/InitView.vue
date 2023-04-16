<template>
  <v-row class="d-flex" align="center" justify="center">
    <v-col cols="12" align="center" class="px-10">
      <v-img :src="logo" max-width="700" class="logo-rounded mb-5" @load="onIconLoad" />
      <span class="font-weight-light text-secondary text-body-2 pl-5" :class="{ mobile: !$vuetify.display.mdAndUp }" v-if="iconLoaded">
        DESCONECTA<span class="points ml-2">·..</span><v-icon class="mb-3">mdi-power-plug mdi-rotate-45</v-icon><br />LAS NAVAS DE LA CONCEPCIÓN, SEVILLA
      </span>
      <div class="d-flex align-center justify-center fill-height mt-10" v-if="imgLoading">
        <v-progress-circular color="secondary" indeterminate :width="4" :size="25" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '@/assets/img/logo.png'

export default {
  name: 'InitView',
  props: {
    imgLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      iconLoaded: false,
      logo: Logo
    }
  },
  created() {
    this.iconLoaded = false
  },
  methods: {
    onIconLoad() {
      return this.iconLoaded = true
    }
  }
}
</script>
<style>
#app .v-row span {
  animation: fade-in 1s ease;
}
#app .v-row span.points {
  font-weight: bold;
  font-size: 1.5em;
  margin-right: -2px;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
