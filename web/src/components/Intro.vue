<template>
   <section :style="{'background-image': `url(${require('../assets/media/intro.jpg')})`}">  
        <div class="container">
            <a>
                <img src='../assets/media/logo.png'>
            </a>
                <p class="hidden-md hidden-lg subt-responsive">{{ legend }}</p> 
        </div>    
    </section>
</template>

<script>

export default {
  name: 'intro',
  data () {
    return {
      background: '../assets/media/intro.jpg',
      logo: '../assets/media/logo.png',
      legend: 'Descubre nuevas experiencias y sabores con nuestras recetas, artículos, tendencias y lo más relevante del mundo de la mixología.'
    }
  }
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

@media screen and (min-width: 701px) {

  p {
    font-size: 25px;
  }

  img {
    width: 600px;
  }
}

@media screen and (max-width: 700px) {

  p {
    font-size: 18px;
  }

  img {
    width: 350px;
  }
}

</style>
