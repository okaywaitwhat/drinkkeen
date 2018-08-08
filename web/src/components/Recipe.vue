<template>
    <div>
        <div  class="card card-shadow bg-light mb-3">
            <img class="card-img-top" src='../assets/mediarecetas/mojito.jpg'>
                <div class="card-body">
                    <h5 class="card-title">{{ recipe.name }}</h5>
                    <p class="font-italic text-capitalize">{{ recipe.family }} / {{ recipe.type }}</p>
                      <section class="btn-group-toggle" data-toggle="button">
                        <button type="button" data-toggle="button" aria-pressed="false" autocomplete="off" class="btn btn-light btn-sm">Ingredientes</button>
                        <button type="button" data-toggle="button" aria-pressed="false" autocomplete="off" class="btn btn-light btn-sm">Procedimiento</button>
                      </section>
                </div>
                    <ul class="list-group list-group-flush">
                      <li>Ingredient<span style="float: right;">Q</span></li>
                    </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'recipe',
  props: [
    'recipe'
  ]
}
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  text-align: center;
  width: 100%;

  &:hover {
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    }
  }

  .card-item {
    font-size: 15px;
  }
    li {
      display: block;
      padding: 0.75rem 1.25rem;
      margin-bottom: -1px;
      background-color: #fff;
      border-top: 1px solid rgba(0, 0, 0, 0.125);
      text-align: left;
    }

</style>


