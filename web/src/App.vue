<template>
  <div id="app">
    <!-- atributos con `:` (props) son para tomar lo que le paso como variable, si no tiene `:` entonces lo toma como texto plano -->
    <Intro :legend="legend" />
    <Navbar />
    <Quotes v-if="showing.quotes"/>
    <Drinks v-if="showing.drinks" />
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
      showing: {
        quotes: false,
        drinks: false,
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
