<template>
  <v-footer color="primary" class="font-weight-light text-overlay p-0" flat tile>
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
</style>
