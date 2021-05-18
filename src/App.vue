<template>
  <div id="app">
    <div class="header-app">
    <Socialmedia />
    <Title />
    </div>
    <VueScrollProgress></VueScrollProgress>
  <div class="body_wrapper">
  <div class="center">

    
    <HeaderSearch />
    <Top />
    <Header />
    

    <!-- <Slider /> -->
    <router-view></router-view>
    <Footer />
  </div>
  </div>
  <Copyright />
  </div>
  
</template>

<script>
import Top from './components/static/Top.vue'
import Header from './components/static/Header.vue'
// import Slider from "./components/Slider.vue"
//import Content from "./components/Accueil/Content.vue"
import Footer from "./components/static/Footer.vue"
import HeaderSearch from "./components/static/HeaderSearch.vue"
import Socialmedia from "./components/static/socialmedia.vue"
import Title from "./components/static/Title.vue"
import Copyright from "./components/static/Copyright.vue"

export default {
  name: 'App',
  components: {
    Top,
    Header,
    // Slider,
    //Content,
    Footer,
    HeaderSearch,
    Socialmedia,
    Title,
    Copyright
  },

  
}
</script>

<style scoped>



</style>
