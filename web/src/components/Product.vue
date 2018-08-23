<template>
    <div>
        <div class="card card-shadow bg-light mb-3">
            <img class="card-img-top rounded-circle" :src="imgPath">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="font-italic text-capitalize">{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'product',
  props: [
    'product',
  ],
  computed:
  { imgPath: function () {
    return require ('../assets/mediaproductos/' + this.product.img + '.jpg')
    }
  },
}

</script>

<style lang="scss" scoped>
.card {
    padding: 1rem;
    background-color: transparent!important;
    text-align: center;
    border: 0;
    p {
        font-style: italic;
    }
    h5 {
        text-transform: capitalize;
    }
  }
</style>


