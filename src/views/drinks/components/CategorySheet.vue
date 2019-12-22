<template>
    <div class="container p-0 bg-white d-flex flex-column justify-content-center">
      <h1 class="display-4 pb-3 pt-3 second-font">{{category.name}}</h1>
      <div class="row bg-light">
        <div class="col-lg-12 p-0 text-justify">
          <template>
            <b-card no-body class="mb-0">
              <b-card-header class="p-0" role="tab">
                <button v-b-toggle.history type="button" class="btn btn-light btn-block">
                  <h3 class="tab-title second-font">Historia</h3>
                </button>
              </b-card-header>
              <b-collapse id="history" visible>
                <b-card-body class="p-0">
                  <p class="card-text mt-4 mb-4 p-4 second-font">
                    {{category.history}}
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-0">
              <b-card-header class="p-0" role="tab">
                <button v-b-toggle.description type="button" class="btn btn-light btn-block">
                  <h3 class="tab-title second-font">Descripción</h3>
                </button>
              </b-card-header>
              <b-collapse id="description">
                <b-card-body class="p-0">
                  <p class="card-text mt-4 mb-4 p-4 second-font">
                    {{category.description}}
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

.btn, .btn-block {
  border-color: transparent;
}
</style>


