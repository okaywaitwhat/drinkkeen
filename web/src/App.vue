<template>
  <div id="app">
    <!-- atributos con `:` (props) son para tomar lo que le paso como variable, si no tiene `:` entonces lo toma como texto plano -->
    <Intro :legend="legend" />
    <Navbar />
    <Quotes v-if="showing.quotes"/>
    <Beverages v-if="showing.beverages" />
    <Recipes v-if="showing.recipes" />
    <Products v-if="showing.products" />
    <Login v-if="showing.login"/>
    <Foot />
  </div>
</template>

<script>
import Intro from './components/Intro'
import Navbar from './components/NavBar'
import Quotes from './components/Quotes'
import Beverages from './components/Beverages'
import Recipes from './components/Recipes'
import Products from './components/Products'
import Login from './components/Login'
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Intro, Navbar, Quotes, Beverages, Recipes, Products, Login, Foot
  },
  data () {
    return {
      showing: {
        quotes: false,
        beverages: false,
        recipes: false,
        products: false,
        login: false
      },
      legend: 'Descubre nuevas experiencias y sabores con nuestras recetas, artículos, tendencias y lo más relevante del mundo de la mixología.'
    }
  }
}
</script>

<style lang="scss">

@import '../src/styles/main.scss';

#app {
  background-color: #e9ecef;
}

</style>
