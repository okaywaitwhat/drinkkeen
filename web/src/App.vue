<template>
  <div id="app">
    <intro></intro>
    <navbar></navbar>
    <quotes></quotes>
    <login></login>
    <foot></foot>
  </div>
</template>

<script>
import intro from './components/Intro'
import navbar from './components/NavBar'
import quotes from './components/Quotes'
import login from './components/Login'
import foot from './components/Foot'


export default {
  name: 'app',
  components: {
    intro, navbar, quotes, login, foot,
  }
}
</script>

<style lang="scss">

@import '../src/styles/main.scss';

#app {
  background-color: #e9ecef;
}

</style>
