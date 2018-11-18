<template>
  <div>
    <h3 class="tab-title pb-3 second-font">Ficha técnica</h3>
    <div class="b-card m-0">
      <div class="card-header lead">Presentación</div>
        <ul class="list-group list-group-flush">
          <li id="drinkVersion" class="list-group-item text-muted">{{ beverage.version }} {{ beverage.unit }}</li>
        </ul>
      <div class="card-header lead">Graduación Alcohólica</div>
        <ul class="list-group list-group-flush">
          <li id="drinkGraduation" class="list-group-item text-muted">{{ beverage.graduation }} %</li>
        </ul>
      <div class="card-header lead">Notas de cata</div>
        <ul class="list-group list-group-flush pr-4 pl-4">
          <li class="list-group-item text-muted">Vista</li>
          <li class="list-group-item text-muted">Aroma</li>
          <li class="list-group-item text-muted">Gusto</li>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
  name: 'beverageCard',
  props: [ 'beverage' ],
}

</script>

<style lang="scss" scoped>
.b-card {
  border: 0;
  li:last-child {
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
}

.list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group {
  border: 0;
}

.card-header {
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: transparent;
  border: 0;
}
</style>

