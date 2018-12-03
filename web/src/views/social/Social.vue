<template>
    <section>
      <div class="container text-center">
        <p class="lead pb-4 second-font">Descubre nuevas experiencias, sabores, tendencias y lo más relevante del mundo de la mixología de la mano de los que más saben en nuestro país.</p>
      </div>

      <div class="container-fluid">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center bg-transparent p-0">
          <li class="breadcrumb-item pointer">Hoy</li>
          <li class="breadcrumb-item pointer">Este fin de semana</li>
          <li class="breadcrumb-item pointer">Este mes</li>
        </ol>
        </nav>
        <div>
            <Meeting :post="meeting" v-for="meeting in posts" :key="meeting.title" />
        </div>
      </div>
    </section>
</template>

<script>
import Meeting from './components/Meeting'
import posts from '../../data/socialevents.js';

export default {
  name: 'social',
  components: {
    Meeting,
  },
  data () {
    return {
      posts,
    }
  }
}
</script>

<style scoped lang="scss">
section {
  padding-top: 4rem;
  min-height: 100%;
  width: 100%;
}

.breadcrumb >
  li+li:before {
    content: '|';
  }
</style>
