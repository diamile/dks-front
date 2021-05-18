<template>
 <div class="w-100">
     <div style="margin-top:20px;">
     <h2 class="title">SOCIETE</h2>
     </div>
   <div style="margin-top:20px;">
      <div class="relative h-full w-full flex items-end justify-start text-left bg-cover bg-center" style="min-height: 450px;" :style="{'background-image': 'url(' + require('../assets/images/emeute2.jpg') + ')'}">
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



<div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  <button @click="visible = visible > 1 ? visible - 1 : visible" :disabled="visible < 2">Less</button>
  <button @click="visible = visible * 4 >= items.length ? visible : visible + 1" :disabled="visible * 4 >= items.length">More</button>
  <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
    
    <div  v-for="(column, index) in columns" :key="index" class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="height: 450px;" :style="{'background-image': 'url(' + require('../assets/images/emeute.webp') + ')'}">
  
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 bg-indigo">SOCIETE</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold">25</span>
        <span class="-mt-3">May</span>
      </div>
      </div>
 <div class="title-people-item">
  

  <hr class="hr1 mx-10">  What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
  <hr class="hr2 mx-10">

</div>
  
</div>

  </div>
</div>


<div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16" style="margin-top:-54px;" v-for="x in articles" :key="x">
    <div class="card p-3">
        <div class="row">
          <div class="col-md-1 bg-article">
            <h2>Oct<br><strong>23</strong></h2>
           </div>
            <div class="col-md-4">
              <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="min-height: 260px;" :style="{'background-image': 'url(' + require('../assets/images/emeute1.webp') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold">25</span>
        <span class="-mt-3">May</span>
      </div>
      </div>
 <div class="title-people-item">
  <hr class="hr1 mx-10">  What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
  <hr class="hr2 mx-10">
</div>
  
</div>
            </div>
   
            <div class="col-md-4">
                <div class="mt-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-1">How to do basic jumping </h5> <span><i class="fa fa-heart text-danger"></i> </span>
                    </div>
                    <div class="d-flex justify-content-md-start justify-content-between views-content mt-2">
                        <div class="d-flex flex-row align-items-center"> <i class="fa fa-eye"></i> <span class="ms-1 views">453674</span> </div>
                        <div class="d-flex flex-row align-items-center ms-2"> <i class="fa fa-heart"></i> <span class="ms-1 views">4565</span> </div>
                    </div>
                    <div class="d-flex flex-row mt-3"> <img src="https://i.imgur.com/rvQ3LAt.jpg" width="50" class="rounded-circle">
                        <div class="ms-2 d-flex flex-column">
                            <div class="d-flex flex-row align-items-center">
                                <h6>Thomas Hope</h6> <span class="dots"></span>
                            </div> <span class="days-ago">2 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 </div>
</template>

<script>

export default {
  name: 'App',

  components: {
//    Politique
  },
  data(){
    return{
     items:[1,2,3,5,6,7],
     articles:[1,2,3,4],
     
     visible: 6
    }
  },
  beforeMount() {
    const max = Math.ceil(Math.random() * 10) + 20

    this.items = Array.from(Array(max), (x, i) => `Item ${i + 1}`)
  },
  computed: {
    columns() {
      let columns = []
      for (var i = 0; i < this.visible; i++) {
        columns.push(this.items.slice(i * 4, (i * 4) + 4))
      }
      return columns
    }
  }

}
</script>

<style scoped>

</style>
