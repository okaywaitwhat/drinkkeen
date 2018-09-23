<template>
    <div class="bg-white d-flex flex-column justify-content-center spaced">
      <div class="row bg-light">
        <div class="col-lg-7">
          <h3>{{category.name}}</h3>
          <p class="text-justify pr">{{category.description}}</p>
        </div>
        <div class="col-lg-5 bg-dark"></div>
      </div>
    </div>
</template>

<script>

export default {
  name: "categorysheet",
  props: [ 'category' ],
}
</script>

<style lang="scss" scoped>
.spaced {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>


