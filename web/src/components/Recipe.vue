<template>
    <div>
        <div  class="card card-shadow bg-light mb-3">
            <img class="card-img-top" :src="imgPath">
                <div class="card-body">
                    <h5 class="card-title">{{ recipe.name }}</h5>
                    <p class="font-italic text-capitalize">{{ recipe.family }} / {{ recipe.type }}</p>
                      <section class="btn-group-toggle" data-toggle="button">
                        <button v-on:click="showIngredients = !showIngredients" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" class="btn btn-light btn-sm">Ingredientes</button>
                        <button v-on:click="showSteps = !showSteps" type="button" data-toggle="button" aria-pressed="false" autocomplete="off" class="btn btn-light btn-sm">Procedimiento</button>
                      </section>
                </div>
                    <ul class="list-group list-group-flush" v-if="showIngredients">
                      <li v-for="ingredient in recipe.ingredients" :key="ingredient.ingredient">{{ ingredient.ingredient }}<span style="float: right;">{{ ingredient.portion }} {{ ingredient.unit }}</span></li>
                    </ul>
                    <ul class="list-group list-group-flush" v-if="showSteps">
                      <li v-for="step in recipe.steps" :key="step.step">{{ step }}</li>
                    </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'recipe',
  data () {
    return {
      showIngredients: false,
      showSteps: false,
    }
  },
  props: [
    'recipe',
  ],
   computed: 
  { imgPath: function () { 
    return require ('../assets/mediarecetas/' + this.recipe.img + '.jpg') 
    } 
  },
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


