<template>
  <section>
    <div class="bg row justify-content-center" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
      <div class="col-10 col-lg-6 bg-light pl-4 pr-4 mid text-justify">
        <h1 class="text-center second-font p-3"> {{ recipe.name }}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, id mollitia perspiciatis temporibus, ipsum eos velit doloremque voluptates sapiente, nobis quae magni praesentium! Ex atque consequuntur eos consectetur cumque porro!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, id mollitia perspiciatis temporibus, ipsum eos velit doloremque voluptates sapiente, nobis quae magni praesentium! Ex atque consequuntur eos consectetur cumque porro!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, id mollitia perspiciatis temporibus, ipsum eos velit doloremque voluptates sapiente, nobis quae magni praesentium! Ex atque consequuntur eos consectetur cumque porro!</p>
      </div>
    </div>

      <!-- <div class="col-12 col-lg-4 pt-5">
      <li class="border-0">Método de preparación: <span class="text-capitalize">{{ recipe.type }}</span></li>
      <li class="border-0">Cantidad de ingredientes: {{ recipe.ingredients.length }}</li>
      <li class="text-capitalize border-0">Complejidad: {{ level }}</li>
      <li class="text-capitalize border-0">Categoría: {{ recipe.family }}</li>
      </div>

    <div class="row justify-content-center p-0">
      <div class="col-12 col-lg-6">
        <h5 class="mt-3 second-font text-center">Ingredientes</h5>
        <li class="ingredient d-flex border-0 mb-3" v-for="ingredient in recipe.ingredients" :key="ingredient.ingredient">
          <span class="mr-auto pr-1 ingredient second-font">{{ ingredient.ingredient }}</span>
          <span class="flex-grow-1 mx-auto border-dotted-separator ingredient"></span>
          <span class="ml-auto pl-1 ingredient">{{ ingredient.portion }} <em>{{ ingredient.unit }}</em></span>
        </li>
      </div>

      <div class="col-12 col-lg-6">
        <h5 class="mt-3 second-font text-center">Procedimiento</h5>
        <li class="border-0" v-for="(step, index) in recipe.steps" :key="step.step"><strong>{{ index+1 }}.</strong> {{ step }}</li>
      </div>
    </div>-->
  </section>
</template>

<script>

export default {
  name: 'recipe',
  props: [ 'recipe' ],
  data: () => {
    return {
      like: false,
      level: '',
    }
  },
  computed: {
    imgPath () {
      return require ('../assets/mediarecetas/' + this.recipe.img + '.jpg')
    }
  },
  mounted () {
    if (this.recipe.steps.length > 0 && this.recipe.steps.length <=2) {
      this.level = 'Simple'
    }
    else if (this.recipe.steps.length > 2 && this.recipe.steps.length <= 4) {
      this.level = 'Moderada'
    }
    else if (this.recipe.steps.length > 4) {
      this.level = 'Alta'
    }
    //portions stuff
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'dash' && ingredient.portion > 1) {
        ingredient.unit = 'dashes'
      }
    });
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'pieza' && ingredient.portion > 1) {
        ingredient.unit = 'piezas'
      }
    });
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'cucharada' && ingredient.portion > 1) {
        ingredient.unit = 'cucharadas'
      }
    });
     this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'hoja' && ingredient.portion > 1) {
        ingredient.unit = 'hojas'
      }
    });
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'gota' && ingredient.portion > 1) {
        ingredient.unit = 'gotas'
      }
    });
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'rodaja' && ingredient.portion > 1) {
        ingredient.unit = 'rodajas'
      }
    });
  }
}

</script>

<style lang="scss" scoped>
$lg-width: 900px;
$border-color: rgba(0, 0, 0, 0.125);

.mid {
  top: 35rem;
  height: 25rem;
}

.bot {
  top: 20rem;
}

.bg {
  background-repeat: no-repeat;
  background-size: cover;
  height: 38rem;
}

section {
  min-height: 1400px;
}

li {
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border-top: 1px solid $border-color;
  text-align: left;
}

img {
  width: 100%;
}

.border-dotted-separator {
  position: relative;
  top: -6px; // pixel perfect
  border-bottom: dotted .1rem gray;
}

.list-group > li:nth-child(4) { // hardcoded 3 because of current order
  border-top: 1px solid $border-color !important;
}

</style>
