<template>
    <section>
        <div class="jumbotron jumbotron-fluid vertical-center">
          <div class="container d-flex">
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
      quoteActual: null
    }
  },
  mounted () {
    /* hacemos el intervalo que seleccione y cambie una quote aleatoria */
    setInterval(() => {
      const numeroRandom = Math.floor(Math.random() * quotes.length)
      this.quoteActual = quotes[numeroRandom]
    }, 1000)
  }
}

</script>

<style scoped lang="scss">
section {
  height: 100%;
  width: 100%;
  float: center;
  background: #e9ecef;
  text-align: center;

div {
  min-height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  }
}

</style>
