(function(t){function e(e){for(var a,o,l=e[0],n=e[1],c=e[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},r={app:0},i=[];function l(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"922a7934"}[t]+".js"}function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(t){var e=[],s={about:1};o[t]?e.push(o[t]):0!==o[t]&&s[t]&&e.push(o[t]=new Promise((function(e,s){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"635ffc5d"}[t]+".css",r=n.p+a,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===r))return e()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){c=f[l],d=c.getAttribute("data-href");if(d===a||d===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],p.parentNode.removeChild(p),s(i)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.src=l(t);var f=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(p);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,s[1](f)}r[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var p=d;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"21bb":function(t,e,s){"use strict";var a=s("2dad"),o=s.n(a);o.a},"29cd":function(t,e,s){"use strict";var a=s("abb1"),o=s.n(a);o.a},"2dad":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{directives:[{name:"responsive",rawName:"v-responsive.lg.xl",modifiers:{lg:!0,xl:!0}}]},[s("div",{staticClass:"fullpage"},[s("transition",{attrs:{name:"loader2"}},[t.preloader?s("div",{staticClass:"all"},[s("div",{staticClass:"preloader"},[s("transition",{attrs:{name:"loader"}},[t.load?s("h2",{staticClass:"text"},[t._v("PORTFOLIO THEOPHILE VAST")]):t._e()]),s("div",{ref:"load",staticClass:"load"},[s("div",{ref:"inload",staticClass:"inload"})])],1)]):t._e()]),s("transition",{attrs:{name:"loader"}},[t.mainPage?s("div",{},[s("transition",{key:"username-input",attrs:{name:"bounce"}},[s("md-app",{attrs:{"md-waterfall":"","md-mode":"overlap"}},[s("md-app-toolbar",{staticClass:"md-primary md-large"},[s("div",{staticClass:"particles-js"},[s("vue-particles",{attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1),s("div",{staticClass:"md-toolbar-row"},[s("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.menuVisible=!t.menuVisible}}},[s("md-icon",[t._v("menu")])],1),s("span",{staticClass:"md-title"},[t._v("PORTFOLIO Théophile VAST")])],1)]),s("md-app-drawer",{attrs:{"md-active":t.menuVisible},on:{"update:mdActive":function(e){t.menuVisible=e},"update:md-active":function(e){t.menuVisible=e}}},[s("md-toolbar",{staticClass:"md-transparent foo2",attrs:{"md-elevation":"0"}},[t._v("Toolbox")]),s("md-list",[s("md-list-item",[s("router-link",{attrs:{to:"/"}},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("Home")])])])])],1),s("md-list-item",[s("router-link",{attrs:{to:"/about"}},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("About")])])])])],1),s("md-list-item",[s("router-link",{attrs:{to:"/dashboard"}},[s("div",{staticClass:"headingWrapper"},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("Portfolio")])])])])])],1),s("md-list-item",[s("router-link",{attrs:{to:"/contact"}},[s("div",{staticClass:"headingWrapper"},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("Contact")])])])])])],1)],1)],1),s("md-app-content",[s("router-view")],1)],1)],1)],1):t._e()])],1)]),s("div",{directives:[{name:"responsive",rawName:"v-responsive.md",modifiers:{md:!0}}]},[s("md-app",{attrs:{"md-waterfall":"","md-mode":"overlap"}},[s("md-app-toolbar",{staticClass:"md-primary md-large"},[s("div",{staticClass:"particles-js"},[s("vue-particles",{attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1),s("div",{staticClass:"md-toolbar-row"},[s("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.menuVisible=!t.menuVisible}}},[s("md-icon",[t._v("menu")])],1),s("span",{staticClass:"md-title"},[t._v("PORTFOLIO Théophile VAST")])],1)]),s("md-app-drawer",{attrs:{"md-active":t.menuVisible},on:{"update:mdActive":function(e){t.menuVisible=e},"update:md-active":function(e){t.menuVisible=e}}},[s("md-toolbar",{staticClass:"md-transparent foo2",attrs:{"md-elevation":"0"}},[t._v("Toolbox")]),s("md-list",[s("md-list-item",[s("router-link",{attrs:{to:"/"}},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("Home")])])])])],1),s("md-list-item",[s("router-link",{attrs:{to:"/about"}},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("About")])])])])],1),s("md-list-item",[s("router-link",{attrs:{to:"/dashboard"}},[s("div",{staticClass:"headingWrapper"},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("Portfolio")])])])])])],1),s("md-list-item",[s("router-link",{attrs:{to:"/contact"}},[s("div",{staticClass:"headingWrapper"},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("Contact")])])])])])],1)],1)],1),s("md-app-content",[s("router-view")],1)],1)],1),s("div",{directives:[{name:"responsive",rawName:"v-responsive.sm.xs",modifiers:{sm:!0,xs:!0}}]},[s("md-app",{attrs:{"md-waterfall":"","md-mode":"overlap"}},[s("md-app-toolbar",{staticClass:"md-primary md-large"},[s("div",{staticClass:"particles-js"},[s("vue-particles",{attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1),s("div",{staticClass:"md-toolbar-row"},[s("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.menuVisible=!t.menuVisible}}},[s("md-icon",[t._v("menu")])],1),s("span",{staticClass:"md-title"},[t._v("PORTFOLIO Théophile VAST")])],1)]),s("md-app-drawer",{attrs:{"md-active":t.menuVisible},on:{"update:mdActive":function(e){t.menuVisible=e},"update:md-active":function(e){t.menuVisible=e}}},[s("md-toolbar",{staticClass:"md-transparent foo2",attrs:{"md-elevation":"0"}},[t._v("Toolbox")]),s("md-list",[s("md-list-item",[s("router-link",{attrs:{to:"/"}},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("Home")])])])])],1),s("md-list-item",[s("router-link",{attrs:{to:"/about"}},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("About")])])])])],1),s("md-list-item",[s("router-link",{attrs:{to:"/dashboard"}},[s("div",{staticClass:"headingWrapper"},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("Portfolio")])])])])])],1),s("md-list-item",[s("router-link",{attrs:{to:"/contact"}},[s("div",{staticClass:"headingWrapper"},[s("a",{staticClass:"header header--raiseUp header--svg",attrs:{href:"#"}},[s("svg",[s("defs",[s("linearGradient",{attrs:{id:"striped",x1:"0",x2:"0",y1:"0%",y2:"4%",spreadMethod:"repeat"}},[s("stop",{attrs:{offset:"0%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"50%","stop-color":"#e62915"}}),s("stop",{attrs:{offset:"51%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"99%","stop-color":"#fff"}}),s("stop",{attrs:{offset:"100%","stop-color":"#e62915"}})],1)],1),s("text",{attrs:{y:"1.2em"}},[t._v("Contact")])])])])])],1)],1)],1),s("md-app-content",[s("section",{staticClass:"page-section bg-primary",attrs:{id:"about"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8 text-center"},[s("h2",{staticClass:"text-white mt-0"},[t._v("We've got what you need!")]),s("hr",{staticClass:"divider light my-4"}),s("p",{staticClass:"text-white-50 mb-4"},[t._v("Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!")]),s("a",{staticClass:"btn btn-light btn-xl js-scroll-trigger",attrs:{href:"#services"}},[t._v("Get Started!")])])])])]),s("section",{staticClass:"page-section",attrs:{id:"services"}},[s("div",{staticClass:"container"},[s("h2",{staticClass:"text-center mt-0"},[t._v("At Your Service")]),s("hr",{staticClass:"divider my-4"}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-md-6 text-center"},[s("div",{staticClass:"mt-5"},[s("i",{staticClass:"fas fa-4x fa-gem text-primary mb-4"}),s("h3",{staticClass:"h4 mb-2"},[t._v("Sturdy Themes")]),s("p",{staticClass:"text-muted mb-0"},[t._v("Our themes are updated regularly to keep them bug free!")])])]),s("div",{staticClass:"col-lg-3 col-md-6 text-center"},[s("div",{staticClass:"mt-5"},[s("i",{staticClass:"fas fa-4x fa-laptop-code text-primary mb-4"}),s("h3",{staticClass:"h4 mb-2"},[t._v("Up to Date")]),s("p",{staticClass:"text-muted mb-0"},[t._v("All dependencies are kept current to keep things fresh.")])])]),s("div",{staticClass:"col-lg-3 col-md-6 text-center"},[s("div",{staticClass:"mt-5"},[s("i",{staticClass:"fas fa-4x fa-globe text-primary mb-4"}),s("h3",{staticClass:"h4 mb-2"},[t._v("Ready to Publish")]),s("p",{staticClass:"text-muted mb-0"},[t._v("You can use this design as is, or you can make changes!")])])]),s("div",{staticClass:"col-lg-3 col-md-6 text-center"},[s("div",{staticClass:"mt-5"},[s("i",{staticClass:"fas fa-4x fa-heart text-primary mb-4"}),s("h3",{staticClass:"h4 mb-2"},[t._v("Made with Love")]),s("p",{staticClass:"text-muted mb-0"},[t._v("Is it really open source if it's not made with love?")])])])])])]),s("div",{attrs:{id:"portfolio"}},[s("div",{staticClass:"container-fluid p-0"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-lg-4 col-sm-6"},[s("a",{staticClass:"portfolio-box",attrs:{href:"assets/img/portfolio/fullsize/1.jpg"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/img/portfolio/thumbnails/1.jpg",alt:""}}),s("div",{staticClass:"portfolio-box-caption"},[s("div",{staticClass:"project-category text-white-50"},[t._v("Category")]),s("div",{staticClass:"project-name"},[t._v("Project Name")])])])]),s("div",{staticClass:"col-lg-4 col-sm-6"},[s("a",{staticClass:"portfolio-box",attrs:{href:"assets/img/portfolio/fullsize/2.jpg"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/img/portfolio/thumbnails/2.jpg",alt:""}}),s("div",{staticClass:"portfolio-box-caption"},[s("div",{staticClass:"project-category text-white-50"},[t._v("Category")]),s("div",{staticClass:"project-name"},[t._v("Project Name")])])])]),s("div",{staticClass:"col-lg-4 col-sm-6"},[s("a",{staticClass:"portfolio-box",attrs:{href:"assets/img/portfolio/fullsize/3.jpg"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/img/portfolio/thumbnails/3.jpg",alt:""}}),s("div",{staticClass:"portfolio-box-caption"},[s("div",{staticClass:"project-category text-white-50"},[t._v("Category")]),s("div",{staticClass:"project-name"},[t._v("Project Name")])])])]),s("div",{staticClass:"col-lg-4 col-sm-6"},[s("a",{staticClass:"portfolio-box",attrs:{href:"assets/img/portfolio/fullsize/4.jpg"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/img/portfolio/thumbnails/4.jpg",alt:""}}),s("div",{staticClass:"portfolio-box-caption"},[s("div",{staticClass:"project-category text-white-50"},[t._v("Category")]),s("div",{staticClass:"project-name"},[t._v("Project Name")])])])]),s("div",{staticClass:"col-lg-4 col-sm-6"},[s("a",{staticClass:"portfolio-box",attrs:{href:"assets/img/portfolio/fullsize/5.jpg"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/img/portfolio/thumbnails/5.jpg",alt:""}}),s("div",{staticClass:"portfolio-box-caption"},[s("div",{staticClass:"project-category text-white-50"},[t._v("Category")]),s("div",{staticClass:"project-name"},[t._v("Project Name")])])])]),s("div",{staticClass:"col-lg-4 col-sm-6"},[s("a",{staticClass:"portfolio-box",attrs:{href:"assets/img/portfolio/fullsize/6.jpg"}},[s("img",{staticClass:"img-fluid",attrs:{src:"assets/img/portfolio/thumbnails/6.jpg",alt:""}}),s("div",{staticClass:"portfolio-box-caption p-3"},[s("div",{staticClass:"project-category text-white-50"},[t._v("Category")]),s("div",{staticClass:"project-name"},[t._v("Project Name")])])])])])])]),s("section",{staticClass:"page-section bg-dark text-white"},[s("div",{staticClass:"container text-center"},[s("h2",{staticClass:"mb-4"},[t._v("Free Download at Start Bootstrap!")]),s("a",{staticClass:"btn btn-light btn-xl",attrs:{href:"https://startbootstrap.com/themes/creative/"}},[t._v("Download Now!")])])]),s("section",{staticClass:"page-section",attrs:{id:"contact"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8 text-center"},[s("h2",{staticClass:"mt-0"},[t._v("Let's Get In Touch!")]),s("hr",{staticClass:"divider my-4"}),s("p",{staticClass:"text-muted mb-5"},[t._v("Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 ml-auto text-center mb-5 mb-lg-0"},[s("i",{staticClass:"fas fa-phone fa-3x mb-3 text-muted"}),s("div",[t._v("+1 (555) 123-4567")])]),s("div",{staticClass:"col-lg-4 mr-auto text-center"},[s("i",{staticClass:"fas fa-envelope fa-3x mb-3 text-muted"}),s("a",{staticClass:"d-block",attrs:{href:"mailto:contact@yourwebsite.com"}},[t._v("contact@yourwebsite.com")])])])])])])],1)],1)])},r=[],i=s("3a81");a["default"].directive("responsive",i["a"]);var l={name:"Home",components:{},data:function(){return{preloader:!0,load:!0,mainPage:!1,widthLoad:50,showMenu:!1,menuIcon:!1,nav:!1,menuVisible:!1}},methods:{openNav:function(){return this.nav=!0},closeNav:function(){return this.nav=!1},closeLoad:function(){this.preloader=!1},open:function(){event.target.classList.toggle("open"),this.showMenu=!this.showMenu},animatedPreload:function(){var t=this,e=setInterval((function(){function s(t,e){return Math.floor(Math.random()*(e-t))+t}t.widthLoad>=100&&(setTimeout((function(){t.$refs.load.style.opacity=0}),300),setTimeout((function(){t.load=!1}),600),setTimeout((function(){t.preloader=!1}),1600),setTimeout((function(){t.mainPage=!0}),2600),setTimeout((function(){t.menuIcon=!0}),3600),clearInterval(e)),t.widthLoad+=s(1,20),t.$refs.inload.style.width=t.widthLoad+"%"}),500)}},mounted:function(){this.animatedPreload()}},n=l,c=(s("5c0b"),s("2877")),d=Object(c["a"])(n,o,r,!1,null,null,null),f=d.exports,p=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md-layout"},[s("div",{staticClass:"md-layout-item"},[s("card",{attrs:{"data-image":"https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"}},[s("h1",{attrs:{slot:"header"},slot:"header"},[t._v("Fullstack specialist, talk from robot to human")]),s("p",{attrs:{slot:"content"},slot:"content"},[t._v(" Discover my project on this website. I work with Node, Vue js, Elastic search, Mongo db Vanilla Javascript and many other cool stuff ")])])],1),s("div",{staticClass:"md-layout-item"},[s("card",{attrs:{"data-image":"https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"}},[s("h1",{attrs:{slot:"header"},slot:"header"},[t._v("The best user interface is made for human")]),s("p",{attrs:{slot:"content"},slot:"content"},[t._v("I'm a huge fan of Google material design guideline. And I apply those principles on every project")])])],1),s("div",{staticClass:"md-layout-item"},[s("card",{attrs:{"data-image":"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"}},[s("h1",{attrs:{slot:"header"},slot:"header"},[t._v("I build website that blow your (human)mind")]),s("p",{attrs:{slot:"content"},slot:"content"},[t._v("Just take a look at my portfolio")])])],1)])},u=[],h=s("ff86"),v={name:"Home",components:{card:h["a"]},data:function(){return{preloader:!0,load:!0,mainPage:!1,widthLoad:50,showMenu:!1,menuIcon:!1}},methods:{}},g=v,b=(s("21bb"),Object(c["a"])(g,m,u,!1,null,null,null)),C=b.exports;a["default"].use(p["a"]);var y=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/dashboard",name:"Dashboard",component:function(){return s.e("about").then(s.bind(null,"4601"))}},{path:"/contact",name:"Contact",component:function(){return s.e("about").then(s.bind(null,"4fe8"))}}],x=new p["a"]({routes:y}),w=x,_=s("2f62");a["default"].use(_["a"]);var j=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=s("98c9"),M=s("43f9"),T=s.n(M),O=(s("51de"),s("8645")),P=s.n(O),L=(s("1838"),s("07db")),S=s.n(L);a["default"].use(k["a"]),a["default"].use(i["a"]),a["default"].use(T.a),a["default"].use(S.a),a["default"].use(P.a),a["default"].config.productionTip=!1,new a["default"]({router:w,store:j,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),o=s.n(a);o.a},"9c0c":function(t,e,s){},abb1:function(t,e,s){},ff86:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"card",staticClass:"card-wrap",on:{mousemove:t.handleMouseMove,mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave}},[s("div",{staticClass:"card",style:t.cardStyle},[s("div",{staticClass:"card-bg",style:[t.cardBgTransform,t.cardBgImage]}),s("div",{staticClass:"card-info"},[t._t("header"),t._t("content")],2)])])},o=[],r={name:"Home",components:{},mounted:function(){this.width=this.$refs.card.offsetWidth,this.height=this.$refs.card.offsetHeight},props:["dataImage"],data:function(){return{width:0,height:0,mouseX:0,mouseY:0,mouseLeaveDelay:null}},computed:{mousePX:function(){return this.mouseX/this.width},mousePY:function(){return this.mouseY/this.height},cardStyle:function(){var t=10*this.mousePX,e=-10*this.mousePY;return{transform:"rotateY(".concat(t,"deg) rotateX(").concat(e,"deg)")}},cardBgTransform:function(){var t=-10*this.mousePX,e=-10*this.mousePY;return{transform:"translateX(".concat(t,"px) translateY(").concat(e,"px)")}},cardBgImage:function(){return{backgroundImage:"url(".concat(this.dataImage,")")}}},methods:{handleMouseMove:function(t){this.mouseX=t.pageX-this.$refs.card.offsetLeft-this.width/2,this.mouseY=t.pageY-this.$refs.card.offsetTop-this.height/2},handleMouseEnter:function(){clearTimeout(this.mouseLeaveDelay)},handleMouseLeave:function(){var t=this;this.mouseLeaveDelay=setTimeout((function(){t.mouseX=0,t.mouseY=0}),1e3)}}},i=r,l=(s("29cd"),s("2877")),n=Object(l["a"])(i,a,o,!1,null,null,null);e["a"]=n.exports}});
//# sourceMappingURL=app.87b07ea7.js.map