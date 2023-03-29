<template>
  <v-layout id="main">
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
        <quote-view ref="quoteView" :index="qIndex" v-show="showQuote" />
      </v-img>
    </transition>
  </v-layout>
</template>

<script>
import { random, sample } from 'lodash'

import { INTERVAL_TIME, QUOTES } from '@/core/config'

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
      isLong: false,
      imgIndex: -1,
      img: null,
      qIndex: random(QUOTES.length - 1)
    }
  },
  mounted() {
    const context = this
    this.isLong = this.$vuetify.display.mdAndUp
    // New image height when the screen changes
    window.addEventListener('resize', function() {
      if (context.$vuetify.display.mdAndUp != context.isLong) {
        context.imgHeight = context.getImageWidth()
        context.isLong = context.$vuetify.display.mdAndUp
      }
    }, true)
    window.addEventListener('fullscreenchange', function() {
      context.imgHeight = context.getImageWidth()
      context.$emit('switchFullscreen')
    }, true)
  },
  async created() {
    this.img = this.getImageUrl()
    this.setImageUrl()
  },
  methods: {
    cacheImage(uri) {
      let img = new Image()
      let l = []
      img.onload = function() {
        l = []
      }
      l.push(uri)
      img.src = uri
    },
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
      this.cacheImage(this.cached)

      return imgReturned
    },
    getImageWidth() {
      return window.innerHeight
    },
    onImgLoad() {
      const context = this
      setTimeout(function() {
        context.refreshQuote()
      }, 1000)
    },
    setImageUrl() {
      const context = this
      setInterval(function() {
        if (context.$refs?.quoteView) {
          context.$refs.quoteView.removeQuote()
        }
        context.img = context.getImageUrl()
      }, INTERVAL_TIME)
    },
    refreshQuote() {
      if (this.qIndex == QUOTES.length - 1) {
        this.qIndex = 0
      } else {
        this.qIndex++
      }
      if (this.$refs?.quoteView) {
        this.$refs.quoteView.setQuote()
      }
    }
  }
}
</script>

<style>
#app #main img {
  animation: zoom-in 60s ease infinite;
}
#app #main .fade-enter-active{
  transition: opacity 1s ease;
}
#app #main .fade-leave-active {
  opacity: 0;
}
#app #main .fade-enter-from,
#app #main .fade-leave-to {
  opacity: 0;
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