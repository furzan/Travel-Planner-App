<template>
  <!-- <div class="loading-bar" id="loading-bar"></div> -->
  <!-- <transition name="fade" mode="out-in"> -->
  <router-view />
  <!-- </transition> -->
</template>
    

<script>
import navbar from "./components/navbar.vue";

export default {
  components: {
    navbar,
  },

  methods: {


  
  },

};
</script>

<style>

.link:hover , .point:hover{
    cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 900ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0.3;
}

.errormsg{
  background: #ffcc23;
    border: solid;
    border-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    font-size: large;
    font-weight: bold;
    width: 300px;
    border-radius: 20px;
    opacity: 0.9;
    position: absolute;
    z-index: 1000;
    top: 400px;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition-property: opacity;
    transition-duration: 400ms;
}


.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 4px;
  background-color: #3498db;
  transition-property: width;
  transition-duration: 500ms;
}

a {
  text-decoration: none;
  color: white;
}

#page1,
#page2 {
  color: aliceblue;
}

.back-v {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  background-size: cover;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
