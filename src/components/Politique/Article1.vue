<template>
 
  <div>
  <div class="feature-image" style="background-repeat:no-repeat"  :style="{'background-image': 'url(' + require('../../assets/images/barth.jpg') + ')'}">
  
  
  <div class="article-content">
    <div class="article-header site-main">
      <div class="entry-cats">
        <a>Politique</a>
      </div>
      <h1 class="entry-title">Fashion: The Essential Guide to Spring and Summer</h1>
      <div class="author">
        <a class="avatar">
          <img height="80" width="80" src="https://vignette.wikia.nocookie.net/redvelvet/images/6/65/Red_Velvet_Irene_The_Perfect_Red_Velvet_promo_picture_2.PNG/revision/latest?cb=20180127193447"/>
        </a>
        <div class="inner-meta">
          <span>By <a class="created-by">Irene</a></span>
          <p class="created-at">February 05, 2018</p>
        </div>
      </div>
    </div>
    
    
  </div>
  </div>
  <div style="margin-top:30px">
    Nunc sem nisl, sollicitudin sed imperdiet id, fermentum quis lorem. Quisque arcu purus, laoreet non consectetur sit amet, ornare in lectus. Nulla porta vel tortor fermentum pellentesque. Maecenas sed est magna. Fusce ut dictum ex. Quisque fringilla tempus sapien, in egestas augue auctor sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut lobortis hendrerit lacinia.

Nunc condimentum velit malesuada porttitor imperdiet. Proin iaculis lacus at venenatis commodo. Ut non ipsum ullamcorper ipsum commodo lacinia sagittis quis lectus. Nam mollis semper mauris, eu semper nibh vestibulum sed. Donec augue elit, placerat et mauris vel, finibus vestibulum leo. Pellentesque aliquam ultricies dolor non fringilla. Nulla posuere sollicitudin efficitur. Nullam feugiat cursus imperdiet. Vivamus faucibus ligula turpis, sollicitudin convallis massa posuere non. Phasellus sit amet viverra ligula. Praesent non sem fermentum, volutpat lorem vel, posuere erat. Morbi sed diam feugiat, dignissim purus sed, elementum mauris. Cras mollis leo non aliquam luctus.

Cras id diam laoreet ligula malesuada finibus. Suspendisse viverra mauris est, at venenatis dolor elementum at. Aenean sit amet lorem in mauris lobortis tristique. Vivamus in porttitor nisl, ac imperdiet elit. Nam non ex congue, varius eros pretium, faucibus sem. Nam sodales porta enim a maximus. Nulla facilisi. Nulla efficitur risus commodo egestas efficitur. In hac habitasse platea dictumst. Mauris mollis augue tellus, at porttitor urna fringilla eget. Nam sit amet rutrum ipsum. Quisque ac placerat elit, a bibendum purus. Duis facilisis sapien nisi, in maximus ipsum lobortis ut. Proin rhoncus elit pellentesque, iaculis tellus eu, vehicula tortor. Maecenas nec orci at nibh laoreet imperdiet.
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
 
 height:400px !important;

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
  margin-top:230px;
 
  
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
