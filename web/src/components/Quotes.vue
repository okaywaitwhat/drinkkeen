<template>
    <section>
        <div class="jumbotron-fluid">
          <div class="container">
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
      quoteActual: null,
    }
  },
  mounted () {
    /* hacemos el intervalo que seleccione y cambie una quote aleatoria */
    setInterval(() => {
      const numeroRandom = Math.floor(Math.random() * quotes.length)
      this.quoteActual = quotes[numeroRandom]
    }, 9000)
  }
}

</script>

<style scoped lang="scss">
section {
  float: center;

div {
  min-height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  }
}
 .container {
   margin-left: 200px;
   margin-right: 200px;
 }
</style>
