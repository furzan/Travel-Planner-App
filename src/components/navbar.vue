<template>
  <div class="loading-bar" id="loading-bar"></div>
  



  <section id="s1" class="">
      

      <nav class="navbar navbar-expand-lg d-flex justify-content-center ">
  
  
          <div class="container-fluid">
      
      
            <a class="navbar-brand ps-4" href="#"> <img src="../assets/logo.png" alt=""> </a>
  
  
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""><img style="    width: 25px;" src="../assets/listicon.png" alt=""></span>
            </button>
            
            
            <div class="collapse navbar-collapse pe-5" id="navbarNavAltMarkup">
              
  
              <div class="col-2 navcol-1"></div>
   
   
              <div class="col-7 d-flex justify-content-center navcol-2">
  
  
                <div class=" navbar-nav container-fluid d-flex justify-content-around ps-0 pe-0">
            
                  <a class="nav-link active DOCTYPE" aria-current="page" href="#">
                    <RouterLink class="link" :to="{name:'home'}">Home</RouterLink>
                    </a>
                  <a class="nav-link" href="#">Tours</a>
                  <a class="nav-link" href="#">Hotels</a>
                  <a class="nav-link disabled" aria-disabled="true">Car Rent</a>
                  <a class="nav-link disabled" aria-disabled="true">About</a>
                  <a class="nav-link disabled " aria-disabled="true">Contact</a>
              
                </div>
              
  
  
              </div>
  
  
              <div class="col-3 d-flex justify-content-lg-end navcol-3 pe-2">
                <button class=" btn btn-warning"> Login </button>
              </div>
  
            
  
            </div>
    
    
          </div>
        
      
      </nav>
  
  
      
    </section>
    
  


</template>



<script>

import { RouterLink } from "vue-router";


export default {

  components: {
    RouterLink,
  },

  methods: {

    startLoadingBar() {
    const loadingBar = document.getElementsByClassName('loading-bar')[0];
    loadingBar.style.width = '100%';
    },

    stopLoadingBar() {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.width = '0';
    }
  },

  mounted(){

    document.querySelectorAll('.link').forEach(link => {

    link.addEventListener('click', (event)=> {
    event.preventDefault();
    this.startLoadingBar();
    
    // Simulate page load with a timeout
    setTimeout(() => {
      this.stopLoadingBar();
    }, 800); // Change this duration as needed
    })
  
    })


  
  },


}


</script>



<style scoped>

.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 4px;
  background-color: #3498db;
  transition-property: width;
  transition-duration: 400ms;
}

#s1{
    padding: 30px 10px 20px;
}

#s1 a{
    color: aliceblue;
    font-size: small;
    font-weight: bold;
    padding-bottom: 10px;
}

#s1 button{
    color: aliceblue;
    font-size: small;
    font-weight: bold;
    padding: 10px 25px 10px;
    box-shadow: 0 0px 20px rgb(0, 0, 0);
}

#s1 img{
    width: 100%;
}

.navcol-2{
    padding: 30px 0 0 24px;
}

@media only screen and (max-width: 991px){
  .navcol-2{
    padding: 30px 0 0 55px;
}
  .navcol-3{
    padding: 30px 0 0 35px;
}
}


</style>>
