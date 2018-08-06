<template>
  <div id="app">
    <Intro />
    <Navbar />
    <Quotes />
    <Login />
    <Foot />
  </div>
</template>

<script>
import Intro from './components/Intro'
import Navbar from './components/NavBar'
import Quotes from './components/Quotes'
import Login from './components/Login'
import Foot from './components/Foot'


export default {
  name: 'app',
  components: {
    Intro, Navbar, Quotes, Login, Foot,
  }
}
</script>

<style lang="scss">

@import '../src/styles/main.scss';

#app {
  background-color: #e9ecef;
}

</style>
