<template>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <Aviso :post="aviso" v-for="aviso in posts" :key="aviso.title" />
          </div>

          <div class="col-lg-5">
            <span><h4 class="card-title">Crear aviso</h4></span>
            <Form />
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Aviso from './Aviso'
import Form from './OfferForm'
import posts from '../data/jobsposts.js';

export default {
  name: 'empleo',
  components: {
    Aviso, Form,
  },
  data () {
    return {
      posts,
    }
  }
}
</script>

<style scoped lang="scss">
section {
  padding-top: 4rem;
  min-height: 100%;
  width: 100%;
}

.container {
    max-width: 1250px;
}
</style>
