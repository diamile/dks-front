<template>
  <div class="header_area">
      <!-- <div class="top_menu floatleft" >
        {{currentDateTime}}
      </div>
      <div class="logo floatleft" style="margin-left:62px !important"><a href="#"><img  src="../assets/images/dks.jpg" alt="" /></a></div>
      
      <div class="social_plus_search floatright">
        <div class="social">
          <ul>
            <li><a href="#" class="twitter"></a></li>
            <li><a href="#" class="facebook"></a></li>
            <li><a href="#" class="feed"></a></li>
          </ul>
        </div>
        <div class="search">
          <form action="#" method="post" id="search_form">
            <input type="text" value="Search news" id="s" />
            <input type="submit" id="searchform" value="search" />
            <input type="hidden" value="post" name="post_type" />
          </form>
        </div>
      </div> -->
  </div>
</template>

<script>
import moment from "moment"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    currentDateTime() {
      moment.locale('fr');
      return moment().format('LLLL');
    }
}
}
</script>

<style scoped>
.logo{
  height:120px;width:120px;
  margin-bottom: 20px;
}

.social ul {
  padding-right:5px 20px;
}
</style>
