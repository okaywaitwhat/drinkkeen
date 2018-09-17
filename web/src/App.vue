<template>
  <div id="app">
    <!-- atributos con `:` (props) son para tomar lo que le paso como variable, si no tiene `:` entonces lo toma como texto plano -->
    <Intro v-if="!dismissedIntro" @click.native="dismissIntro()"/>
    <template v-else>
      <Navbar />
      <!-- definimos el router y adentro el mismo se encarga de mostrar lo que queremos para cada ruta -->
      <router-view class="view"></router-view>
      <Foot />
    </template>
  </div>
</template>

<script>
import Intro from './components/Intro'
import Foot from './components/Foot'
import Navbar from './components/NavBar'

const introKey = 'dismissedIntro'

export default {
  name: 'app',
  components: {
    Intro, Navbar, Foot
  },
  data () {
    return {
      dismissedIntro: localStorage.getItem(introKey)
    }
  },
  methods: {
    dismissIntro () {
      this.dismissedIntro = true
      localStorage.setItem(introKey, true)
    }
  }
}
</script>

<style lang="scss">

@import '../src/styles/main.scss';


</style>
