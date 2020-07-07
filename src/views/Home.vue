


<template>
  <div class>
    <div class="container">
      <card
        data-image="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      >
        <h1 slot="header">Fullstack specialist, talk from robot to human</h1>
        <p slot="content">
          Discover my project on this website. I work with Node, Vue js, Elastic search, Mongo db
          Vanilla Javascript and many other cool stuff
        </p>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
      >
        <h1 slot="header">The best user interface is made for human</h1>
        <p
          slot="content"
        >I'm a huge fan of Google material design guideline. And I apply those principles on every project</p>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
      >
        <h1 slot="header">I build website that blow your (human)mind</h1>
        <p slot="content">Just take a look at my portfolio</p>
      </card>
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
    menuIcon: false
  }),
  methods: {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poiret+One&display=swap");
</style>
