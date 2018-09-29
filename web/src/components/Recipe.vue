<template>
  <div>
    <div  class="card card-shadow bg-light mb-3">
      <img class="card-img-top" :src="imgPath">
        <div class="card-body">
          <h5 class="card-title">{{ recipe.name }}
            <div>
              <i
                v-on:click="like = !like"
                :class="{ pointer: true, fa: true, 'fa-heart-o': !like, 'fa-heart': like }"
                ></i>
              <i class="fa fa-share-alt"></i>
              <i
                v-on:click="showDetails = !showDetails"
                :class="{ pointer: true, fa: true, 'fa-angle-down': !showDetails, 'fa-angle-up': showDetails }"
              ></i>
            </div>
          </h5>
        </div>
        <ul class="list-group list-group-flush" v-if="showDetails">
          <li>Método de preparación: <span class="text-capitalize">{{ recipe.type }}</span></li>
          <li class="text-capitalize">Categoría: {{ recipe.family }}</li>
          <li class="dark-list" v-for="ingredient in recipe.ingredients" :key="ingredient.ingredient">
            {{ ingredient.ingredient }}
            <span class="float-right">{{ ingredient.portion }} <em>{{ ingredient.unit }}</em>
            </span>
          </li>
          <li v-for="(step, index) in recipe.steps" :key="step.step"><strong>{{ index+1 }}.</strong> {{ step }}</li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'recipe',
  props: [ 'recipe' ],
  data () {
    return {
      // showDetalles
      showDetails: false,
      like: false,
    }
  },
   computed: {
    imgPath () {
      return require ('../assets/mediarecetas/' + this.recipe.img + '.jpg')
    }
  },

}
</script>

<style lang="scss" scoped>
$lg-width: 900px;

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
    margin: 3px;
    font-size: 15px;
    transition: all .09s ease;
    &:hover {
    transform: scale(1.2);
    }
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

.dark-list {
  background-color: #f8f9fa;
}

</style>


