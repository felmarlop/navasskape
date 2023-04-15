<template>
  <v-footer color="primary" class="font-weight-light text-overlay" flat tile>
    <v-col class="text-center py-1" cols="12">
      <span>
        {{ title }} &copy; {{ new Date().getFullYear() }}
        <a
          href="https://www.linkedin.com/in/f%C3%A9lix-mart%C3%ADn-866245b9/"
          class="ml-2 text-overlay"
          target="_blank"
        >
          &#64;f_martin7
        </a>
      </span>
    </v-col>
  </v-footer>
</template>

<script>
import { APP_TITLE } from '@/core/config'

export default {
  name: 'NsFooter',
  data: () => ({ 
    title: APP_TITLE
  })
}
</script>

<style>
#app footer {
  font-size: 11px;
  max-height: 80px !important;
} 
#app footer a {
  text-decoration: none;
  font-weight: bold;
}
#app footer a:hover {
  color: rgba(var(--v-theme-secondary)) !important;
}
</style>
