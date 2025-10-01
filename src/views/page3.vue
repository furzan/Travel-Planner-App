<template>
  <div v-show="err" style="font-size: small;" class="errormsg">
    Please Book Vehicles For All Guests
  </div>

  <section id="page2">
    <video autoplay loop muted class="back-v">
      <source
        src="../assets/pexels-mikhail-nilov-7441154 (1080p).mp4"
        type="video/mp4"
      />
    </video>

    <navbar />

    <section v-if="confirmation" id="confirmation" style="z-index:1 ;">
      <Confirmation/>
    </section>

    <section v-show="!confirmation" id="s3">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-12 p-0 pt-3 pb-1 ps-3">
            <!-- <div class="d-flex">
              <div v-for="(plan, i) in travelplan" :key="i">
                {{ plan }} &nbsp;
                <img style="width: 30px;" src="../assets/arrow.png" alt="" />
                &nbsp;
              </div>
            </div> -->
          </div>

          <div class="col-md-3 col-12 p-0 ps-3 pt-3 pb-4">
            <!-- <RouterLink class="link" > -->
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
            <div class="container-fluid d-flex p-0 pb-4">
              <div
                class="row gap-3 gy-1 w-100 ps-3 justify-content-start toptionbar"
              >
                <div class="col-lg-1 col-5 pe-0 toption">SUV</div>
                <div class="col-lg-2 col-5 pe-0 toption">Sedan</div>
                <div class="col-lg-2 col-5 pe-0 toption">Hatchback</div>
                <div class="col-lg-2 col-5 pe-0 toption">Coupe</div>
                <div class="col-lg-2 col-5 pe-0 toption">Convertible</div>
              </div>
            </div>


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
                      <div class="buttext">Select Vehicle</div>
                      <div><img src="../assets/dropdown.png" alt="" /></div>
                    </button>

                    <ul class="dropdown-menu pg3drop">
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
                                  :src="card.img"
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
                                 
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </li>


                    </ul>
                  </div>
                </div>

                <div class="col-md-6 col-12 p-0 p-3 d-flex justify-content-center" style="z-index:1">
                  <!-- <Router-Link class="link" :to="{ name: 'page3' }"> -->
                    <div @click="errcheck(false)" class="cont2 d-flex justify-content-center point">
                      <div>Continue</div>
                      &nbsp;&nbsp;&nbsp;
                      <div class="arrow">>></div>
                    </div>
                  <!-- </Router-Link> -->
                </div>

                <div class="container-fluid">
                  <div class="row">
                    
                    <div
                      v-for="(card,i) in selvehicle"
                      :key="i"
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
                            :src="card.img"
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
                            {{ card.v1 }}
                          </div>

                          <div class="d-flex">
                            <div
                              class="v2"
                              style="
                                font-size: x-small;
                                display: flex;
                                align-items: center;
                                color: black;
                              "
                            >
                              {{ card.v2 }}
                            </div>
                          </div>

                          <div
                            class="d-flex"
                            style="color: aliceblue; font-size: small;"
                          >
                            <div class="v3">{{ card.v3 }}</div>
                           
                          </div>

                          <div
                            class="v5"
                            style="font-size: small; color: black;"
                          >
                          {{ card.v5 }}
                          </div>

                          <div
                            class="d-flex justify-content-between"
                            style="color: aliceblue; font-size: small;"
                          >
                            <div class="v6">{{ card.v6 }} &nbsp;&nbsp; </div>
                            <div class="d-flex" style="color: black;">
                              <div
                                class="point"
                                @click="minusbtn(i)"
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
                                {{ card.quan }}
                              </div>
                              <div
                                class="point"
                                @click="plusbtn(i)"
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

                    <!-- <div
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
                              &nbsp;(2 Adults+1 child)
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
                              &nbsp;(2 Adults+1 child)
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
                              &nbsp;(2 Adults+1 child)
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
                    </div> -->
                 
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
    tothprice:"",
    numloc:"",
  },

  data() {
    return {

      err:false,
      confirmation:false,
      travelplan: [],
      vprice:[],
      topts: [],
      topts2: [],
      hotcards: [],
      seloptarr: Array(5).fill(false),

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
      hotelselected1: true,
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
          v1: "SUV",
          v2: "120 rviews",
          v3: "Honda BRV",
          v4: "",
          v5: "6 seats 1 driver",
          v6: "PKR 1000/day",
          loc: "islamabad",
          id: "1",
          type: "suv",
          stars: "5",
          price: 1000,
          hname: "h1",
          quan:1,
          img:"data:image/jpeg;base64,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",
          capacity:6,
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
          type: "sedan",
          stars: "5",
          price: 2000,
          hname: "h1",
          quan:1,
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8rmWOX2IQ-PfMBMhSnpTEuuWMOUv2T5psXwM2-F31YGMq140RnNPZ0GjXg&s",
          capacity:2,
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
          type: "hatchback",
          stars: "5",
          price: 3000,
          hname: "h1",
          quan:1,
          img:"data:image/jpeg;base64,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",
          capacity:4,
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
          type: "coupe",
          stars: "4",
          price: 4000,
          hname: "h2",
          quan:1,
          img:"../assets/pg3c1.png",
          capacity:2,
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
          type: "convertible",
          stars: "4",
          price: 5000,
          hname: "h2",
          quan:1,
          img:"../assets/pg3c1.png",
          capacity:2,
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
          type: "suv",
          stars: "4",
          price: 6000,
          hname: "h3",
          quan:1,
          img:"../assets/pg3c1.png",
          capacity:6,
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
          type: "suv",
          stars: "4",
          price: 3500,
          hname: "h3",
          quan:1,
          img:"../assets/pg3c1.png",
          capacity:6,
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
          type: "suv",
          stars: "4",
          price: 4000,
          hname: "h3",
          quan:1,
          img:"../assets/pg3c1.png",
          capacity:6,
        },
      ],
      selvehicle:[],

    };
  },
  methods: {
    goBack() {
      console.log("ascas")
      this.$router.go(-1); // Navigate back in history
    },   
    setloc(i) {
      this.hotelselected = false;
      document.getElementsByClassName("bdloc")[0].innerHTML ="<div>" + this.locations[i] + "</div>";
      document.getElementsByClassName("bdprice")[0].innerHTML = "PKR " + this.locationsprice[i].toLocaleString();

      this.updatetot();
    },

    toption() {
      this.topts.forEach((topt, i) => {
        topt.addEventListener("click", () => {
          // this.matbtn = false;

          // this.updatehotel();

          this.curr_opt = topt;
          // console.log(
          //   topt.innerHTML.slice(0, topt.innerHTML.length - 8).toLowerCase()
          // );

          // if (
          //   this.errcheck(false)
          // ) {
            this.temp = this.curr_people;
            this.p1 = 0;
            this.p2 = 0;
            this.p3 = 0;
            this.numrooms1 = 0;
            this.numrooms2 = 0;
            this.numrooms3 = 0;

            this.currhotel = "";


            // for (let c = 0; c < this.hotcards.length; c++) {
            //   this.hotcards[c].classList.remove("disabled");
            //   this.hotcards[c].classList.remove("highlighted");
            // }
            // this.hotelselected1 = false;
            // this.hotelselected2 = false;
            // this.hotelselected3 = false;

            // this.topts2.forEach((t) => {
            //   t.classList.remove("toption2-sel");
            // });

            // this.seloptarr[i] = !this.seloptarr[i];
            // let hotelcard = document.getElementsByClassName("hotelcard");

            if (topt.classList.contains("toption-sel")) {
              topt.classList.remove("toption-sel");
              for (let c = 0; c < this.hotcards.length; c++) {
                if(this.hotcards[c].classList.contains(this.topts[i].innerHTML.toLowerCase()))
                this.hotcards[c].classList.add("d-none");
              }
            let check=true  
            for(let c=0; c<this.topts.length; c++){
              if(this.topts[c].classList.contains("toption-sel")) check=false
            }
            if(!check==false){
              for (let c = 0; c < this.hotcards.length; c++) {
                this.hotcards[c].classList.remove("d-none");
              }
            }
            } 
            else {
              // this.matress = 0;

              this.curr_people = 0;

              // this.travelplan.push(
              //   topt.innerHTML.slice(0, topt.innerHTML.length - 8).toLowerCase()
              // );
              topt.classList.add("toption-sel");

              for (let c = 0; c < this.hotcards.length; c++) {
                               
                  this.hotcards[c].classList.add("d-none");
                  for(let i=0;i<this.topts.length; i++)
                  {
                  if(this.topts[i].classList.contains("toption-sel")){
                    console.log("a")
                    if ( this.hotcards[c].classList.contains(this.topts[i].innerHTML.toLowerCase()) ){
                      console.log(this.topts[i].innerHTML.toLowerCase())
                      this.hotcards[c].classList.remove("d-none");}}
                  }
            
                  }
            
            }
            this.updatehotel();
          // }
        });
      });
    },

    hotelcardclick(event) {
      let t = 0;
      let i = this.hotcards.indexOf(event.currentTarget);

      // if (!event.currentTarget.classList.contains("disabled")) {
      //   this.currhotel = this.hotelcards[i].hname;
      //   this.highhotel();

      //   if (event.currentTarget.classList.contains("lux")) {
      //     t = 0;
      //     this.numrooms1 = 1;
      //     this.hotelselected1 = true;
      //     this.p1 = this.hotelcards[i].price;
      //   } else if (event.currentTarget.classList.contains("delux")) {
      //     t = 1;
      //     this.numrooms2 = 1;
      //     this.hotelselected2 = true;
      //     this.p2 = this.hotelcards[i].price;
      //   } else {
      //     t = 2;
      //     this.numrooms3 = 1;
      //     this.hotelselected3 = true;
      //     this.p3 = this.hotelcards[i].price;
      //   }

        // document
        //   .getElementsByClassName("selhotelcard")
        //   [t].getElementsByClassName("v1")[0].innerHTML = this.hotelcards[i].v1;
        // document
        //   .getElementsByClassName("selhotelcard")
        //   [t].getElementsByClassName("v2")[0].innerHTML = this.hotelcards[i].v2;
        // document
        //   .getElementsByClassName("selhotelcard")
        //   [t].getElementsByClassName("v3")[0].innerHTML = this.hotelcards[i].v3;
        // document
        //   .getElementsByClassName("selhotelcard")
        //   [t].getElementsByClassName("v4")[0].innerHTML = this.hotelcards[i].v4;
        // document
        //   .getElementsByClassName("selhotelcard")
        //   [t].getElementsByClassName("v5")[0].innerHTML = this.hotelcards[i].v5;
        // document
        //   .getElementsByClassName("selhotelcard")
        //   [t].getElementsByClassName("v6")[0].innerHTML = this.hotelcards[i].v6;

       if(this.selvehicle.indexOf(this.hotelcards[i])==-1){
        
        this.selvehicle.push(this.hotelcards[i])
        this.selvehicle[this.selvehicle.length-1].quan=1

        sessionStorage.setItem('pg3sv',JSON.stringify(this.selvehicle))
        // this.travelplan.push( this.hotelcards[i].v1.toLowerCase() );  
        // this.vprice[i]=( this.hotelcards[i].price );  

        // console.log(this.vprice)
        // console.log(this.vprice[0])

        this.updatehotel();
      }
      // }
    },


    // highhotel() {
    //   for (let c = 0; c < this.hotcards.length; c++) {
    //     if (this.hotcards[c].classList.contains(this.currhotel)) {
    //       this.hotcards[c].classList.add("highlighted");
    //     } else {
    //       this.hotcards[c].classList.add("disabled");
    //     }
    //   }
    // },

    sethotelloc() {
      let hot = document.getElementsByClassName("hotelcard");


      for (let c = 0; c < hot.length; c++) {
        hot[c].classList.add(this.hotelcards[c].loc);
        hot[c].classList.add(this.hotelcards[c].type);
        hot[c].classList.add(this.hotelcards[c].hname);
      }
    },

    updatehotel() {
      let t = 0
         if(this.selvehicle.length==0){
           document.getElementsByClassName("vehicle")[0].innerHTML ="-"
           document.getElementsByClassName("vehicleprice")[0].innerHTML ="-"
          }
          else{
           document.getElementsByClassName("vehicle")[0].innerHTML =""
          for(let c=0;c<this.selvehicle.length;c++){
            t=t+(this.selvehicle[c].price * this.selvehicle[c].quan)
          }
           document.getElementsByClassName("vehicleprice")[0].innerHTML =
            "PKR " + t
         }

      for(let c=0;c<this.selvehicle.length;c++){
          document.getElementsByClassName("vehicle")[0].innerHTML =document.getElementsByClassName("vehicle")[0].innerHTML + "<div>" + this.selvehicle[c].quan + " X " + this.selvehicle[c].v1 + "</div>";
          // console.log(this.travelplan[c])    
          // document.getElementsByClassName("vehicleprice")[0].innerHTML =
          //   "PKR " +
          //   this.lochotelprice.reduce(
          //     (accumulator, currentValue) => accumulator + currentValue,
          //     0
          //   );
      }      

      this.updatetot();
    },

    updatetot() {
      if(this.tothprice!="NaN")
      {
        console.log("c")
        document.getElementsByClassName("total")[0].innerHTML =
          "PKR " 
          + (
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
      } 
      // else {
      //   console.log("d")
      //   document.getElementsByClassName("total")[0].innerHTML =
      //     "PKR " 
      //     + parseInt(
      //       document
      //         .getElementsByClassName("bdprice")[0]
      //         .innerHTML.slice(
      //           4,
      //           document.getElementsByClassName("bdprice")[0].innerHTML.length
      //         )
      //         .replace(/,/g, "")
      //     ).toLocaleString();
      // }

      if(this.selvehicle.length!=0){
        console.log("d")
        document.getElementsByClassName("total")[0].innerHTML= "PKR " +
        (parseInt(
              document
                .getElementsByClassName("vehicleprice")[0].innerHTML.slice(4,document.getElementsByClassName("vehicleprice")[0].innerHTML.length)
                .replace(/,/g, "")) + 

                parseInt(
              document
                .getElementsByClassName("bdprice")[0].innerHTML.slice(4,document.getElementsByClassName("bdprice")[0].innerHTML.length)
                .replace(/,/g, "")
            ) +
            parseInt(
              document
                .getElementsByClassName("hotelprice")[0].innerHTML.slice(4,document.getElementsByClassName("hotelprice")[0].innerHTML.length)
                .replace(/,/g, "")
            )).toLocaleString();

              //   parseInt(
              // document
              //   .getElementsByClassName("total")[0]
              //   .innerHTML.slice(
              //     4,
              //     document.getElementsByClassName("total")[0].innerHTML
              //       .length
              //   )
              //   .replace(/,/g, ""))
      }

    },

    pagecheck(){
      this.curr_people=0
      for(let c=0; c<this.selvehicle.length; c++){
        this.curr_people+=this.selvehicle[c].capacity
      }
      if(this.curr_people>=(parseInt(this.adults)+parseInt(this.child))){
        this.confirmation=true
      }
      else{
        this.confirmation=false
      }
    },
    errcheck(check) {
      this.curr_people=0
      for(let c=0; c<this.selvehicle.length; c++){
        this.curr_people+=this.selvehicle[c].capacity*this.selvehicle[c].quan
      }
      if(this.curr_people>=(parseInt(this.adults)+parseInt(this.child))){
        this.confirmation=true
        setTimeout(() => {
          document.getElementsByClassName("cancel")[0].addEventListener("click",()=>{this.confirmation=false})
          this.updatehotel();
        }, 100);
        if(this.tothprice!="NaN"){
      document.getElementsByClassName("numhotels")[0].innerHTML =
        this.numloc + " Hotels";
      document.getElementsByClassName("hotelprice")[0].innerHTML =
        "PKR " + this.tothprice
      
      console.log("PKR " + this.tothprice)  
      }    

    this.updatetot();

   
    for (let c = 0; c < this.hotcards.length; c++) {
                this.hotcards[c].classList.remove("d-none");
              }
    this.setloc(this.locations.indexOf(this.loc))
      }
      else{
        this.err=true
        this.confirmation=false
        document.getElementsByClassName("errormsg")[0].style.opacity = "0.85";
        setTimeout(() => {
          document.getElementsByClassName("errormsg")[0].style.opacity = "0";
          setTimeout(() => {this.err=false }, 400);  
        }, 2000);
      }
    },
    minusbtn(i){
      this.selvehicle[i].quan--;
      if (this.selvehicle[i].quan == 0) {
        this.selvehicle.splice(i,1) 
      }
      sessionStorage.setItem('pg3sv',JSON.stringify(this.selvehicle))
      this.updatehotel();
    },
    plusbtn(i){
      this.selvehicle[i].quan++;
      sessionStorage.setItem('pg3sv',JSON.stringify(this.selvehicle))
      this.updatehotel();
    },
  },

  mounted() {

    console.log(this.numloc)

    this.travelplan[this.hotelcards.length]
    this.travelplan.fill("")

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

    this.toption();

    // setting initial booking details

    document.getElementsByClassName("bdloc")[0].innerHTML = "<div>" + this.loc + "</div>";
    document.getElementsByClassName("bdprice")[0].innerHTML =
      "PKR " 
      + this.locationsprice[this.locations.indexOf(this.loc)].toLocaleString();

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
      
   
   
    if(this.tothprice!="NaN"){
      document.getElementsByClassName("numhotels")[0].innerHTML =
        this.numloc + " Hotels";
      document.getElementsByClassName("hotelprice")[0].innerHTML =
        "PKR " + this.tothprice
      
      console.log("PKR " + this.tothprice)  
      }    

    this.updatetot();

   
    for (let c = 0; c < this.hotcards.length; c++) {
                this.hotcards[c].classList.remove("d-none");
              }
    this.setloc(this.locations.indexOf(this.loc))

    // document.getElementsByClassName("cancel")[0].addEventListener("click",()=>{this.confirmation=false})

    if(sessionStorage.getItem("pg3sv")){
      this.selvehicle=JSON.parse(sessionStorage.getItem('pg3sv'))
      this.updatehotel()
    }


  },

  watch: {
    matress(newVal, oldVal) {
      if (newVal > oldVal) {
        this.curr_people++;
      } else if (!this.curr_people - 1 < 0) {
        this.curr_people--;
      }
      this.updatehotel();

      // console.log("currg" + this.curr_people);
    },

    numrooms1(newVal, oldVal) {
      // console.log("a1pre");
      if (this.curr_opt.classList.contains("toption-sel")) {
        // console.log("a1");
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


      // console.log("currg" + this.curr_people);
    },
    hotelselected1(newVal, oldVal) {
      if (
        !(this.hotelselected1 || this.hotelselected2 || this.hotelselected3)
      ) {
        if (this.lochotelprice.length == 0) {
          // console.log("ds");
          document.getElementsByClassName("numhotels")[0].innerHTML = "-";
          document.getElementsByClassName("hotelprice")[0].innerHTML = "-";
        }
      }
    },
    numrooms2(newVal, oldVal) {
      if (this.curr_opt.classList.contains("toption-sel")) {
        // console.log("a2");
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
      // console.log("currg" + this.curr_people);
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
    },
    numrooms3(newVal, oldVal) {
      if (this.curr_opt.classList.contains("toption-sel")) {
        // console.log("a3");
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

      // console.log("currg" + this.curr_people);
    },
    hotelselected3(newVal, oldVal) {
      if (
        !(this.hotelselected1 || this.hotelselected2 || this.hotelselected3)
      ) {
        if (this.lochotelprice.length == 0) {
          document.getElementsByClassName("numhotels")[0].innerHTML = "-";
          document.getElementsByClassName("hotelprice")[0].innerHTML = "-";
        }
      }
    },

   
  },
};
</script>

<style scoped>
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

/* .toption2 {
  border-left: solid;
  border-width: 4px;
  border-color: rgba(240, 248, 255, 0);
  transition-property: border-left;
  transition-duration: 500ms;
}
.toption2:hover {
  cursor: pointer;
  box-sizing: border-box;
  border-color: aliceblue;
}
.toption2-sel {
  box-sizing: border-box;
  border-color: rgb(191, 191, 191);
} */

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

.pg3drop {
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
  .pg3drop {
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
.pg3drop2 {
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









