<template>
  <div class="single_sidebar">
          <div class="popular">
            <h2 class="title">Popular</h2>
            <ul>
              <li class="item-aside" v-for="x in items" :key="x" >
                <!-- <div class="single_popular" :style="{'background-image': 'url(' + require('../../assets/images/ahmed.jpg') + ')'}">

                  <div class="bar-y mt-50">
                    <hr class="hr1-x mx-2">  
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <hr class="hr2-x mx-2">
                  </div>
                </div> -->
              <!-- <div class=" card-aside">
                  <div class="img-card"> 
                  <div  class="card mx-2 title-people-aside">

                        <div class="card-header title-people-aside-item">Ahmed Khalifa Niass</div>
                  <div class="card-body">
                    <p class="card-text title-people-body-item">
                    Le leader du Front des alliances patriotiques (FAP), a exprimé mardi, 
                    </p>
                 </div>

              </div>
                  
             </div>
             </div> -->

              <figure class="snip1527">
                 <div class="image"><img :src="require('../../assets/images/ahmed2.png')" alt="pr-sample23" /></div>
                <figcaption>
                    <div class="date"><span class="day">28</span><span class="month">Nov</span></div>
                    <h3>
                        Acer Aspire 7 Gaming Laptop</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
               </figcaption> <a href="#"></a>
              </figure>
              </li>
            </ul>
            <a class="popular_more">more</a> </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      items:[1,2,3,4]
    }
  }
}
</script>

<style scoped>
.snip1527 {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    color: #ffffff;
    float: left;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    margin: 10px 1%;
    max-width: 310px;
    min-width: 250px;
    overflow: hidden;
    position: relative;
    text-align: left;
    width: 100%
}

.snip1527 * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease
}

.snip1527 img {
    max-width: 100%;
    vertical-align: top;
    position: relative
}

.snip1527 figcaption {
    padding: 25px 20px 25px;
    position: absolute;
    bottom: 0;
    z-index: 1
}

.snip1527 figcaption:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background: #700877; */
    content: '';
    /* background: -moz-linear-gradient(90deg, #700877 0%, #ff2759 100%, #ff2759 100%);
    background: -webkit-linear-gradient(90deg, #700877 0%, #ff2759 100%, #ff2759 100%);
    background: linear-gradient(90deg, #700877 0%, #ff2759 100%, #ff2759 100%); */
    opacity: 0.8;
    z-index: -1
}

.snip1527 .date {
    background-color: #fff;
    border-radius: 50%;
    color: #700877;
    font-size: 18px;
    font-weight: 700;
    min-height: 48px;
    min-width: 48px;
    padding: 10px 0;
    position: absolute;
    right: 15px;
    text-align: center;
    text-transform: uppercase;
    top: -25px
}

.snip1527 .date span {
    display: block;
    line-height: 14px
}

.snip1527 .date .month {
    font-size: 11px
}

.snip1527 h3,
.snip1527 p {
    margin: 0;
    padding: 0
}

.snip1527 h3 {
    display: inline-block;
    font-weight: 700;
    letter-spacing: -0.4px;
    margin-bottom: 5px
}

.snip1527 p {
    font-size: 0.8em;
    line-height: 1.6em;
    margin-bottom: 0px
}

.snip1527 a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1
}

.snip1527:hover img,
.snip1527.hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1)
}

img {
    border-radius: 5px
}

img {
    border-radius: 5px
}
</style>
