<template>
  <div>
    <blockquote class="blockquote mb-0">
      <h1 class="display-4 second-font">“ {{ quote.quote }} ”</h1>
      <p class="lead second-font">{{ quote.author }}</p>
    </blockquote>
    <div class="social-share flipInX" v-if="mouseOver">
      <!-- target="_blank" es para abrir un link en una tab nueva y no en la misma -->
      <a href="" target="_blank"><i class="fa fa-facebook text-light bg-dark pointer"></i></a>
      <a href="" target="_blank"><i class="fa fa-twitter text-light bg-dark pointer"></i></a>
      <a href="" target="_blank"><i class="fa fa-instagram text-light bg-dark pointer"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quote',
  props: [ 'quote', 'mouseOver' ],
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 701px) {
  h1 {
    font-size: 50px;
  }
}
@media screen and (max-width: 700px) {
  h1 {
    font-size: 30px;
  }
}

blockquote {
  text-align: center;
}

.social-share {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  a {
    text-decoration: none;
    i {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin: 10px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
