<template>
    <section id="recipesSection">
        <Filterscol></Filterscol>
        <section class="recipes-cards-cont">

            <div class="card-columns" id="recipesCards">

        </section>

        <div class="modal fade bd-example-modal-lg" id="imgModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Titulito</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <img src="" class="imgPreview" style="width: 100%;" >
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
                </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'recipes',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">

section { //fix 2 sections
  float: center;
  background: #e9ecef;
  padding: 4rem;
  display: none;

.card {
  overflow: hidden;
  text-align: center;
  width: 100%;

  &:hover {
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    }
  }

  .card-item {
    font-size: 15px;
  }
    li {
      display: block;
      padding: 0.75rem 1.25rem;
      margin-bottom: -1px;
      background-color: #fff;
      border-top: 1px solid rgba(0, 0, 0, 0.125);
      text-align: left;
    }
}

.recipes-cards-cont {
  background-color: #fff;
  padding: 2rem !important;
  align-content: space-between;
}

</style>