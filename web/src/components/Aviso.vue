<template>
  <div class="post-card">
    <div class="card-body p-0">
      <span><h4 class="card-title">{{ post.job }}</h4></span>
      <p class="text-capitalize lead"><i class="fa fa-map-marker"></i> {{ post.workplace }}</p>
      <p class="text-justify"><strong><i class="fa fa-user"></i></strong> sexo {{ post.genre }} - {{ post.age }}</p>
      <p class="text-justify"><strong><i class="fa fa-clock-o"></i></strong> {{ post.availability }}</p>
      <p class="text-justify">{{ post.description }}</p>
      <div class="alert alert-dark" role="alert">
      Enviar CV actualizado a <a :href="`mailto:${post.contact}`" class="alert-link" >{{ post.contact }}</a> con el asunto <strong>{{ post.job }}</strong>
      </div>
      <hr>
      <strong>Tareas:</strong>
        <li class="text-justify mt-2" v-for="item in post.tasks" :key="item.task">{{ item.task }}</li>
      <br>
      <strong>Requisitos:</strong>
        <li class="text-justify mt-2" v-for="item in post.requirements" :key="item.requirement">{{ item.requirement }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aviso',
  props: [
    'post',
  ],
}

</script>

<style lang="scss" scoped>

.post-card {
    position: relative;
    display: -ms-flexbox;
    -ms-flex-direction: column;
    flex-direction: column;
    width: auto;
    max-width: 32rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    background-color: transparent!important;
    text-align: left;
    border: 0;
    padding-bottom: 4rem;

    h5 {
      text-transform: capitalize;
    }

    div {
      display: inline-block;
    }

    li {
      list-style-type: none;
    }

    i {
      padding-right: 0.5rem;
    }
  }

.alert-dark {
    border-color: transparent;
}
</style>


