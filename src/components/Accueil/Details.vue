<template>
   <div style="height:700px">
       <h1>{{id}}</h1>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['id'],
  mounted(){
    console.log('id',this.$route.params)
  }
}
</script>

<style scoped>

</style>
