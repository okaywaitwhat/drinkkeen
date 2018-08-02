<template>
    <section :style="{'background-image': `url(${require('../assets/media/login.jpg')})`}">     
    </section>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      
    }
  }
}

</script>

<style scoped>

section {
  height: 90%;
  width: 100%;
  min-height: 90%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  float: center;
  background-size: cover;
  text-align: center;
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #f8f9fa;
}

</style>
