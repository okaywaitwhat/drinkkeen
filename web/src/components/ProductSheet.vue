<template>
  <section>
    <div class="container text-center">
      <div class="row p-4">
        <div class="col-lg-6">
          <img class="pointer slideInLeft" src="../assets/mediaproductos/barroll3-min.jpg">
        </div>
        <div class="col-lg-6">
          <h3>{{ productId }}</h3>
          <p class="text-muted mb-4">Porta herramientas de coctelería</p>
          <p>Estuche para coctelería ideal para transportar y guardar herramientas. Confeccionado en tropical mecánico y batista con interior impermeable.</p>
          <h3 class="mb-4">$690</h3>
          <button type="button" class="btn btn-dark">Reservar</button> <!-- unbind -->
        </div>
      </div>
    </div>

    <!-- <div class="col-lg-12 gradient"></div>
    <div class="col-lg-12 gradient"></div>
    <div class="col-lg-12 gradient">
      <div class="container text-center">
        <h5 class="mt-5 mb-4">Especificaciones:</h5>
        <p>Dolorem ab asperiores est non similique necessitatibus possimus eos. Eaque?</p>
        <p>Officiis, reprehenderit commodi, esse nobis atque eveniet facere error vitae aspernatur quis.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Dolorem ab asperiores est non similique necessitatibus possimus eos. Eaque?</p>
        <p>Officiis, reprehenderit commodi, esse nobis atque eveniet facere error vitae aspernatur quis.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </div> -->

  </section>
</template>

<script>
export default {
  name: 'productsheet',
  props: [
    'productId'
  ],
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
    margin-bottom: 3rem;
  }
}

.container {
  max-width: 900px;
}
</style>


