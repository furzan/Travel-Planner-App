<template>
  <div v-show="err" style="font-size: small;" class="errormsg">
    Please Book Room For All Guests
  </div>

  <section id="page2">
    <video autoplay loop muted class="back-v">
      <source
        src="../assets/pexels-maksim-goncharenok-9871291 (2160p) (1).mp4"
        type="video/mp4"
      />
    </video>

    <navbar />

    <!-- <section v-show="!confirmation"   id="confirmation" style="z-index:1 ;">
      <Confirmation/>
    </section> -->

    <section id="s3">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-12 p-0 pt-3 pb-1 ps-3">
            <div class="d-flex">
              <div v-for="(plan, i) in travelplan" :key="i">
                {{ plan }} &nbsp;
                <img style="width: 30px;" src="../assets/arrow.png" alt="" />
                &nbsp;
              </div>
            </div>
          </div>

          <div class="col-md-3 col-12 p-0 ps-3 pt-3 pb-4">
            <!-- <RouterLink class="link" :to="{ name: 'home' }"> -->
              <div @click="goBack" class="link d-flex justify-content-lg-end">
                <img style="width: 20px;" src="../assets/back.png" alt="" />
                &nbsp;
                <div class="d-flex align-items-center">GO BACK</div>
              </div>
            <!-- </RouterLink> -->
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-8 col-12 pb-4">
            <div class="container-fluid d-flex p-0 pb-0">
              <div class="row gy-3 w-100 ps-3 justify-content-between toptionbar">

                
                <div class="col-lg-2 col-5 p-0"> 
                  <div class="toption">Islamabad</div>
                    <div style="font-size:large;" class=" col p-1 pb-2 pt-3 rating opacity-0 stars justify-content-start justify-content-center">

                        
                       <div class="toption2 1">
                        <label style="color: #FFD600;" v-show="!( s[0] || s[1] || s[2] || s[3] || s[4] )" >☆</label>
                        <label style="color: #FFD600;" v-show="s[0] || s[1] || s[2] || s[3] || s[4]"  >★</label>
                       </div>
                       
                       <div class="toption2 2">
                        <label style="color: #FFD600;" v-show="!(s[1] || s[2] || s[3] || s[4] )" >☆</label>
                        <label style="color: #FFD600;" v-show="s[1] || s[2] || s[3] || s[4] "  >★</label>
                       </div>

                       <div class="toption2 3">
                        <label style="color: #FFD600;" v-show="!(s[2] || s[3] || s[4])" >☆</label>
                        <label style="color: #FFD600;" v-show="(s[2] || s[3] || s[4])"  >★</label>
                       </div>

                       <div class="toption2 4">
                        <label style="color: #FFD600;" v-show="!(s[3] || s[4])" >☆</label>
                        <label style="color: #FFD600;" v-show="s[3] || s[4]"  >★</label>
                       </div>

                       <div class="toption2 5">
                        <label style="color: #FFD600;" v-show="!s[4]" >☆</label>
                        <label style="color: #FFD600;" v-show="s[4]"  >★</label>
                       </div>

                    </div> 
                </div>

                <div class="col-lg-2 col-5 p-0"> 
                  <div class="toption">Sawat</div> 
                  <div style="font-size:large;" class="col p-1 pb-2 pt-3 rating opacity-0 stars justify-content-start justify-content-center">

                        
                      <div class="toption2 1">
                      <label style="color: #FFD600;" v-show="!( s[0] || s[1] || s[2] || s[3] || s[4] )" >☆</label>
                      <label style="color: #FFD600;" v-show="s[0] || s[1] || s[2] || s[3] || s[4]"  >★</label>
                      </div>

                      <div class="toption2 2">
                      <label style="color: #FFD600;" v-show="!(s[1] || s[2] || s[3] || s[4] )" >☆</label>
                      <label style="color: #FFD600;" v-show="s[1] || s[2] || s[3] || s[4] "  >★</label>
                      </div>

                      <div class="toption2 3">
                      <label style="color: #FFD600;" v-show="!(s[2] || s[3] || s[4])" >☆</label>
                      <label style="color: #FFD600;" v-show="(s[2] || s[3] || s[4])"  >★</label>
                      </div>

                      <div class="toption2 4">
                      <label style="color: #FFD600;" v-show="!(s[3] || s[4])" >☆</label>
                      <label style="color: #FFD600;" v-show="s[3] || s[4]"  >★</label>
                      </div>

                      <div class="toption2 5">
                      <label style="color: #FFD600;" v-show="!s[4]" >☆</label>
                      <label style="color: #FFD600;" v-show="s[4]"  >★</label>
                      </div>

                      </div>              
                </div>
                
                <div class="col-lg-2 col-5 p-0"> 
                  <div class="toption">Kalam</div> 
                  <div style="font-size:large;" class="col p-1 pb-2 pt-3 rating opacity-0 stars justify-content-start justify-content-center">

                        
                    <div class="toption2 1">
                    <label style="color: #FFD600;" v-show="!( s[0] || s[1] || s[2] || s[3] || s[4] )" >☆</label>
                    <label style="color: #FFD600;" v-show="s[0] || s[1] || s[2] || s[3] || s[4]"  >★</label>
                    </div>

                    <div class="toption2 2">
                    <label style="color: #FFD600;" v-show="!(s[1] || s[2] || s[3] || s[4] )" >☆</label>
                    <label style="color: #FFD600;" v-show="s[1] || s[2] || s[3] || s[4] "  >★</label>
                    </div>

                    <div class="toption2 3">
                    <label style="color: #FFD600;" v-show="!(s[2] || s[3] || s[4])" >☆</label>
                    <label style="color: #FFD600;" v-show="(s[2] || s[3] || s[4])"  >★</label>
                    </div>

                    <div class="toption2 4">
                    <label style="color: #FFD600;" v-show="!(s[3] || s[4])" >☆</label>
                    <label style="color: #FFD600;" v-show="s[3] || s[4]"  >★</label>
                    </div>

                    <div class="toption2 5">
                    <label style="color: #FFD600;" v-show="!s[4]" >☆</label>
                    <label style="color: #FFD600;" v-show="s[4]"  >★</label>
                    </div>

                    </div>
                </div>
                                
                <div class="col-lg-2 col-5 p-0"> 
                  <div class="toption">Naran</div> 
                  <div style="font-size:large;" class="col p-1 pb-2 pt-3 rating opacity-0 stars justify-content-start justify-content-center">

                        
                      <div class="toption2 1">
                      <label style="color: #FFD600;" v-show="!( s[0] || s[1] || s[2] || s[3] || s[4] )" >☆</label>
                      <label style="color: #FFD600;" v-show="s[0] || s[1] || s[2] || s[3] || s[4]"  >★</label>
                      </div>

                      <div class="toption2 2">
                      <label style="color: #FFD600;" v-show="!(s[1] || s[2] || s[3] || s[4] )" >☆</label>
                      <label style="color: #FFD600;" v-show="s[1] || s[2] || s[3] || s[4] "  >★</label>
                      </div>

                      <div class="toption2 3">
                      <label style="color: #FFD600;" v-show="!(s[2] || s[3] || s[4])" >☆</label>
                      <label style="color: #FFD600;" v-show="(s[2] || s[3] || s[4])"  >★</label>
                      </div>

                      <div class="toption2 4">
                      <label style="color: #FFD600;" v-show="!(s[3] || s[4])" >☆</label>
                      <label style="color: #FFD600;" v-show="s[3] || s[4]"  >★</label>
                      </div>

                      <div class="toption2 5">
                      <label style="color: #FFD600;" v-show="!s[4]" >☆</label>
                      <label style="color: #FFD600;" v-show="s[4]"  >★</label>
                      </div>

                      </div>
                </div>                
                
                <div class="col-lg-2 col-5 p-0"> 
                  <div class="toption">Kaghan</div>
                  <div style="font-size:large;" class="col p-1 pb-2 pt-3 rating opacity-0 stars justify-content-start justify-content-center">

                        
                    <div class="toption2 1">
                    <label style="color: #FFD600;" v-show="!( s[0] || s[1] || s[2] || s[3] || s[4] )" >☆</label>
                    <label style="color: #FFD600;" v-show="s[0] || s[1] || s[2] || s[3] || s[4]"  >★</label>
                    </div>

                    <div class="toption2 2">
                    <label style="color: #FFD600;" v-show="!(s[1] || s[2] || s[3] || s[4] )" >☆</label>
                    <label style="color: #FFD600;" v-show="s[1] || s[2] || s[3] || s[4] "  >★</label>
                    </div>

                    <div class="toption2 3">
                    <label style="color: #FFD600;" v-show="!(s[2] || s[3] || s[4])" >☆</label>
                    <label style="color: #FFD600;" v-show="(s[2] || s[3] || s[4])"  >★</label>
                    </div>

                    <div class="toption2 4">
                    <label style="color: #FFD600;" v-show="!(s[3] || s[4])" >☆</label>
                    <label style="color: #FFD600;" v-show="s[3] || s[4]"  >★</label>
                    </div>

                    <div class="toption2 5">
                    <label style="color: #FFD600;" v-show="!s[4]" >☆</label>
                    <label style="color: #FFD600;" v-show="s[4]"  >★</label>
                    </div>

                    </div>
                </div>
              
              
              </div>
            </div>

            <!-- <div class="container-fluid d-flex p-0 pb-0">
              <div class="row rating gy-3 w-100 ps-3 d-flex justify-content-start toptionbar2"> -->

                <!-- <div class="col-lg-2 col-4 p-0 toption2 5 m-0">
                  <img
                    style="width: 90px; height: 60px;"
                    src="../assets/pg2starss.png"
                    alt=""
                  />
                </div>
                <div class="col-lg-2 col-4 p-0 toption2 4 m-0">
                  <img
                    style="width: 90px; height: 60px;"
                    src="../assets/pg2starss4.png"
                    alt=""
                  />
                </div>
                <div class="col-lg-2 col-4 p-0 toption2 3 m-0">
                  <img
                    style="width: 90px; height: 60px;"
                    src="../assets/pg2starss3.png"
                    alt=""
                  />
                </div>
                <div class="col-lg-2 col-4 p-0 toption2 2 m-0">
                  <img
                    style="width: 90px; height: 60px;"
                    src="../assets/pg2starss2.png"
                    alt=""
                  />
                </div>
                <div class="col-lg-2 col-4 p-0 toption2 1 m-0">
                  <img
                    style="width: 90px; height: 60px;"
                    src="../assets/pg2starss1.png"
                    alt=""
                  />
                </div> -->

              <!-- <div class=" d-flex justify-content-center mt-5"> -->
                <!-- <div class=" text-center mb-5"> -->
                    <!-- <div class="col p-1 pb-2 pt-3 rating d-flex justify-content-end justify-content-lg-center "> 
                  
                        <input type="radio" name="rating" value="5" id="5" checked>
                        <label class="toption2 toption2-sel 5" for="5">☆</label> 
                      
                        <input type="radio" name="rating" value="4" id="4">
                        <label class="toption2 4" for="4">☆</label> 
                        
                        <input type="radio" name="rating" value="3" id="3">
                        <label class="toption2 3" for="3">☆</label> 
                        
                        <input type="radio" name="rating" value="2" id="2">
                        <label class="toption2 2" for="2">☆</label> 
                        
                        <input type="radio" name="rating" value="1" id="1">
                        <label class="toption2 1" for="1">☆</label> 
                
                    </div> -->
                
                    <!-- <div class="buttons  mt-0"> <button class="btn btn-info px-4 py-1 rating-submit ">Submit</button> </div> -->
            
                <!-- </div> -->
              <!-- </div> -->


              
              <!-- </div>
            </div> -->

            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-12">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle d-flex justify-content-between fs-4 w-100 dbutton1"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div class="buttext">Select Hotel</div>
                      <div><img src="../assets/dropdown.png" alt="" /></div>
                    </button>

                    <ul class="dropdown-menu pg2drop">
                      <li class="d-flex">
                        <div class="container">
                          <div
                            class="row p-1 gap-lg-5 gap-1 d-flex justify-content-start"
                          >
                            <div
                              v-for="card in hotelcards"
                              :key="card.id"
                              @click="hotelcardclick($event)"
                              class="col-lg-5 col-12 d-flex hotelcard justify-content-around d-none"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div class=" d-flex flex-column justify-content-center">
                                <div
                                  class="v1"
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  {{ card.v1 }}
                                </div>

                                <div class="d-flex">
                                  <div style="width: 60px; height: 12px;">
                                    <img
                                      style="width: 60px; height: 12px;"
                                      src=""
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    class="v2"
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    {{ card.v2 }}
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div class="v3">{{ card.v3 }}</div>
                                  <div class="v4" style="font-size: x-small;">
                                    <!-- &nbsp;{{ card.v4 }} -->
                                  </div>
                                </div>

                                <div
                                  class="v5"
                                  style="font-size: small; color: aliceblue;"
                                >
                                  {{ card.v5 }}
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div class="v6">{{ card.v6 }}</div>
                                  <!-- <div  class="d-flex v7" style="color: black;">
                                  
                                  <div
                                     
                                    style="
                                      background-color: aliceblue;
                                      border-radius: 3px;
                                      height: 17px;
                                      width: 17px;
                                      display: flex;
                                      justify-content: center;
                                    "
                                  >
                                    -
                                  </div>
                                  <div
                                     v-show="hotelselected"
                                    style="
                                      padding: 0 10px 0;
                                      color: aliceblue;
                                    "
                                  >
                                  1
                                  </div>
                                  <div
                                     
                                    style="
                                      background-color: aliceblue;
                                      border-radius: 3px;
                                      height: 17px;
                                      width: 17px;
                                      display: flex;
                                      justify-content: center;
                                    "
                                  >
                                    +
                                  </div>
                                </div> -->
                                </div>
                              </div>
                            </div>

                            <!-- <div
                              @click="hotelcardclick"
                              class="col-lg col-12 d-flex hotelcard justify-content-around islamabad"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around islamabad"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around sawat"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around naran"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around naran"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> -->
                          </div>
                        </div>
                      </li>

                      <!-- <li class="d-flex">
                        <div class="container">
                          <div
                            class="row p-1 gap-1 d-flex justify-content-around"
                          >
                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around islamabad"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="d-flex">
                        <div class="container">
                          <div
                            class="row p-1 gap-1 d-flex justify-content-around"
                          >
                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="d-flex">
                        <div class="container">
                          <div
                            class="row p-1 gap-1 d-flex justify-content-around"
                          >
                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="d-flex">
                        <div class="container">
                          <div
                            class="row p-1 gap-1 d-flex justify-content-around"
                          >
                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="d-flex">
                        <div class="container">
                          <div
                            class="row p-1 gap-1 d-flex justify-content-around"
                          >
                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-lg col-12 d-flex hotelcard justify-content-around"
                              style="
                                background-color: rgb(41, 41, 41);
                                padding: 5px;
                                border-radius: 7px;
                              "
                            >
                              <div>
                                <img
                                  style="
                                    width: 100px;
                                    height: 100px;
                                    padding: 0px;
                                    border-radius: 5px;
                                  "
                                  src="../assets/pg2hotel.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div
                                  style="
                                    font-size: small;
                                    font-weight: bold;
                                    color: aliceblue;
                                  "
                                >
                                  Shelton Guest House
                                </div>

                                <div class="d-flex">
                                  <div>
                                    <img
                                      style="width: 60px; height: 10px;"
                                      src="img/pg2stars.png"
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style="
                                      font-size: x-small;
                                      display: flex;
                                      align-items: center;
                                      color: aliceblue;
                                    "
                                  >
                                    120 rviews
                                  </div>
                                </div>

                                <div
                                  class="d-flex"
                                  style="
                                    color: rgb(222, 169, 12);
                                    font-size: small;
                                  "
                                >
                                  <div>Delux Double Room</div>
                                  <div style="font-size: x-small;">
                                    &nbsp;(2 Adults+1 child)
                                  </div>
                                </div>

                                <div
                                  style="font-size: small; color: aliceblue;"
                                >
                                  1 large double bed
                                </div>

                                <div
                                  class="d-flex justify-content-between"
                                  style="
                                    color: rgb(216, 141, 1);
                                    font-size: small;
                                  "
                                >
                                  <div>PKR 7000/night</div>
                                  <div class="d-flex" style="color: black;">
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      -
                                    </div>
                                    <div
                                      style="
                                        padding: 0 10px 0;
                                        color: aliceblue;
                                      "
                                    >
                                      1
                                    </div>
                                    <div
                                      style="
                                        background-color: aliceblue;
                                        border-radius: 3px;
                                        height: 17px;
                                        width: 17px;
                                        display: flex;
                                        justify-content: center;
                                      "
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li> -->
                    </ul>
                  </div>
                </div>

                <div class="col-md-6 col-12 p-0 p-3 point d-flex justify-content-center" style="z-index:1">
                  <Router-Link @click="remloc(); errcheck(false); this.savedata();" @mouseover="pagecheck();"  class="link" :to="{name:nextp, params : { adults: adults, child: child, cin: cin , cout: cout, loc:location, tothprice:tothprice, numloc:numloc } }">
                    <div class="cont2 d-flex justify-content-center">
                      <div>Continue</div>
                      &nbsp;&nbsp;&nbsp;
                      <div class="arrow">>></div>
                    </div>
                  </Router-Link>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div
                      v-show="hotelselected1"
                      class="selhotel col-12 p-0 pb-1 ps-2"
                    >
                      <div
                        class="col-lg-6 col-12 d-flex selhotelcard justify-content-around p-0 pt-1 pb-1"
                        style="
                          background-color: rgb(255, 162, 0);
                          padding: 5px;
                          border-radius: 7px;
                        "
                      >
                        <div>
                          <img
                            style="
                              width: 100px;
                              height: 100px;
                              padding: 0px;
                              border-radius: 5px;
                            "
                            src="../assets/pg2hotel.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <div
                            class="v1"
                            style="
                              font-size: small;
                              font-weight: bold;
                              color: black;
                            "
                          >
                            Shelton Guest House
                          </div>

                          <div class="d-flex">
                            <div>
                              <img
                                style="width: 60px; height: 10px;"
                                src=""
                                alt=""
                              />
                            </div>
                            <div
                              class="v2"
                              style="
                                font-size: x-small;
                                display: flex;
                                align-items: center;
                                color: black;
                              "
                            >
                              120 rviews
                            </div>
                          </div>

                          <div
                            class="d-flex"
                            style="color: aliceblue; font-size: small;"
                          >
                            <div class="v3">Delux Double Room</div>
                            <div class="v4" style="font-size: x-small;">
                              <!-- &nbsp;(2 Adults+1 child) -->
                            </div>
                          </div>

                          <div
                            class="v5"
                            style="font-size: small; color: black;"
                          >
                            1 large double bed
                          </div>

                          <div
                            class="d-flex justify-content-between"
                            style="color: aliceblue; font-size: small;"
                          >
                            <div class="v6">PKR 7000/night</div>
                            <div class="d-flex" style="color: black;">
                              <div
                                class="point"
                                @click="
                                  numrooms1--;
                                  if (numrooms1 == 0) {
                                    updatehotel();
                                    hotelselected1 = false;
                                  }
                                "
                                style="
                                  background-color: aliceblue;
                                  border-radius: 3px;
                                  height: 17px;
                                  width: 17px;
                                  display: flex;
                                  justify-content: center;
                                "
                              >
                                -
                              </div>
                              <div style="padding: 0 10px 0; color: black;">
                                {{ numrooms1 }}
                              </div>
                              <div
                                class="point"
                                @click="numrooms1++"
                                style="
                                  background-color: aliceblue;
                                  border-radius: 3px;
                                  height: 17px;
                                  width: 17px;
                                  display: flex;
                                  justify-content: center;
                                "
                              >
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      v-show="hotelselected2"
                      class="selhotel col-12 p-0 pb-1 ps-2"
                    >
                      <div
                        class="col-lg-6 col-12 d-flex selhotelcard justify-content-around p-0 pt-1 pb-1"
                        style="
                          background-color: rgb(255, 162, 0);
                          padding: 5px;
                          border-radius: 7px;
                        "
                      >
                        <div>
                          <img
                            style="
                              width: 100px;
                              height: 100px;
                              padding: 0px;
                              border-radius: 5px;
                            "
                            src="../assets/pg2hotel.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <div
                            class="v1"
                            style="
                              font-size: small;
                              font-weight: bold;
                              color: black;
                            "
                          >
                            Shelton Guest House
                          </div>

                          <div class="d-flex">
                            <div>
                              <img
                                style="width: 60px; height: 10px;"
                                src=""
                                alt=""
                              />
                            </div>
                            <div
                              class="v2"
                              style="
                                font-size: x-small;
                                display: flex;
                                align-items: center;
                                color: black;
                              "
                            >
                              120 rviews
                            </div>
                          </div>

                          <div
                            class="d-flex"
                            style="color: aliceblue; font-size: small;"
                          >
                            <div class="v3">Delux Double Room</div>
                            <div class="v4" style="font-size: x-small;">
                              <!-- &nbsp;(2 Adults+1 child) -->
                            </div>
                          </div>

                          <div
                            class="v5"
                            style="font-size: small; color: black;"
                          >
                            1 large double bed
                          </div>

                          <div
                            class="d-flex justify-content-between"
                            style="color: aliceblue; font-size: small;"
                          >
                            <div class="v6">PKR 7000/night</div>
                            <div class="d-flex" style="color: black;">
                              <div
                                class="point"
                                @click="
                                  numrooms2--;
                                  if (numrooms2 == 0) {
                                    updatehotel();
                                    hotelselected2 = false;
                                  }
                                "
                                style="
                                  background-color: aliceblue;
                                  border-radius: 3px;
                                  height: 17px;
                                  width: 17px;
                                  display: flex;
                                  justify-content: center;
                                "
                              >
                                -
                              </div>
                              <div style="padding: 0 10px 0; color: black;">
                                {{ numrooms2 }}
                              </div>
                              <div
                                class="point"
                                @click="numrooms2++"
                                style="
                                  background-color: aliceblue;
                                  border-radius: 3px;
                                  height: 17px;
                                  width: 17px;
                                  display: flex;
                                  justify-content: center;
                                "
                              >
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      v-show="hotelselected3"
                      class="selhotel col-12 p-0 pb-1 ps-2"
                    >
                      <div
                        class="col-lg-6 col-12 d-flex selhotelcard justify-content-around p-0 pt-1 pb-1"
                        style="
                          background-color: rgb(255, 162, 0);
                          padding: 5px;
                          border-radius: 7px;
                        "
                      >
                        <div>
                          <img
                            style="
                              width: 100px;
                              height: 100px;
                              padding: 0px;
                              border-radius: 5px;
                            "
                            src="../assets/pg2hotel.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <div
                            class="v1"
                            style="
                              font-size: small;
                              font-weight: bold;
                              color: black;
                            "
                          >
                            Shelton Guest House
                          </div>

                          <div class="d-flex">
                            <div>
                              <img
                                style="width: 60px; height: 10px;"
                                src=""
                                alt=""
                              />
                            </div>
                            <div
                              class="v2"
                              style="
                                font-size: x-small;
                                display: flex;
                                align-items: center;
                                color: black;
                              "
                            >
                              120 rviews
                            </div>
                          </div>

                          <div
                            class="d-flex"
                            style="color: aliceblue; font-size: small;"
                          >
                            <div class="v3">Delux Double Room</div>
                            <div class="v4" style="font-size: x-small;">
                              <!-- &nbsp;(2 Adults+1 child) -->
                            </div>
                          </div>

                          <div
                            class="v5"
                            style="font-size: small; color: black;"
                          >
                            1 large double bed
                          </div>

                          <div
                            class="d-flex justify-content-between"
                            style="color: aliceblue; font-size: small;"
                          >
                            <div class="v6">PKR 7000/night</div>
                            <div class="d-flex" style="color: black;">
                              <div
                                class="point"
                                @click="
                                  numrooms3--;
                                  if (numrooms3 == 0) {
                                    updatehotel();
                                    hotelselected3 = false;
                                  }
                                "
                                style="
                                  background-color: aliceblue;
                                  border-radius: 3px;
                                  height: 17px;
                                  width: 17px;
                                  display: flex;
                                  justify-content: center;
                                "
                              >
                                -
                              </div>
                              <div style="padding: 0 10px 0; color: black;">
                                {{ numrooms3 }}
                              </div>
                              <div
                                class="point"
                                @click="numrooms3++"
                                style="
                                  background-color: aliceblue;
                                  border-radius: 3px;
                                  height: 17px;
                                  width: 17px;
                                  display: flex;
                                  justify-content: center;
                                "
                              >
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-3 d-flex justify-content-between">
                 
                  <div  v-show="hotelselected1||hotelselected2||hotelselected3" class="addmat">
                    <div
                      @click="matbtn = true"
                      v-if="!matbtn"
                      class="btn"
                      style="
                        background-color: rgb(255, 216, 43) !important;
                        color: aliceblue;
                        font-weight: bold;
                      "
                    >
                      Extra Mattress
                    </div>

                    <div v-if="matbtn" class="d-flex">
                      <div
                        class="point"
                        @click="
                          matress--;
                          if(matress<=0){
                            matbtn=false
                            if(matress<0){
                              matress++
                            }
                          }
                          if (numrooms1 == 0) {
                            updatehotel();
                            hotelselected1 = false;
                          }
                        "
                        style="
                          background-color: rgb(255, 216, 43) !important;
                          border-radius: 3px;
                          height: 30px;
                          width: 25px;
                          display: flex;
                          justify-content: center;
                        "
                      >
                        -
                      </div>
                      <div style="padding: 0 10px 0; color: black;">
                        {{ matress }}
                      </div>
                      <div
                        class="point"
                        @click="matress++"
                        style="
                          background-color: rgb(255, 216, 43) !important;
                          border-radius: 3px;
                          height: 30px;
                          width: 25px;
                          display: flex;
                          justify-content: center;
                        "
                      >
                        +
                      </div>
                    </div>
                  </div>

                  <div  v-show="hotelselected1||hotelselected2||hotelselected3" class="setdays">

                    <div
                      @click="daybut = true"
                      v-if="!daybut"
                      class="btn"
                      style="
                        background-color: rgb(255, 216, 43) !important;
                        color: aliceblue;
                        font-weight: bold;
                      "
                    >
                      Set Days
                    </div>
                   
                    <div v-if="daybut" class="d-flex">
                      <div
                        class="point"
                        @click="daysminus"
                        style="
                          background-color: rgb(255, 216, 43) !important;
                          border-radius: 3px;
                          height: 30px;
                          width: 25px;
                          display: flex;
                          justify-content: center;
                        "
                      >
                        -
                      </div>
                      <div class="days" style="padding: 0 10px 0; color: black;">
                        {{ days[days.length-1] }}
                      </div>
                      <div
                        class="point"
                        @click="daysplus()"
                        style="
                          background-color: rgb(255, 216, 43) !important;
                          border-radius: 3px;
                          height: 30px;
                          width: 25px;
                          display: flex;
                          justify-content: center;
                        "
                      >
                        +
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-4 col-12 p-0">
            <BookingDetails
              class="bcard"
              :adults="adults"
              :child="child"
              :cin="cin"
              :cout="cout"
              :loc="loc"
            />
          </div>
        </div>

      </div>

      <div v-if="false" class="container p-0 pt-5">
        <div class="gap-1 d-lg-flex d-none">
          <div
            class="col-lg col-12 d-flex justify-content-around"
            style="
              background-color: rgb(41, 41, 41);
              padding: 5px;
              border-radius: 7px;
            "
          >
            <div>
              <img
                style="
                  width: 100px;
                  height: 100px;
                  padding: 0px;
                  border-radius: 5px;
                "
                src="../assets/pg2hotel.png"
                alt=""
              />
            </div>
            <div>
              <div
                style="font-size: small; font-weight: bold; color: aliceblue;"
              >
                Shelton Guest House
              </div>

              <div class="d-flex">
                <div>
                  <img style="width: 60px; height: 10px;" src="" alt="" />
                </div>
                <div
                  style="
                    font-size: x-small;
                    display: flex;
                    align-items: center;
                    color: aliceblue;
                  "
                >
                  120 rviews
                </div>
              </div>

              <div
                class="d-flex"
                style="color: rgb(222, 169, 12); font-size: small;"
              >
                <div>Delux Double Room</div>
                <div style="font-size: x-small;">&nbsp;(2 Adults+1 child)</div>
              </div>

              <div style="font-size: small; color: aliceblue;">
                1 large double bed
              </div>

              <div
                class="d-flex justify-content-between"
                style="color: rgb(216, 141, 1); font-size: small;"
              >
                <div>PKR 7000/night</div>
                <!-- <div class="d-flex" style="color: black;">
                  <div
                    style="
                      background-color: aliceblue;
                      border-radius: 3px;
                      height: 17px;
                      width: 17px;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    -
                  </div>
                  <div style="padding: 0 10px 0; color: aliceblue;">1</div>
                  <div
                    style="
                      background-color: aliceblue;
                      border-radius: 3px;
                      height: 17px;
                      width: 17px;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    +
                  </div>
                </div> -->
              </div>
            </div>
          </div>

          <div
            class="col-lg col-12 d-flex justify-content-around"
            style="
              background-color: rgb(41, 41, 41);
              padding: 5px;
              border-radius: 7px;
            "
          >
            <div>
              <img
                style="
                  width: 100px;
                  height: 100px;
                  padding: 0px;
                  border-radius: 5px;
                "
                src="../assets/pg2hotel.png"
                alt=""
              />
            </div>
            <div>
              <div
                style="font-size: small; font-weight: bold; color: aliceblue;"
              >
                Shelton Guest House
              </div>

              <div class="d-flex">
                <div>
                  <img style="width: 60px; height: 10px;" src="" alt="" />
                </div>
                <div
                  style="
                    font-size: x-small;
                    display: flex;
                    align-items: center;
                    color: aliceblue;
                  "
                >
                  120 rviews
                </div>
              </div>

              <div
                class="d-flex"
                style="color: rgb(222, 169, 12); font-size: small;"
              >
                <div>Delux Double Room</div>
                <div style="font-size: x-small;">&nbsp;(2 Adults+1 child)</div>
              </div>

              <div style="font-size: small; color: aliceblue;">
                1 large double bed
              </div>

              <div
                class="d-flex justify-content-between"
                style="color: rgb(216, 141, 1); font-size: small;"
              >
                <div>PKR 7000/night</div>
                <!-- <div class="d-flex" style="color: black;">
                  <div
                    style="
                      background-color: aliceblue;
                      border-radius: 3px;
                      height: 17px;
                      width: 17px;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    -
                  </div>
                  <div style="padding: 0 10px 0; color: aliceblue;">1</div>
                  <div
                    style="
                      background-color: aliceblue;
                      border-radius: 3px;
                      height: 17px;
                      width: 17px;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    +
                  </div>
                </div> -->
              </div>
            </div>
          </div>

          <div
            class="col-lg col-12 d-flex justify-content-around"
            style="
              background-color: rgb(41, 41, 41);
              padding: 5px;
              border-radius: 7px;
            "
          >
            <div>
              <img
                style="
                  width: 100px;
                  height: 100px;
                  padding: 0px;
                  border-radius: 5px;
                "
                src="../assets/pg2hotel.png"
                alt=""
              />
            </div>
            <div>
              <div
                style="font-size: small; font-weight: bold; color: aliceblue;"
              >
                Shelton Guest House
              </div>

              <div class="d-flex">
                <div>
                  <img style="width: 60px; height: 10px;" src="" alt="" />
                </div>
                <div
                  style="
                    font-size: x-small;
                    display: flex;
                    align-items: center;
                    color: aliceblue;
                  "
                >
                  120 rviews
                </div>
              </div>

              <div
                class="d-flex"
                style="color: rgb(222, 169, 12); font-size: small;"
              >
                <div>Delux Double Room</div>
                <div style="font-size: x-small;">&nbsp;(2 Adults+1 child)</div>
              </div>

              <div style="font-size: small; color: aliceblue;">
                1 large double bed
              </div>

              <div
                class="d-flex justify-content-between"
                style="color: rgb(216, 141, 1); font-size: small;"
              >
                <div>PKR 7000/night</div>
                <!-- <div class="d-flex" style="color: black;">
                  <div
                    style="
                      background-color: aliceblue;
                      border-radius: 3px;
                      height: 17px;
                      width: 17px;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    -
                  </div>
                  <div style="padding: 0 10px 0; color: aliceblue;">1</div>
                  <div
                    style="
                      background-color: aliceblue;
                      border-radius: 3px;
                      height: 17px;
                      width: 17px;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    +
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown pt-3">
          <button
            style="border: none; background: none;"
            class="btn btn-secondary dropdown-toggle d-flex justify-content-end w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div style="color: rgb(255, 179, 0); font-weight: 800;" class="">
              View More &nbsp;
            </div>
            <div
              style="
                border-radius: 50%;
                background-color: aliceblue;
                color: rgb(255, 187, 0);
                font-weight: 800;
              "
            >
              >>
            </div>
          </button>

          <ul class="dropdown-menu pg2drop2">
            <li class="d-flex">
              <div class="container">
                <div class="row p-1 gap-1 d-flex justify-content-around">
                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="d-flex">
              <div class="container">
                <div class="row p-1 gap-1 d-flex justify-content-around">
                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="d-flex">
              <div class="container">
                <div class="row p-1 gap-1 d-flex justify-content-around">
                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="d-flex">
              <div class="container">
                <div class="row p-1 gap-1 d-flex justify-content-around">
                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg col-12 d-flex justify-content-around"
                    style="
                      background-color: rgb(41, 41, 41);
                      padding: 5px;
                      border-radius: 7px;
                    "
                  >
                    <div>
                      <img
                        style="
                          width: 100px;
                          height: 100px;
                          padding: 0px;
                          border-radius: 5px;
                        "
                        src="../assets/pg2hotel.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        style="
                          font-size: small;
                          font-weight: bold;
                          color: aliceblue;
                        "
                      >
                        Shelton Guest House
                      </div>

                      <div class="d-flex">
                        <div>
                          <img
                            style="width: 60px; height: 10px;"
                            src=""
                            alt=""
                          />
                        </div>
                        <div
                          style="
                            font-size: x-small;
                            display: flex;
                            align-items: center;
                            color: aliceblue;
                          "
                        >
                          120 rviews
                        </div>
                      </div>

                      <div
                        class="d-flex"
                        style="color: rgb(222, 169, 12); font-size: small;"
                      >
                        <div>Delux Double Room</div>
                        <div style="font-size: x-small;">
                          &nbsp;(2 Adults+1 child)
                        </div>
                      </div>

                      <div style="font-size: small; color: aliceblue;">
                        1 large double bed
                      </div>

                      <div
                        class="d-flex justify-content-between"
                        style="color: rgb(216, 141, 1); font-size: small;"
                      >
                        <div>PKR 7000/night</div>
                        <div class="d-flex" style="color: black;">
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            -
                          </div>
                          <div style="padding: 0 10px 0; color: aliceblue;">
                            1
                          </div>
                          <div
                            style="
                              background-color: aliceblue;
                              border-radius: 3px;
                              height: 17px;
                              width: 17px;
                              display: flex;
                              justify-content: center;
                            "
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </section>
  </section>
</template>

<script>
import navbar from "../components/navbar.vue";
import { RouterLink } from "vue-router";
import BookingDetails from "../components/BookingDetails.vue";
import Confirmation from "../components/Confirmation.vue";
import { onMounted } from "vue";

export default {
  components: {
    navbar,
    RouterLink,
    BookingDetails,
    Confirmation,
  },
  props: {
    adults: 0,
    child: 0,
    cin: "",
    cout: "",
    loc: "",
  },

  data() {
    return {
      //   adults :null,
      //   temp :null,

      s:[false,false,false,false,false],

      duration:0,
      err:false,
      nextp:"page2",
      daybut:false,
      days:[],
      travelplan: [],
      topts: [],
      topts2: [],
      hotcards: [],
      seloptarr: Array(5).fill(false),
      avalhotels: Array(8).fill(false),
      tothprice:0,
      numloc:0,

      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      locations: ["Islamabad", "Sawat", "Kalam", "Naran", "Kaghan"],
      locationsprice: [10000, 20000, 30000, 40000, 50000],

      numrooms1: 0,
      numrooms2: 0,
      numrooms3: 0,
      hotelselected1: false,
      hotelselected2: false,
      hotelselected3: false,
      p1: 0,
      p2: 0,
      p3: 0,
      person_lux: 2,
      person_delux: 4,
      person_nor: 3,
      curr_people: 0,
      curr_opt: "",
      temp: "",
      matress: 0,
      matbtn: false,

      currhotel: "",
      lochotelprice: [],
      hotelcards: [
        {
          v1: "Oolong1 Guest House",
          v2: "120 rviews",
          v3: "Delux Double Room",
          v4: "(2 Adults+1 child)",
          v5: "1 large double bed",
          v6: "PKR 1000/night",
          loc: "islamabad",
          id: "1",
          type: "lux",
          stars: "5",
          price: 1000,
          hname: "h1",
        },

        {
          v1: "Oolong2 Guest House",
          v2: "120 rviews",
          v3: "Delux Double Room",
          v4: "(2 Adults+1 child)",
          v5: "1 large double bed",
          v6: "PKR 2000/night",
          loc: "islamabad",
          id: "1",
          type: "delux",
          stars: "5",
          price: 2000,
          hname: "h1",
        },

        {
          v1: "Oolong3 Guest House",
          v2: "120 rviews",
          v3: "Delux Double Room",
          v4: "(2 Adults+1 child)",
          v5: "1 large double bed",
          v6: "PKR 3000/night",
          loc: "islamabad",
          id: "1",
          type: "normal",
          stars: "5",
          price: 3000,
          hname: "h1",
        },

        {
          v1: "Oolong4 Guest House",
          v2: "120 rviews",
          v3: "Delux Double Room",
          v4: "(2 Adults+1 child)",
          v5: "1 large double bed",
          v6: "PKR 4000/night",
          loc: "islamabad",
          id: "1",
          type: "delux",
          stars: "4",
          price: 4000,
          hname: "h2",
        },

        {
          v1: "Oolong5 Guest House",
          v2: "120 rviews",
          v3: "Delux Double Room",
          v4: "(2 Adults+1 child)",
          v5: "1 large double bed",
          v6: "PKR 5000/night",
          loc: "sawat",
          id: "1",
          type: "delux",
          stars: "4",
          price: 5000,
          hname: "h2",
        },

        {
          v1: "Oolong6 Guest House",
          v2: "120 rviews",
          v3: "Delux Double Room",
          v4: "(2 Adults+1 child)",
          v5: "1 large double bed",
          v6: "PKR 6000/night",
          loc: "sawat",
          id: "1",
          type: "delux",
          stars: "4",
          price: 6000,
          hname: "h3",
        },

        {
          v1: "Oolong6 Guest House",
          v2: "120 rviews",
          v3: "Delux Double Room",
          v4: "(2 Adults+1 child)",
          v5: "1 large double bed",
          v6: "PKR 3500/night",
          loc: "kalam",
          id: "1",
          type: "lux",
          stars: "4",
          price: 3500,
          hname: "h3",
        },

        {
          v1: "Oolong6 Guest House",
          v2: "120 rviews",
          v3: "Delux Double Room",
          v4: "(2 Adults+1 child)",
          v5: "1 large double bed",
          v6: "PKR 4000/night",
          loc: "kalam",
          id: "1",
          type: "delux",
          stars: "4",
          price: 4000,
          hname: "h3",
        },

        // {"v1":"Shelton Guest House","v2":"120 rviews","v3":"Delux Double Room","v4":"(2 Adults+1 child)","v5":"1 large double bed","v6":"PKR 7000/night","loc":"sawat","id":"2"},

        // {"v1":"Shelton Guest House","v2":"120 rviews","v3":"Delux Double Room","v4":"(2 Adults+1 child)","v5":"1 large double bed","v6":"PKR 7000/night","loc":"sawat","id":"3"}
      ],
      // confirmation:false,
    };
  },
  methods: {

    goBack() {
      console.log("ascas")
      this.$router.go(-1); // Navigate back in history
    },  

    savedata(){
      if(this.travelplan.length>0){
      sessionStorage.setItem('tplan',JSON.stringify(this.travelplan))
      sessionStorage.setItem('lochprice',JSON.stringify(this.lochotelprice))
      sessionStorage.setItem('days',JSON.stringify(this.days))
      }
      else{
      sessionStorage.removeItem('tplan')
      sessionStorage.removeItem('lochprice')
      sessionStorage.removeItem('days')
      }
    },

    setdata(){
      if(sessionStorage.getItem('tplan')){
        this.travelplan=JSON.parse(sessionStorage.getItem('tplan'))
        this.lochotelprice=JSON.parse(sessionStorage.getItem('lochprice'))
        this.days=JSON.parse(sessionStorage.getItem('days'))
        for(let c=0;c<this.travelplan.length;c++){
          for(let i = 0; i<this.topts.length;i++){
            if(this.topts[i].innerHTML.slice(0, this.topts[i].innerHTML.length).toLowerCase()==this.travelplan[c]) this.topts[i].classList.add("toption-sel");
          }
        }
        this.updatehotel()
      }
    },

    pagecheck(){
      if ( this.curr_people >= Math.ceil(parseInt(this.adults) + parseFloat(this.child / 2)) || this.travelplan.length == 0 ) {
        this.nextp="page3";
      }
      else{
        this.nextp="page2";
      }
      if(this.days.length!=0 && this.days[this.days.length-1]==0 && this.numloc>0){this.numloc--}
    },

    setloc(i) {
      // this.hotelselected=!this.hotelselected;
      this.hotelselected = false;
      document.getElementsByClassName("bdloc")[0].innerHTML =
        "<div>" + this.locations[i] + "</div>";
      document.getElementsByClassName("bdprice")[0].innerHTML =
        "PKR " + this.locationsprice[i].toLocaleString();

      this.updatetot();
    },
    remloc(){
      // let i = 0
      for(let c=0;c<this.travelplan.length;c++){
         if(this.days[c]==0){
          this.days.splice(c,1)
          for(let i = 0; i<this.topts.length;i++){
            if(this.topts[i].innerHTML.slice(0, this.topts[i].innerHTML.length ).toLowerCase()==this.travelplan[c]) this.topts[i].classList.remove("toption-sel");
          }
          this.travelplan.splice(c,1)
          this.lochotelprice.splice(c,1)
         }
        //  this.topts.forEach((topt, i) => {
        //   console.log("t")
        //   // console.log(topt.innerHTML.slice(0, topt.innerHTML.length - 8).toLowerCase() + "   " + this.travelplan[this.travelplan.length-1])
        //   if(topt.innerHTML.slice(0, topt.innerHTML.length - 8).toLowerCase()==this.travelplan[this.travelplan.length-1]){
        //   console.log("tt")
        //   this.curr_opt = topt; 
        //   }
        // })
         this.updatehotel()
        //  this.savedata()
      }
    },
    toption() {

      let s = '<div class="col p-1 pb-2 pt-3 rating stars d-flex justify-content-end justify-content-lg-center ">  <input class="5star" type="radio" name="rating" value="5" id="5" checked><label class="toption2 toption2-sel 5" for="5">☆</label> <input type="radio" name="rating" value="4" id="4"> <label class="toption2 4" for="4">☆</label>  <input type="radio" name="rating" value="3" id="3"> <label class="toption2 3" for="3">☆</label> <input type="radio" name="rating" value="2" id="2"> <label class="toption2 2" for="2">☆</label> <input type="radio" name="rating" value="1" id="1"><label class="toption2 1" for="1">☆</label> </div>'


      this.topts.forEach((topt, i) => {
        topt.addEventListener("click", () => {
          
          // document.getElementById("5").checked=true
          // this.remloc()
          this.matbtn = false;
          this.daybut=false

          this.updatehotel();

          this.curr_opt = topt;
          // console.log(this.travelplan)
          // console.log(topt.classList)
          console.log(
            topt.innerHTML.slice(0, topt.innerHTML.length).toLowerCase()
          );

          if (
            this.errcheck(false)
            //  || (this.errcheck(topt.classList.contains("toption-sel") && topt.innerHTML.slice(0,(topt.innerHTML.length-8)).toLowerCase()==this.travelplan[this.travelplan.length-1] ))
          ) { console.log("check")
           
          

          // if(document.getElementsByClassName("stars")[0])document.getElementsByClassName("stars")[0].remove()
            
            // this.remloc()
            this.temp = this.curr_people;
            // this.curr_people=0
            this.p1 = 0;
            this.p2 = 0;
            this.p3 = 0;
            this.numrooms1 = 0;
            this.numrooms2 = 0;
            this.numrooms3 = 0;

            this.currhotel = "";
            for (let c = 0; c < this.hotcards.length; c++) {
              this.hotcards[c].classList.remove("disabled");
              this.hotcards[c].classList.remove("highlighted");
            }
            this.hotelselected1 = false;
            this.hotelselected2 = false;
            this.hotelselected3 = false;

            // this.topts2.forEach((t) => {
            //   t.classList.remove("toption2-sel");
            // });

            this.seloptarr[i] = !this.seloptarr[i];
            let hotelcard = document.getElementsByClassName("hotelcard");

            if (topt.classList.contains("toption-sel")) { console.log("check2")
              this.matress = 0;

              topt.classList.remove("toption-sel");

              this.days.splice(
                this.travelplan.indexOf(
                  topt.innerHTML
                    .slice(0, topt.innerHTML.length)
                    .toLowerCase()
                ),
                1
              );

              this.lochotelprice.splice(
                this.travelplan.indexOf(
                  topt.innerHTML
                    .slice(0, topt.innerHTML.length)
                    .toLowerCase()
                ),
                1
              );
              this.travelplan.splice(
                this.travelplan.indexOf(
                  topt.innerHTML
                    .slice(0, topt.innerHTML.length )
                    .toLowerCase()
                ),
                1
              );

              

              // console.log("travel plan", this.travelplan);

              for (let c = 0; c < hotelcard.length; c++) {
                hotelcard[c].classList.add("d-none");
              }
              // this.updatehotel()
              // console.log(this.travelplan.indexOf(topt.innerHTML.slice(0, topt.innerHTML.length - 8).toLowerCase())+"days " + this.days)
            } else {



              let r = document.getElementsByClassName("stars")
              let inp = document.getElementsByClassName("5star")
              console.log("5star = " + inp.length + " stars = " + r.length)
              for(let j=0;j<r.length;j++){
                if(j!=i){
                  r[j].classList.remove("opacity-100")
                  r[j].classList.add("opacity-0")
                }
                else{
                  r[j].classList.remove("opacity-0")
                  r[j].classList.add("opacity-100")
                  // inp[j].checked=true
                  }

                  for(let c=0; c<this.s.length; c++)this.s[c]=false  

                console.log("k")
              }

              // topt.parentElement.insertAdjacentHTML('beforeend', s);
              



              this.remloc()

              this.matress = 0;

              this.curr_people = 0;

              this.travelplan.push(
                topt.innerHTML.slice(0, topt.innerHTML.length ).toLowerCase()
              );
              topt.classList.add("toption-sel");
              // this.seloptarr[i] = !this.seloptarr[i];
              //   console.log('clicked ' + i + '  ' + this.seloptarr[i]);

              // let hotelcard = document.getElementsByClassName("hotelcard");
              // this.avalhotels.fill(false);

              console.log(this.travelplan.length)
              this.days[this.travelplan.length-1]=0

              for (let c = 0; c < hotelcard.length; c++) {
                hotelcard[c].classList.add("d-none");

                // if (this.seloptarr[0] == true) {
                // if (hotelcard[c].classList.contains("islamabad"))
                if (
                  hotelcard[c].classList.contains(
                    this.travelplan[this.travelplan.length - 1]
                  )
                )
                  hotelcard[c].classList.remove("d-none");
                
                
                // }
                // if (this.seloptarr[1] == true) {
                //   if (hotelcard[c].classList.contains("sawat"))
                //     hotelcard[c].classList.remove("d-none");
                // }
                // if (this.seloptarr[2] == true) {
                //   if (hotelcard[c].classList.contains("kalam"))
                //     hotelcard[c].classList.remove("d-none");
                // }
                // if (this.seloptarr[3] == true) {
                //   if (hotelcard[c].classList.contains("naran"))
                //     hotelcard[c].classList.remove("d-none");
                // }
                // if (this.seloptarr[4] == true) {
                //   if (hotelcard[c].classList.contains("kaghan"))
                //     hotelcard[c].classList.remove("d-none");
                // }

              }

            //   console.log("days " + this.days)

            //   for (let c = 0; c < this.hotcards.length; c++) {
            //   if (
            //     this.hotcards[c].classList.contains(
            //       this.travelplan[this.travelplan.length - 1]
            //     )
            //   ) {
            //     this.hotcards[c].classList.add("d-none");
                
            //       if (this.hotelcards[c].stars == "5")
            //         hotelcard[c].classList.remove("d-none");
                
            //   }
            // }

            }
            this.updatehotel();
            // setTimeout(() => {
            //   this.toption2()
            // }, timeout);
            
          }
          this.numloc=this.travelplan.length
          
          this.updatehotel();
          
        });
      });
    },

    toption2() {
      // console.log("sdc")

      this.topts2.forEach((topt2, i) => {
        topt2.addEventListener("click", () => {
          let hotelcard = document.getElementsByClassName("hotelcard");

          for(let c=0; c<this.s.length; c++) if(c!=(i%5))this.s[c]=false

          this.s[(i%5)]=!this.s[(i%5)]

          console.log("s array = " + this.s)

          if (topt2.classList.contains("toption2-sel")) {
            topt2.classList.remove("toption2-sel");

            for (let c = 0; c < hotelcard.length; c++) {
              hotelcard[c].classList.add("d-none");
              if (
                hotelcard[c].classList.contains(
                  this.travelplan[this.travelplan.length - 1]
                )
              )
                hotelcard[c].classList.remove("d-none");
            }

            // const ratingInputs = document.getElementsByClassName('stars')[0];

            // ratingInputs.forEach(input => {
            //   input.addEventListener('change', function() {

            //     const checkedInput = document.querySelector('.rating > input:checked');

            //     const label = checkedInput.nextElementSibling;

            //     checkedInput.forEach(input => input.checked = false);
            //     label.classList.remove('checked');
            //   });
            // });

           // document.getElementById("33").addEventListener("click",()=>{document.getElementById("33").checked=true; console.log("oo")})


          } else {
            this.topts2.forEach((t) => {
              t.classList.remove("toption2-sel");
            });

            topt2.classList.add("toption2-sel");

            for (let c = 0; c < hotelcard.length; c++) {
              if (
                hotelcard[c].classList.contains(
                  this.travelplan[this.travelplan.length - 1]
                )
              ) {
                hotelcard[c].classList.add("d-none");
                if (topt2.classList.contains("5") == true) {
                  if (this.hotelcards[c].stars == "5")
                    hotelcard[c].classList.remove("d-none");
                } else if (topt2.classList.contains("4") == true) {
                  if (this.hotelcards[c].stars == "4")
                    hotelcard[c].classList.remove("d-none");
                } else if (topt2.classList.contains("3") == true) {
                  if (this.hotelcards[c].stars == "3")
                    hotelcard[c].classList.remove("d-none");
                } else if (topt2.classList.contains("2") == true) {
                  if (this.hotelcards[c].stars == "2")
                    hotelcard[c].classList.remove("d-none");
                } else if (topt2.classList.contains("1") == true) {
                  if (this.hotelcards[c].stars == "1")
                    hotelcard[c].classList.remove("d-none");
                }
              }
            }
          }
        });
      });
    },

    hotelcardclick(event) {
      let t = 0;
      let i = this.hotcards.indexOf(event.currentTarget);

      if (!event.currentTarget.classList.contains("disabled")) {
        this.currhotel = this.hotelcards[i].hname;
        this.highhotel();
        // event.currentTarget.classList.add("highlighted")

        // document.getElementsByClassName('numhotels')[0].innerHTML= (this.numrooms1 + this.numrooms2 + this.numrooms3) + " Hotels"
        // this.hotelselected=true

        if (event.currentTarget.classList.contains("lux")) {
          t = 0;
          this.numrooms1 = 1;
          this.hotelselected1 = true;
          this.p1 = this.hotelcards[i].price;
        } else if (event.currentTarget.classList.contains("delux")) {
          t = 1;
          this.numrooms2 = 1;
          this.hotelselected2 = true;
          this.p2 = this.hotelcards[i].price;
        } else {
          t = 2;
          this.numrooms3 = 1;
          this.hotelselected3 = true;
          this.p3 = this.hotelcards[i].price;
        }

        document
          .getElementsByClassName("selhotelcard")
          [t].getElementsByClassName("v1")[0].innerHTML = this.hotelcards[i].v1;
        document
          .getElementsByClassName("selhotelcard")
          [t].getElementsByClassName("v2")[0].innerHTML = this.hotelcards[i].v2;
        document
          .getElementsByClassName("selhotelcard")
          [t].getElementsByClassName("v3")[0].innerHTML = this.hotelcards[i].v3;
        // document
        //   .getElementsByClassName("selhotelcard")
        //   [t].getElementsByClassName("v4")[0].innerHTML = this.hotelcards[i].v4;
        document
          .getElementsByClassName("selhotelcard")
          [t].getElementsByClassName("v5")[0].innerHTML = this.hotelcards[i].v5;
        document
          .getElementsByClassName("selhotelcard")
          [t].getElementsByClassName("v6")[0].innerHTML = this.hotelcards[i].v6;
        // document.getElementsByClassName("selhotelcard")[t].getElementsByClassName("v1")[0].innerHTML=event.currentTarget.getElementsByClassName("v1")[0].innerHTML
        // document.getElementsByClassName("selhotelcard")[t].getElementsByClassName("v2")[0].innerHTML=event.currentTarget.getElementsByClassName("v2")[0].innerHTML
        // document.getElementsByClassName("selhotelcard")[t].getElementsByClassName("v3")[0].innerHTML=event.currentTarget.getElementsByClassName("v3")[0].innerHTML
        // document.getElementsByClassName("selhotelcard")[t].getElementsByClassName("v4")[0].innerHTML=event.currentTarget.getElementsByClassName("v4")[0].innerHTML
        // document.getElementsByClassName("selhotelcard")[t].getElementsByClassName("v5")[0].innerHTML=event.currentTarget.getElementsByClassName("v5")[0].innerHTML
        // document.getElementsByClassName("selhotelcard")[t].getElementsByClassName("v6")[0].innerHTML=event.currentTarget.getElementsByClassName("v6")[0].innerHTM1

        this.updatehotel();
      }
    },

    highhotel() {
      // this.currhotel="h1"
      // console.log(this.currhotel)
      for (let c = 0; c < this.hotcards.length; c++) {
        if (this.hotcards[c].classList.contains(this.currhotel)) {
          this.hotcards[c].classList.add("highlighted");
        } else {
          this.hotcards[c].classList.add("disabled");
        }
      }
    },

    sethotelloc() {
      let hot = document.getElementsByClassName("hotelcard");

      // console.log(hot.length);

      for (let c = 0; c < hot.length; c++) {
        hot[c].classList.add(this.hotelcards[c].loc);
        hot[c].classList.add(this.hotelcards[c].type);
        hot[c].classList.add(this.hotelcards[c].hname);
      }
    },

    updatehotel() {
      // document.getElementsByClassName('numhotels')[0].innerHTML= this.numrooms + " Hotels"
      if (this.hotelselected1 || this.hotelselected2 || this.hotelselected3)
        this.lochotelprice[this.travelplan.length - 1] = this.days[this.days.length-1]*(this.p1 * this.numrooms1 + this.p2 * this.numrooms2 + this.p3 * this.numrooms3 + this.matress * 500);
      // if(!this.lochotelprice.length>1){
      //   document.getElementsByClassName('numhotels')[0].innerHTML= (this.numrooms1 + this.numrooms2 + this.numrooms3) + " Hotels"
      //   document.getElementsByClassName('hotelprice')[0].innerHTML="PKR " + ((this.p1*this.numrooms1) + (this.p2*this.numrooms2) + (this.p3*this.numrooms3))}
      // else{
      // document.getElementsByClassName("numhotels")[0].innerHTML =
      //   this.numrooms1 + this.numrooms2 + this.numrooms3 + " Hotels";
      this.numloc=this.travelplan.length
      document.getElementsByClassName("numhotels")[0].innerHTML =this.numloc + " Hotels";
      document.getElementsByClassName("hotelprice")[0].innerHTML =
        "PKR " +
        this.lochotelprice.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
      // }

      // document.getElementsByClassName('hotelprice')[0].innerHTML= "PKR " +
      // (parseInt(
      //   document.getElementsByClassName("selhotelcard")[0].getElementsByClassName("v6")[0].innerHTML.slice(
      //       4,
      //       (document.getElementsByClassName("selhotelcard")[0].getElementsByClassName("v6")[0].innerHTML.length-6)
      //     )
      //     .replace(/,/g, "")
      // )*this.numrooms).toLocaleString();

      this.updatetot();
      // console.log(this.lochotelprice)
      this.tothprice = parseInt(document.getElementsByClassName("hotelprice")[0].innerHTML.slice(4,(document.getElementsByClassName("hotelprice")[0].length)).replace(/,/g, ""))
    },

    updatetot() {
      if (
        this.hotelselected1 ||
        this.hotelselected2 ||
        this.hotelselected3 ||
        this.travelplan.length != 0
      ) {
        document.getElementsByClassName("total")[0].innerHTML =
          "PKR " +
          (
            parseInt(
              document
                .getElementsByClassName("bdprice")[0]
                .innerHTML.slice(
                  4,
                  document.getElementsByClassName("bdprice")[0].innerHTML.length
                )
                .replace(/,/g, "")
            ) +
            parseInt(
              document
                .getElementsByClassName("hotelprice")[0]
                .innerHTML.slice(
                  4,
                  document.getElementsByClassName("hotelprice")[0].innerHTML
                    .length
                )
                .replace(/,/g, "")
            )
          ).toLocaleString();
      } else {
        document.getElementsByClassName("total")[0].innerHTML =
          "PKR " +
          parseInt(
            document
              .getElementsByClassName("bdprice")[0]
              .innerHTML.slice(
                4,
                document.getElementsByClassName("bdprice")[0].innerHTML.length
              )
              .replace(/,/g, "")
          ).toLocaleString();
      }
    },

    errcheck(check) {
      console.log(
        "aa " +
          this.curr_people +
          " " +
          Math.ceil(parseInt(this.adults) + parseFloat(this.child / 2))
      );
      if (
        this.curr_people >=
          Math.ceil(parseInt(this.adults) + parseFloat(this.child / 2)) ||
        this.travelplan.length == 0 ||
        check
      ) {
        // this.savedata()
        return true;
      } else {
        this.err=true
        document.getElementsByClassName("errormsg")[0].style.opacity = "0.85";
        setTimeout(() => {
          document.getElementsByClassName("errormsg")[0].style.opacity = "0";
          setTimeout(() => {this.err=false }, 400);
        }, 2000);
        this.topts.forEach((topt, i) => {
          console.log("t")
          // console.log(topt.innerHTML.slice(0, topt.innerHTML.length - 8).toLowerCase() + "   " + this.travelplan[this.travelplan.length-1])
          if(topt.innerHTML.slice(0, topt.innerHTML.length).toLowerCase()==this.travelplan[this.travelplan.length-1]){
          console.log("tt")
          this.curr_opt = topt; 
          }
        })
        return false;
      }
    },
    daysplus(){
      let tdays = 0  
      for(let c=0;c<this.days.length;c++)tdays+=this.days[c]
      if(this.duration>tdays){
      this.days[this.days.length-1]++; this.updatehotel();
      }
    },
    daysminus(){
      this.days[this.days.length-1]--;
      if(this.days[this.days.length-1]<=0){
        this.daybut=false
        if(this.days[this.days.length-1]<0){
          this.days[this.days.length-1]++
        }
      }
      this.updatehotel();
    },
  },

  mounted() {
    // this.adults=parseInt(this.adults)
    // this.child=parseInt(this.child)

    // this.travelplan[0]="kn"
    // console.log(this.travelplan.length)

    // let input = document.getElementsByTagName("input")
    // for(let c=0;c<input.length;c++){
    //   input[c].addEventListener("click",()=>{input[c].checked=true})
    // }
    // console.log("input = " + input.length)

    const startDate = new Date(this.cin);
    const endDate = new Date(this.cout);
    this.duration = endDate.getTime() - startDate.getTime();
    this.duration = (this.duration / (1000 * 3600 * 24));
    console.log("duration " + this.duration)


    this.curr_people = Math.ceil(
      parseInt(this.adults) + parseFloat(this.child)
    );

    this.hotcards = Array.from(document.getElementsByClassName("hotelcard"));

    // setting initial val of location opts and when clicked

    this.topts = Array.from(document.getElementsByClassName("toption"));

    this.topts.forEach((topt, i) => {
      topt.classList.remove("toption-sel");
    });

    //  setting hotel location class

    this.sethotelloc();

    // *********

    // this.topts[this.locations.indexOf(this.loc)].classList.add("toption-sel");
    // this.seloptarr[this.locations.indexOf(this.loc)] = true;

    // let hotelcard = document.getElementsByClassName("hotelcard");
    // this.avalhotels.fill(false);

    // for (let c = 0; c < hotelcard.length; c++) {
    //   hotelcard[c].classList.add("d-none");
    //   if (this.seloptarr[0] == true) {
    //     if (hotelcard[c].classList.contains("islamabad"))
    //       hotelcard[c].classList.remove("d-none");
    //   }
    //   if (this.seloptarr[1] == true) {
    //     if (hotelcard[c].classList.contains("sawat"))
    //       hotelcard[c].classList.remove("d-none");
    //   }
    //   if (this.seloptarr[2] == true) {
    //     if (hotelcard[c].classList.contains("kalam"))
    //       hotelcard[c].classList.remove("d-none");
    //   }
    //   if (this.seloptarr[3] == true) {
    //     if (hotelcard[c].classList.contains("naran"))
    //       hotelcard[c].classList.remove("d-none");
    //   }
    //   if (this.seloptarr[4] == true) {
    //     if (hotelcard[c].classList.contains("kaghan"))
    //       hotelcard[c].classList.remove("d-none");
    //   }
    // }

    this.toption();

    this.topts2 = Array.from(document.getElementsByClassName("toption2"));

    this.toption2();

    // ********

    // setting initial booking details

    document.getElementsByClassName("bdloc")[0].innerHTML =
      "<div>" + this.loc + "</div>";
    document.getElementsByClassName("bdprice")[0].innerHTML =
      "PKR " +
      this.locationsprice[this.locations.indexOf(this.loc)].toLocaleString();

    const date1 = new Date(this.cin);
    const date2 = new Date(this.cout);

    document.getElementsByClassName("cind2")[0].innerHTML = this.cin;
    document.getElementsByClassName("coutd2")[0].innerHTML = this.cout;

    document.getElementsByClassName("cind1")[0].innerHTML =
      date1.getDate() + "-" + this.months[date1.getMonth()];
    document.getElementsByClassName("coutd1")[0].innerHTML =
      date2.getDate() + "-" + this.months[date2.getMonth()];

    document.getElementsByClassName("numguests")[0].innerHTML =
      parseInt(this.adults) + parseInt(this.child) + " GUESTS";
    document.getElementsByClassName("numguests2")[0].innerHTML =
      this.adults + " Adults, " + this.child + " Child";

    document.getElementsByClassName("vehicle")[0].innerHTML ="-"
    document.getElementsByClassName("vehicleprice")[0].innerHTML ="-"

    this.updatehotel();

    this.setdata()

    // document.getElementsByClassName("pg2drop")[0].addEventListener("click",()=>{setTimeout(() => {
      
    //   document.getElementsByClassName("pg2drop")[0].classList.add("show");})
    // }, 100); 

    
    

    // document.getElementsByClassName("cancel")[0].addEventListener("click",()=>{this.confirmation=true})
  },

  watch: {
    matress(newVal, oldVal) {
      if (newVal > oldVal) {
        this.curr_people++;
      } else if (!this.curr_people - 1 < 0) {
        this.curr_people--;
      }
      this.updatehotel();

      console.log("currg" + this.curr_people);
    },

    numrooms1(newVal, oldVal) {
      console.log("a1pre");
      if (this.curr_opt.classList.contains("toption-sel")) {
        console.log("a1");
        if (newVal > oldVal) {
          this.curr_people =
            this.curr_people + this.person_lux * (newVal - oldVal);
        } else if (this.curr_people != 0) {
          this.curr_people =
            this.curr_people - this.person_lux * (oldVal - newVal);
        }
      }

      if (this.numrooms1 == 0 && this.numrooms2 == 0 && this.numrooms2 == 0) {
        for (let c = 0; c < this.hotcards.length; c++) {
          this.hotcards[c].classList.remove("disabled");
          this.hotcards[c].classList.remove("highlighted");
        }
      }
      this.updatehotel();

      // if(!this.curr_opt.classList.contains("toption2-sel") && this.travelplan.length>=2){
      //   console.log("3")
      //   this.curr_people=Math.ceil(parseInt(this.adults)+parseFloat(this.child))
      //   this.curr_people=this.temp
      // }

      console.log("currg" + this.curr_people);
    },
    hotelselected1(newVal, oldVal) {
      if (
        !(this.hotelselected1 || this.hotelselected2 || this.hotelselected3)
      ) {
        //  this.updatehotel()
        // }
        // else{
        if (this.lochotelprice.length == 0) {
          console.log("ds");
          document.getElementsByClassName("numhotels")[0].innerHTML = "-";
          document.getElementsByClassName("hotelprice")[0].innerHTML = "-";
        }
        // this.lochotelprice.splice(this.lochotelprice.length-1,1)
      }
      this.tothprice = parseInt(document.getElementsByClassName("hotelprice")[0].innerHTML.slice(4,(document.getElementsByClassName("hotelprice")[0].length)).replace(/,/g, ""))

    },
    numrooms2(newVal, oldVal) {
      if (this.curr_opt.classList.contains("toption-sel")) {
        console.log("a2");
        if (newVal > oldVal) {
          this.curr_people =
            this.curr_people + this.person_delux * (newVal - oldVal);
        } else if (this.curr_people != 0) {
          this.curr_people =
            this.curr_people - this.person_delux * (oldVal - newVal);
        }
      }

      if (this.numrooms1 == 0 && this.numrooms2 == 0 && this.numrooms2 == 0) {
        for (let c = 0; c < this.hotcards.length; c++) {
          this.hotcards[c].classList.remove("disabled");
          this.hotcards[c].classList.remove("highlighted");
        }
      }

      this.updatehotel();
      console.log("currg" + this.curr_people);
    },
    hotelselected2(newVal, oldVal) {
      if (
        !(this.hotelselected1 || this.hotelselected2 || this.hotelselected3)
      ) {
        //    this.updatehotel()
        // }
        // else{
        if (this.lochotelprice.length == 0) {
          document.getElementsByClassName("numhotels")[0].innerHTML = "-";
          document.getElementsByClassName("hotelprice")[0].innerHTML = "-";
        }
        // this.lochotelprice.splice(this.lochotelprice.length,1)
      }
      this.tothprice = parseInt(document.getElementsByClassName("hotelprice")[0].innerHTML.slice(4,(document.getElementsByClassName("hotelprice")[0].length)).replace(/,/g, ""))

    },
    numrooms3(newVal, oldVal) {
      if (this.curr_opt.classList.contains("toption-sel")) {
        console.log("a3");
        if (newVal > oldVal) {
          this.curr_people =
            this.curr_people + this.person_nor * (newVal - oldVal);
        } else if (this.curr_people != 0) {
          this.curr_people =
            this.curr_people - this.person_nor * (oldVal - newVal);
        }
      }

      if (this.numrooms1 == 0 && this.numrooms2 == 0 && this.numrooms2 == 0) {
        for (let c = 0; c < this.hotcards.length; c++) {
          this.hotcards[c].classList.remove("disabled");
          this.hotcards[c].classList.remove("highlighted");
        }
      }
      this.updatehotel();

      console.log("currg" + this.curr_people);
    },
    hotelselected3(newVal, oldVal) {
      if (
        !(this.hotelselected1 || this.hotelselected2 || this.hotelselected3)
      ) {
        //    this.updatehotel()
        // }
        // else{
        if (this.lochotelprice.length == 0) {
          document.getElementsByClassName("numhotels")[0].innerHTML = "-";
          document.getElementsByClassName("hotelprice")[0].innerHTML = "-";
        }
        // this.lochotelprice.splice(this.lochotelprice.length-1,1)
      }
      this.tothprice = parseInt(document.getElementsByClassName("hotelprice")[0].innerHTML.slice(4,(document.getElementsByClassName("hotelprice")[0].length)).replace(/,/g, ""))

    },

    // curr_people(newVal,oldVal){
    //   if(oldVal==0 && newVal==0){
    //     this.curr_people=Math.ceil(parseInt(this.adults)+parseFloat(this.child))
    //   }
    //   console.log("currg2"+this.curr_people)

    // },
  },
};
</script>

<style scoped>


/* ******************** */

/* /* .rate {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
} */

.rating {
    display: flex;
    /* flex-direction: row-reverse; */
    justify-content: center;
}

/* .rating>input {
    display: none;
} */

.rating>label {
    position: relative;
    width: 1em;
    font-size: 30px;
    font-weight: 300;
    color: #FFD600;
    cursor: pointer;
}

/* .rating>label::before {
    content: "\2605";
    position: absolute;
    opacity: 0;
}

.rating>label:hover:before,
.rating>label:hover~label:before {
    opacity: 1 !important;
} */

/* .rating>input:checked~label:before {
    opacity: 1;
} */

/* .rating:hover>input:checked~label:before {
    opacity: 0.4;
} */

/* .buttons {
    top: 36px;
    position: relative
}

.rating-submit {
    border-radius: 8px;
    color: #fff;
    height: auto
}

.rating-submit:hover {
    color: #fff
} */

/* ******************** */


.disabled {
  background-color: rgb(118, 118, 118) !important;
}
.highlighted {
  background-color: rgb(255, 216, 43) !important;
}

@media only screen and (max-width: 991px) {
  .toptionbar {
    overflow: scroll;
    height: 100px;
  }
}

.hotelcard {
  transition-property: background-color;
  transition-duration: 300ms;
}
.hotelcard:hover {
  background-color: rgb(255, 162, 0) !important;
  cursor: pointer;
}

#s3 {
  padding-top: 40px;
  padding-bottom: 40px;
}

.cont2 {
  color: rgb(233, 177, 56);
  /* font-size: small ; */
  font-weight: 700;
  display: flex;
  justify-content: end;
  /* padding-left: 40px; */
  padding-top: 10px;
}

.arrow {
  padding: 2px;
  background-color: aliceblue;
  border-radius: 50%;
  height: 27px;
  padding: 2px;
  font-weight: bolder;
}

.toption {
  transition-property: background-color;
  transition-duration: 300ms;
  padding: 5px 10px 5px;
  background-color: rgb(210, 211, 212, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}
.toption:hover {
  cursor: pointer;
  background-color: rgba(219, 219, 219, 0.873);
  color: rgb(15, 15, 14);
}
.toption-sel {
  background-color: rgba(23, 23, 23, 0.8);
  color: rgb(238, 158, 38);
}

.toption2 {
  /* border-left: solid;
  border-width: 4px;
  border-color: rgba(240, 248, 255, 0);
  transition-property: border-left;
  transition-duration: 500ms; */
}
.toption2:hover {
   cursor: pointer;
  /*box-sizing: border-box;
  border-left: solid;
  border-color: aliceblue; */
}
.toption2:active {
   /* cursor:none; */
  /*box-sizing: border-box;
  border-left: solid;
  border-color: aliceblue; */
}
.toption2-sel {
  /* box-sizing: border-box;
  border-left: solid;
  border-color: rgb(191, 191, 191); */
}

.dropdown-toggle::after {
  content: none;
}

.dropdown .dbutton1 {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 0;
  /* font-size: large !important; */
  border-bottom: solid !important;
  border-color: aliceblue;
  padding-bottom: 10px;
}
.dropdown button img {
  width: 15px;
}

.buttext {
  /* padding-right: 100px; */
  font-size: 28px;
  font-weight: bold;
}

.dropdown button:hover {
  background: none;
  border: none;
}
.btn-check:checked + .btn,
.btn.active,
.btn.show,
.btn:first-child:active,
:not(.btn-check) + .btn:active {
  background: none;
  border: none;
}

.pg2drop {
  /* width: 720px; */
  width: 320%;
  height: 350px;
  overflow: scroll;
  scrollbar-width: none;
  position: absolute;
  inset: auto auto 0px 0px;
  margin: 0px;
  transform: translate3d(0px, -56px, 0px);
  background-color: rgba(157, 157, 157, 0.33);
  backdrop-filter: blur(10px);
}

@media only screen and (max-width: 767px) {
  .pg2drop {
    /* width: 670px; */
    width: 100%;
    position: absolute;
    inset: auto auto 0px 0px;
    margin: 0px;
    transform: translate3d(0px, -56px, 0px);
    background-color: rgba(157, 157, 157, 0.33);
    backdrop-filter: blur(10px);
  }
}
/* @media only screen and (max-width: 670px) {
  .pg2drop {
    width: 570px;
    position: absolute;
    inset: auto auto 0px 0px;
    margin: 0px;
    transform: translate3d(0px, -56px, 0px);
    background-color: rgba(157, 157, 157, 0.33);
    backdrop-filter: blur(10px);
  }
}
@media only screen and (max-width: 570px) {
  .pg2drop {
    width: 400px;
    position: absolute;
    inset: auto auto 0px 0px;
    margin: 0px;
    transform: translate3d(0px, -56px, 0px);
    background-color: rgba(157, 157, 157, 0.33);
    backdrop-filter: blur(10px);
  }
}
@media only screen and (max-width: 400px) {
  .pg2drop {
    width: 320px;
    position: absolute;
    inset: auto auto 0px 0px;
    margin: 0px;
    transform: translate3d(0px, -56px, 0px);
    background-color: rgba(157, 157, 157, 0.33);
    backdrop-filter: blur(10px);
  }
} */

.pg2drop2 {
  width: 100%;
  height: 350px;
  position: fixed;
  inset: auto auto 0px 0px;
  margin: 0px;
  transform: translate3d(0px, -56px, 0px);
  background: none;
  top: 100% !important;
  margin-top: 0.125rem;
}

.booking-details {
  background-color: rgba(74, 74, 74, 0.33);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 10px;
}

.inner-booking-details {
  background-color: rgb(34, 34, 34, 0.9);
  border-radius: 6px;
  display: flex;
  /* justify-content: center; */
  padding: 5px 0px 5px;
  margin-bottom: 5px;
  justify-content: space-around;
}
</style>
