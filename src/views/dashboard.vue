<template>
  <!-- <div class="home"> -->
  <grid-layout
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
      v-for="item in layout"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
    >
      <div class="container">
        <card
          data-image="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        >
          <h1 slot="header">{{item.i.title}}</h1>
          <p slot="content">{{item.i.kpi}}</p>
        </card>
      </div>
    </grid-item>
  </grid-layout>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import VueGridLayout from "vue-grid-layout";
import card from "@/components/card.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    card
  },
  data: function() {
    return {
      layout: [
        {
          x: 0,
          y: 0,
          w: 2,
          h: 8,
          i: { title: "kpi", kpi: "test", color: "green" }
        },
        {
          x: 2,
          y: 0,
          w: 2,
          h: 8,
          i: { title: "kpi2", kpi: "1000", color: "green" }
        },
        {
          x: 4,
          y: 0,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 6,
          y: 0,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 8,
          y: 0,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 10,
          y: 0,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 0,
          y: 5,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 2,
          y: 5,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 4,
          y: 5,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 6,
          y: 5,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 8,
          y: 5,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 10,
          y: 5,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 0,
          y: 10,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 2,
          y: 10,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 4,
          y: 10,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 6,
          y: 10,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 8,
          y: 10,
          w: 2,
          h: 8,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 10,
          y: 10,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

body {
  margin: 40px 0;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background-color: #bcaaa4;
  -webkit-font-smoothing: antialiased;
}

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