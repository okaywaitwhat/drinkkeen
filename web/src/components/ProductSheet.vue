<template>
  <section>
    <div class="container text-center">
      <div class="row p-4">
        <div class="col-lg-6">
          <img class="pointer" src="../assets/mediaproductos/barroll1-min.jpg">
        </div>
        <div class="col-lg-6">
          <h3>Nombre</h3>
          <p class="text-muted mb-4">La de da de da de da de day oh!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora harum culpa corrupti vitae minima non hic ullam suscipit amet, molestiae repellat illum ea ratione mollitia asperiores accusantium labore unde cumque!</p>
          <h3 class="mb-4">$9.99</h3>
          <button type="button" class="btn btn-dark">Preorder</button> <!-- unbind -->
        </div>
      </div>
    </div>
    <div class="col-lg-12 gradient"></div>
    <div class="col-lg-12 gradient"></div>
    <div class="col-lg-12 gradient"></div>
  </section>
</template>

<script>
export default {
  name: 'productsheet',
}
</script>

<style lang="scss" scoped>

.gradient {
  height: 400px;
  background-image: linear-gradient(to bottom, #ffff, #f8f9fa);
  border-top: 1px solid #f1f4f5;
}

.col-lg-6 {
  img {
    width: 20rem;
    border-radius: 50%;
  }
}

.container {
  max-width: 900px;
}

</style>


