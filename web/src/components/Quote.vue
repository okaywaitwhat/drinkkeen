<template>
  <blockquote class="blockquote mb-0">
    <h1 class="display-4">{{ quote.quote }}</h1>
    <p class="lead">{{ quote.author }}</p>
  </blockquote>
</template>

<script>
export default {
  name: 'quote',
  props: [
    'quote'
  ]
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
</style>
