<template>
  <div class="single_left_coloum_wrapper">
            <h2 class="title">SOCIETE</h2>
            <a class="more" href="#">more</a> 
            <div class="single_left_coloum floatleft"> 
                <img src="../../assets/images/khalifa.jpg" alt="" class="img" />
                <div class="content">
                <h2>Société</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
            
            </div>

            <div class="single_left_coloum floatleft"> 
                <img src="../../assets/images/sonko.jpg" alt="" class="img" />
                <div class="content">
                <h2>Société</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
            
            </div>

            <div class="single_left_coloum floatleft"> 
                <img src="../../assets/images/wade.jpg" alt="" class="img" />
                <div class="content">
                <h2>Société</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
              
            </div>

            <div class="single_left_coloum floatleft"> 
                <img src="../../assets/images/ahmed.jpg" alt="" class="img"/>
                <div class="content">
                <h2>Société</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
              
            </div>

            <div class="single_left_coloum floatleft">
               <img src="../../assets/images/wade.jpg" alt="Notebook" class="img" >
            <div class="content">
                <h2>Société</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
            </div>

            <div class="single_left_coloum floatleft">
               <img src="../../assets/images/wade.jpg" alt="Notebook" class="img">
            <div class="content">
                <h2>Société</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
            </div>
    </div>

    
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
.content p {margin-top:245px}
</style>
