<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#" data-abc="true">
    <img  src="../../assets/images/dks.jpg"  class="logo-dks"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
           
            <li class="nav-item"> <router-link class="nav-link" to="/" data-abc="true">ACCUEIL <span class="sr-only">(current)</span></router-link> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-abc="true">SPORT</a> </li>
            <li class="nav-item"> <router-link class="nav-link" to="/societe" data-abc="true">SOCIETE</router-link> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-abc="true">TECH</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-abc="true">BUSINESS</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-abc="true">WEB TV</a> </li>
            <li class="nav-item"> <router-link class="nav-link" to="/culture" data-abc="true">CULTURE</router-link> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-abc="true">AFRIQUE</a> </li>
            <li class="nav-item"> <router-link class="nav-link" to="/politique" data-abc="true">POLITIQUE</router-link> </li>
            <li class="nav-item"> <router-link class="nav-link" to="/people" data-abc="true">PEOPLE</router-link> </li>
            <li class="nav-item"> <router-link class="nav-link" to="/videos" data-abc="true">VIDEOS</router-link> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-abc="true">CONTACT</a> </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.logo-dks{
  width:90px;
}

@media only screen and (max-width: 991px) {
.logo-dks{width:70px !important;margin-left:0}
}

.nav-link{font-family: 'bebasregular' !important;font-size: 15px;color:#ffffff}

.sticky {
  position: fixed;
  top: 0;
  width: 74%;
}

.sticky + .content {
  padding-top: 60px;
}
</style>
