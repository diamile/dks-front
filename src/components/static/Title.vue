<template>
  <div class="dks_news">
      <!-- <h1>Bienvenue à </h1> <img src="../../assets/images/title1.png" /> -->
      <!-- <div style="display:table;margin:0 auto;padding-top:50px">
      <div style="display:flex;flex-direction:row">
        <form class="example">
            <input type="text" placeholder="Search.." name="search" width="500px">
        </form>
        <button ><img src="../assets/images/icon_search.png" class="icon"/></button>
      </div>
      </div> -->
      <div class="container main-content p-3 mt-5 w-80">
      <div class="row g-1 mt-1">
          <div class="col-md-9"> <input placeholder="Search..." class="form-control"> </div>
          <div class="col-md-3"> <button class="search btn btn-primary w-100 text-uppercase">
            <img src="../../assets/images/icon_search.png" width="30"/>
          </button> </div>
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
.example{
  width:902px;
}
.dks_news h1{
  text-align:center;
  color:#ffffff;
  font-size:60px;

}
.dks_news{
 display:table;margin:0 auto;
}

* {
  box-sizing: border-box;
}

.main-content {
    background-color: #fdfdfe;
    border-radius: 5px;
    width:980px;
}

.form-control {
    height: 50px;
    border: 2px solid #eee
}

.form-control:focus {
    box-shadow: none;
    border: 2px solid blue
}

.search {
    height: 50px;
}

</style>
