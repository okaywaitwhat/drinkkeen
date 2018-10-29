<template>
  <div id="app">
    <!-- atributos con `:` (props) son para tomar lo que le paso como variable, si no tiene `:` entonces lo toma como texto plano -->
    <Intro v-if="!dismissedIntro" @dismissIntro="dismissIntro()"/>
    <template v-else>
      <Navbar />
      <Modal v-if="!dismissedModal" @dontDismissIntro="dontDismissIntro()" @dismissModal="dismissModal()" />
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
import Modal from './components/Modal'

const introKey = 'dismissedIntro'
const modalKey = 'dismissedModal'

export default {
  name: 'app',
  components: {
    Intro, Navbar, Foot, Modal,
  },
  data () {
    return {
      dismissedIntro: localStorage.getItem(introKey),
      dismissedModal: localStorage.getItem(modalKey),
    }
  },
  methods: {
    dismissIntro () {
      this.dismissedIntro = true
      localStorage.setItem(introKey, true)
    },
    dismissModal () {
      this.dismissedModal = true
      localStorage.setItem(modalKey, true)
    },
    dontDismissIntro () {
      this.dismissedIntro = false
      localStorage.removeItem(introKey, true)
    },
  }
}
</script>

<style lang="scss">

@import '../src/styles/main.scss';

</style>
