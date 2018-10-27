<template>
        <div class="p-card fadeIn">
            <img class="pointer" :src="imgPath">
            <div class="card-body">
                <span><h5 class="card-title">{{ product.name }}</h5></span>
                <p class="font-italic text-capitalize">{{ product.description }}</p>
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
  {
    imgPath: function () {
    return require ('../assets/mediaproductos/' + this.product.img + '-min.jpg')
    }
  },
}

</script>

<style lang="scss" scoped>

.p-card {
    position: relative;
    display: -ms-flexbox;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    padding: 1rem;
    background-color: transparent!important;
    text-align: center;
    border: 0;
    img {
      width: 15rem;
      border-radius: 50%;
      border: 10px solid rgba(42,42,42,0.1);
      &:hover {
        border: 10px solid rgba(42,42,42,0.25);
        transition: all 1s ease;
      }
    }
    p {
        font-style: italic;
    }
    h5 {
      text-transform: capitalize;
      padding-bottom: 10px;
      border-bottom: 2px solid rgb(0, 0, 0);
      line-height: 30px;
    }

    div {
      display: inline-block;
    }
  }

</style>
