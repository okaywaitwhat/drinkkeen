<template>
  <div class="row pt-4 pb-4 pt-4">
  <div class="col-lg-4 bg-dark"></div>
  <div class="col-lg-4 bg-light">
    <div>
      <h5>Nombre Bebida</h5>
      <p class="lead text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid earum porro aut saepe eos soluta, repellendus dolore unde necessitatibus explicabo id, ad esse vitae debitis. Nulla incidunt cumque ipsum assumenda!</p>
    </div>
  </div>

  <div class="col-lg-4 bg-light">
    <BeverageCard />
  </div>
  </div>
</template>

<script>
import BeverageCard from './BeverageCard'

export default {
  name: 'BeverageSheet',
  components: { BeverageCard,
  },
  data () {
    return {
      BeverageCard,
    }
  }
}
</script>

