<template>
    <div class="bg-white d-flex flex-column justify-content-center">
      <h1 class="display-4 pb-3 pt-3">{{category.name}}</h1>
      <div class="row bg-light">
        <div class="col-lg-12 p-0 text-justify">
          <template>
              <b-card no-body class="mb-1">
                <b-card-header class="p-0" role="tab">
                  <button block v-b-toggle.accordion1 type="button" class="btn btn-light btn-block">Historia</button>
                </b-card-header>
                <b-collapse id="accordion1" visible>
                  <b-card-body class="p-0">
                    <p class="card-text mt-4 mb-4">
                      {{category.history}}
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header class="p-0" role="tab">
                  <button block v-b-toggle.accordion2 type="button" class="btn btn-light btn-block">Descripción</button>
                </b-card-header>
                <b-collapse id="accordion2">
                  <b-card-body class="p-0">
                    <p class="card-text mt-4 mb-4">
                      {{category.description}}
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-0">
                <b-card-header class="p-0" role="tab">
                  <button block v-b-toggle.accordion3 type="button" class="btn btn-light btn-block">Cocktails</button>
                </b-card-header>
                <b-collapse id="accordion3">
                  <b-card-body class="p-0">
                    <p class="card-text mt-4 mb-4">
                      lalalalalal
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
          </template>
        </div>
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

.btn-dark.focus, .btn-dark:focus {
    box-shadow: none;
}

.card {
  border: 0px;
}

.card-header {
  border-bottom: 0;
  background-color: transparent;
}
</style>


