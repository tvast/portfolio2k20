(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,r=1;r<o.length;r++){var i=o[r];0!==s[i]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=o[0]))}return t}var a={},r={app:0},s={app:0},n=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eb6552c6"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={about:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"a56f5306"}[t]+".css",s=c.p+a,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var l=n[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,n=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete r[t],f.parentNode.removeChild(f),o(n)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,o){a=s[t]=[e,o]}));e.push(a[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var o=s[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,o[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(o,a,function(e){return t[e]}.bind(null,a));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"21bb":function(t,e,o){"use strict";var a=o("2dad"),r=o.n(a);r.a},"29cd":function(t,e,o){"use strict";var a=o("abb1"),r=o.n(a);r.a},"2dad":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("div",{staticClass:"headingWrapper"},[o("router-link",{attrs:{to:"/"}},[o("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[o("svg",[o("defs",[o("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[o("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),o("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),o("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),o("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),o("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),o("text",{attrs:{y:"1.2em"}},[t._v("Home")])])])])],1),o("div",{staticClass:"headingWrapper"},[o("router-link",{attrs:{to:"/about"}},[o("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[o("svg",[o("defs",[o("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[o("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),o("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),o("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),o("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),o("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),o("text",{attrs:{y:"1.2em"}},[t._v("About")])])])])],1),o("router-link",{attrs:{to:"/dashboard"}},[o("div",{staticClass:"headingWrapper"},[o("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[o("svg",[o("defs",[o("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[o("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),o("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),o("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),o("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),o("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),o("text",{attrs:{y:"1.2em"}},[t._v("Portfolio")])])])])]),t._v("| "),o("router-link",{attrs:{to:"/contact"}},[o("div",{staticClass:"headingWrapper"},[o("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[o("svg",[o("defs",[o("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[o("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),o("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),o("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),o("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),o("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),o("text",{attrs:{y:"1.2em"}},[t._v("Contact")])])])])]),t._v("| ")],1)]),o("div",{staticClass:"fullpage"},[o("transition",{attrs:{name:"loader2"}},[t.preloader?o("div",{staticClass:"all"},[o("div",{staticClass:"preloader"},[o("transition",{attrs:{name:"loader"}},[t.load?o("h2",{staticClass:"text"},[t._v("PORTFOLIO THEOPHILE VAST")]):t._e()]),o("div",{ref:"load",staticClass:"load"},[o("div",{ref:"inload",staticClass:"inload"})])],1)]):t._e()]),o("transition",{attrs:{name:"loader"}},[t.mainPage?o("div",{staticClass:"all2"}):t._e()])],1),o("router-view"),o("div",{staticClass:"particles-js"},[o("vue-particles",{attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)],1)},s=[],n={name:"Home",components:{},data:function(){return{preloader:!0,load:!0,mainPage:!1,widthLoad:50,showMenu:!1,menuIcon:!1}},methods:{closeLoad:function(){this.preloader=!1},open:function(){event.target.classList.toggle("open"),this.showMenu=!this.showMenu},animatedPreload:function(){var t=this,e=setInterval((function(){function o(t,e){return Math.floor(Math.random()*(e-t))+t}t.widthLoad>=100&&(setTimeout((function(){t.$refs.load.style.opacity=0}),300),setTimeout((function(){t.load=!1}),600),setTimeout((function(){t.preloader=!1}),1600),setTimeout((function(){t.mainPage=!0}),2600),setTimeout((function(){t.menuIcon=!0}),3600),clearInterval(e)),t.widthLoad+=o(1,20),t.$refs.inload.style.width=t.widthLoad+"%"}),500)}},mounted:function(){this.animatedPreload()}},i=n,c=(o("5c0b"),o("2877")),l=Object(c["a"])(i,r,s,!1,null,null,null),u=l.exports,d=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("div",{staticClass:"container"},[o("card",{attrs:{"data-image":"https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"}},[o("h1",{attrs:{slot:"header"},slot:"header"},[t._v("Fullstack specialist, talk from robot to human")]),o("p",{attrs:{slot:"content"},slot:"content"},[t._v(" Discover my project on this website. I work with Node, Vue js, Elastic search, Mongo db Vanilla Javascript and many other cool stuff ")])]),o("card",{attrs:{"data-image":"https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"}},[o("h1",{attrs:{slot:"header"},slot:"header"},[t._v("The best user interface is made for human")]),o("p",{attrs:{slot:"content"},slot:"content"},[t._v("I'm a huge fan of Google material design guideline. And I apply those principles on every project")])]),o("card",{attrs:{"data-image":"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"}},[o("h1",{attrs:{slot:"header"},slot:"header"},[t._v("I build website that blow your (human)mind")]),o("p",{attrs:{slot:"content"},slot:"content"},[t._v("Just take a look at my portfolio")])])],1)])},p=[],h=o("ff86"),m={name:"Home",components:{card:h["a"]},data:function(){return{preloader:!0,load:!0,mainPage:!1,widthLoad:50,showMenu:!1,menuIcon:!1}},methods:{}},v=m,g=(o("21bb"),Object(c["a"])(v,f,p,!1,null,null,null)),b=g.exports;a["default"].use(d["a"]);var y=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/dashboard",name:"Dashboard",component:function(){return o.e("about").then(o.bind(null,"4601"))}},{path:"/contact",name:"Contact",component:function(){return o.e("about").then(o.bind(null,"4fe8"))}}],w=new d["a"]({routes:y}),_=w,C=o("2f62");a["default"].use(C["a"]);var x=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=o("98c9"),P=o("8645"),O=o.n(P);o("1838");a["default"].use(M["a"]),a["default"].use(O.a),a["default"].config.productionTip=!1,new a["default"]({router:_,store:x,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var a=o("9c0c"),r=o.n(a);r.a},"9c0c":function(t,e,o){},abb1:function(t,e,o){},ff86:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"card",staticClass:"card-wrap",on:{mousemove:t.handleMouseMove,mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave}},[o("div",{staticClass:"card",style:t.cardStyle},[o("div",{staticClass:"card-bg",style:[t.cardBgTransform,t.cardBgImage]}),o("div",{staticClass:"card-info"},[t._t("header"),t._t("content")],2)])])},r=[],s={name:"Home",components:{},mounted:function(){this.width=this.$refs.card.offsetWidth,this.height=this.$refs.card.offsetHeight},props:["dataImage"],data:function(){return{width:0,height:0,mouseX:0,mouseY:0,mouseLeaveDelay:null}},computed:{mousePX:function(){return this.mouseX/this.width},mousePY:function(){return this.mouseY/this.height},cardStyle:function(){var t=10*this.mousePX,e=-10*this.mousePY;return{transform:"rotateY(".concat(t,"deg) rotateX(").concat(e,"deg)")}},cardBgTransform:function(){var t=-10*this.mousePX,e=-10*this.mousePY;return{transform:"translateX(".concat(t,"px) translateY(").concat(e,"px)")}},cardBgImage:function(){return{backgroundImage:"url(".concat(this.dataImage,")")}}},methods:{handleMouseMove:function(t){this.mouseX=t.pageX-this.$refs.card.offsetLeft-this.width/2,this.mouseY=t.pageY-this.$refs.card.offsetTop-this.height/2},handleMouseEnter:function(){clearTimeout(this.mouseLeaveDelay)},handleMouseLeave:function(){var t=this;this.mouseLeaveDelay=setTimeout((function(){t.mouseX=0,t.mouseY=0}),1e3)}}},n=s,i=(o("29cd"),o("2877")),c=Object(i["a"])(n,a,r,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.dda6ba62.js.map