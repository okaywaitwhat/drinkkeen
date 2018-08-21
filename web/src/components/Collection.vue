<template>
  <section>
    <div class="container-fluid">
    <h3>Coctelería clásica <span class="badge badge-secondary">New</span></h3>
      <div class="row">
          <div class="row">
            <div class="col">
              <div class="card">
                <img class="card-img-top" src="../assets/mediarecetas/square.jpg">
              </div>
            </div>
          </div>
        <div class="col-8">
          <div class="row">
              <img class="item-img rounded" src="../assets/mediarecetas/square.jpg">
              <img class="item-img rounded" src="../assets/mediarecetas/square.jpg">
              <img class="item-img rounded" src="../assets/mediarecetas/square.jpg">
              <img class="item-img rounded" src="../assets/mediarecetas/square.jpg">
              <img class="item-img rounded" src="../assets/mediarecetas/square.jpg">
              <img class="item-img rounded" src="../assets/mediarecetas/square.jpg">
              <img class="item-img rounded" src="../assets/mediarecetas/square.jpg">
              <img class="chevron rounded" src="../assets/mediarecetas/chevron.jpg">
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'collection',
  props: [
    'cocktail',
  ],
   computed:
  { imgPath: function () {
    return require ('../assets/mediarecetas/' + this.cocktail.img + '.jpg')
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  float: center;
  padding-left: 9rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
 h3 {
  margin: 0;
 }

.item-img {
  height: 10rem;
  margin: 1rem;
  &:hover {
     box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  }
}

.card-img-top {
   width: 22rem;
}

.card {
    margin: 1rem;
    width: 21rem;
    border: 0;
    margin-right: 2rem;
}

.chevron {
  height: 10rem;
  margin: 0.5rem;
}
</style>

