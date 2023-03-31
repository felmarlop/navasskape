<template>
  <v-row justify="end" align="end">
    <v-col :cols="$vuetify.display.mdAndUp ? 4 : 12">
      <v-expand-transition appear>
        <div v-if="quote">
          <v-card
            class="quote text-body-1 text-secondary mb-5 mx-5 px-5 pt-5 pb-5 rounded"
          >
            <v-row>
              <v-col cols="12">
                <p class="mb-4 font-weight-light" align="center">
                  {{ quote.q }}
                </p>
              </v-col>
              <v-col cols="12">
                <h4 class="subheading" align="right">
                  {{ quote.author }}
                </h4>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-expand-transition>
    </v-col>
  </v-row>
</template>

<script>
import { QUOTES } from '@/core/config'


export default {
  name: 'QuoteView',
  props: {
    index: {
      type: [Number, null],
      required: false,
      default: null
    }
  },
  data() {
    return {
      quote: null
    }
  },
  methods: {
    setQuote() {
      this.quote = QUOTES[this.index]
    },
    removeQuote() {
      this.quote = null
    }
  }
}
</script>

<style>
#app .quote {
  background: rgb(var(--v-theme-primary)); background: rgba(var(--v-theme-primary), 0.9);
}
</style>
