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
    >{{item.i.kpi}}</grid-item>
  </grid-layout>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import VueGridLayout from "vue-grid-layout";

export default {
  name: "Home",
  data: function() {
    return {
      layout: [
        {
          x: 0,
          y: 0,
          w: 2,
          h: 4,
          i: { title: "kpi", kpi: "test", color: "green" }
        },
        {
          x: 2,
          y: 0,
          w: 2,
          h: 4,
          i: { title: "kpi2", kpi: "1000", color: "green" }
        },
        {
          x: 4,
          y: 0,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 6,
          y: 0,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 8,
          y: 0,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 10,
          y: 0,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 0,
          y: 5,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 2,
          y: 5,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 4,
          y: 5,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 6,
          y: 5,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 8,
          y: 5,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 10,
          y: 5,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 0,
          y: 10,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 2,
          y: 10,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 4,
          y: 10,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 6,
          y: 10,
          w: 2,
          h: 4,
          i: { title: "kpi3", kpi: "2400", color: "green" }
        },
        {
          x: 8,
          y: 10,
          w: 2,
          h: 4,
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
  },
  components: {
    // HelloWorld,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
};
</script>