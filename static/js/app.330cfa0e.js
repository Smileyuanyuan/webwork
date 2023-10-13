(function(){"use strict";var t={8601:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"waterfull"},[e("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"v-waterfall-content",attrs:{id:"v-waterfall"}},t._l(t.imgArr,(function(n,i){return e("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:i,staticClass:"v-waterfall-item wow bounceIn",style:{top:n.top+"px",left:n.left+"px",width:t.waterfallImgWidth+"px",height:n.height}},[e("div",{staticClass:"img",staticStyle:{margin:"0","border-end-start-radius":"0","border-end-end-radius":"0"}},[e("img",{attrs:{src:n.src}})]),e("p",{staticStyle:{"font-size":"small",color:"#666",margin:"4px","text-align":"left"}},[t._v(" "+t._s(n.title)+" ")]),e("p",{staticStyle:{"font-size":"x-small",color:"#9e9e9e",margin:"4px","padding-bottom":"6px","text-align":"left"}},[t._v(" "+t._s(n.info)+" ")])])})),0)])},o=[],a=(n(7658),{name:"v-waterfall",data(){return{waterfallList:[],imgArr:[{title:"宜宾",src:n(182),info:"万里长江第一城"},{title:"宜宾",src:n(5087),info:"万里长江第一城"},{title:"宜宾",src:n(6797),info:"万里长江第一城"},{title:"宜宾",src:n(3187),info:"万里长江第一城"},{title:"宜宾",src:n(2321),info:"万里长江第一城"},{title:"宜宾",src:n(8991),info:"万里长江第一城"},{title:"宜宾",src:n(2985),info:"万里长江第一城"},{title:"宜宾",src:n(8582),info:"万里长江第一城"},{title:"宜宾",src:n(5215),info:"万里长江第一城"},{title:"宜宾",src:n(5386),info:"万里长江第一城"},{title:"宜宾",src:n(7865),info:"万里长江第一城"},{title:"宜宾",src:n(9665),info:"万里长江第一城"},{title:"宜宾",src:n(8582),info:"万里长江第一城"},{title:"宜宾",src:n(5215),info:"万里长江第一城"},{title:"宜宾",src:n(5386),info:"万里长江第一城"},{title:"宜宾",src:n(7865),info:"万里长江第一城"},{title:"宜宾",src:n(9665),info:"万里长江第一城"}],waterfallImgWidth:260,waterfallImgCol:3,waterfallImgRight:10,waterfallImgBottom:10,waterfallDeviationHeight:[],imgList:[]}},created(){},mounted(){(new this.$wow.WOW).init()},methods:{calculationWidth(){let t=document.getElementById("v-waterfall").offsetWidth;!this.waterfallImgWidth&&this.waterfallImgCol?this.waterfallImgWidth=(t-this.waterfallImgRight*this.waterfallImgCol)/this.waterfallImgCol:this.waterfallImgWidth&&!this.waterfallImgCol&&(this.waterfallImgCol=Math.floor(t/(this.waterfallImgWidth+this.waterfallImgRight))),this.waterfallDeviationHeight=new Array(this.waterfallImgCol);for(let e=0;e<this.waterfallDeviationHeight.length;e++)this.waterfallDeviationHeight[e]=0;this.imgPreloading()},imgPreloading(){for(let t=0;t<this.imgList.length;t++){let e=new Image;e.src=this.imgList[t],e.onload=e.onerror=n=>{let i={};i.height=this.waterfallImgWidth/e.width*e.height,i.src=this.imgList[t].src,i.title=this.imgList[t].title,i.info=this.imgList[t].info,this.waterfallList.push(i),this.rankImg(i)}}},rankImg(t){let{waterfallImgWidth:e,waterfallImgRight:n,waterfallImgBottom:i,waterfallDeviationHeight:o,waterfallImgCol:a}=this,r=this.filterMin();t.top=o[r],t.left=r*(n+e),o[r]+=t.height+i+56},filterMin(){const t=Math.min.apply(null,this.waterfallDeviationHeight);return this.waterfallDeviationHeight.indexOf(t)}}}),r=a,s=n(1001),l=(0,s.Z)(r,i,o,!1,null,"0a0db801",null),c=l.exports},953:function(t,e,n){var i=n(2083),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.$route.meta.ShowNav?t._e():e("Header",{staticClass:"header"}),e("keep-alive",[e("router-view")],1),t.$route.meta.ShowNav?t._e():e("Footer")],1)},a=[],r=(n(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("video",{attrs:{src:n(2051),autoplay:"autoplay",loop:"loop",muted:""},domProps:{muted:!0}}),e("div",{staticClass:"text"},[e("div",{staticClass:"t1"},[t._v("WELCOME TO")]),e("div",{staticClass:"t2"},[t._v("Yuanyuan's Blog")]),e("div",{staticStyle:{"text-align":"left"}},[t._v("Hi, this is my personal blog to show my thoughts or")]),e("div",{staticStyle:{"text-align":"left"}},[t._v("record my own blog diary.")]),e("el-button",{on:{click:function(e){return t.toAbout()}}},[t._v("TO NOW!")])],1)])}),s=[],l={name:"HomeView",components:{},data(){return{paly:"autopaly"}},methods:{toAbout(){this.$router.push({path:"/life/personal"}),console.log("/life")}}},c=l,u=n(1001),d=(0,u.Z)(c,r,s,!1,null,"0d2f5f4a",null),f=d.exports,h=function(){var t=this,e=t._self._c;return e("transition",{attrs:{"leave-active-class":"animate__animated animate__fadeOutUp","enter-active-class":"animate__animated animate__fadeInDown"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showHeader,expression:"showHeader"}],staticClass:"header"},[e("div",{staticClass:"left"},[e("span",{staticClass:"icon iconfont icon-backHome",on:{click:function(e){return t.toHome()}}},[t._v(" Lyy 的梦幻屋")])]),e("div",{staticClass:"right"},[e("span",{staticClass:"el-icon-search",on:{click:function(e){t.dialogVisible=!0}}},[t._v(" 搜索")]),e("span",{staticClass:"icon iconfont icon-backHome",on:{click:function(e){return t.toHome1()}}},[t._v(" 首页")]),e("span",{staticClass:"el-icon-user-solid",on:{click:function(e){return t.toPerson()}}},[t._v(" 个人")]),e("span",{staticClass:"el-icon-notebook-2",on:{click:function(e){return t.toPassage()}}},[t._v(" 文章")]),e("span",{staticClass:"icon iconfont icon-willing",on:{click:function(e){return t.toSticker()}}},[t._v(" 随心贴")]),e("span",{staticClass:"icon iconfont icon-l079aiqing",on:{click:function(e){return t.toAboutme()}}},[t._v(" 关于")])])])])},m=[],p={data(){return{dialogVisible:!1,showHeader:!0,lastScrollPosition:0,scrollTimeout:null}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),clearTimeout(this.scrollTimeout)},methods:{handleScroll(){clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout((()=>{const t=window.pageYOffset||document.documentElement.scrollTop;t>this.lastScrollPosition?this.showHeader=!1:this.showHeader=!0,this.lastScrollPosition=t}),50)},toHome(){this.$router.push({path:"/"})},toHome1(){this.$router.push({path:"/life/personal"})},toSticker(){this.$router.push({name:"sticker"})},toPerson(){this.$router.push({name:"personal"})},toPassage(){this.$router.push({name:"passage"})},toAboutme(){this.$router.push({name:"aboutme"})}}},g=p,v=(0,u.Z)(g,h,m,!1,null,"a3a1cdf2",null),w=v.exports,y=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[t._v(" Footer ")])},b=[],x={data(){return{}},methods:{}},C=x,_=(0,u.Z)(C,y,b,!1,null,"4601d014",null),k=_.exports,S=n(8601),I={name:"app",components:{HomeView:f,Header:w,Footer:k,pubuliu:S["default"]},methods:{show(){function t(){let t,e,n,i,o,a,r=[],s=!1,l=0;const c=["#f598aa","#fee4ea","#FFEBF0"],u=document.createElement("canvas");document.body.appendChild(u),u.setAttribute("style","width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");const d=document.createElement("span");function f(){u.width=2*window.innerWidth,u.height=2*window.innerHeight,u.style.width=window.innerWidth+"px",u.style.height=window.innerHeight+"px",a.scale(2,2),e=u.width=window.innerWidth,n=u.height=window.innerHeight,i={x:e/2,y:n/2},o={x:e/2,y:n/2}}d.classList.add("pointer"),document.body.appendChild(d),u.getContext&&window.addEventListener?(a=u.getContext("2d"),f(),window.addEventListener("resize",f,!1),g(),window.addEventListener("mousedown",(function(e){m(p(10,20),e.clientX,e.clientY),document.body.classList.add("is-pressed"),t=setTimeout((function(){document.body.classList.add("is-longpress"),s=!0}),500)}),!1),window.addEventListener("mouseup",(function(e){clearInterval(t),1==s&&(document.body.classList.remove("is-longpress"),m(p(50+Math.ceil(l),100+Math.ceil(l)),e.clientX,e.clientY),s=!1),document.body.classList.remove("is-pressed")}),!1),window.addEventListener("mousemove",(function(t){let e=t.clientX,n=t.clientY;d.style.top=n+"px",d.style.left=e+"px"}),!1)):console.log("canvas or addEventListener is unsupported!");class h{constructor(t=i.x,e=i.y){this.x=t,this.y=e,this.angle=2*Math.PI*Math.random(),this.multiplier=1==s?p(14+l,15+l):p(6,12),this.vx=(this.multiplier+.5*Math.random())*Math.cos(this.angle),this.vy=(this.multiplier+.5*Math.random())*Math.sin(this.angle),this.r=p(8,12)+3*Math.random(),this.color=c[Math.floor(Math.random()*c.length)]}update(){this.x+=this.vx-o.x,this.y+=this.vy-o.y,o.x=-2/window.innerWidth*Math.sin(this.angle),o.y=-2/window.innerHeight*Math.cos(this.angle),this.r-=.3,this.vx*=.9,this.vy*=.9}}function m(t=1,e=i.x,n=i.y){for(let i=0;i<t;i++)r.push(new h(e,n))}function p(t,e){return Math.floor(Math.random()*e)+t}function g(){a.fillStyle="rgba(255, 255, 255, 0)",a.clearRect(0,0,u.width,u.height);for(let t=0;t<r.length;t++){let e=r[t];e.r<0||(a.fillStyle=e.color,a.beginPath(),a.arc(e.x,e.y,e.r,0,2*Math.PI,!1),a.fill(),e.update())}1==s?l+=.2:!s&&l>=0&&(l-=.4),v(),requestAnimationFrame(g)}function v(){for(let t=0;t<r.length;t++){let i=r[t];(i.x+i.r<0||i.x-i.r>e||i.y+i.r<0||i.y-i.r>n||i.r<0)&&r.splice(t,1)}}}t()}},mounted(){this.show()}},P=I,L=(0,u.Z)(P,o,a,!1,null,"7d7c3deb",null),H=L.exports,E=n(3625);i["default"].use(E.ZP);const M=E.ZP.prototype.push;E.ZP.prototype.push=function(t){return M.call(this,t).catch((t=>t))};const O=[{path:"/",name:"home",component:f,meta:{ShowNav:!0}},{path:"/life",name:"life",component:()=>n.e(443).then(n.bind(n,6356)),children:[{path:"/life/personal",name:"personal",component:()=>n.e(908).then(n.bind(n,9908)),meta:{ShowPernav:!0}},{path:"/life/pubuliu",name:"pubuliu",component:()=>Promise.resolve().then(n.bind(n,8601)),meta:{ShowPernav:!0}},{path:"/life/hoby",name:"hoby",component:()=>n.e(258).then(n.bind(n,6258)),meta:{ShowPernav:!0}},{path:"/life/music",name:"music",component:()=>n.e(18).then(n.bind(n,1018))},{path:"/life/sticker",name:"sticker",component:()=>n.e(665).then(n.bind(n,1443))},{path:"/life/passage",name:"passage",component:()=>n.e(48).then(n.bind(n,48)),meta:{ShowPernav:!1,ShowPasnav:!0}},{path:"/life/aboutme",name:"aboutme",component:()=>n.e(482).then(n.bind(n,2482))}]}],j=new E.ZP({mode:"hash",base:"",routes:O,scrollBehavior(t,e,n){return t.hash?{selector:t.hash}:{x:0,y:0}}});var T=j,A=n(5173);i["default"].use(A.ZP);var W=new A.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),N=n(1960),Z=n.n(N),$=n(4782),D=n.n($),F=n(6056),Y=n.n(F),B=(n(2488),n(6999));i["default"].use(B.Z),i["default"].config.productionTip=!1,i["default"].use(Z()),i["default"].use(D()),i["default"].prototype.$wow=Y(),new i["default"]({router:T,store:W,render:t=>t(H)}).$mount("#app")},182:function(t,e,n){t.exports=n.p+"static/img/1.a9c27993.jpg"},5087:function(t,e,n){t.exports=n.p+"static/img/2.586e0cfe.jpg"},6797:function(t,e,n){t.exports=n.p+"static/img/3.ec53f744.jpg"},3187:function(t,e,n){t.exports=n.p+"static/img/4.8d0d2045.jpg"},2321:function(t,e,n){t.exports=n.p+"static/img/5.72909c91.jpg"},8991:function(t,e,n){t.exports=n.p+"static/img/6.ec4ac824.jpg"},5215:function(t,e,n){t.exports=n.p+"static/img/a.8397c3d7.png"},5386:function(t,e,n){t.exports=n.p+"static/img/b.9a2103fb.jpg"},7865:function(t,e,n){t.exports=n.p+"static/img/d.50b7fc7b.jpg"},2985:function(t,e,n){t.exports=n.p+"static/img/g1.7ce74364.jpg"},8582:function(t,e,n){t.exports=n.p+"static/img/g2.ed52cc54.jpg"},2051:function(t,e,n){t.exports=n.p+"static/media/v2.e017463a.mp4"},9665:function(t,e,n){t.exports=n.p+"static/img/yinhua.6c79e467.jpg"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,i,o,a){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],a=t[u][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(s=!1,a<r&&(r=a));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"static/js/"+(443===t?"about":t)+"."+{18:"67d6c46c",48:"66cd8153",258:"331529df",443:"1e3212ee",482:"dc011f97",665:"958565df",908:"d76174fa"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"static/css/"+(443===t?"about":t)+"."+{48:"5c246421",443:"3076644d",665:"96a80f12",908:"52f393ca"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="LYY:";n.l=function(i,o,a,r){if(t[i])t[i].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=i),t[i]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(h);var o=t[i];if(delete t[i],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,i,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(n){if(a.onerror=a.onload=null,"load"===n.type)i();else{var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,a.parentNode&&a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=r,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=n[i],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){o=r[i],a=o.getAttribute("data-href");if(a===t||a===e)return o}},i=function(i){return new Promise((function(o,a){var r=n.miniCssF(i),s=n.p+r;if(e(r,s))return o();t(i,s,null,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={48:1,443:1,665:1,908:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=i(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,i){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(n,i){o=t[e]=[n,i]}));i.push(o[2]=a);var r=n.p+n.u(e),s=new Error,l=function(i){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,o[1](s)}};n.l(r,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,a,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(e&&e(i);c<r.length;c++)a=r[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},i=self["webpackChunkLYY"]=self["webpackChunkLYY"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(953)}));i=n.O(i)})();