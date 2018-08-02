<template>
    <section>
        <div class="jumbotron jumbotron-fluid vertical-center">
          <div class="container d-flex">
            <blockquote class="blockquote mb-0">
              <h1 class="display-4 quote-responsive"></h1>
              <p class="lead"></p>
            </blockquote>
          </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'quotes',
  data () {
    return {
     
    }
  }
}

</script>

<style scoped lang="scss">

section {
  height: 100%;
  width: 100%;
  float: center;
  background: #e9ecef;
  text-align: center;

div {
  min-height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  }
}

</style>
