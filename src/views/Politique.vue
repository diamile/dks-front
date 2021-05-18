<template>
 <div class="w-100" style="margin-top:20px">
   
   <h2 class="title">POLITIQUE</h2>
        
        <div class="mb-30" style="height:50px"></div>
  <div class="max-w-screen mx-auto sm:p-10 relative w-100 articles-news" v-for="x in items" :key="x">
  <div class="lg:flex">
    
    <div class="lg:w-6/12">
      <div class="relative h-full w-full flex items-end justify-start text-left bg-cover bg-center" style="min-height: 300px;" :style="{'background-image': 'url(' + require('../assets/images/emeute2.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-6 mt-4 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 text-title">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold text-date">25</span>
        <span class="-mt-3 text-month">May</span>
      </div>
      </div>
  <main class="p-8 z-10 main">
    <a href="#" class="text-xl tracking-tight font-semibold leading-7 mb-3 inline-block text-white hover:underline text-paragraphe">Dr. Abdullah Abdullah's Presidential Election Campaign
    </a>
    <p class="text-gray-200 text-xs">
      By <a href="#" class="text-white font-semibold hover:underline">Ahmad Sultani</a>&nbsp;&nbsp;|&nbsp;&nbsp;5 mins read
    </p>
      </main>
  
</div>
      
    </div>
    <div class="lg:w-6/12 md:grid grid-cols-2 grid-rows-2">
      
      <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="min-height: 300px;" :style="{'background-image': 'url(' + require('../assets/images/sonko.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 text-title-item">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold text-date-item">10</span>
        <span class="-mt-3 text-month-item">Mar</span>
      </div>
      </div>
  <main class="p-5 z-10">
    <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline text-paragraphe-item">Afghanistan's President Ashraf Ghani Speaks At The Council
    </a>
      </main>
  
</div>
      
      <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="min-height: 300px;" :style="{'background-image': 'url(' + require('../assets/images/ahmed.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 text-title-item">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold text-date-item">20</span>
        <span class="-mt-3 text-month-item">Jan</span>
      </div>
      </div>
  <main class="p-5 z-10">
    <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline text-paragraphe-item">Middle East Participants Gather In Warsaw
    </a>
      </main>
  
</div>
      
      <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="min-height: 300px;" :style="{'background-image': 'url(' + require('../assets/images/lif.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 text-title-item">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold text-date-item">25</span>
        <span class="-mt-3 text-month-item">May</span>
      </div>
      </div>
  <main class="p-5 z-10">
    <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline text-paragraphe-item">Afghan President Ashraf Ghani Visits Jalalabad</a>
      </main>
  
</div>
      
      <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="min-height: 300px;" :style="{'background-image': 'url(' + require('../assets/images/wade.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 text-title-item">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold text-date-item">25</span>
        <span class="-mt-3 text-month-item">May</span>
      </div>
      </div>
  <main class="p-5 z-10">
    <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline text-paragraphe-item">Coffin Of Slain Japanese Doctor Nakamura Transported To Japan</a>
      </main>
  
</div>
      
    </div>
    
  </div>
</div>


<div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16" style="margin-top:-50px;">
  <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
    
    <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="height: 450px;" :style="{'background-image': 'url(' + require('../assets/images/emeute2.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold">25</span>
        <span class="-mt-3">May</span>
      </div>
      </div>
  <main class="p-5 z-10">
    <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Dr. Abdullah Abdullah's Presidential Election Campaign
    </a>
      </main>
  
</div>
    
    <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="height: 450px;" :style="{'background-image': 'url(' + require('../assets/images/sonko.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold">10</span>
        <span class="-mt-3">Mar</span>
      </div>
      </div>
  <main class="p-5 z-10">
    <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Afghanistan's President Ashraf Ghani Speaks At The Council
    </a>
      </main>
  
</div>
    
    <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="height: 450px;" :style="{'background-image': 'url(' + require('../assets/images/lif.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold">20</span>
        <span class="-mt-3">Jan</span>
      </div>
      </div>
  <main class="p-5 z-10">
    <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Middle East Participants Gather In Warsaw
    </a>
      </main>
  
</div>
    
    <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center" style="height: 450px;" :style="{'background-image': 'url(' + require('../assets/images/ahmed.jpg') + ')'}">
  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" class="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a>
      <div class="text-white font-regular flex flex-col justify-start">
        <span class="text-3xl leading-0 font-semibold">25</span>
        <span class="-mt-3">May</span>
      </div>
      </div>
  <main class="p-5 z-10">
    <a href="#" class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Afghan President Ashraf Ghani Visits Jalalabad</a>
      </main>
  
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

//import Politique from "../components/Politique/Politique"

export default {
  name: 'App',

  components: {
//    Politique
  },
  data(){
    return{
     items:[1,2,3],
     articles:[1,2,3,4]
    }
  }

}
</script>

<style scoped>
.title{
  margin-top:30px;
}


*{
  font-family: "Poppins", sans-serif !important;
}

.text-title{
    background-color:#CF0000;
    padding:5px 10px;
    font-size:16px;
    width:100px;
}
.text-date{
    font-size:25px;
}

.text-month{
    font-size:16px;
}
.text-title-item{
    background-color:#CF0000;
    padding:2px 10px !important;
    font-size:12px;
    width:80px;
}

.text-date-item{
    font-size:20px;
}

.text-month-item{
 font-size:12px;
}

.text-paragraphe{
    font-size:19px;
}
.main{
 height:100px;
}
.article-news{
 margin-top:-20px;
}

.articles-news{
 margin-top:-43px;
}

</style>
