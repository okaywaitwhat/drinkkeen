<template>
  <section class="d-flex">
    <figure class="big-img d-inline-block">
      <img class="rounded h-100 w-100" src="../assets/mediarecetas/square.jpg">
    </figure>
    <div class="previews-wrapper d-inline-block">
      <figure class="mini-card d-inline-block float-left" v-for="recipe in classic.slice(0, 7)" :key="recipe.name">
        <img class="recipe-img rounded h-100 w-100" src="../assets/mediarecetas/square.jpg">
      </figure>
      <figure class="mini-card d-inline-block float-left d-flex justify-content-center align-items-center">
        <font-awesome-icon icon="chevron-right" size="4x" />
      </figure>
    </div>
  </section>
</template>

<script>
import classic from "../data/classiccocktails.js";
import modern from "../data/moderncocktails.js";
import author from "../data/authorcocktails.js";
import molecular from "../data/molecularcocktails.js";
import Collection from "./Collection";

export default {
  name: "collections",
  components: { Collection },
  data() {
    return {
      classic,
      modern,
      author,
      molecular
    };
  }
};
</script>

<style lang="scss" scoped>

$height: 300px;
$lg-width: 900px;
$space: 8px;

section {
  width: $lg-width;
  height: $height;
}

.big-img {
  padding: $space;
  width: $height;
}

.mini-card,
.icon-wrapper {
  $size: ($height / 2) - ($space * 2);
  margin: $space;
  height: $size;
  width: $size;
  cursor: pointer;
}

.previews-wrapper {
  width: calc(100% - #{$height})
}

.recipe-img:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

</style>
