<template>
  <section class="bg" v-bind:style="{ 'background-image': 'url(' + imgPath + ')' }">
    <div class="mid o-hidden">
      <div class="row justify-content-center">
        <div class="col-10 col-lg-8 bg-light pl-4 pr-4 pb-4 text-justify rounded">
          <h1 class="text-center second-font pt-3 pb-2"> {{ recipe.name }}</h1>
          <h5 class="text-center second-font pb-3 text-capitalize">Coctelería {{ recipe.family }}</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, id mollitia perspiciatis temporibus, ipsum eos velit doloremque voluptates sapiente, nobis quae magni praesentium! Ex atque consequuntur eos consectetur cumque porro!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, id mollitia perspiciatis temporibus, ipsum eos velit doloremque voluptates sapiente, nobis quae magni praesentium! Ex atque consequuntur eos consectetur cumque porro!</p>

          <div class="text-center pt-4">
            <span class="p-3 lead second-font">{{ recipe.ingredients.length }} ingredientes</span>
            <span class="p-3 lead second-font">Complejidad {{ level }}</span>
          </div>
        </div>
      </div>

      <div class="row justify-content-center pt-4">
        <div class="col-12 col-lg-4">
          <h5 class="mt-3 second-font text-center">Ingredientes</h5>
          <li class="ingredient d-flex border-0 mb-3" v-for="ingredient in recipe.ingredients" :key="ingredient.ingredient">
            <span class="mr-auto pr-1 ingredient second-font">{{ ingredient.ingredient }}</span>
            <span class="flex-grow-1 mx-auto border-dotted-separator ingredient"></span>
            <span class="ml-auto pl-1 ingredient">{{ ingredient.portion }} <em>{{ ingredient.unit }}</em></span>
          </li>
        </div>

        <div class="col-12 col-lg-4">
          <h5 class="mt-3 second-font text-center">Procedimiento</h5>
          <li class="border-0" v-for="(step, index) in recipe.steps" :key="step.step"><strong>{{ index+1 }}.</strong> {{ step }}</li>
        </div>
      </div>
    </div>
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
      this.level = 'simple'
    }
    else if (this.recipe.steps.length > 2 && this.recipe.steps.length <= 4) {
      this.level = 'moderada'
    }
    else if (this.recipe.steps.length > 4) {
      this.level = 'alta'
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
  padding-top: 48%;
}

.bg {
  background-repeat: no-repeat;
  background-size: 100%;
}

li {
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border-top: 1px solid $border-color;
  text-align: left;
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
