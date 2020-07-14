


<template>
  <div>
    <div v-responsive.lg.xl>
      <neon-effect :options="options"></neon-effect>
      <div class="md-layout">
        <div class="md-layout-item">
          <card
            data-image="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          >
            <h1 slot="header">Fullstack specialist, talk from robot to human</h1>
            <p slot="content">
              Discover my project on this website. I work with Node, Vue js, Elastic search, Mongo db
              Vanilla Javascript and many other cool stuff
            </p>
          </card>
        </div>
        <div class="md-layout-item">
          <card
            data-image="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
          >
            <h1 slot="header">The best user interface is made for human</h1>
            <p
              slot="content"
            >I'm a huge fan of Google material design guideline. And I apply those principles on every project</p>
          </card>
        </div>
        <div class="md-layout-item">
          <card
            data-image="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
          >
            <h1 slot="header">I build website that blow your (human)mind</h1>
            <p slot="content">Just take a look at my portfolio</p>
          </card>
        </div>
      </div>
    </div>

    <div v-responsive.sm.xs>
      <!-- About-->
      <section class="page-section bg-primary" id="about">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">This website is optimized for desktop experience</h2>
              <hr class="divider light my-4" />
              <p class="text-white-50 mb-4">
                You can find some key information here
                <!-- <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a> -->
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Services-->
      <section class="page-section" id="services">
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
      </section>
      <!-- Portfolio-->
      <div id="portfolio">
        <div class="container-fluid p-0">
          <div class="row no-gutters">
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg">
                <img class="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg">
                <img class="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg">
                <img class="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg">
                <img class="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg">
                <img class="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg">
                <img class="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt />
                <div class="portfolio-box-caption p-3">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Call to action-->
      <section class="page-section bg-dark text-white">
        <div class="container text-center">
          <h2 class="mb-4">Free Download at Start Bootstrap!</h2>
          <a
            class="btn btn-light btn-xl"
            href="https://startbootstrap.com/themes/creative/"
          >Download Now!</a>
        </div>
      </section>
      <!-- Contact-->
      <section class="page-section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Let's Get In Touch!</h2>
              <hr class="divider my-4" />
              <p
                class="text-muted mb-5"
              >Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+1 (555) 123-4567</div>
            </div>
            <div class="col-lg-4 mr-auto text-center">
              <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <!-- Make sure to change the email address in BOTH the anchor text and the link target below!-->
              <a class="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
            </div>
          </div>
        </div>
      </section>
      <!-- Footer-->
    </div>
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
  }),
  methods: {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poiret+One&display=swap");
</style>
