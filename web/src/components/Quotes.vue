<template>
    <section class="d-flex justify-content-center align-items-center">
        <div class="row">
          <div class="offset-1 col-10">
            <!-- pasamos quote como prop -->
            <!-- el v-if es para apenas se renderiza porque quoteActual es null -->
            <Quote :quote="quoteActual" v-if="quoteActual" />
          </div>
        </div>
    </section>
</template>

<script>
import Quote from './Quote'
import quotes from '../data/quotes.js'

export default {
  name: 'quotes',
  components: { Quote },
  data () {
    return {
      quoteActual: getRandomQuote(),
    }
  },
  mounted () {
    /* hacemos el intervalo que seleccione y cambie una quote aleatoria */
    setInterval(() => {
      this.quoteActual = getRandomQuote()
    }, 9000)
  }
}

function getRandomQuote() {
  const numeroRandom = Math.floor(Math.random() * quotes.length)
  return quotes[numeroRandom]
}

</script>

<style scoped lang="scss">
section {
  height: 100vh;
  overflow: hidden;
}
</style>
