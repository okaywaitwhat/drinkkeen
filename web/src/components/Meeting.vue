<template>
  <div class="post-card">
    <div class="card-body p-4 rounded bg-light">
      <span><h4 class="card-title">{{ post.event }}</h4></span>
      <p class="text-capitalize lead"><i class="fa fa-map-marker"></i> {{ post.place }}</p>
      <p class="text-justify"><strong><i class="fa fa-calendar"></i></strong> {{ post.date }}</p>
      <p class="text-justify"><strong><i class="fa fa-clock-o"></i></strong> {{ post.hour }}hs</p>
      <p class="text-justify">{{ post.description }}</p>
      <p class="text">Más información en <strong>{{ post.mail }}</strong> y <strong>{{ post.phone }}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meeting',
  props: [
    'post',
  ],
}

</script>

<style lang="scss" scoped>

.post-card {
    width: auto;
    border-radius: .25rem;
    background-color: transparent!important;
    text-align: left;
    border: 0;
    padding: 2rem;

    h4 {
      text-transform: capitalize;
      font-weight: 350;
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

</style>
