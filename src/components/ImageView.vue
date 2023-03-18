<template>
  <v-layout>
    <transition name="fade">
      <v-img
        :key="img"
        :src="img"
        :height="imgHeight"
        :max-height="imgHeight"
        min-height="600px"
        class="align-end justify-end"
        cover
        @load="onImgLoad"
      >
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular color="secondary" indeterminate />
          </div>
        </template>
        <quote-view ref="quoteView" v-show="showQuote" />
      </v-img>
    </transition>
  </v-layout>
</template>

<script>
import { sample } from 'lodash'

import { INTERVAL_TIME } from '@/core/config'

import QuoteView from './QuoteView.vue'

export default {
  name: 'HomeView',
  components: {
    QuoteView
  },
  props: {
    showQuote: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      cached: null,
      images: require.context('@/assets/img/media/', false).keys(),
      imgHeight: this.getImageWidth(),
      isMobile: false,
      imgIndex: -1,
      img: null
    }
  },
  mounted() {
    const context = this
    this.isMobile = this.$vuetify.display.mobile
    // New image height when the screen changes
    window.addEventListener('resize', function() {
      if (context.$vuetify.display.mobile != context.isMobile) {
        context.imgHeight = context.getImageWidth()
        context.isMobile = context.$vuetify.display.mobile
      }
    }, true)
  },
  async created() {
    this.img = this.getImageUrl()
    this.setImageUrl()
  },
  methods: {
    getImageUrl() {
      let imgReturned = null

      if (this.cached) {
        imgReturned = this.cached
      } else {
        this.imgIndex = this.images.indexOf(sample(this.images))
        imgReturned = require(`@/assets/img/media/${this.images[this.imgIndex].split('/')[1]}`)
      }

      // Cache next image
      this.imgIndex = (this.imgIndex + 1 >= this.images.length) ? 0 : this.imgIndex + 1
      this.cached = require(`@/assets/img/media/${this.images[this.imgIndex].split('/')[1]}`)

      return imgReturned
    },
    getImageWidth() {
      return window.innerHeight
    },
    onImgLoad() {
      const context = this
      setTimeout(function() {
        if (context.$refs?.quoteView) {
          context.$refs.quoteView.setQuote()
        }
      }, 1000)
    },
    setImageUrl() {
      const context = this
      setInterval(function() {
        context.img = null
        if (context.$refs?.quoteView) {
          context.$refs.quoteView.removeQuote()
        }
        setTimeout(function() { context.img = context.getImageUrl() })
      }, INTERVAL_TIME)
    }
  }
}
</script>

<style>
#app .v-layout img {
  animation: zoom-in 60s ease infinite;
}
@keyframes zoom-in {
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.5, 1.5);
  }
}
</style>
