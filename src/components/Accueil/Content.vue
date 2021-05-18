<template>
  <div class="content_area">
      <div class="main_content floatleft">
        <Left />
      </div>

      <Sidebar/>
  </div>
</template>

<script>

// import Right from "./Right"
import Sidebar from "../static/Sidebar.vue"
import Left from "../Accueil/Left"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    Sidebar,
    Left
  }
}
</script>

<style scoped>

</style>
