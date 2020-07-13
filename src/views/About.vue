<template>
  <div class="container">
    <div class="section">
      <!--   Icon Section   -->
      <div v-responsive.lg.xl>
        <div class="row">
          <neon-effect :options="options"></neon-effect>
          <br />
          <br />
          <div class="col s12">
            <h1 class="foo2 center">I tailor well crafted website</h1>
          </div>
        </div>
        <div class="row">
          <h5 class="foo2 center col s12">with the best UX/UI</h5>
        </div>
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center #42a5f5 darken-4-text">
                <img src="https://img.icons8.com/nolan/64/web.png" />
              </h2>
              <h4 class="center foo2">Front end specialist</h4>

              <!-- <p class="light size">
              Discover my project on this website. I work with Node, Angular 2, Git, HTML, CSS,
              Vanilla Javascript and many other cool stuff
              </p>-->
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center #42a5f5">
                <img src="https://img.icons8.com/dusk/64/000000/developer.png" />
              </h2>
              <h4 class="center foo2">Fullstack experience</h4>

              <!-- <p class="light size">
              I've worked for 3 years as a freelance developers. I've also work at
              voyages-sncf.Com in the Supervision team
              </p>-->
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <img src="https://img.icons8.com/nolan/64/repository.png" />
              </h2>
              <h4 class="center foo2">Agile knowledge</h4>

              <!-- <p class="light size">
              I'm trained with agile and I love daily scrum meeting, retrospectives and all
              scrum rituals
              </p>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-responsive="['hidden-all','xs','sm']">
      <div class="bg valign-wrapper">
        <div class="caption center">
          <h1 class="foo header center logo">Contact me</h1>
          <h3>Im 'available for javascript fullstack front end engineer</h3>
          <h3>Let get in touch !</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    preloader: true,
    load: true,
    mainPage: false,
    widthLoad: 50,
    showMenu: false,
    menuIcon: false,
    options: {
      len: 40, //The unilateral length of the pentagon
      count: 50, //How many lines overlap
      rate: 20, //rate the smaller fast
      dieChance: 0.05, //The chance to redraw a single painting failure.
      sparkChance: 0.1, //[0,1] The larger the figure, the larger the pentagon.
      sparkDist: 10, //Flash point distance.
      sparkSize: 2, //Flash point size.
      contentLight: 60, // [0,100] Brightness of color block
      shadowToTimePropMult: 6, //The shadow size of the inner ring of the pentagon.
      bgColorArr: [2, 2, 2] //Background color array
    }
  })
};
</script>

<style lang="scss" >
.white {
  color: whitesmoke;
}
</style>