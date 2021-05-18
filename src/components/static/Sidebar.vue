<template>
  
<div class="sidebar floatright">
      <div class="single_sidebar"> <img src="images/add1.png" alt="" /> </div>
        <!-- <Form/> -->
        <Popular/>
        <div class="single_sidebar"> <img src="images/add1.png" alt="" /> </div>
        <div class="single_sidebar">
          <h2 class="title">ADD</h2>
          <img src="images/add2.png" alt="" /> </div>
      </div>
</template>

<script>

// import Form from "./Form"
import Popular from "./Popular"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    // Form,
    Popular
  }
}
</script>

<style scoped>

</style>




























