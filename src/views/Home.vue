<template>
  <div class="home">
    <h1></h1>
    <div class="fullpage">
      <!-- preloadre -->
      <transition name="loader2">
        <div class="all" v-if="preloader">
          <div class="preloader">
            <transition name="loader">
              <h2 class="text" v-if="load">PORTFOLIO</h2>
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
          <div class="container">
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
          </div>

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

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import card from "@/components/card.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    card
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
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poiret+One&display=swap");

// body {
//   margin: 40px 0;
//   font-family: "Playfair Display", serif;
//   font-size: 14px;
//   font-weight: 500;
//   background-color: #bcaaa4;
//   -webkit-font-smoothing: antialiased;
// }

// .title {
//   font-family: "Poiret One", cursive;
//   font-size: 24px;
//   font-weight: 700;
//   color: #5d4037;
//   text-align: center;
// }

p {
  line-height: 1.5em;
}

h1 + p,
p + p {
  margin-top: 10px;
}

.container {
  padding: 40px 80px;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
}

.card-wrap {
  margin: 10px;
  -webkit-transform: perspective(800px);
  transform: perspective(800px);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  cursor: pointer;
}
.card-wrap:hover .card-info {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.card-wrap:hover .card-info p {
  opacity: 1;
}
.card-wrap:hover .card-info,
.card-wrap:hover .card-info p {
  -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card-info:after {
  -webkit-transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.card-wrap:hover .card-bg {
  -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.8;
}
.card-wrap:hover .card {
  -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px,
    rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset white 0 0 0 6px;
}

.card {
  position: relative;
  -webkit-box-flex: 0;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  -webkit-transform: translateY(40%);
  transform: translateY(40%);
  -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info p {
  opacity: 0;
  text-shadow: black 0 2px 3px;
  -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info * {
  position: relative;
  z-index: 1;
}
.card-info:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(rgba(0, 0, 0, 0.6))
  );
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  background-blend-mode: overlay;
  opacity: 0;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-info h1 {
  font-family: "Poiret One", cursive;
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}

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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  z-index: 999;
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
</style>
