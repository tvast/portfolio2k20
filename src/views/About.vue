<template>
  <div class="container">
    <div class="section">
      <!--   Icon Section   -->
      <div v-responsive="'hidden-xs'">
        <div class="row logo">
          <br />
          <br />
          <h1 class="foo2 header center logo">I tailor well crafted website</h1>
          <div class="row center">
            <h5 class="foo2 header col s12 light">with the best UX/UI</h5>
          </div>
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="animated infinite swing center #42a5f5 darken-4-text">
                <i class="material-icons">web</i>
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
              <h2 class="animated infinite rotateOut center #42a5f5 darken-4-text">
                <i class="material-icons">settings</i>
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
              <h2 class="center #42a5f5 darken-4-text">
                <i class="material-icons">trending_up</i>
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

<style lang="scss" >
.white {
  color: whitesmoke;
}
</style>