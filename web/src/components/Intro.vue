<template>
   <section :style="{'background-image': `url(${require('../assets/media/intro.jpg')})`}">
        <div class="container">
          <a>
            <img class="pointer" src='../assets/media/lglogo.png'>
          </a>
          <!-- legend viene de prop @ App.vue -->
        </div>
        <div class="fixed-bottom pb-4 pointer">
          <a class="fa fa-chevron-down clickMe"></a>
        </div>
    </section>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      legend: 'Descubre nuevas experiencias y sabores con nuestras recetas, artículos, tendencias y lo más relevante del mundo de la mixología.',
    }
  },
}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  text-align: center;
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #f8f9fa;
  font-weight: 150;
}

.container {
  max-width: 50rem;
}

a {
  font-weight: 300;
  font-size: 2.5rem;
}

@media screen and (min-width: 701px) {
  img {
    width: 500px;
  }
  p {
    font-size: 20px;
  }
}

@media screen and (max-width: 700px) {
  img {
    width: 250px;
  }
  p {
    font-size: 15px;
  }
}
</style>
