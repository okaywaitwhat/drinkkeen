<template>
  <div id="app">
    <intro></intro>
    <navbar></navbar>
    <quotes></quotes>
    <login></login>
    <foot></foot>
  </div>
</template>

<script>
import intro from './components/Intro'
import navbar from './components/NavBar'
import quotes from './components/Quotes'
import login from './components/Login'
import foot from './components/Foot'


export default {
  name: 'app',
  components: {
    intro, navbar, quotes, login, foot,
  }
}
</script>

<style lang="scss">

@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

* {
  font-family: Roboto;
}

#app {
  background-color: #e9ecef;
}

.card-columns {
  display: inline-block;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
}

.card {
  li:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  button {
    font-weight: 300;
    text-align: center;
  }
}

.modal-dialog {
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
}

@media (max-width: 768px) {
  .modal-dialog {
    min-height: calc(100vh - 20px);
  }
}

.filters {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 300px;
  min-width: 210px;
  width: 26%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  span {
    font-weight: 400;
    font-size: 1rem;
    color: #52585e !important;
  }
  nav {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  h5 {
    margin-bottom: 2rem !important;
    font-size: 1.25rem;
    color: #52585e !important;
  }
  input {
    vertical-align: 2px;
  }
}

.filters_group span {
  font-weight: 300;
  font-size: 0.8rem;
  color: #52585e !important;
}

input[type=checkbox].recipes-filter {
  transform: scale(1.1);
  margin-left: 5px;
}

</style>
