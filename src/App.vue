<template>
  <div class="home">
    <h1></h1>
    <div class="fullpage">
      <!-- preloadre -->
      <transition name="loader2">
        <div class="all" v-if="preloader">
          <div class="preloader">
            <transition name="loader">
              <h2 class="text" v-if="load">PORTFOLIO THEOPHILE VAST</h2>
              <!-- <div class="canvas">
                <div class="head"></div>
                <div class="body"></div>

                <div class="bicep left"></div>
                <div class="forearm left"></div>

                <div class="bicep right"></div>
                <div class="forearm right"></div>

                <div class="leg left"></div>
                <div class="leg right"></div>
              </div>-->
              <!-- test -->
            </transition>
            <div class="load" ref="load">
              <div class="inload" ref="inload"></div>
            </div>
          </div>
        </div>
      </transition>
      <!-- preloadre end-->
      <!-- main website -->
      <transition name="loader">
        <div class="all2" v-if="mainPage">
          <div class="menu" @click="open($event)" v-if="menuIcon">
            <span class="menu-icon"></span>
          </div>

          <div id="app">
            <div id="nav">
              <router-link to="/">Home</router-link>|
              <router-link to="/about">About</router-link>|
              <router-link to="/dashboard">Portfolio</router-link>|
              <!-- <router-link to="/dashboard">dashboard</router-link> -->
            </div>
          </div>
          <!-- <div class="container">
            <card
              data-image="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            >
              <h1 slot="header">Fullstack specialist</h1>
              <p slot="content">
                Discover my project on this website. I work with Node, Vue js, Elastic search, Mongo db
                Vanilla Javascript and many other cool stuff
              </p>
            </card>
            <card
              data-image="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            >
              <h1 slot="header">The best UX/UI</h1>
              <p slot="content">I'm a huge fan of Google material design guideline</p>
            </card>
            <card
              data-image="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
            >
              <h1 slot="header">Trees</h1>
              <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </card>
          </div>-->

          <transition name="bounce" key="username-input">
            <div class="menu-block" v-if="showMenu">
              <div></div>
              <div class="one">
                <transition name="bounce2" key="username-input2">
                  <ul>
                    <li class="elem animate" v-if="showMenu">
                      <router-link to="/">Home</router-link>|
                    </li>
                    <li class="elem animate">
                      <router-link to="/about">About</router-link>|
                    </li>
                    <li class="elem animate">
                      <a href="#">Contact</a>
                    </li>
                    <li class="elem animate">
                      <router-link to="/dashboard">dashboard</router-link>
                    </li>
                  </ul>
                </transition>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div class="link animate">
                <a href="#">twitter</a>
                <a href="#">instagram</a>
                <a href="#">vk</a>
              </div>
              <div class="two animate">
                <a href="#">&#9743;ASK ME VIA MAIL FOR PHONE</a>
                <a href="#">&#9993; THEOPHILE.VAST[at]gmail.com</a>
              </div>
              <div></div>
            </div>
            <!-- <p class="text2">NEW-ERA-MEDIA</p> -->
          </transition>
        </div>
      </transition>
    </div>
    <router-view />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>
<script>
// import card from "@/components/card.vue";
// import Dashboard from "@/views/dashboard.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    // card,
    // Dashboard
  },
  data: () => ({
    preloader: true,
    load: true,
    mainPage: false,
    widthLoad: 50,
    showMenu: false,
    menuIcon: false
  }),
  methods: {
    closeLoad() {
      this.preloader = false;
    },
    open() {
      event.target.classList.toggle("open");
      this.showMenu = !this.showMenu;
    },
    animatedPreload() {
      var time = setInterval(() => {
        if (this.widthLoad >= 100) {
          setTimeout(() => {
            this.$refs.load.style.opacity = 0;
          }, 300);
          setTimeout(() => {
            this.load = false;
          }, 600);
          setTimeout(() => {
            this.preloader = false;
          }, 1600);
          setTimeout(() => {
            this.mainPage = true;
          }, 2600);
          setTimeout(() => {
            this.menuIcon = true;
          }, 3600);
          clearInterval(time);
        }

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        this.widthLoad += getRandomInt(1, 20);
        this.$refs.inload.style.width = this.widthLoad + "%";
      }, 500);
    }
  },
  mounted() {
    this.animatedPreload();
  }
};
</script>
<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// body {
//   animation: bodycolor 6s ease-in-out 0s infinite;
// }
// @keyframes bodycolor {
//   0% {
//     background: whitesmoke;
//   }
//   50% {
//     background: #42b983;
//   }
//   100% {
//     background: lightcoral;
//   }
// }

//style imported from codepen

@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poiret+One&display=swap");

//loader

* {
  margin: 0;
  padding: 0;
}

.all {
  width: 100%;
  height: 100vh;
  background-color: #0f0f0f;
  display: flex;
  align-items: center;
  justify-content: center;
  // position: absolute;
  top: 0;
  left: 0;
}

.all2 {
  width: 100%;
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // z-index: 100;
}

.preloader {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.load {
  margin: 30px;
  height: 2.5px;
  width: 300px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  background-color: #171617;
}

.inload {
  position: absolute;
  height: 100%;
  background-color: #616062;
  transition: 1s;
}

.text {
  font-size: 18px;
  color: white;
  text-align: center;
  font-weight: bold;
}

.text2 {
  font-size: 18px;
  color: black;
  text-align: center;
  font-weight: bold;
}

.loader-leave-active {
  transition: all 1s;
}

.loader-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.loader-enter-active {
  transition: all 1s;
}

.loader-enter {
  transform: translateY(100px);
  opacity: 0;
}

.loader2-leave-active {
  transition: all 1s;
}

.loader2-leave-to {
  top: -100%;
}

@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
.menu {
  top: 30px;
  left: 30px;
  width: 25px;
  height: 25px;
  position: fixed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  z-index: 1200é;
}

.menu-icon {
  pointer-events: none;
  position: relative;
  background-color: black;
  width: 100%;
  height: 2px;
  left: 0;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  border-radius: 5px;
}

.menu-icon::after {
  content: "";
  position: absolute;
  top: -7px;
  left: 0;
  background-color: black;
  width: 100%;
  height: 2px;
  left: 0;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  border-radius: 5px;
}

.menu-icon::before {
  content: "";
  position: absolute;
  top: 7px;
  left: 0;
  background-color: black;
  width: 100%;
  height: 2px;
  left: 0;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  border-radius: 5px;
}

.open {
  -webkit-transition: 3s;
  -o-transition: 3s;
  transition: 3s;
  opacity: 1 !important;
}

.open .menu-icon {
  background-color: transparent;
}

.open .menu-icon::after {
  background-color: white;
  margin-top: 7px;
  -webkit-transform: rotate(405deg);
  -ms-transform: rotate(405deg);
  transform: rotate(405deg);
}

.open .menu-icon::before {
  background-color: white;
  margin-top: -7px;
  -webkit-transform: rotate(-405deg);
  -ms-transform: rotate(-405deg);
  transform: rotate(-405deg);
}

body {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  background-color: #fff;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  display: none;
}

.menu-block {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #121113;
  top: 0;
  left: 0;
  position: fixed;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr) [4];
  grid-template-columns: repeat(4, 1fr);
  -ms-grid-rows: minmax(70vh, auto);
  grid-template-rows: minmax(70vh, auto);
}

.menu-block .one {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
  overflow-y: scroll;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  letter-spacing: 3px;
  font-size: 20px;
  -webkit-animation-delay: 0.8s !important;
  animation-delay: 0.8s !important;
}

.menu-block .one::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}

.menu-block .one a {
  color: white !important;
  margin: 0;
}

.menu-block .one li {
  list-style-type: none;
  margin-bottom: 40px;
  -webkit-transition: 1.2s;
  -o-transition: 1.2s;
  transition: 1.2s;
}

.menu-block .one li:hover {
  margin-left: 10px;
}

.menu-block li:nth-child(1) {
  opacity: 0;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

.menu-block li:nth-child(2) {
  opacity: 0;
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.menu-block li:nth-child(3) {
  opacity: 0;
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

.menu-block li:nth-child(4) {
  opacity: 0;
  -webkit-animation-delay: 1.1s;
  animation-delay: 1.1s;
}

.menu-block .link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-animation-delay: 1.3s !important;
  animation-delay: 1.3s !important;
  opacity: 0;
}

.menu-block .two {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  opacity: 0;
  -webkit-animation-delay: 1.5s !important;
  animation-delay: 1.5s !important;
}

a,
a:active,
a:visited {
  color: #535253;
  text-decoration: none;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  margin: 5px;
}

a:hover,
a:active:hover,
a:visited:hover {
  color: white;
}

@media screen and (max-width: 767px) {
  .one {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
  }
  .link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
  }
  .menu-block div:nth-child(1) {
    display: none;
  }
  .menu-block {
    -ms-grid-columns: (1fr) [2];
    grid-template-columns: repeat(2, 1fr);
    -ms-grid-rows: minmax(70vh, auto);
    grid-template-rows: minmax(70vh, auto);
  }
  .menu-block div:nth-child(3) {
    display: none;
  }
  .menu-block div:nth-child(4) {
    display: none;
  }
  .menu-block div:nth-child(5) {
    display: none;
  }
  .menu-block div:nth-child(7) {
    display: none;
  }
  .menu-block div:nth-child(8) {
    display: none;
  }
}

.animate {
  -webkit-animation: open 1s linear forwards;
  animation: open 1s linear forwards;
}

@-webkit-keyframes open {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes open {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-height: 350px) {
  li {
    margin-bottom: 20px !important;
  }
}

.bounce-enter-active,
.bounce-leave-active {
  -webkit-transition: opacity 1s;
  -o-transition: opacity 1s;
  transition: opacity 1s;
}

.bounce-enter,
.bounce-leave-to {
  opacity: 0;
}

.bounce2-enter-active,
.bounce2-leave-active {
  -webkit-transition: all 5s;
  -o-transition: all 5s;
  transition: all 5s;
}

.bounce2-enter,
.bounce2-leave-to {
  opacity: 0;
}

//ROBOT

:root {
  /* Color variables */
  --blue: #42b983;
  --grey: #959595;
}

.canvas > * {
  margin-left: 50%;
  position: absolute;
}

@keyframes walking {
  0% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(2deg);
  }
}

.head {
  width: 80px;
  height: 100px;
  background: var(--blue);
  border-radius: 40px 40px 0 0;
  top: 40px;
  left: -40px;
  border-bottom: 10px solid var(--grey);
  animation: walking 0.5s ease-out 0s alternate infinite none running;
}

@keyframes blink {
  0% {
    top: 40px;
    height: 20px;
  }
  95% {
    top: 40px;
    height: 20px;
  }
  100% {
    top: 58px;
    height: 2px;
  }
}

.head:before,
.head:after {
  content: "";
  position: absolute;
  margin-left: 50%;
  width: 20px;
  height: 20px;
  top: 40px;
  border-radius: 20px;
  background: yellow;
  animation: blink 5s ease-out 0s alternate infinite none running;
}

.head:before {
  left: -30px;
}

.head:after {
  left: 10px;
}

@keyframes walking {
  0% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(2deg);
  }
}

.body {
  left: -100px;
  top: 150px;
  border-top: 250px solid var(--blue);
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 150px;
  z-index: 2;
  animation: walking 0.5s ease-out 0s alternate infinite none running;
}

.bicep,
.forearm,
.hand,
.leg,
.foot,
.elbow {
  background: var(--grey);
}

@keyframes step-bicep-left {
  0% {
    transform: rotate(20deg) scale(1);
    top: 160px;
  }
  100% {
    transform: rotate(20deg) scale(1.1);
    top: 170px;
  }
}

@keyframes step-bicep-right {
  0% {
    transform: rotate(-20deg) scale(1);
    top: 160px;
  }
  100% {
    transform: rotate(-20deg) scale(1.1);
    top: 170px;
  }
}

.bicep {
  width: 30px;
  height: 100px;
  border-radius: 15px 15px 0 0;
  top: 160px;
}

.bicep:after {
  content: "";
  position: absolute;
  background: var(--grey);
  left: -7px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  top: 90px;
}

.bicep.left {
  left: -130px;
  transform: rotate(20deg);
  animation: step-bicep-left 0.5s ease-out 0.5s alternate infinite none running;
}

.bicep.right {
  left: 100px;
  transform: rotate(-20deg);
  animation: step-bicep-right 0.5s ease-out 0s alternate infinite none running;
}

.forearm {
  width: 30px;
  height: 100px;
  top: 280px;
}

.forearm:after {
  content: "";
  position: absolute;
  background: var(--grey);
  height: 30px;
  width: 50px;
  left: -10px;
  top: 90px;
  border-radius: 40px 40px 0 0;
}

@keyframes step-forearm {
  0% {
    transform: scale(1);
    top: 280px;
  }
  100% {
    transform: scale(1.1);
    top: 290px;
  }
}

.forearm.left {
  left: -155px;
  transition: transform 0.2s ease-in-out;
  animation: step-forearm 0.5s ease-out 0.5s alternate infinite none running;
}

.forearm.right {
  left: 120px;
  transition: transform 0.2s ease-in-out;
  animation: step-forearm 0.5s ease-out 0s alternate infinite none running;
}

.forearm.left:hover,
.forearm.right:hover {
  transform: rotate(0);
}

@keyframes step {
  0% {
    transform: scale(1);
    top: 380px;
  }
  100% {
    transform: scale(1.1);
    top: 390px;
  }
}

.leg {
  width: 40px;
  height: 140px;
  border-radius: 15px 15px 0 0;
  top: 380px;
}

.leg:after {
  content: "";
  position: absolute;
  background: var(--grey);
  height: 30px;
  width: 60px;
  top: 130px;
  left: -10px;
  border-radius: 40px 40px 0 0;
}

.leg.left {
  left: -70px;
  animation: step 0.5s ease-out 0s alternate infinite none running;
}

.leg.right {
  left: 30px;
  animation: step 0.5s ease-out 0.5s alternate infinite none running;
}
</style>
