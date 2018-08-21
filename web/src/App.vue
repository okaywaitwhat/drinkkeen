<template>
  <div id="app">
    <!-- atributos con `:` (props) son para tomar lo que le paso como variable, si no tiene `:` entonces lo toma como texto plano -->
    <Intro :legend="legend" />
    <Navbar />
    <!-- definimos el router y adentro el mismo se encarga de mostrar lo que queremos para cada ruta -->
    <router-view></router-view>
    <Foot />
  </div>
</template>

<script>
import Intro from './components/Intro'
import Foot from './components/Foot'
import Navbar from './components/NavBar'

export default {
  name: 'app',
  components: {
    Intro, Navbar, Foot
  },
  data () {
    return {
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
