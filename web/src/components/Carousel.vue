<template>
    <section id="carouselSection">
        <h1 id="drinkIntroTitle" class="display-4 p-4"></h1>
    <div class="row d-flex justify-content-center p-4">
        <div class="col-md-8">
            <p id="drinkIntroText" class="justify"></p>
        </div>
    </div>

    <div class="row d-flex justify-content-center p-4">
        <div class="col-md-8">
            <p id="drinkHistoryText" class="justify"></p>
        </div>
    </div>
    <!--Slides-->
        <slides></slides>
    </section>
</template>

<script>
export default {
    name: 'carousel',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

section {
  float: center;
  background: #e9ecef;
  text-align: center;
  display: none;
  ol {
    padding-top: 40px;
  }
  h1 {
    margin: 0;
  }
}


#selected {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
}

#collection {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
  width: 100%;
}

.justify {
  text-align: justify;
}

.carousel-item > img {
  margin: 20px;
  width: 150px !important;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

.info-row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 1.5rem;
}

</style>


