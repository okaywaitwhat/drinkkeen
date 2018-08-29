<template>
    <section class="bg-light py-3">
        <footer>
            <div>
                <img src="../assets/media/navbrand.png">
            </div>
                <a href="https://www.instagram.com/drinkkeen/">
                    <i class="fa fa-instagram"></i>
                </a>

                <a href="https://www.facebook.com/drinkkeen">
                    <i class="fa fa-twitter"></i>
                </a>

                <a href="https://www.facebook.com/drinkkeen">
                    <i class="fa fa-facebook-official"></i>
                </a>
        </footer>
    </section>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      links: [
        {
          link: 'https://www.facebook.com/drinkkeen',
          icon:'fa-instagram'},
        {
          link: 'https://www.facebook.com/drinkkeen',
          icon:'fa-twitter'
         },
        {
          link: 'https://www.facebook.com/drinkkeen',
          icon:'fa-facebook-official'},
      ]
      }
  }
}
</script>

<style scoped lang="scss">

section {
  text-align: center;
  width: 100%;
  height: 20%;
  background: #e9ecef;
}

footer {
  img {
    width: 150px;
  }
  div {
    margin: 15px;
  }
  a {
    color: #212529;
    text-transform: uppercase;
  }
}

.fa {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-right: 10px;
  padding-left: 10px;
  color: #212529;
}

</style>
