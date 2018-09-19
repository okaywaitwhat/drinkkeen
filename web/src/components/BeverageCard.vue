<template>
  <div>
    <h5>Ficha técnica</h5>
    <div class="card m-0">
      <div class="card-header">Presentación</div>
        <ul class="list-group list-group-flush">
          <li id="drinkVersion" class="list-group-item">1234</li>
        </ul>
      <div class="card-header">Graduación Alcoholica</div>
        <ul class="list-group list-group-flush">
          <li id="drinkGraduation" class="list-group-item">1234</li>
        </ul>
      <div class="card-header">Notas de cata</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Vista</li>
          <li class="list-group-item">Aroma</li>
          <li class="list-group-item">Gusto</li>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
  name: 'beverageCard',
}

</script>
