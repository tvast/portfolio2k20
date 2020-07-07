<template>
  <div class="home">
    <div id="app">
      <div id="nav">
        <router-link to="/">
          <div class="headingWrapper">
            <a href="#" class="header header--raiseUp header--svg">
              <svg>
                <defs>
                  <linearGradient id="striped" x1="0" x2="0" y1="0%" y2="4%" spreadMethod="repeat">
                    <stop offset="0%" stop-color="#e62915" />
                    <stop offset="50%" stop-color="#e62915" />
                    <stop offset="51%" stop-color="#fff" />
                    <stop offset="99%" stop-color="#fff" />
                    <stop offset="100%" stop-color="#e62915" />
                  </linearGradient>
                </defs>
                <text y="1.2em">Home</text>
              </svg>
            </a>
          </div>
        </router-link>|
        <router-link to="/about">
          <div class="headingWrapper">
            <a href="#" class="header header--raiseUp header--svg">
              <svg>
                <defs>
                  <linearGradient id="striped" x1="0" x2="0" y1="0%" y2="4%" spreadMethod="repeat">
                    <stop offset="0%" stop-color="#e62915" />
                    <stop offset="50%" stop-color="#e62915" />
                    <stop offset="51%" stop-color="#fff" />
                    <stop offset="99%" stop-color="#fff" />
                    <stop offset="100%" stop-color="#e62915" />
                  </linearGradient>
                </defs>
                <text y="1.2em">About</text>
              </svg>
            </a>
          </div>
        </router-link>|
        <router-link to="/dashboard">
          <div class="headingWrapper">
            <a href="#" class="header header--raiseUp header--svg">
              <svg>
                <defs>
                  <linearGradient id="striped" x1="0" x2="0" y1="0%" y2="4%" spreadMethod="repeat">
                    <stop offset="0%" stop-color="#e62915" />
                    <stop offset="50%" stop-color="#e62915" />
                    <stop offset="51%" stop-color="#fff" />
                    <stop offset="99%" stop-color="#fff" />
                    <stop offset="100%" stop-color="#e62915" />
                  </linearGradient>
                </defs>
                <text y="1.2em">Portfolio</text>
              </svg>
            </a>
          </div>
        </router-link>|
        <router-link to="/contact">
          <div class="headingWrapper">
            <a href="#" class="header header--raiseUp header--svg">
              <svg>
                <defs>
                  <linearGradient id="striped" x1="0" x2="0" y1="0%" y2="4%" spreadMethod="repeat">
                    <stop offset="0%" stop-color="#e62915" />
                    <stop offset="50%" stop-color="#e62915" />
                    <stop offset="51%" stop-color="#fff" />
                    <stop offset="99%" stop-color="#fff" />
                    <stop offset="100%" stop-color="#e62915" />
                  </linearGradient>
                </defs>
                <text y="1.2em">Contact</text>
              </svg>
            </a>
          </div>
        </router-link>|
        <!-- <router-link to="/dashboard">dashboard</router-link> -->
      </div>
    </div>

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
          <!-- <div class="menu" @click="open($event)" v-if="menuIcon">
            <span class="menu-icon"></span>
          </div>-->

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

          <!-- <transition name="bounce" key="username-input">
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
           
          </transition>-->
        </div>
      </transition>
    </div>
    <router-view />
    <div class="particles-js">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </div>
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
  display: flex !important;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #10ac84;
    }
  }
}

/*
	The following mixin is taken and edited from this pen - https://codepen.io/hugo/pen/xzjGB
	I have added outlineColor to allow the addition of a text-shadow outline for the text.
 */

@function pow($number, $exp) {
  $value: 1;
  @if $exp > 0 {
    @for $i from 1 through $exp {
      $value: $value * $number;
    }
  } @else if $exp < 0 {
    @for $i from 1 through -$exp {
      $value: $value / $number;
    }
  }
  @return $value;
}

@function fact($number) {
  $value: 1;
  @if $number > 0 {
    @for $i from 1 through $number {
      $value: $value * $i;
    }
  }
  @return $value;
}

@function pi() {
  @return 3.14159265359;
}

@function rad($angle) {
  $unit: unit($angle);
  $unitless: $angle / ($angle * 0 + 1);
  // If the angle has 'deg' as unit, convert to radians.
  @if $unit == deg {
    $unitless: $unitless / 180 * pi();
  }
  @return $unitless;
}

@function sin($angle) {
  $sin: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / fact(2 * $i + 1);
  }
  @return $sin;
}

@function cos($angle) {
  $cos: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / fact(2 * $i);
  }
  @return $cos;
}

@mixin shade(
  $type,
  $color: #3498db,
  $borderColor: #fff,
  $depth: 20,
  $angle: 135deg,
  $long: false,
  $fade: false
) {
  $angle: ($angle - 90);
  $x: 1.1 * cos($angle) + 0px;
  $y: 1.1 * sin($angle) + 0px;
  $darken: (lightness($color) / $depth)/2;
  $opacify: 0;
  $shadow: ();

  @if $long == true {
    $darken: 0;
  }

  @if $fade == true {
    $opacify: (opacity($color) / $depth);
    // added this for rendering in some browsers, remove if you like.
    @include translateZ(0);
  }

  @for $i from 1 through $depth {
    $shadow: $shadow,
      $i *
        $x
        $i *
        $y
        0
        hsla(
          hue($color),
          saturation($color),
          (lightness($color) - ($i * $darken)),
          1 - ($i * $opacify)
        );
  }
  #{$type}-shadow: 1.5px 1.5px 0 $borderColor, 0px 1.5px 0 $borderColor,
    -1.5px -1.5px 0 $borderColor, -1.5px -1.5px 0 $borderColor,
    -1.5px 1.5px 0 $borderColor, 1.5px -1.5px 0 $borderColor, $shadow;
}

//mixin to provide just a basic outline for the text
@mixin outline($color: #fff) {
  text-shadow: 1.5px 1.5px 0 $color, -1.5px -1.5px 0 $color,
    -1.5px -1.5px 0 $color, -1.5px 1.5px 0 $color, 1.5px -1.5px 0 $color;
}

// Define the fonts used in the Pen
@import url(https://fonts.googleapis.com/css?family=Francois+One);
@import url(https://fonts.googleapis.com/css?family=PT+Sans);

// Define the colors
$pink: #f89bb4;
$pinkPastel: #ebaca5;
$pinkDark: #e62915;
$pinkGrayed: #d38076;

$grayLight: #cac6c5;
$offWhite: #e7e7e7;

* {
  box-sizing: border-box;
}

// Outer heading wrapper (for descriptions, not for the actual effects)
.headingOuter {
  // background: #f1f1f1;
  text-align: center;
  margin-top: 30px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;

  &:first-child {
    margin-top: 0;
  }
  h1 + & {
    margin-top: 10px;
  }
}
.headingWrapper {
  text-align: center;
  // background-color: #fff;
  padding: 10px;
}

// default header class – used on all examples
// .header {
//   display: inline-block;
//   text-align: center;
//   font-family: "Francois One", Helvetica, Arial, sans-serif;
//   font-size: 96px;
//   color: $offWhite;
//   text-decoration: none;

//   @include outline($grayLight);

//   transition: all 400ms ease-in-out;
// }

// effect for pushing the text down onto the page
// default is the letters emerging from the page and merging back down on hover
.header--pushDown {
  @include shade(text, #aaa, #333, 10, 135deg, true);

  &:hover {
    transform: translate(9px, 9px);
    @include outline($grayLight);
  }
}

// raising text from page when hovered, so flipped state to header--pushDown class
.header--raiseUp {
  &:hover {
    transform: translate(-9px, -9px);
    @include shade(text, #aaa, #333, 10, 135deg, true);
  }
}

// creates a shadow effect, rather than a raised lettering effect
// simply by adjusting the translate position a little
.header--shadow {
  &:hover {
    transform: translate(5px, 0);
  }

  &.header--raiseUp {
    &:hover {
      transform: translate(-5px, 0);
    }
  }
}

//Brighter colored text
.color-bright {
  background-color: $pinkPastel;

  & .header {
    color: $pink;
    @include outline($pinkGrayed);
  }

  //push down text
  & .header--pushDown {
    @include shade(text, $pinkDark, #fff, 10, 135deg, true);

    &:hover {
      @include outline($pinkGrayed);
    }
  }

  //raise up text
  & .header--raiseUp:hover {
    @include shade(text, $pinkDark, #fff, 10, 135deg, true);
  }
}

// SVG Pattern text effect
// Same as the above but with a pattern text effect on hover
// Played around with this for a while – cannot be done with background clip and a CSS gradient as the
// text-shadow always appears in front of the background (unless you have no background color on the wrapping element)
// Therefore, use SVG linearGradient and animate the stop points using CSS
svg {
  line-height: 1.2;
  width: 410px;
  height: 1.5em;
}
.header--svg {
  text,
  stop {
    transition: all 350ms ease-in-out;
  }
  text {
    text-transform: uppercase;
    fill: url(#striped);
    @include outline($grayLight);
  }
  &:hover text {
    @include shade(text, #aaa, #333, 10, 135deg, true);
  }

  //animate gradient stop points
  & stop {
    stop-color: $offWhite;
  }
  &:hover stop {
    stop-color: #fff;

    &:nth-child(2),
    &:nth-child(3) {
      stop-color: $pinkGrayed;
    }
  }
}

// Brighter version of the SVG pattern text
.color-bright {
  & .header--svg {
    text {
      fill: url(#stripedColor);
      @include outline($pinkGrayed);
    }
    &:hover text {
      @include shade(text, $pinkDark, #fff, 10, 135deg, true);
    }
  }
  & stop {
    stop-color: $pink;
  }
  & .header--svg:hover stop {
    &:nth-child(2),
    &:nth-child(3) {
      stop-color: #ed5751;
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
  // margin: 5px;
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
#particles-js {
  z-index: -5000;
}

.vue-particles {
  height: 50%;
}

.particles-js {
  background-image: url(./assets/image2.jpg);
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -900;
}
</style>
