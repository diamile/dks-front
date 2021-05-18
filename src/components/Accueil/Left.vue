<template>
  <div>
    {{msg}}
    <Slider/>
    <div class="left_coloum floatleft">
        <Article1 />
        <Article2 />
        <Article3 />
        <Article4 />
        <Culture />
        <People />
        <Sport />
        <International />
    </div>
  </div>
</template>

<script>
import Article1 from "./Article1"
import Article2 from "./Article2"
import Article3 from "./Article3"
import Article4 from "./Article4"
import Sport from "./Sport"
import Culture from "./Culture"
import People from "./People"
import International from "./International"
import Slider from "./Slider.vue"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components :{
    Article1,
    Article2,
    Article3,
    Article4,
    Sport,
    Culture,
    People,
    International,
    Slider,
  }
}
</script>

<style scoped>

</style>
