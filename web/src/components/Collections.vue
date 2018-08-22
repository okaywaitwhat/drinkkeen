<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-md-3">
        <div class="card">
          <img class="card-img-top rounded" src="../assets/mediarecetas/square.jpg" alt="Card image cap">
        </div>
      </div>

      <div class="col-md-6">
        <div class="row">
          <div class="row">
            <div v-for="recipe in classic.slice(0, 7)" :key="recipe.name" class="col-md-3">
              <div class="card">
                <img class="mini-card rounded" src="../assets/mediarecetas/square.jpg">
              </div>
            </div>
            <div class="col-md-3">
              <div class="chevron">
                <i style="font-size:40px" class="fa">&#xf054;</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import classic from '../data/classiccocktails.js';
import modern from '../data/moderncocktails.js';
import author from '../data/authorcocktails.js';
import molecular from '../data/molecularcocktails.js';
import Collection from './Collection';
export default {
  name: 'collections',
  components: { Collection },
  data () {
    return {
      classic, modern, author, molecular,
    }
  },
}
</script>

<style lang="scss" scoped>

section {
  float: center;
  background: #e9ecef;
  padding: 4rem;
}

.card {
  margin-bottom: 1rem;
  border: 0;
}

.mini-card {
    width: 100%;
    border-top-left-radius: calc(.25rem - 1px);
&:hover {
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    }
}

.chevron {
    text-align: center;
    height:120px;
   i {
    position:relative;
    top: calc(50% - 10px);
   }
}

</style>

