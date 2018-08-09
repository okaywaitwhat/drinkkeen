<template>
  <div id="app">
    <!-- atributos con `:` (props) son para tomar lo que le paso como variable, si no tiene `:` entonces lo toma como texto plano -->
    <Intro :legend="legend" />
    <Navbar />
    <Quotes v-if="showQuotes"/>
    <Drinks v-if="showDrinks" />
    <Recipes v-if="showRecipes" />
    <Products v-if="showProducts" />
    <Login v-if="showLogin"/>
    <Foot />
  </div>
</template>

<script>
import Intro from './components/Intro'
import Navbar from './components/NavBar'
import Quotes from './components/Quotes'
import Drinks from './components/Drinks'
import Recipes from './components/Recipes'
import Products from './components/Products'
import Login from './components/Login'
import Foot from './components/Foot'

export default {
  name: 'app',

  components: {
    Intro, Navbar, Quotes, Drinks, Recipes, Products, Login, Foot
  },
  data () {
    return {
      showQuotes: true,
      showDrinks: false,
      showRecipes: false,
      showProducts: false,
      showLogin: false,
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
