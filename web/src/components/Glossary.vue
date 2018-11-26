<template>
  <section class="bg">
    <div class="mid pb-5 o-hidden">
      <div class="row justify-content-center">
        <div class="col-10 col-lg-8 bg-light p-lg-5 text-justify">
          <h1 class="text-center second-font m-0 pb-4 pt-4">Glosario</h1>
          <p class="second-font">Palabras como garnish, dash o jigger son muy comunes en el mundo de los bartenders, pero generalmente conceptos que muchos no conocemos, quedando muchas veces en blanco al escuchar frases como: “¿quiere su coctel con un dash de amargo?” o “¿prefiere su preparación frozen o en las rocas?”</p>
          <p class="second-font">Para comenzar, es imprescindible conocer la definición de mixología, que corresponde al proceso de mezclar las bebidas o coctelería- bartending-  con arte e imaginación.  El profesional que realiza esta actividad y sirve las bebidas detrás de una barra se le llama bartender, mejor conocido como barman, y su versión femenina es barmaid. En algunos establecimientos y con mucho éxito, se ha comenzado a practicar el flair bartending o coctelería flair (acrobática), que consiste en servir las bebidas de una manera entretenida, rápida y creativa para cautivar a los clientes.</p>
          <p class="second-font">La coctelería es un arte asequible que te permite disfrutar con un sinfín de mezclas. Aprender a interpretar los términos de coctelería es una forma de ahondar más en el mundo de la mixología. Un idioma de uso común tras las barras que no solo esconde muchas de las técnicas utilizadas por los bartenders para sus elaboraciones sino que, también, implica buena parte del instrumental que utilizan. Conoce algunas de las palabras que debes manejar si quieres saber un poco más del mundo de la coctelería.</p>
        </div>
        <div class="row justify-content-center pt-4">
          <div class="col-10 col-lg-7">
            <div class="p-4 text-justify" v-for="item in sortedWords" :key="item.word">
              <h5 class="second-font"> {{item.word}} </h5>
              <span class="mr-auto pr-1"> {{ item.mean }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import words from '../data/glosario.js';

/**
    let glossary = {}
    words.forEach(obj => {
      let word = obj.word
      let letra = word[0]
      if(!glossary[letra]) {
        glossary[letra] = [ word ]
      } else {
        glossary[letra].push(word)
      }
    })
    return glossary
 */

export default {
  name: 'glosario',
  data: () => ({
    words
  }),
  computed: {
    sortedWords: function() {
      function compare(a, b) {
        if (a.word < b.word)
          return -1;
        if (a.word > b.word)
          return 1;
        return 0;
      }
      return this.words.sort(compare);
    }
  }
}
</script>

<style lang="scss" scoped>
$lg-width: 900px;
$border-color: rgba(0, 0, 0, 0.125);

.mid {
  padding-top: 35%;
}

.bg {
  background-image: url("../assets/media/login.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}

</style>
