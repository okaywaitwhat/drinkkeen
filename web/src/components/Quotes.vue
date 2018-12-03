<template>
    <section class="d-flex justify-content-center align-items-center">
        <div class="row">
          <div class="offset-1 col-10">
            <!-- pasamos quote como prop -->
            <!-- el v-if es para apenas se renderiza porque quoteActual es null -->
            <Quote
              @mouseover.native="mouseOver = true"
              @mouseout.native="mouseOver = false"
              :mouseOver="mouseOver"
              :quote="quoteActual"
              v-if="quoteActual"
            />
          </div>
        </div>
    </section>
</template>

<script>
import Quote from './Quote'
import quotes from '../data/quotes.js'
import { getQuotes } from '../http.js'

export default {
  name: 'quotes',
  components: { Quote },
  data () {
    return {
      quotes: [],
      mouseOver: false,
      quoteActual: 'Carganding',
    }
  },
  created () {
    getQuotes().then(quotes => {
      this.quotes = quotes
    })
  },
  mounted () {
    /* hacemos el intervalo que seleccione y cambie una quote aleatoria */
    setInterval(() => {
      if(this.mouseOver) return
      this.quoteActual = this.getRandomQuote()
    }, 9000)
  },
  methods: {
    getRandomQuote() {
      const numeroRandom = Math.floor(Math.random() * this.quotes.length)
      return this.quotes[numeroRandom]
    }
  }
}

</script>

<style scoped lang="scss">
section {
  height: 100vh;
  overflow: hidden;
}
</style>
