<template>
  <div class>
    <div v-responsive="'hidden-xs'">
      <neon-effect :options="options"></neon-effect>
      <div class>
        <h1 class="foo2 header center logo">Hello, Bonjour, Hola</h1>
        <div class="row center">
          <h5 class="foo2 header col s12 light">start the conversation !</h5>
        </div>
        <p class="foo2 header center logo">
          My name is Théophile Vast and you can find me on
          <a href="https://github.com/tvast">github</a>
          <a href="https://twitter.com/Theophile_Vast">twitter</a> and
          <a href="https://www.linkedin.com/in/theophile-vast/">linkedin</a>
        </p>
        <h5
          class="foo2 header center col s12 light"
        >To get more info about me type help in the terminal and type the command of your choice</h5>
        <div class="container">
          <vue-terminal :messages="messages" :task-list="taskList" :command-list="commandList" />
        </div>
      </div>
      <div v-responsive="['hidden-all','xs','sm']">
        <section class="page-section bg-white">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                <h2 style="color: whitesmoke;background-color: black;">Let's Get In Touch!</h2>
                <!-- <hr class="divider my-4" /> -->
                <p
                  class="text-muted mb-5"
                >I'm open to participate to Javascript Hackathon or open source project</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <div class="text-muted">+1 (555) 123-4567</div>
              </div>
              <div class="col-lg-4 mr-auto text-center">
                <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <!-- Make sure to change the email address in BOTH the anchor text and the link target below!-->
                <a class="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div v-responsive.sm.xs>
      <section class="page-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 style="color: whitesmoke;background-color: black;">Let's Get In Touch!</h2>
              <!-- <hr class="divider my-4" /> -->
              <p
                class="text-muted mb-5"
              >I'm open to participate to Javascript Hackathon or open source project</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <div class="text-muted">See you soon</div>
            </div>
            <div class="col-lg-4 mr-auto text-center">
              <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <!-- Make sure to change the email address in BOTH the anchor text and the link target below!-->
              <a class="d-block" href="mailto:theophile.vast@gmail.com">Contact Théophile Vast</a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- <div class="console">
        <div class="output">
          <span>Initializing...</span>
          <br />
          <span class="green">0.0002ms ok!</span>
          <br />
          <span class="seperator">== == == == == == == == == == == == == == == == == ==</span>
          <pre contenteditable="false"> ______           __   ______            _____                                                             __             __     
|      \         /  \ /      \          |     \                                                           |  \           |  \    
 \$$$$$$        /  $$|  $$$$$$\          \$$$$$  ______  __     __  ______    _______   _______   ______   \$$  ______  _| $$_   
  | $$         /  $$  \$$__| $$            | $$ |      \|  \   /  \|      \  /       \ /       \ /      \ |  \ /      \|   $$ \  
  | $$        |  $$    |     $$       __   | $$  \$$$$$$\\$$\ /  $$ \$$$$$$\|  $$$$$$$|  $$$$$$$|  $$$$$$\| $$|  $$$$$$\\$$$$$$  
  | $$         \$$\   __\$$$$$\      |  \  | $$ /      $$ \$$\  $$ /      $$ \$$    \ | $$      | $$   \$$| $$| $$  | $$ | $$ __ 
 _| $$_         \$$\ |  \__| $$      | $$__| $$|  $$$$$$$  \$$ $$ |  $$$$$$$ _\$$$$$$\| $$_____ | $$      | $$| $$__/ $$ | $$|  \
|   $$ \         \$$\ \$$    $$       \$$    $$ \$$    $$   \$$$   \$$    $$|       $$ \$$     \| $$      | $$| $$    $$  \$$  $$
 \$$$$$$          \$$  \$$$$$$         \$$$$$$   \$$$$$$$    \$     \$$$$$$$ \$$$$$$$   \$$$$$$$ \$$       \$$| $$$$$$$    \$$$$ 
                                                                                                              | $$               
                                                                                                              | $$               
                                                                                                               \$$               </pre>
          <span class="seperator">== == == == == == == == == == == == == == == == == ==</span>
          <span>
            Hope you have fun discovering all the
            <span class="red">hidden gems</span>!
          </span>

          <span class="blue">
            type '
            <span class="grey">help</span>' to see a list of comands available
          </span>
          <br />
        </div>
        <div class="action">
          <span>dev$</span>
          <textarea class="input" name="input" cols="30" rows="1"></textarea>
        </div>
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import card from "@/components/card.vue";
import VueTerminal from "vue-terminal";
export default {
  name: "Home",
  components: { VueTerminal },
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
    },
    messages: [
      {
        // time: generateTime(),
        type: "system",
        label: "System",
        message: "Welcome to vTerminal, "
      }
    ],
    commandList: {
      version: {
        description: "Return this project version",
        messages: [{ message: "1.0.0" }]
      },
      contact: {
        description: "How to contact author",
        messages: [
          { message: "Website: https://islasher.com" },
          { message: "Email: xuxiaofei915@gmail.com" },
          { message: "Github: https://github.com/dongsuo" },
          { message: "WeChat Offical Account: dongsuo" }
        ]
      },
      about: {
        description: "About author",
        messages: [
          {
            message:
              "My name is xu xiaofei. I'm a programmer, You can visit my personal website at https://islasher.com to learn more about me."
          }
        ]
      },
      readme: {
        description: "About this project.",
        messages: [
          {
            message:
              "This is a component that emulates a command terminal in browser."
          }
        ]
      },
      document: {
        description: "Document of this project.",
        messages: [
          {
            message: {
              text: "Under Construction",
              list: [
                {
                  label: "hello",
                  type: "error",
                  message: "this is a test message"
                }
              ]
            }
          }
        ]
      },
      "git help": {
        description: "git help",
        /* eslint-disable */
        messages: [
          {
            message: ` <pre contenteditable="false"> ______           __   ______            _____                                                             __             __     
|      \         /  \ /      \          |     \                                                           |  \           |  \    
 \$$$$$$        /  $$|  $$$$$$\          \$$$$$  ______  __     __  ______    _______   _______   ______   \$$  ______  _| $$_   
  | $$         /  $$  \$$__| $$            | $$ |      \|  \   /  \|      \  /       \ /       \ /      \ |  \ /      \|   $$ \  
  | $$        |  $$    |     $$       __   | $$  \$$$$$$  $$\ /  $$ \$$$$$$\|  $$$$$$$|  $$$$$$$|  $$$$$$\| $$|  $$$$$$  $$$$$$  
  | $$         \$$\   __\$$$$$\      |  \  | $$ /      $$ \$$\  $$ /      $$ \$$    \ | $$      | $$   \$$| $$| $$  | $$ | $$ __ 
 _| $$_         \$$\ |  \__| $$      | $$__| $$|  $$$$$$$  \$$ $$ |  $$$$$$$ _\$$$$$$\| $$_____ | $$      | $$| $$__/ $$ | $$|  
|   $$ \         \$$\ \$$    $$       \$$    $$ \$$    $$   \$$$   \$$    $$|       $$ \$$     \| $$      | $$| $$    $$  \$$  $$
 \$$$$$$          \$$  \$$$$$$         \$$$$$$   \$$$$$$$    \$     \$$$$$$$ \$$$$$$$   \$$$$$$$ \$$       \$$| $$$$$$$    \$$$$ 
                                                                                                              | $$               
                                                                                                              | $$               
                                                                                                               \$$               </pre>`
          }
        ]
      }
    }
    // commandList: {
    //   boot: {
    //     description: "get the 0 ",
    //     messagesOrTask: [] //(function)
    //   }
    // }
  }),
  methods: {
    generateTime() {
      return new Date.toLocaleString();
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poiret+One&display=swap");
@keyframes ball {
  0% {
    top: 50%;
    left: 0%;
  }
  20% {
    top: 25%;
    left: 25%;
  }
  30% {
    top: 50%;
    left: 50%;
  }
  40% {
    top: 75%;
    left: 75%;
  }
  50% {
    top: 50%;
    left: 100%;
  }
  60% {
    top: 75%;
    left: 75%;
  }
  70% {
    top: 50%;
    left: 50%;
  }
  80% {
    top: 25%;
    left: 25%;
  }
  100% {
    top: 50%;
    left: 0%;
  }
}

@keyframes raketes {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(10%);
  }
  25% {
    transform: translateY(-30%);
  }
  50% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(25%);
  }
  80% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes glitch {
  0% {
    color: white;
    transform: translateX(0) translateY(0%);
  }
  25% {
    color: #3498db;
    transform: translateX(1px) translateY(1px);
  }
  40% {
    color: #e74c3c;
    transform: translateX(-2px) translateY(-2px);
  }
  50% {
    color: #cccccc;
    transform: translateX(0) translateY(0);
  }
  80% {
    color: #3498db;
    transform: translateX(2px) translateY(2px);
  }
  90% {
    color: #e74c3c;
    transform: translateX(-1px) translateY(-1px);
  }
  100% {
    color: white;
    transform: translateX(0) translateY(0);
  }
}

@keyframes changeColor {
  0% {
    color: #cccccc;
  }
  25% {
    color: #2ecc71;
  }
  50% {
    color: #e74c3c;
  }
  75% {
    color: #3498db;
  }
  100% {
    color: #cccccc;
  }
}

html,
// body {
//   height: 100%;
//   margin: 0;
//   padding: 0;
//   font-family: "Poiret One", cursive;
//   background-color: #212121;
// }

// h1,
// h2,
// p,
// span,
// textarea {
//   font-family: "Poiret One", cursive;
// }

.console {
  position: relative;
  background-color: black;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  .output {
    width: 100%;
    font-size: 12px;
    color: #cccccc;
    span {
      line-height: 20px;
    }
    span.grey {
      color: #cccccc;
    }
    span.green {
      color: #2ecc71;
    }
    span.red {
      color: #e74c3c;
    }
    span.blue {
      color: #3498db;
    }
    pre {
      font-size: 9px;
      animation: glitch 0.2s linear infinite;
      animation-play-state: paused;
      &:hover {
        animation-play-state: running;
      }
    }
  }
  .action {
    width: 100%;
    font-size: 14px;
    margin-top: 20px;

    span {
      display: inline-block;
      width: 60px;
      float: left;
      color: white;
    }
    textarea {
      width: calc(100% - 65px);
      float: left;
      background: none;
      border: none;
      color: white;
      padding: 0;
      margin: 0;
      &:focus {
        outline: none;
      }
    }
  }
}

span.seperator {
  font-size: 12px;
  animation: changeColor 10s ease-in-out infinite;
}

.pong {
  display: inline-block;
  position: relative;
  width: 300px;
  height: 50px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background-color: white;
    animation: ball 6s linear infinite;
  }
  b {
    display: inline-block;
    position: absolute;
    top: 50%;
    margin-top: -7px;
    transform: translateY(0);
    &.left {
      left: -10px;
      animation: raketes 5s ease-in-out infinite;
    }
    &.right {
      right: -10px;
      animation: raketes 5s ease-in-out 0.5s infinite;
    }
  }
}
.white {
  color: whitesmoke !important;
  background-color: purple !important;
}
</style>
