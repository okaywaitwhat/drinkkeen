<template>
    <section>
        <div class="jumbotron jumbotron-fluid vertical-center">
          <div class="container d-flex">
            <blockquote class="blockquote mb-0">
              <h1 class="display-4"></h1>
              <p class="lead"></p>
            </blockquote>
          </div>
        </div>
    </section>
</template>

<script>

import quotes from '../data/quotes.js'

export default {
  name: 'quotes',
  data () {
    return {
     quotes
    }
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

@media screen and (min-width: 701px) {
  h1 {
    font-size: 50px;
  }
}

@media screen and (max-width: 700px) {
  h1 {
    font-size: 30px;
  }
}
</style>
