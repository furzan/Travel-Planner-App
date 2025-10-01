<template>
  <section id="page1">

    <div class="errormsg">
      ERROR !
    </div>



    <video autoplay loop muted class="back-v">
      <source src="../assets/pexels-mikhail-nilov-7441154 (1080p).mp4" type="video/mp4" />
    </video>

    <navbar />

    <!-- **************************************** -->
    <!--s2  -->

    <section id="s2">
      <div class="container p-5">
        <div class="row">
          <div class="col-lg-3 col-12">
            <div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle d-flex justify-content-between fs-4 w-100"
                  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div class="buttext" placeholder="aaa">{{location}}</div>
                  <div><img src="../assets/dropdown.png" alt="" /></div>
                </button>

                <ul class="dropdown-menu" style="color:black;">
                  <li><a class="dropdown-item" href="#" @click="setloc('Islamabad')">Islamabad</a></li>
                  <li><a class="dropdown-item" href="#" @click="setloc('Sawat')">Sawat</a></li>
                  <li><a class="dropdown-item" href="#" @click="setloc('Kalam')">Kalam</a></li>
                  <li><a class="dropdown-item" href="#" @click="setloc('Naran')">Naran</a></li>
                  <li><a class="dropdown-item" href="#" @click="setloc('Kaghan')">Kaghan</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-12">
            

            <div class="dropdown fs-4" style="background: none;">
                <button style="background: none; border:none;" class="btn btn-secondary dropdown-toggle fs-4 border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <!-- Check In --> {{ cin }}
                </button>
                <ul class="dropdown-menu" style="background: none; border:none;">
                  <li>
                  
                      <input class="inpdate form-control" v-model="cin" type="date" name="" id="" min="">
                    
                  
                  </li>
                  
                </ul>
              </div>
            

          </div>

          <div class="col-lg-3 col-12">
            

            <div class="dropdown fs-4" style="background: none;">
                <button style="background: none; border:none;" class="btn btn-secondary dropdown-toggle fs-4 border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <!-- Check Out --> {{ cout }}
                </button>
                <ul class="dropdown-menu" style="background: none; border:none;">
                  <li>
                  
                      <input class="inpdate form-control" v-model="cout" type="date" name="" id="" min="">
                    
                  
                  </li>
                  
                </ul>
              </div>
            

          </div>

          <div class="col-lg-3 col-12">
            
            <div class=" pb-4">
              <div class="dropdown fs-4">
                <button @click="dropshow()" class=" fs-4 btn btn-secondary dropdown-toggle border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <!-- Guests --> {{ guests }}
                </button>
                <ul class="dropdown-menu w-100 gdropdown">
                  
                  <li>
                    
                    <div class="container d-flex justify-content-around pt-1">

                      Adults : 
                      <div class="point" @click="if(adults!=0)adults--; updateguests()" style="background-color: rgb(255, 225, 32); padding:0 10px 0; border-radius:5px;">-</div>
                      {{adults}} 
                      <div class="point" @click="adults++; updateguests()" style="background-color: rgb(255, 225, 32); padding:0 10px 0; border-radius:5px;">+</div>

                    </div>

                    <div class="container d-flex justify-content-around pt-1 pb-1">

                      child &nbsp;&nbsp;&nbsp;: 
                      <div class="point" @click="if(child!=0)child--; updateguests()" style="background-color: rgb(255, 225, 32); padding:0 10px 0; border-radius:5px;">-</div>
                      {{child}} 
                      <div class="point" @click="child++; updateguests()" style="background-color: rgb(255, 225, 32); padding:0 10px 0; border-radius:5px;">+</div>

                    </div>

                    

                  </li>
                  
                </ul>
              </div> 
            </div>

            <!-- <RouterLink :to="'page2/'+ this.adults">
              <div class="cont container">
                <div>Continue</div>
                &nbsp;&nbsp;&nbsp;
                <div class="arrow">>></div>
              </div>
            </RouterLink> -->
           
            <!-- <transition name="fade" mode="out-in"> -->
            <RouterLink @click="errcheck()" @mouseover="pagecheck()" class="link" :to="{name:nextp, params : { adults: adults, child: child, cin: cin , cout: cout, loc:location } }">
              <div class=" cont container">
                <div>Continue</div>
                &nbsp;&nbsp;&nbsp;
                <div class="arrow">>></div>
                <!-- <div>Continue</div> &nbsp;&nbsp;&nbsp; <div class="arrow" > >> </div> -->
              </div>
            </RouterLink>
          <!-- </transition> -->

          </div>
        </div>
      </div>
    </section>

    <!-- **************************************** -->
  </section>
</template>

<script>
// @ is an alias to /src
import { RouterLink } from "vue-router";
import navbar from "../components/navbar.vue";

export default {

  components: {
    navbar,
    RouterLink
  },
  
  data(){

    return{
      cin:'Check In',
      cout:'Check Out',
      adults:0,
      child:0,
      location:"Location",
      guests:"",
      nextp:"home"
    }

  },

  methods:{


    dout(){
      document.getElementsByClassName('cont')[0].addEventListener('click',()=>{
        console.log(this.cin)
        console.log(this.cout)
      })
    },

    setloc(loc){
      this.location = loc
      console.log(this.location)
    },

    updateguests(){
      console.log("sdc")
      this.guests=  this.adults + " Adults, " + this.child + " Child"
    },

    pagecheck(){
      if(this.cin!="Check In" && this.cout!="Check Out" && (this.adults!=0 || this.child!=0) && this.location!="Location") this.nextp="page2"
    },
    errcheck(){
      if(this.cin!="Check In" && this.cout!="Check Out" && (this.adults!=0 || this.child!=0) && this.location!="Location") {}
      else{
        document.getElementsByClassName("errormsg")[0].style.opacity="0.85"
        setTimeout(() => {
        document.getElementsByClassName("errormsg")[0].style.opacity="0"
          
        }, 2000);
      }
    },

    dropshow(){
      if(document.getElementsByClassName("gdropdown")[0].classList.contains("d-block"))
      {
         document.getElementsByClassName("gdropdown")[0].classList.remove("show")
         document.getElementsByClassName("gdropdown")[0].classList.remove("d-block")
         console.log("1")
        }   
      else{ 
       document.getElementsByClassName("gdropdown")[0].classList.add("d-block")
      console.log("2") 

      }
      },
  

      },

  mounted(){

    // var today = new Date().toISOString().split('T')[0];
    // document.getElementById("inpdate").setAttribute('min', today);\
    // console.log(new Date().toISOString().split('T')[0])

    console.log(this.cin)
    console.log(this.cout)
    console.log(this.location)


    this.guests= "Guests"

    
    this.dout()

    if(sessionStorage.getItem('adults') && sessionStorage.getItem('loc') && sessionStorage.getItem('cin') && sessionStorage.getItem('cout')){
      this.adults=sessionStorage.getItem('adults')
      // this.child=sessionStorage.getItem('child')
      if(sessionStorage.getItem('child')) this.child=sessionStorage.getItem('child')
      this.updateguests()
      this.location=sessionStorage.getItem('loc')
      this.cin=sessionStorage.getItem('cin')
      this.cout=sessionStorage.getItem('cout')
    }


  }, 
  watch:{


    cin(newVal, oldVal) {
    let today = new Date().toISOString().split('T')[0];
    if (new Date(newVal) < new Date(today)) {
      this.cin = today;
    }
    if (this.cout && new Date(this.cin) >= new Date(this.cout)) {
      let newCout = new Date(this.cin);
      newCout.setDate(newCout.getDate() + 1);
      this.cout = newCout.toISOString().split('T')[0];
    }
    sessionStorage.setItem('cin', this.cin);
  },

  cout(newVal, oldVal) {
    let today = new Date();
    today.setDate(today.getDate() + 1);
    let formattedToday = today.toISOString().split('T')[0];
    if (new Date(newVal) < new Date(formattedToday)) {
      this.cout = formattedToday;
    }

    if (this.cin && new Date(this.cin) >= new Date(this.cout)) {
      let newCout = new Date(this.cin);
      newCout.setDate(newCout.getDate() + 1);
      this.cout = newCout.toISOString().split('T')[0];
    }
    sessionStorage.setItem('cout', this.cout);
  },

  adults(newVal,oldVal){
    sessionStorage.setItem('adults', this.adults);
  },
  child(newVal,oldVal){
    sessionStorage.setItem('child', this.child);
  },
  location(newVal,oldVal){
    sessionStorage.setItem('loc', this.location);
  },


    // cin(newVal,oldVal){
    //   if(new Date().toISOString().split('T')[0]>newVal)this.cin=new Date().toISOString().split('T')[0]
    // },
    // cout(newVal,oldVal){
    //   var today = new Date();
    //   today.setDate(today.getDate() + 1);
    //   if(new Date().toISOString().split('T')[0]>=newVal)this.cout=today.toISOString().split('T')[0]
    //   if(new Date(this.cin)>=new Date(this.cout))
    //      {
    //       today=today.setDate(today.getDate()+1)
    //       console.log(today.toISOString().split('T')[0])
    //      }
    // },

  },   


};


</script>

<style scoped>

.dropdown ul{
  width: 100%;
}

.inpdate{
    /* background: none;  */
    border:none; 
    /* width:130%;  */

}
.inpdate:focus{
  border: none;
  box-shadow: none;
  
}
input::selection{
    background-color: aliceblue; 
    /* border:none;  */
}

#s2 {
  padding: 250px 0 100px;
}

@media only screen and (max-width: 991px) {
  #s2 {
    padding: 50px 0 100px;
  }
}

.dropdown-toggle::after {
  content: none;
}

.dropdown button {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 0;
  /* font-size: large; */
}

.dropdown button img {
  width: 15px;
}

.buttext {
  /* padding-right: 100px; */
}

.dropdown button:hover {
  background: none;
  border: none;
}

.btn-check:checked+.btn,
.btn.active,
.btn.show,
.btn:first-child:active,
:not(.btn-check)+.btn:active {
  background: none;
  border: none;
}

#s2 .col-12 {
  padding-right: 93px;
  padding-bottom: 60px;
}

#s2 .fs-4 {
  border-width: 2px !important;
  border-bottom: solid;
  border-color: aliceblue;
}

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
</style>
