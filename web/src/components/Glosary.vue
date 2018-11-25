<template>
  <section class="bg">
    <div class="mid pb-5">
      <div class="row justify-content-center">
        <div class="col-10 col-lg-8 bg-light pl-4 pr-4 pb-4 text-justify">
          <h1 class="text-center second-font m-0 p-4">Glosario</h1>
            <div class="p-4" v-for="item in words" :key="item.word">
              <h5 class="second-font"> {{item.word}} </h5>
              <span class="mr-auto pr-1"> {{ item.mean }} </span>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import words from '../data/glosario.js';

export default {
  name: 'glosario',
  data: () => {
    return {
      words,
    }
  },
}
</script>

<style lang="scss" scoped>
$lg-width: 900px;
$border-color: rgba(0, 0, 0, 0.125);

.mid {
  padding-top: 35%;
}

.bg {
  background-image: url("../assets/media/login.jpg");
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
