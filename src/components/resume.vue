<template>
  <div class="container">
    <!-- <div class="hna qual quarter-qual">
      <h2>Awards &amp; Honors</h2>
      <ul>
        <li>
          Here's something funky I did
          <ul>
            <li>
              <a href="http://theophilevast.fr/cosmiccivilwar/index.html">Cosmic civil war</a> a javascript video game
            </li>
            <li>
              <a href="http://theophilevast.fr/">Portfolio</a>, all my projects
            </li>
          </ul>
        </li>
      </ul>
    </div>-->

    <div class="sknex">
      <h2>Skills &amp; Expertise</h2>
      <br />
      <div class="skills-text">
        <br />
        <p>Javascript fulstack developer</p>

        <ul>
          <li>Arcitecture frontend &amp; backend</li>
          <li>Development front &amp; back</li>
          <li>Expert in user interface and experience</li>
        </ul>
      </div>

      <div class="skills-vis">
        <div id="skill1">
          <h3>Frontend</h3>
          <hr />
          <br />
          <div class="skill-breakdown">
            <div class="pie-container">
              <div class="center"></div>
              <div class="pie-back"></div>
              <div class="hold" id="puters">
                <div class="pie"></div>
              </div>
              <div class="hold" id="puters4">
                <div class="pie"></div>
              </div>

              <div class="hold" id="movies">
                <div class="pie"></div>
              </div>

              <div class="hold" id="games">
                <div class="pie"></div>
              </div>

              <div class="hold" id="music">
                <div class="pie"></div>
              </div>
              <div class="hold" id="music2">
                <div class="pie"></div>
              </div>

              <div class="hold" id="tv">
                <div class="pie"></div>
              </div>
            </div>
            <div class="pie-legend">
              <ul>
                <li>Vue</li>
                <li>React</li>
                <li>GraphQl</li>
                <li>Material deisgn</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="skill2">
          <h3>Backend</h3>
          <hr />
          <br />

          <div class="skill-breakdown">
            <div class="pie-container">
              <div class="center"></div>
              <div class="pie-back"></div>
              <div class="hold" id="puters">
                <div class="pie"></div>
              </div>
              <div class="hold" id="puters4">
                <div class="pie"></div>
              </div>

              <div class="hold" id="movies">
                <div class="pie"></div>
              </div>

              <div class="hold" id="games">
                <div class="pie"></div>
              </div>

              <div class="hold" id="music">
                <div class="pie"></div>
              </div>
              <div class="hold" id="music2">
                <div class="pie"></div>
              </div>

              <div class="hold" id="tv">
                <div class="pie"></div>
              </div>
            </div>
            <div class="pie-legend">
              <ul>
                <li>Node Js</li>
                <li>API REST</li>
                <li>Javascript</li>
                <li>Express</li>
                <li>Elastic search</li>
                <li>Mongo DB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import card from "@/components/card.vue";

export default {
  /* eslint-disable */

  name: "resume",
  components: {
    // HelloWorld
    // card
  },
  mounted() {},
  props: ["dataImage"],
  data: () => ({}),
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
// @import url(http://fonts.googleapis.com/css?family=Montserrat:400, 700);
body {
  background-color: white;
  color: #b4dad7;
  //   font-family: "Montserrat", Helvetica;
  margin: 0 auto;
}

ul li {
  padding-top: 0.5em;
}

p {
  line-height: 1.8em;
}

a {
  text-decoration: none;
  color: #b4dad7;
}
a:hover {
  font-size: 1.5em;
}

h2 {
  border: 2px solid #b4dad7;
  padding: 0.5em;
  display: inline-block;
}

h3 {
  line-height: 0.3em;
  color: whitesmoke;
}

header {
  overflow: hidden;
}
header #twitter {
  float: right;
  margin-top: 45px;
}

.wrap {
  padding: 2em;
}

section {
  width: 950px;
  margin: 0 auto;
}

hr {
  border: 1px solid #b4dad7;
}

.full-qual {
  width: 100%;
  margin: 0 auto;
}

.third-qual {
  width: 70%;
  float: left;
  margin-right: 5%;
}

.quarter-qual {
  width: 25%;
  float: left;
}

.qual {
  margin-bottom: 40px;
}
.qual hr {
  margin: 0 auto;
  width: 100%;
}

.data {
  height: 200px;
  position: relative;
  width: 100%;
  margin-bottom: 10px;
}
.data .data-item {
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
}
.data .data-item h5 {
  position: absolute;
  bottom: 10px;
  white-space: nowrap;
  border-bottom: 2px solid #b4dad7;
}
.data .data-item span {
  position: absolute;
  bottom: 13px;
  border-left: 2px solid #b4dad7;
}

#item1 {
  z-index: 1;
  right: 0;
  border-left: 400px solid transparent;
  border-right: 400px solid transparent;
  border-bottom: 0px solid #2196a7;
}

#item2 {
  z-index: 5;
  right: 50px;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  opacity: 0.5;
  border-bottom: 0px solid #b4dad7;
}

#item3 {
  z-index: 5;
  left: 60px;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 0px solid #2196a7;
}
#item3 h5 {
  position: absolute;
  left: -65px;
}

#item4 {
  z-index: 5;
  left: 150px;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  opacity: 0.5;
  border-bottom: 0px solid #b4dad7;
}
#item4 h5 {
  position: absolute;
  left: -65px;
}

#item5 {
  z-index: 5;
  left: 300px;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  opacity: 0.5;
  border-bottom: 0px solid #b4dad7;
}
#item5 h5 {
  text-align: right;
  position: absolute;
  left: -65px;
  bottom: 70px;
}
#item5 span {
  line-height: 80px;
}

#item6 {
  z-index: 5;
  left: 400px;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  opacity: 0.5;
  border-bottom: 0px solid #b4dad7;
}
#item6 h5 {
  position: absolute;
  bottom: 70px;
}
#item6 span {
  line-height: 80px;
}

#item7 {
  z-index: 10;
  left: 450px;
  border-left: 125px solid transparent;
  border-right: 125px solid transparent;
  border-bottom: 0px solid #b4dad7;
}
#item7 h5 {
  text-align: right;
  position: absolute;
  left: -67px;
  bottom: 30px;
}
#item7 span {
  line-height: 40px;
}

.years {
  text-align: justify;
}
.years .middot {
  margin: 0 auto;
  font-size: 58px;
  color: #4b5859;
  line-height: 20px;
}
.years .year-list {
  margin-top: -18px;
}
.years * {
  list-style-position: outside;
  padding: 0;
  display: inline;
}
.years span {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 0;
}

.edu .highschool {
  color: #4b5859;
  margin-left: 1em;
}
.edu .schools {
  position: relative;
  height: 100px;
  margin-bottom: 0.5em;
}
.edu .schools .school-item h5 {
  position: absolute;
  bottom: 10px;
  white-space: nowrap;
  border-bottom: 2px solid #b4dad7;
}
.edu .schools .school-item span {
  position: absolute;
  bottom: 13px;
  border-left: 2px solid #b4dad7;
}

#school1 {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 125px solid transparent;
  border-right: 125px solid transparent;
  border-bottom: 62.5px solid #2196a7;
}

#school2 {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 250px;
  width: 0;
  height: 0;
  border-left: 175px solid transparent;
  border-right: 175px solid transparent;
  border-bottom: 87.5px solid #b4dad7;
}

.hna {
  position: relative;
}
.hna ul {
  list-style-position: inside;
  padding: 0;
  color: #4b5859;
}
.hna ul ul {
  padding-left: 1em;
}

.sknex {
  clear: both;
  margin-bottom: 2em;
  color: #fff;
}

.sknex {
  overflow: hidden;
}
.sknex .skills-text {
  float: left;
  width: 28%;
  margin-right: 2%;
  color: #fff;
}

.skills-vis {
  float: left;
  width: 70%;
}

#skill1 {
  width: 45%;
  //   margin-right: 5%;
  float: left;
  color: #fff;
}
#skill1 #puters .pie {
  background-color: #b4dad7;
  -webkit-transform: rotate(80deg);
  -moz-transform: rotate(80deg);
  -o-transform: rotate(80deg);
  transform: rotate(80deg);
}
#skill1 #puters4 {
  background-color: #215961;
  -webkit-transform: rotate(210deg);
  -moz-transform: rotate(210deg);
  -o-transform: rotate(210deg);
  transform: rotate(210deg);
}
#skill1 #movies {
  background-color: #307982;
  -webkit-transform: rotate(170deg);
  -moz-transform: rotate(170deg);
  -o-transform: rotate(170deg);
  transform: rotate(170deg);
}
#skill1 #games {
  background-color: #2196a7;
  -webkit-transform: rotate(160deg);
  -moz-transform: rotate(160deg);
  -o-transform: rotate(160deg);
  transform: rotate(160deg);
}
#skill1 #music {
  background-color: #519ca4;
  -webkit-transform: rotate(110deg);
  -moz-transform: rotate(110deg);
  -o-transform: rotate(110deg);
  transform: rotate(110deg);
}
#skill1 #music2 {
  background-color: #519ca4;
  -webkit-transform: rotate(80deg);
  -moz-transform: rotate(80deg);
  -o-transform: rotate(80deg);
  transform: rotate(80deg);
}

#skill2 {
  width: 45%;
  float: left;
  color: #fff;
}
#skill2 #puters .pie {
  background-color: #b4dad7;
  -webkit-transform: rotate(80deg);
  -moz-transform: rotate(80deg);
  -o-transform: rotate(80deg);
  transform: rotate(80deg);
}
#skill2 #puters4 {
  background-color: #215961;
  -webkit-transform: rotate(210deg);
  -moz-transform: rotate(210deg);
  -o-transform: rotate(210deg);
  transform: rotate(210deg);
}
#skill2 #movies {
  background-color: #307982;
  -webkit-transform: rotate(170deg);
  -moz-transform: rotate(170deg);
  -o-transform: rotate(170deg);
  transform: rotate(170deg);
}
#skill2 #games {
  background-color: #2196a7;
  -webkit-transform: rotate(160deg);
  -moz-transform: rotate(160deg);
  -o-transform: rotate(160deg);
  transform: rotate(160deg);
}
#skill2 #music {
  background-color: #519ca4;
  -webkit-transform: rotate(110deg);
  -moz-transform: rotate(110deg);
  -o-transform: rotate(110deg);
  transform: rotate(110deg);
}
#skill2 #music2 {
  background-color: #519ca4;
  -webkit-transform: rotate(80deg);
  -moz-transform: rotate(80deg);
  -o-transform: rotate(80deg);
  transform: rotate(80deg);
}

.skill-breakdown {
  overflow: hidden;
}
.skill-breakdown .pie-container {
  position: relative;
  height: 150px;
  width: 150px;
  margin-right: 10px;
  float: left;
}
.skill-breakdown .pie-container .center {
  position: absolute;
  z-index: 50;
  width: 75px;
  height: 75px;
  top: 25%;
  left: 25%;
  background-color: #211240;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.skill-breakdown .pie-container .pie-back {
  background-color: #1f2426;
  position: absolute;
  width: 150px;
  height: 150px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.skill-breakdown .pie-container .pie {
  position: absolute;
  width: 150px;
  height: 150px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  clip: rect(0px, 75px, 150px, 0px);
}
.skill-breakdown .pie-container .hold {
  position: absolute;
  width: 150px;
  height: 150px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  clip: rect(0px, 150px, 75px, 75px);
}
.skill-breakdown ul {
  margin-left: 150px;
}

.flat-button {
  margin: 0 auto;
  position: absolute;
  width: 250px;
  height: 60px;
  background: #211240;
  left: 40%;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  transition: color 0.3s;
  /* Typo */
  line-height: 60px;
  text-align: center;
  color: #fff;
  float: right;
}

.flat-button:after {
  position: absolute;
  top: 90%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #9c27b0;
  content: "";
  z-index: -2;
  transition: transform 0.3s;
}

.flat-button:hover::after {
  transform: translateY(-80%);
  transition: transform 0.3s;
}
</style>