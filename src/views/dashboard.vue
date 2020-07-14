<template>
  <div class>
    <div v-responsive="'hidden-xs'">
      <!-- <grid-layout
        :layout.sync="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="(item,index) in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          
      >-->

      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <!-- <div > -->
          <div :key="index" v-for="(item,index) in layout">
            <a :href="item.i.href">
              <card class="col-lg-4 col-sm-6" :data-image="item.i.img">
                <h1 class="showContent" slot="header">{{item.i.title}}</h1>
                <p slot="content">{{item.i.kpi}}</p>
              </card>
            </a>
          </div>
        </div>
      </div>
      <!-- </grid-item>
      </grid-layout>-->
      <!-- </div> -->
      -->
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import VueGridLayout from "vue-grid-layout";
import card from "@/components/card.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    // GridLayout: VueGridLayout.GridLayout,
    // GridItem: VueGridLayout.GridItem,
    card
  },
  data: function() {
    return {
      show: false,
      transitionName: "fade",
      layout: [
        {
          x: 1,
          y: 0,
          w: 3,
          h: 10,
          i: {
            title: "Flight booking",
            kpi:
              "Look for a plane ticket and book it ! Made with vue js and node js",
            color: "green",
            img: "https://i.ibb.co/09PHq5P/testamadeus.png",
            href: "https://github.com/tvast/amadeusSearchFLightVue"
          }
        },
        {
          x: 5,
          y: 0,
          w: 2,
          h: 10,
          i: {
            title: "Developer journey",
            kpi:
              "Blog of Théophile Vast. I talk about my life of developer around the world",
            color: "green",
            img: "https://i.ibb.co/r0Nk3xw/Home-A-developer-journey.png",
            href: "https://tvast.github.io/blog/"
          }
        },
        {
          x: 9,
          y: 0,
          w: 2,
          h: 10,
          i: {
            href: "https://github.com/tvast/react-calculator",
            title: "React calculator",
            kpi: "Calculator made with react v 16",
            color: "green",
            img: "https://i.ibb.co/mv4Kd1P/React-App.png"
          }
        },
        {
          x: 1,
          y: 5,
          w: 2,
          h: 10,
          i: {
            href:
              "http://carrefour-numerique.cite-sciences.fr/fablab/wiki/doku.php?id=projets:hackathon_nao:maitre_nao",
            title: "Hackathon NAO",
            kpi:
              "Prototype of a IOT connected book to NAO to share and save knowledge about a subject",
            color: "green",
            img:
              "https://tvast.github.io/portfolio-theophile-vast/PortfolioTheophileVast/img/nao2.jpg"
          }
        },
        {
          x: 5,
          y: 5,
          w: 2,
          h: 10,
          i: {
            href: "https://github.com/tvast/elihpoeht-react",
            title: "Portfolio artist Elihpoeht ",
            kpi: "Portfolio made for my music side project in React v16",
            color: "green",
            img: "https://i.ibb.co/gD7YMvW/React-App2.png"
          }
        },
        {
          x: 9,
          y: 5,
          w: 2,
          h: 10,
          i: {
            href: "https://github.com/tvast/spotify-api-quasar-node",
            title: "Spotify API + Quasar framework",
            kpi: "Fullstack project, mobile first with Quasar and node JS",
            color: "green",
            img: "https://i.ibb.co/9cqhvcj/totem.png"
          }
        },
        {
          x: 1,
          y: 5,
          w: 2,
          h: 10,
          i: {
            href: "http://edouardwolton.com/home",
            title: "Portfolio artist Edouard wolton",
            kpi:
              "Online showcase of his artworks made with wordpress with a custom theme",
            color: "green",
            img: "https://i.ibb.co/cC4SVr4/page18.png"
          }
        },
        {
          x: 5,
          y: 5,
          w: 2,
          h: 10,
          i: {
            href: "http://vamosacasa.com.mx/",
            title: "Real estate in Mexico : Vamos a casa",
            kpi:
              "Real estate website in Cancun Mexico. Made in 2019 to help an independant seller create his business",
            color: "green",
            img:
              "https://i.ibb.co/drtr2bb/Vamos-a-Casa-Las-mejores-casas-de-Cancu-n-Riviera-Maya-y-Merida.png"
          }
        },
        {
          x: 9,
          y: 5,
          w: 2,
          h: 10,
          i: {
            href: "",
            title: "Artist shop 'le shop à Terence'",
            kpi:
              "E-commerce website made for an artist who sell his artwork and homemade product online",
            color: "green",
            img: "https://i.ibb.co/wc5vQK4/page21.png"
          }
        }
      ]
    };
  },
  methods: {
    openoverlay() {
      // console.log(this.$refs["foo" + input]);
      this.show = true;
      // this.$refs["foo" + input].classList.toggle("overlay");
    }
  }
};
</script>
<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);
.overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
//

.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1 + p,
p + p {
  margin-top: 10px;
}

.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  // background-color: #fff;

  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info,
    .card-info p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .card-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
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
  transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(#000, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
</style>