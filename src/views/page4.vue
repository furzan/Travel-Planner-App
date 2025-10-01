<template>
  
  <section id="page4">

    <video autoplay loop muted class="back-v">
      <source
        src="../assets/pexels-maksim-goncharenok-9871291 (2160p) (1).mp4"
        type="video/mp4"
      />
    </video>

      <!-- **************************************** -->
    <!-- s5 -->

    <section id="s5" class=" justify-content-center align-content-center">


<div class=" container align-content-center">
  

    <div class=" container align-content-center pb-3 pt-5 ps-0">
    <div class=" d-flex justify-content-end">
      <img style="width: 20px;" src="../assets/back.png" alt=""> &nbsp;
      <div class=" d-flex align-items-center" style="color:aliceblue;">Cancel</div>
    </div>
    </div>

    <div class="row">



    <div class="col-md-8 col-12">

      <div style="font-size: xx-large; color:aliceblue;">
        Booking Submission
      </div>

      <form class="" >

        <div class="container mb-4 mt-3">
          <div class="row gy-4 pe-md-5 pe-0">
            <div class="col-md-5 col-12 p-0">
              <input type="text" class="form-control fbox" placeholder="Phone">
            </div>

            <div class="col-md-1 col-12 p-0"></div>

            <div class="col-md-5 col-12 p-0">
              <input type="text" class="form-control fbox" placeholder="Your City">
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="container-fluid mb-5 mt-3">
          <div class="row gy-4 pe-md-5 pe-0">
            <div class="col-md-5 col-12 p-0">
              <input type="text" class="form-control fbox" placeholder="Phone">
            </div>

            <div class="col-md-1 col-12 p-0"></div>

            <div class="col-md-5 col-12 p-0">
              <input type="text" class="form-control fbox" placeholder="Your City">
            </div>
          </div>
        </div>


        <div class="container-fluid mb-4 mt-3">
          <div class="row gap-4  pe-md-5 pe-0">
            <div class="col-md-11 col-12 p-0">
              <input type="text" class="form-control fbox" placeholder="Phone" style="height:130px; align-items:start; display:flex;">
            </div>
            
          </div>
        </div>

        <div style="font-size: xx-large; color:aliceblue;" class=" pt-md-5 pt-0 pb-md-0 pb-4">
          Your Booking Confirmation
        </div>


      </form>

    </div>
    
    <div class="col-md-4 col-12 p-3 booking-details">
        <BookingDetails/> 
    </div>



  </div>

  <div class=" pt-4" style="color:aliceblue;">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi illum facere.
  </div>

  <div class=" cont container justify-content-center pb-5">
    <div>Confirm</div> &nbsp;&nbsp;&nbsp; <div class="arrow" > >> </div>
  </div>


</div>


</section>



<!-- **************************************** -->


  </section>

</template>

<script>

import navbar from "../components/navbar.vue";
import { RouterLink } from "vue-router";
import BookingDetails from "../components/BookingDetails.vue";
import { onMounted } from "vue";

export default {
  components: {
    RouterLink,
    BookingDetails,
  },
}

</script>

<style>


/* ******************** */
/* s5 */

.cont {
  color: rgb(233, 177, 56);
  /* font-size: small ; */
  font-weight: 700;
  display: flex;
  justify-content: end;
  padding-top: 40px;
}

.arrow {
  padding: 2px;
  background-color: aliceblue;
  border-radius: 50%;
  /* font-size: small; */
  font-weight: bolder;
}

#s5{
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    position:fixed;
    overflow: scroll;
    top: 0;
    opacity: 1;
    display: flex;
    backdrop-filter: blur(10px);
}

.fbox{
   /* height:40px; */
   background-color: rgba(240, 248, 255, 0.275);
   border: none;
   padding: 5px 20px 5px;
   border-radius: 5px; 
   color: aliceblue;  
   backdrop-filter: blur(10px);

}

#s5 input:focus{
    background-color: rgba(240, 248, 255, 0.275);
   border: none;
   padding: 5px 20px 5px;
   border-radius: 5px; 
   color: aliceblue;  
}

#s5 input::placeholder{
   
   color: aliceblue;   
}

.divider{
    height: 1.7px;
    width: 250px;
    background-color: rgba(94, 94, 94, 0.845);
}


/* ******************** */


</style>