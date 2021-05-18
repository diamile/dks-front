<template>
 <div>
            <router-link :to="{ path:'/detail/'+123}">

            <div class="single_left_coloum floatleft"> 
                <img src="../../assets/images/khalifa.jpg" alt="" class="img" />
                <div class="content">
                <h2>Actualité</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                </div>
            
            </div>
            
            </router-link>

            <div class="single_left_coloum floatleft"> 
                <img src="../../assets/images/sonko.jpg" alt="" class="img" />
                <div class="content">
                <h2>Actualité</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
            
            </div>

            <div class="single_left_coloum floatleft"> 
                <img src="../../assets/images/wade.jpg" alt="" class="img" />
                <div class="content">
                <h2>Actualité</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
              
            </div>

            <div class="single_left_coloum floatleft"> 
                <img src="../../assets/images/ahmed.jpg" alt="" class="img"/> 
                <div class="content">
                <h2>Actualité</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
              
            </div>

            
            
          
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data(){
      return {
          msg:"test"
      }
  }
}
</script>

<style scoped>
.img{
    height:340px !important
}


.single_left_coloum {
  position: relative;
  /* max-width: 800px;
  margin: 0 auto; */
}

.single_left_coloum img {vertical-align: middle;}

.single_left_coloum .content {
  position: absolute;
  bottom: 10px;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
  height:350px;
}

.content h2{
    background-color:#CF0000;
    padding:2.5px 1.25px;
    width:90px;
}
.content p {margin-top:200px}
</style>
