<template>

    <div class="errormsg">
      Please Fill All details !
    </div>

  <section id="page4">

  <div class="loading-bar" id="loading-bar"></div>
    

    <!-- **************************************** -->
    <!-- s5 -->

    <section id="s5" class="justify-content-center align-content-center">
      <video autoplay loop muted class="back-v" style="opacity: 0.2;">
        <source
          src="../assets/pexels-mikhail-nilov-7441154 (1080p).mp4"
          type="video/mp4"
        />
      </video>

      <div class="container align-content-center">
        
        <div class=" d-flex container justify-content-end align-content-center pb-3 pt-5 ps-0">
          <div  class="point cancel d-flex justify-content-end">
            <img class=""  style="width: 20px;" src="../assets/back.png" alt="" /> &nbsp;
            <div class=" d-flex align-items-center" style="color: aliceblue;">
              Cancel
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 col-12">
            <div style="font-size: xx-large; color: aliceblue;">
              Booking Submission
            </div>

            <form class="">
              <div class="container mb-4 mt-3">
                <div class="row gy-4 pe-md-5 pe-0">
                  <div class="col-md-5 col-12 p-0">
                    <input v-model="name"
                      type="text"
                      class="form-control fbox"
                      placeholder="Name"
                    />
                  </div>

                  <div class="col-md-1 col-12 p-0"></div>

                  <div class="col-md-5 col-12 p-0">
                    <input v-model="email"
                      type="text"
                      class="form-control fbox"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>

              <div class="divider"></div>

              <div class="container-fluid mb-5 mt-3">
                <div class="row gy-4 pe-md-5 pe-0">
                  <div class="col-md-5 col-12 p-0">
                    <input v-model="phone"
                      type="text"
                      class="form-control fbox"
                      placeholder="Phone"
                    />
                  </div>

                  <div class="col-md-1 col-12 p-0"></div>

                  <div class="col-md-5 col-12 p-0">
                    <input v-model="city"
                      type="text"
                      class="form-control fbox"
                      placeholder="Your City"
                    />
                  </div>
                </div>
              </div>

              <div class="container-fluid mb-4 mt-3">
                <div class="row gap-4 pe-md-5 pe-0">
                  <div class="col-md-11 col-12 p-0">
                    <input v-model="notes"
                      type="text"
                      class="form-control fbox"
                      placeholder="Notes"
                      style="height: 130px; align-items: start; display: flex;"
                    />
                  </div>
                </div>
              </div>

              <div
                style="font-size: xx-large; color: aliceblue;"
                class="pt-md-5 pt-0 pb-md-0 pb-4"
              >
                Your Booking Confirmation
              </div>
            </form>
          </div>

          <div class="col-md-4 col-12 p-3 booking-details">
            <BookingDetails />
          </div>
        </div>

        <div class="pt-4" style="color: aliceblue;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          commodi illum facere.
        </div>

       <div class=" d-flex justify-content-center">
        <RouterLink @mouseover="check" @click="errcheck" class="link" :to="{ name: pg }">
          <div class="cont container justify-content-center pb-0">
            <div>Confirm</div>
            &nbsp;&nbsp;&nbsp;
            <div class="arrow">>></div>
          </div>
        </RouterLink>
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
  data(){
    return{
        pg:"page3",
        name:"",
        email:"",
        phone:"",
        city:"",
        notes:"",
    }
  },
  methods: {
    check(){
      if(this.name.length!=0 && this.email.length!=0 && this.phone.length!=0 && this.city.length!=0 ) this.pg="home"
      else this.pg="page3"
    },
    errcheck(){
      if(this.name.length!=0 && this.email.length!=0 && this.phone.length!=0 && this.city.length!=0 ) {sessionStorage.clear()}
      else{
        document.getElementsByClassName("errormsg")[0].style.opacity="0.85"
        setTimeout(() => {
        document.getElementsByClassName("errormsg")[0].style.opacity="0"
          
        }, 2000);
        console.log("lll")
      }
    },
    startLoadingBar() {
      const loadingBar = document.getElementsByClassName("loading-bar")[0];
      loadingBar.style.width = "100%";
    },

    stopLoadingBar() {
      const loadingBar = document.getElementById("loading-bar");
      loadingBar.style.width = "0";
    },
    loaddata(){
      if(sessionStorage.getItem("confname")&&sessionStorage.getItem("confphone")&&sessionStorage.getItem("confcity")&&sessionStorage.getItem("confcity")){
        this.name=sessionStorage.getItem("confname")
        this.email=sessionStorage.getItem("confemail")
        this.city=sessionStorage.getItem("confcity")
        this.phone=sessionStorage.getItem("confphone")
        if(sessionStorage.getItem("confnotes"))
        this.notes=sessionStorage.getItem("confnotes")
      }
    }
  },

  mounted() {
    document.querySelectorAll(".link").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        this.startLoadingBar();

        // Simulate page load with a timeout
        setTimeout(() => {
          this.stopLoadingBar();
        }, 800); // Change this duration as needed
      });
    });

    this.loaddata()

  },
  watch: {
    name(newVal, oldVal) {
      sessionStorage.setItem('confname',newVal)
    },    
    email(newVal, oldVal) {
      sessionStorage.setItem('confemail',newVal)
    },
    phone(newVal, oldVal) {
      sessionStorage.setItem('confphone',newVal)
    },
    city(newVal, oldVal) {
      sessionStorage.setItem('confcity',newVal)
    },
    notes(newVal, oldVal) {
      sessionStorage.setItem('confnotes',newVal)
    },

  },
};
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

#s5 {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  position: fixed;
  overflow: scroll;
  scrollbar-width: none;
  top: 0;
  opacity: 1;
  display: flex;
  backdrop-filter: blur(10px);
}

.fbox {
  /* height:40px; */
  background-color: rgba(240, 248, 255, 0.275);
  border: none;
  padding: 5px 20px 5px;
  border-radius: 5px;
  color: aliceblue;
  backdrop-filter: blur(10px);
}

#s5 input:focus {
  background-color: rgba(240, 248, 255, 0.275);
  border: none;
  padding: 5px 20px 5px;
  border-radius: 5px;
  color: aliceblue;
}

#s5 input::placeholder {
  color: aliceblue;
}

.divider {
  height: 1.7px;
  width: 250px;
  background-color: rgba(94, 94, 94, 0.845);
}

/* ******************** */
</style>
