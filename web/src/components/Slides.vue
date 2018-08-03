<template>
    <section id="carouselSlides" class="row d-flex justify-content-center mb-4">
        <div id="carouselExampleIndicators" class="container carousel slide col-md-8" data-ride="carousel" data-interval="false">

        <ol id="dataSlide" class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
        </ol>

        <div id="carouselInner" class="carousel-inner">
        
        </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    <!--Slides info-->
             <slidesinfo></slidesinfo>
        </section>
</template>

<script>
export default {
    name: 'slides',
    components: {
        slidesinfo
    },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


