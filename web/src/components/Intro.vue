<template>
   <section :style="{'background-image': `url(${require('../assets/media/intro.jpg')})`}">
        <div class="container">
          <a>
            <img class="pointer" src='../assets/media/logo.png'>
          </a>
          <!-- legend viene de prop @ App.vue -->
          <p class="subt-responsive"></p>
        </div>
    </section>
</template>

<script>

export default {
  name: 'intro',
  data () {
    return {
      background: '../assets/media/intro.jpg',
      logo: '../assets/media/logo.png'
    }
  },
}

</script>

<style scoped lang="scss">

section {
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  float: center;
  background-size: cover;
  text-align: center;
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #f8f9fa;
  font-weight: 100;
}

@media screen and (min-width: 701px) {
  img {
    width: 500px;
  }
}

@media screen and (max-width: 700px) {
  img {
    width: 250px;
  }
}

</style>
