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

// variables para el localStorage
const lsKeys = {
  intro: 'hiddenIntro',
  modal: 'hiddenModal'
}

export default {
  name: 'app',
  components: {
    Intro, Navbar, Foot, Modal,
  },
  data () {
    return {
      // 1. se carga la pagina y buscamos los valores en localStoage
      //   a. si el valor no esta, entonces `dismissedIntro: undefined`
      //   b. si el valor esta, entonces `dismissedIntro: 'true'`
      dismissedIntro: localStorage.getItem(lsKeys.intro),
      dismissedModal: localStorage.getItem(lsKeys.modal),
    }
  },
  methods: {
    dismissIntro () {
      // cuando dismiseamos, actualizamos los valores en ambos lados
      // 1. this.dismissedIntro, porque actualizamos Vue
      // 2. localStorage.setItem, porque actualizamos el localStorage
      this.dismissedIntro = true
      localStorage.setItem(lsKeys.intro, true)
    },
    dismissModal () {
      this.dismissedModal = true
      localStorage.setItem(lsKeys.modal, true)
    },
    dontDismissIntro () {
      this.dismissedIntro = false
      localStorage.removeItem(lsKeys.intro)
    },
  }
}
</script>

<style lang="scss">

@import '../src/styles/main.scss';

</style>
