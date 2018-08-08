<template>
   <section :style="{'background-image': `url(${require('../assets/media/intro.jpg')})`}" v-if="seen">  
        <div class="container">
          <a>
            <img src='../assets/media/logo.png' v-on:click="seen = !seen">
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
      seen: true,
      background: '../assets/media/intro.jpg',
      logo: '../assets/media/logo.png'
    }
  },
  props: [
    'legend'
  ]
}

</script>

<style scoped>

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

img {
  cursor: pointer;
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
