<template>
 <div class="w-100">
     <div style="margin-top:20px;">
     <h2 class="title">SOCIETE</h2>
     </div>
   <div style="margin-top:20px;">
      <div class="relative h-full w-full flex items-end justify-start text-left bg-cover bg-center" style="min-height: 450px;" :style="{'background-image': 'url(' + require('../../assets/images/emeute2.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-6 mt-4 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 bg-indigo transition ease-in-out duration-500">SOCIETE</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold">25</span>
        <span class="-mt-3">May</span>
      </div>
      </div>
</div>

<div class="card mx-5 title-people">

    <div class="card-header title-people-title">Ahmed Khalifa Niass</div>
  <div class="card-body">
    <p class="card-text title-people-body">
     Le leader du Front des alliances patriotiques (FAP), a exprimé mardi, son souhait de voir Ousmane Sonko indemne dans l’affaire dite de viol ..... 
    </p>
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


p {
  font-size: 18px;
}

.feature-image {
 
 height:430px;
 background-size:cover;

}

.site-main {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
 
 
}
@media (min-width: 768px) {
  .site-main {
    width: 80%;
    
  }
}
@media (min-width: 992px) {
  .site-main {
    width: 80%;
   
  }
}
@media (min-width: 1200px) {
  .site-main {
    width: 80%;
   
  }
}

.drop-cap:first-letter {
  float: left;
  margin-right: 0.25em;
  color: #222;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 100px;
  line-height: 1;
}



.article-header {
  background-color:#fff;
  box-shadow: 0 -23px 50px var(--shadow-color);
  padding: 50px 50px;
  height:150px;
  margin-top:280px;
 
  
}

.featured-image-wrap{
  position: relative;
  
}

.entry-cats {
  margin-bottom: 10px;
}

.entry-cats a {
  display: inline-block;
  background:#CF0000;
  text-decoration: none;
  color: white !important;
  padding: 4px 8px;
  font-weight: 500;
  text-transform: uppercase;
  
}

.entry-title {
  font-weight: 900;
}

.article-text-wrap {
  padding: 0 50px;
}

/* .avatar {
    vertical-align: middle;
    width: 128px;
    height: 128px;
    border-radius: 50%;
} */

.avatar img {
    object-fit: cover;
    border-radius: 50%;
}

.author {
  margin-top: 25px;
  display: flex;
}

.inner-meta {
  margin-left: 20px;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: space-around; /* Safari 6.1+ */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.created-by {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  color: #1890ff;
}

.created-at {
 color: grey; 
}

.container {
    width: 60%;
}

.entry-summary {
    position: relative;
    font-size: 18px;
    padding-bottom: 55px;
    margin-bottom: 35px;
    color: #000;
    font-weight: 300;
    line-height: 1.55;
    font-style: italic;
}

.entry-summary:after {
    content: "..........................................";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    letter-spacing: 4px;
    color: #1890ff;
    overflow: hidden;
}

.article-source {
  font-size: 18px;
}

.article-source a {
  color: #1890ff;
}

.share {
  padding-bottom: 20px;
}

.entry-footer {
  padding: 50px 50px;
}

.entry-footer .entry-tags a {
    margin-right: 8px;
    color: #757575;
    font-weight: 700;
    text-decoration: none;
  text-transform: uppercase;
}

.entry-footer .entry-tags a:before {
    content: "#";
    padding-right: 1px;
}

.links-meta{
    text-transform: uppercase;
    font-weight: 900;
}
</style>
