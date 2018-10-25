<template>
  <section class="container">

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-light my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
        <ul class="suggestions">
        </ul>
    </form>

    <p class="lead pb-4">La esencia de las bebidas se mezclan para adentrarte a un nuevo mundo. Desde el whisky hasta la ginebra, incia un recorrido que será el comienzo de infinitas e inovidables historias.</p>
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center bg-transparent p-0">
          <li v-for="category in beverages" :key="category.name" class="breadcrumb-item pointer">
            <router-link :to="`/beverages/${category.id}`">{{ category.name }}</router-link>
          </li>
        </ol>
      </nav>
      <BeverageView v-if="categoryId" :categoryId="categoryId" />
    </div>
  </section>
</template>

<script>
import beverages from '../data/beverages.js'
import BeverageView from './BeverageView.vue'

export default {
  name: 'beverages',
  components: { BeverageView },
  data () {
    return { beverages }
  },
  computed: {
    categoryId () {
      return this.$route.params.category
    }
  }
}

/*
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
*/

</script>

<style scoped lang="scss">

/*
  > == "hijo directo"
  + == "hermano"
  :before |
          |-> pseudoelementos
  :after  |
*/

.breadcrumb >
  li+li:before {
    content: '|';
  }

section {
  padding-top: 4rem;
  text-align: center;
  min-height: 100%;
  width: 100%;
}

a {
  color: #3f4347;
  text-decoration: none;
  background-color: transparent;
}
</style>
