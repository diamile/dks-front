<template>
  <!-- <div class="socialmedia">
      <ul>
        <li><a href="#"><img :src="require('../assets/images/fa.png')"  width="40"/></a></li>
        <li><a href="#"><img :src="require('../assets/images/in.png')"  width="40"/></a></li>
        <li><a href="#"><img :src="require('../assets/images/yu.svg')"  width="40"/></a></li>
        <li><a href="#"><img :src="require('../assets/images/tw.png')"  width="40"/></a></li>
      </ul>
    </div> -->
    <div class="container-fluid mt-5">
    <div class="row">
        <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center breaking-news bg-white breaking-dks">
                <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news">
                  <span class="d-flex align-items-center span">&nbsp;DAKAR SPECTATOR NEWS</span></div>
                <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                   <a href="#">Excepteur sint occaecat cupidatat non proident, 
                     sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </a> <span class="dot"></span>
                    <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </a>
                   <span class="dot"></span> 
                   <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse </a>
                   </marquee>
            </div>
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
/* .socialmedia ul{
    display:flex;
    flex-direction:row;
    float:right;
}
.socialmedia{
    background-color: #5b091c;
}
.socialmedia ul li{
 margin-left:25px;
 color:#ffff;
}

.socialmedia ul li{
 list-style: none;
} */

a{
  font-size:15px;
}

.news {
    width: 220px
}

.news-scroll a {
    text-decoration: none
}

.dot {
    height: 6px;
    width: 6px;
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 2px !important;
    background-color: rgb(207, 23, 23);
    border-radius: 50%;
    display: inline-block
}

.breaking-dks,.span{height:50px;}
.span{font-size:15px}
</style>
