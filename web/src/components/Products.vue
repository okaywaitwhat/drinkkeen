<template>
    <section id="productsSection">
        <section>
            <div class="container">
                <div class="card-columns" id="productsCards">
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">

section {
  float: center;
  background: #e9ecef;
  padding-top: 4rem;
  display: none;
  text-align: center;
  min-height: 100%;
  width: 100%;

    .card {
    width: 100%;
    padding-right: 20%;
    padding-left: 20%;
    background-color: transparent;
    text-align: center;
    border: 0;
    p {
        font-style: italic;
    }
    h5 {
        text-transform: capitalize;
    }
  }
}

</style>