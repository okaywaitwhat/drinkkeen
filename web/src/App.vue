<template>
  <div id="app">
    <Intro v-if="showIntro" @dismissIntro="dismissIntro"/>
    <template v-else>
      <Navbar />
      <Modal v-if="showModal" @dontDismissIntro="reset" @dismissModal="dismissModal" />
      <!-- definimos el router y adentro el mismo se encarga de mostrar lo que queremos para cada ruta -->
      <router-view class="view"></router-view>
      <Foot />
    </template>
  </div>
</template>

<script>
import Intro from './views/app/Intro'
import Foot from './views/app/Foot'
import Navbar from './views/app/NavBar'
import Modal from './views/app/Modal'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Intro, Navbar, Foot, Modal,
  },
  computed: {
    ...mapGetters({
      showIntro: 'intro/showIntro',
      showModal: 'intro/showModal',
    })
  },
  methods: {
    ...mapMutations({
      dismissIntro: 'intro/dismissIntro',
      dismissModal: 'intro/dismissModal',
      reset: 'intro/reset',
    })
  }
}
</script>

<style lang="scss">

@import '../src/styles/main.scss';

</style>
