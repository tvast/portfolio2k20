(function(t){function e(e){for(var s,r,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);f&&f(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},r={app:0},o={app:0},n=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bd5afa35"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"474de9c5"}[t]+".css",o=l.p+s,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var c=n[i],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===o))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],d=c.getAttribute("data-href");if(d===s||d===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||o,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete r[t],f.parentNode.removeChild(f),a(n)},f.href=o;var u=document.getElementsByTagName("head")[0];u.appendChild(f)})).then((function(){r[t]=0})));var s=o[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,a){s=o[t]=[e,a]}));e.push(s[2]=n);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=i(t);var p=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",p.name="ChunkLoadError",p.type=s,p.request=r,a[1](p)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var f=d;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"app"}},[a("div",{directives:[{name:"responsive",rawName:"v-responsive",value:"hidden-xs",expression:"'hidden-xs'"}]},[a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"headingWrapper"},[a("router-link",{attrs:{to:"/"}},[a("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[a("svg",[a("defs",[a("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[a("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),a("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),a("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),a("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),a("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),a("text",{attrs:{y:"1.2em"}},[t._v("Home")])])])])],1),a("div",{staticClass:"headingWrapper"},[a("router-link",{attrs:{to:"/about"}},[a("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[a("svg",[a("defs",[a("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[a("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),a("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),a("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),a("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),a("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),a("text",{attrs:{y:"1.2em"}},[t._v("About")])])])])],1),a("router-link",{attrs:{to:"/dashboard"}},[a("div",{staticClass:"headingWrapper"},[a("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[a("svg",[a("defs",[a("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[a("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),a("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),a("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),a("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),a("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),a("text",{attrs:{y:"1.2em"}},[t._v("Portfolio")])])])])]),t._v("| "),a("router-link",{attrs:{to:"/contact"}},[a("div",{staticClass:"headingWrapper"},[a("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[a("svg",[a("defs",[a("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[a("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),a("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),a("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),a("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),a("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),a("text",{attrs:{y:"1.2em"}},[t._v("Contact")])])])])]),t._v("| ")],1)]),a("div",{directives:[{name:"responsive",rawName:"v-responsive",value:["hidden-all","xs","sm"],expression:"['hidden-all','xs','sm']"}]},[t._m(0),t._v("s ")]),a("div",{directives:[{name:"responsive",rawName:"v-responsive.sm.xs",modifiers:{sm:!0,xs:!0}}]},[t._m(1)])]),a("div",{staticClass:"fullpage"},[a("transition",{attrs:{name:"loader2"}},[t.preloader?a("div",{staticClass:"all"},[a("div",{staticClass:"preloader"},[a("transition",{attrs:{name:"loader"}},[t.load?a("h2",{staticClass:"text"},[t._v("PORTFOLIO THEOPHILE VAST")]):t._e()]),a("div",{ref:"load",staticClass:"load"},[a("div",{ref:"inload",staticClass:"inload"})])],1)]):t._e()]),a("transition",{attrs:{name:"loader"}},[t.mainPage?a("div",{staticClass:"all2"}):t._e()])],1),a("router-view"),a("div",{staticClass:"particles-js"},[a("vue-particles",{attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top py-3",attrs:{id:"mainNav"}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[t._v("Portfolio Théophile Vast")]),a("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto my-2 my-lg-0"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#about"}},[t._v("About")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#services"}},[t._v("Services")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#contact"}},[t._v("Contact")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top py-3",attrs:{id:"mainNav"}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[t._v("Start Bootstrap")]),a("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto my-2 my-lg-0"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#about"}},[t._v("About")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#services"}},[t._v("Services")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#contact"}},[t._v("Contact")])])])])])])}],n=a("3a81");s["a"].directive("responsive",n["a"]);var i={name:"Home",components:{},data:function(){return{preloader:!0,load:!0,mainPage:!1,widthLoad:50,showMenu:!1,menuIcon:!1}},methods:{myFunction:function(){var t=document.getElementById("myLinks");"block"===t.style.display?t.style.display="none":t.style.display="block"},closeLoad:function(){this.preloader=!1},open:function(){event.target.classList.toggle("open"),this.showMenu=!this.showMenu},animatedPreload:function(){var t=this,e=setInterval((function(){function a(t,e){return Math.floor(Math.random()*(e-t))+t}t.widthLoad>=100&&(setTimeout((function(){t.$refs.load.style.opacity=0}),300),setTimeout((function(){t.load=!1}),600),setTimeout((function(){t.preloader=!1}),1600),setTimeout((function(){t.mainPage=!0}),2600),setTimeout((function(){t.menuIcon=!0}),3600),clearInterval(e)),t.widthLoad+=a(1,20),t.$refs.inload.style.width=t.widthLoad+"%"}),500)}},mounted:function(){this.animatedPreload()}},l=i,c=(a("5c0b"),a("2877")),d=Object(c["a"])(l,r,o,!1,null,null,null),p=d.exports,f=a("8c4f");s["a"].use(f["a"]);var u=[{path:"/",name:"mainView",component:function(){return a.e("about").then(a.bind(null,"bb51"))},meta:{"hasDesktopView ":!0}},{path:"/mobile-view",name:"mobileView",component:function(){return a.e("about").then(a.bind(null,"fdab"))},meta:{hasMobileView:!0}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"4fe8"))}}],v=new f["a"]({routes:u});v.beforeEach((function(t,e,a){var s=t.matched.some((function(t){return t.meta.hasMobileView}));s&&(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?a("/mobile-view"):a("/"))}));var h=v,m=a("2f62");s["a"].use(m["a"]);var g=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),b=a("98c9"),y=a("8645"),C=a.n(y);a("1838");s["a"].use(b["a"]),s["a"].use(n["a"]),s["a"].use(C.a),s["a"].config.productionTip=!1,new s["a"]({router:h,store:g,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.b5d0de97.js.map