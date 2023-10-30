<template>
  <v-layout id="main">
    <transition name="fade">
      <v-img
        :key="img"
        :src="img"
        :height="imgHeight"
        :max-height="imgHeight"
        class="align-end justify-end"
        cover
        @load="refreshQuote"
      >
        <v-btn
          variant="text"
          class="text-overlay"
          size="x-large"
          icon
          style="bottom: 40%; left: 2px; position: absolute"
          @click="setImageUrl(true)"
        >
          <v-icon color="secondary" size="large" icon="mdi-chevron-left" />
        </v-btn>
        <v-btn
          variant="text"
          class="text-overlay"
          size="x-large"
          icon
          style="bottom: 40%; right: 2px; position: absolute"
          @click="setImageUrl(false, true)"
        >
          <v-icon color="secondary" size="large" icon="mdi-chevron-right" />
        </v-btn>
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular color="secondary" indeterminate :width="4" :size="25" />
          </div>
        </template>
        <quote-view ref="quoteView" :index="qIndex" v-show="showQuote" />
      </v-img>
    </transition>
  </v-layout>
</template>

<script>
import { random, sample } from 'lodash'

import { IMG_COUNTER_ANIMATION, INTERVAL_TIME, QUOTES } from '@/core/config'

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
      counter: 0,
      intv: null,
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
    getImageUrl(prev) {
      let imgReturned = null
      let imgLen = this.images.length
      let context = this
      let img = new Image()
      if (this.cached && !prev) {
        imgReturned = this.cached
      } else {
        if (prev && this.imgIndex >= 0) {
          this.imgIndex = (this.imgIndex - 2 < 0) ? imgLen - 1 : this.imgIndex - 2
        } else {
          this.imgIndex = this.images.indexOf(sample(this.images))
        }
        imgReturned = require(`@/assets/img/media/${this.images[this.imgIndex].split('/')[1]}`)
        img.onload = function() {
          context.$emit('loaded')
        }
        img.src = imgReturned
      }

      // Cache next image
      this.imgIndex = (this.imgIndex + 1 >= imgLen) ? 0 : this.imgIndex + 1
      this.cached = require(`@/assets/img/media/${this.images[this.imgIndex].split('/')[1]}`)
      this.cacheImage(this.cached)

      return imgReturned
    },
    getImageWidth() {
      return window.innerHeight
    },
    setImageUrl(prev, next) {
      const context = this
      this.counter = 0
      clearInterval(this.intv)
      this.intv = setInterval(function() {
        context.counter++
        if (context.counter >= IMG_COUNTER_ANIMATION) {
          context.counter = 0
          context.$emit('initAnimation', 10000)
        }
        if (context.$refs?.quoteView) {
          context.$refs.quoteView.removeQuote()
        }
        context.img = context.getImageUrl()
      }, INTERVAL_TIME)
      if (prev || next) {
        this.img = this.getImageUrl(prev)
      }
    },
    refreshQuote() {
      if (this.qIndex == QUOTES.length - 1) {
        this.qIndex = 0
      } else {
        this.qIndex++
      }
      if (this.$refs?.quoteView) {
        const context = this
        setTimeout(function() {
          context.$refs.quoteView.setQuote()
        }, 1000)
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
