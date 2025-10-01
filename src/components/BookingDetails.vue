<template>
  
  <div class="booking-details">
            


            <div class="inner-booking-details" style="color:rgb(246, 214, 4); font-size:20px;justify-content: center;">
              Booking Details
            </div>
            
            <div class="inner-booking-details" style="">
              
            <div>

                <div style="font-size: small; color:rgb(185, 185, 185)">location</div>
                <div style="font-size: large;" class=" bdloc">Islamabad</div>

             </div>

              <div class=" d-flex align-items-end bdprice">PKR 10,000</div>

            </div>

            <div class="inner-booking-details">

              <div>

                <div style="font-size: small; color:rgb(185, 185, 185)">CHECK IN</div>
                <div class="cind2">22-01-24</div>
                
                <div style="font-size: small; color:rgb(185, 185, 185)">CHECK OUT</div>
                <div class="coutd2">22-01-24</div>


              </div>


              <div class=" d-flex flex-column justify-content-center">

                <div class="cind1">22-JAN</div>
                <div>TO</div>
                <div class="coutd1">22-JAN</div>

              </div>

            </div>

            <div class="inner-booking-details">

              <div>

                <div style="font-size: small; color:rgb(185, 185, 185)">GUESTS</div>
                <div class="numguests">3 GUESTS</div>

              </div>

              <div class=" d-flex flex-column justify-content-end numguests2">
                2 Adults, 1 Child
              </div>

            </div>

            <div class="inner-booking-details">

              <div>

                <div style="font-size: small; color:rgb(185, 185, 185)">HOTELS</div>
                <div class="numhotels">
                <!-- 1 Hotels -->-
                </div>

              </div>

              <div class=" d-flex flex-column justify-content-end hotelprice">
                <!-- PKR 30,000 -->-
              </div>

            </div>

            <div class="inner-booking-details">

              <div>

                <div style="font-size: small; color:rgb(185, 185, 185)">VEHICLE</div>
                <div class="vehicle">
                  <!-- Honda BRV --> -
                </div>

              </div>

              <div class=" d-flex flex-column justify-content-end vehicleprice">
                <!-- PKR 20,000 --> -
              </div>

            </div>

            <div class="inner-booking-details" style="color:rgb(246, 214, 4); font-size:large; font-weight:bold;">

              <div>

                TOTAL

              </div>

              <div class=" d-flex flex-column justify-content-end total">
                PKR 20,000
              </div>

            </div>
            
            
          </div>


</template>

<script>
export default {

  data() {
    return {
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
    }
  },

  props:{
    adults:"",
    child:"",
    cin:"",
    cout:"",
    loc:"",
  },
  mounted() {
    // console.log("booking " +this.adults)

    // document.getElementsByClassName('numguests')[0].innerHTML=(parseInt(this.adults)+parseInt(this.child)) + " GUESTS"
    // document.getElementsByClassName('numguests2')[0].innerHTML= this.adults + " Adults, " + this.child +" Child"

    
    // const date1 = new Date(this.cin);
    // const date2 = new Date(this.cout);
    
    // document.getElementsByClassName('cind2')[0].innerHTML = this.cin
    // document.getElementsByClassName('coutd2')[0].innerHTML = this.cout
    
    // document.getElementsByClassName('cind1')[0].innerHTML = (date1.getDate()) + '-' + this.months[date1.getMonth()]
    // document.getElementsByClassName('coutd1')[0].innerHTML = (date2.getDate()) + '-' + this.months[date2.getMonth()]
    
    // document.getElementsByClassName('bdloc')[0].innerHTML = "<div>" + this.loc + "</div>"

    // document.getElementsByClassName('total')[0].innerHTML = "PKR " +  parseInt(document.getElementsByClassName('bdprice')[0].innerHTML.slice(4,document.getElementsByClassName('bdprice')[0].innerHTML.length).replace(/,/g, '')).toLocaleString();
    
    

  },

}
</script>

<style scoped>


.booking-details{
    background-color: rgba(74, 74, 74, 0.33);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 10px;
}

.inner-booking-details{
    background-color: rgb(34, 34, 34,0.9);
    border-radius: 6px;
    display: flex;
    /* justify-content: center; */
    margin-bottom: 5px;
    justify-content:space-between;
    padding: 5px 20px 5px;

}

@media only screen and (max-width: 991px){

  .inner-booking-details{
    background-color: rgb(34, 34, 34,0.9);
    border-radius: 6px;
    display: flex;
    /* justify-content: center; */
    margin-bottom: 5px;
    justify-content:space-between;
    padding: 5px 0px 5px;

}

}

@media only screen and (max-width: 767px){

  .inner-booking-details{
    background-color: rgb(34, 34, 34,0.9);
    border-radius: 6px;
    display: flex;
    /* justify-content: center; */
    margin-bottom: 5px;
    justify-content:space-between;
    padding: 5px 20px 5px;

}

}


</style>