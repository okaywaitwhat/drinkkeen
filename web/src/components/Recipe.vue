<template>
  <div>
    <div  class="card card-shadow bg-light mb-3">
      <img class="card-img-top" :src="imgPath">
        <div class="card-body">
          <h4 class="card-title">{{ recipe.name }}</h4>
            <div>
<!--               <i
                v-on:click="like = !like"
                :class="{ pointer: true, fa: true, 'fa-heart-o': !like, 'fa-heart': like }"
                ></i>
              <i class="fa fa-share-alt"></i> -->
              <a v-on:click="showDetails = !showDetails, edit()" class="pointer">
                <span v-if="!showDetails">Ver receta</span>
                <span v-if="showDetails">Ocultar receta</span>
              <i
                :class="{ pointer: true, fa: true, 'fa-angle-down': !showDetails, 'fa-angle-up': showDetails }"
              ></i>
              </a>
            </div>
        </div>
        <ul class="list-group list-group-flush border-0" v-if="showDetails">
          <li class="border-0">Método de preparación: <span class="text-capitalize">{{ recipe.type }}</span></li>
          <li class="text-capitalize border-0">Complejidad: {{ level }}</li>
          <li class="text-capitalize border-0">Categoría: {{ recipe.family }}</li>
          <h5 class="dark-list mt-3">Ingredientes</h5>
          <li class="ingredient dark-list d-flex border-0 mb-3" v-for="ingredient in recipe.ingredients" :key="ingredient.ingredient">
            <span class="mr-auto pr-1 ingredient">{{ ingredient.ingredient }}</span>
            <span class="flex-grow-1 mx-auto border-dotted-separator ingredient"></span>
            <span class="ml-auto pl-1 ingredient">{{ ingredient.portion }} <em>{{ ingredient.unit }}</em></span>
          </li>
          <li class="border-0" v-for="(step, index) in recipe.steps" :key="step.step"><strong>{{ index+1 }}.</strong> {{ step }}</li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'recipe',
  props: [ 'recipe' ],
  data: () => {
    return {
      // showDetalles
      showDetails: false,
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
        this.$set(ingredient, 'unit', 'dashes')
      }
    });
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'pieza' && ingredient.portion > 1) {
        this.$set(ingredient, 'unit', 'piezas')
      }
    });
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'cucharada' && ingredient.portion > 1) {
        this.$set(ingredient, 'unit', 'cucharadas')
      }
    });
     this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'hoja' && ingredient.portion > 1) {
        this.$set(ingredient, 'unit', 'hojas')
      }
    });
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'gota' && ingredient.portion > 1) {
        this.$set(ingredient, 'unit', 'gotas')
      }
    });
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit === 'rodaja' && ingredient.portion > 1) {
        this.$set(ingredient, 'unit', 'rodajas')
      }
    });
  }
}

</script>

<style lang="scss" scoped>
$lg-width: 900px;
$border-color: rgba(0, 0, 0, 0.125);

.card {
  overflow: hidden;
  text-align: center;
  width: 100%;
  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  }
  p {
    margin: 0;
  }
  i {
    margin: 5px;
    font-size: 18px;
    transition: all .09s ease;
    &:hover {
    transform: scale(1.2);
    }
  }
}

div  a {
    font-size: 18px;
  }

h4 {
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  font-size: 27px;
}

h5 {
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  font-size: 20px;
}

span {
  font-weight: 300;
}

.ingredient {
  font-size: 16px;
  font-family: 'Playfair Display', serif;
}

.card-item {
  font-size: 15px;
}

li {
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border-top: 1px solid $border-color;
  text-align: left;
}

.dark-list {
  background-color: #f8f9fa;
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
