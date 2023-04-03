(function(){var e={3648:function(e,t,n){"use strict";var o=n(9242),a=n(3396),r=n(7139);function i(e,t,n,o,i,s){const u=(0,a.up)("audio-player"),l=(0,a.up)("init-view"),d=(0,a.up)("v-img"),c=(0,a.up)("v-hover"),p=(0,a.up)("v-row"),m=(0,a.up)("v-spacer"),g=(0,a.up)("v-icon"),h=(0,a.up)("v-btn"),f=(0,a.up)("v-app-bar"),v=(0,a.up)("image-view"),w=(0,a.up)("ns-footer"),y=(0,a.up)("v-app");return(0,a.wg)(),(0,a.j4)(y,{ref:"App"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{ref:"AudioPlayer",onEnded:s.checkAudio},null,8,["onEnded"]),e.loading?((0,a.wg)(),(0,a.j4)(l,{key:0})):(0,a.kq)("",!0),e.loading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(f,{key:1,height:"50",color:"rgba(var(--v-theme-primary), 0.4)",elevation:"0"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"pl-5"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((({props:n})=>[(0,a.Wm)(d,(0,a.dG)({src:e.$vuetify.display.mdAndUp?e.logo:e.logoEagle,"max-width":e.$vuetify.display.mdAndUp?240:40,class:"ml-5 logo"},n,{onClick:t[0]||(t[0]=e=>s.initAnimation())}),null,16,["src","max-width"])])),_:1})])),_:1}),(0,a.Wm)(m),(0,a.Wm)(h,{icon:"",onClick:t[1]||(t[1]=t=>e.showQuote=!e.showQuote)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{color:"secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.showQuote?"mdi-message-bulleted":"mdi-message-bulleted-off"),1)])),_:1})])),_:1}),(0,a.Wm)(h,{icon:"",onClick:t[2]||(t[2]=t=>e.playAudio=!e.playAudio)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{color:"secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.playAudio?"mdi-music":"mdi-music-off"),1)])),_:1})])),_:1}),(0,a.Wm)(h,{icon:"",onClick:t[3]||(t[3]=e=>s.handleFullscreen())},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{color:"secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.fullScreen?"mdi-fullscreen-exit":"mdi-fullscreen"),1)])),_:1})])),_:1})])),_:1})),e.loading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(v,{key:2,"show-quote":e.showQuote,onSwitchFullscreen:s.switchFullscreen},null,8,["show-quote","onSwitchFullscreen"])),e.loading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(w,{key:3}))])),_:1},512)}var s=n.p+"img/logo-eagle.f36d4790.png",u=n.p+"img/logo-transparent.e950b104.png";const{VUE_APP_BASE_PATH:l="",VUE_APP_TITLE:d=""}={NODE_ENV:"production",VUE_APP_TITLE:"NavasSkape",VUE_APP_BASE_PATH:"navasskape",BASE_URL:"/navasskape/"},c=d,p=[{q:"<< Salta y aparecerá la red >>",author:"Julia Cameron"},{q:"<< Si quieres una cualidad, actúa como si ya la tuvieras >>",author:"Williams James"},{q:"<< No podemos cambiar nada hasta que lo aceptemos. La condena no libera, oprime >>",author:"Carl Jung"},{q:"<< Las únicas personas normales son las que no conoces muy bien >>",author:"Alfred Adler"},{q:"<< Se trata de cómo conduces, no de hacia dónde vas >>",author:"Noam Shpancer"},{q:"<< Ninguna relación importante sobrevive si la confianza se pierde por completo >>",author:"Paul Ekman"},{q:"<< La inteligencia es lo que usas cuando no sabes qué hacer >>",author:"Jean Piaget"},{q:"<< Las personas sólo cambiamos de verdad cuando nos damos cuenta de las consecuencias de no hacerlo >>",author:"Mario Alonso Puig"},{q:"<< Aquellos que no creen en la magia jamás la encontrarán >>",author:"Roald Dahl"},{q:"<< Un optimista ve en cada peligro una oportunidad >>",author:"Winston Churchill"},{q:"<< La vida no consiste en encontrarte, sino en crearte >>",author:"Anónimo"},{q:"<< Para que alguien te tome en serio, primero te tienes que tomar en serio tú >>",author:"Mario Alonso Puig"},{q:"<< Consulta no a tus miedos, sino a tus sueños >>",author:"Juan XXIII"},{q:"<< No se ve bien sino con el corazón. Lo esencial es invisible a los ojos >>",author:"El principito, Antoine de Saint-Exupéry"},{q:"<< La felicidad no es algo hecho. Viene de tus propias acciones >>",author:"Dalai Lama"},{q:"<< Si quieres vivir una vida feliz, átala a una meta, no a una persona o un objeto >>",author:"Albert Einstein"},{q:"<< La felicidad no depende de lo que tienes o de quién eres. Depende únicamente de lo que piensas >>",author:"Dale Carnegie"},{q:"<< La gratitud es el mejor antídoto contra la tristeza y la frustración. Practícala todos los días >>",author:"Martin Seligman"},{q:"<< El bienestar no es algo que se adquiere, sino algo que se cultiva a través de pequeñas acciones diarias >>",author:"Tal Ben-Shahar"},{q:"<< No puedes cambiar el viento, pero puedes ajustar las velas de tu barco >>",author:"Proverbio chino"},{q:"<< La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello >>",author:"Charles R. Swindoll"},{q:"<< El optimismo es la fe que conduce al logro >>",author:"Helen Keller"},{q:"<< La mayor parte de nuestras inseguridades y de nuestras desesperanzas no son reales, son aprendidas >>",author:"Mario Alonso Puig"},{q:"<< Una mente no puede entenderse sin la cultura >>",author:"Lev Vygotsky"},{q:"<< Eres aquello que haces, no aquello que dices que harás >>",author:"Carl Jung"},{q:"<< Viajar es una buena forma de aprender y de superar miedos >>",author:"Luis Rojas Marcos"},{q:"<< La forma de hablarnos a nosotros mismos afecta tremendamente a nuestra manera de relacionarnos con el mundo >>",author:"Mario Alonso Puig"}],m=15e3,g=5e3,h=["src"];function f(e,t,n,o,r,i){const s=(0,a.up)("vue-plyr");return(0,a.wg)(),(0,a.j4)(s,{ref:"plyr",options:r.options,onEnded:t[0]||(t[0]=t=>e.$emit("ended"))},{default:(0,a.w5)((()=>[(0,a._)("audio",null,[(0,a._)("source",{src:r.song,type:"audio/mp3"},null,8,h)])])),_:1},8,["options"])}var v=n.p+"media/instant_crush.dc870022.mp3",w={name:"AudioPlayer",data(){return{options:{hideControls:!0,muted:!1},song:v}},computed:{player(){return this.$refs.plyr?.player}},methods:{play(){if(!this.player)return!1;this.player.play()},pause(){if(!this.player)return!1;this.player.pause()}}},y=n(89);const q=(0,y.Z)(w,[["render",f]]);var b=q;const j=(0,a._)("a",{href:"https://www.linkedin.com/in/f%C3%A9lix-mart%C3%ADn-866245b9/",class:"text-overlay",target:"_blank"}," @ Félix Martín ",-1),x=(0,a._)("br",null,null,-1),_=(0,a._)("span",null,"Las Navas de la Concepción, Sevilla",-1);function A(e,t,n,o,i,s){const u=(0,a.up)("v-col"),l=(0,a.up)("v-footer");return(0,a.wg)(),(0,a.j4)(l,{color:"primary",class:"font-weight-light text-overlay p-0",flat:"",tile:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"text-center py-0",cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("span",null,[(0,a.Uk)((0,r.zw)(e.title)+" © "+(0,r.zw)((new Date).getFullYear())+" - ",1),j]),x,_])),_:1})])),_:1})}var k={name:"NsFooter",data:()=>({title:c})};const L=(0,y.Z)(k,[["render",A]]);var I=L;const E={class:"d-flex align-center justify-center fill-height"};function S(e,t,n,r,i,s){const u=(0,a.up)("v-progress-circular"),l=(0,a.up)("quote-view"),d=(0,a.up)("v-img"),c=(0,a.up)("v-layout");return(0,a.wg)(),(0,a.j4)(c,{id:"main"},{default:(0,a.w5)((()=>[(0,a.Wm)(o.uT,{name:"fade"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)(d,{key:i.img,src:i.img,height:i.imgHeight,"max-height":i.imgHeight,"min-height":"600px",class:"align-end justify-end",cover:"",onLoad:s.onImgLoad},{placeholder:(0,a.w5)((()=>[(0,a._)("div",E,[(0,a.Wm)(u,{color:"secondary",indeterminate:""})])])),default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(l,{ref:"quoteView",index:i.qIndex},null,8,["index"]),[[o.F8,n.showQuote]])])),_:1},8,["src","height","max-height","onLoad"]))])),_:1})])),_:1})}n(7658);var P=n(4806);const W={key:0},C={class:"mb-4 font-weight-light",align:"center"},O={class:"subheading",align:"right"};function U(e,t,n,o,i,s){const u=(0,a.up)("v-col"),l=(0,a.up)("v-row"),d=(0,a.up)("v-card"),c=(0,a.up)("v-expand-transition");return(0,a.wg)(),(0,a.j4)(l,{justify:"end",align:"end"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{cols:e.$vuetify.display.mdAndUp?4:12},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{appear:""},{default:(0,a.w5)((()=>[i.quote?((0,a.wg)(),(0,a.iD)("div",W,[(0,a.Wm)(d,{class:"quote text-body-1 text-secondary mb-5 mx-5 px-5 pt-5 pb-5 rounded"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",C,(0,r.zw)(i.quote.q),1)])),_:1}),(0,a.Wm)(u,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("h4",O,(0,r.zw)(i.quote.author),1)])),_:1})])),_:1})])),_:1})])):(0,a.kq)("",!0)])),_:1})])),_:1},8,["cols"])])),_:1})}var N={name:"QuoteView",props:{index:{type:[Number,null],required:!1,default:null}},data(){return{quote:null}},methods:{setQuote(){this.quote=p[this.index]},removeQuote(){this.quote=null}}};const V=(0,y.Z)(N,[["render",U]]);var T=V,$={name:"HomeView",components:{QuoteView:T},props:{showQuote:{type:Boolean,required:!1,default:!0}},data(){return{cached:null,images:n(8593).keys(),imgHeight:this.getImageWidth(),isLong:!1,imgIndex:-1,img:null,qIndex:(0,P.random)(p.length-1)}},mounted(){const e=this;this.isLong=this.$vuetify.display.mdAndUp,window.addEventListener("resize",(function(){e.$vuetify.display.mdAndUp!=e.isLong&&(e.imgHeight=e.getImageWidth(),e.isLong=e.$vuetify.display.mdAndUp)}),!0),window.addEventListener("fullscreenchange",(function(){e.imgHeight=e.getImageWidth(),e.$emit("switchFullscreen")}),!0)},async created(){this.img=this.getImageUrl(),this.setImageUrl()},methods:{cacheImage(e){let t=new Image,n=[];t.onload=function(){n=[]},n.push(e),t.src=e},getImageUrl(){let e=null;return this.cached?e=this.cached:(this.imgIndex=this.images.indexOf((0,P.sample)(this.images)),e=n(3892)(`./${this.images[this.imgIndex].split("/")[1]}`)),this.imgIndex=this.imgIndex+1>=this.images.length?0:this.imgIndex+1,this.cached=n(3892)(`./${this.images[this.imgIndex].split("/")[1]}`),this.cacheImage(this.cached),e},getImageWidth(){return window.innerHeight},onImgLoad(){const e=this;setTimeout((function(){e.refreshQuote()}),1e3)},setImageUrl(){const e=this;setInterval((function(){e.$refs?.quoteView&&e.$refs.quoteView.removeQuote(),e.img=e.getImageUrl()}),m)},refreshQuote(){this.qIndex==p.length-1?this.qIndex=0:this.qIndex++,this.$refs?.quoteView&&this.$refs.quoteView.setQuote()}}};const F=(0,y.Z)($,[["render",S]]);var Q=F;const D=(0,a._)("br",null,null,-1);function M(e,t,n,o,i,s){const u=(0,a.up)("v-img"),l=(0,a.up)("v-col"),d=(0,a.up)("v-row");return(0,a.wg)(),(0,a.j4)(d,{class:"d-flex",align:"center",justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{cols:"12",align:"center",class:"px-10"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{src:i.logo,"max-width":"700",class:"logo-rounded mb-5",onLoad:s.onImgLoad},null,8,["src","onLoad"]),i.isLoaded?((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,r.C_)(["font-weight-light text-secondary text-body-2",{mobile:e.$vuetify.display.mobile}])},[(0,a.Uk)(" CONECTA CONTIGO MISMO"),D,(0,a.Uk)("LAS NAVAS DE LA CONCEPCIÓN, SEVILLA ")],2)):(0,a.kq)("",!0)])),_:1})])),_:1})}var z=n.p+"img/logo.35fc8756.png",H={name:"InitView",data(){return{isLoaded:!1,logo:z}},created(){this.isLoaded=!1},methods:{onImgLoad(){return this.isLoaded=!0}}};const Z=(0,y.Z)(H,[["render",M]]);var J=Z,B={name:"App",components:{AudioPlayer:b,NsFooter:I,ImageView:Q,InitView:J},data:()=>({fullScreen:!1,loading:!0,logo:u,logoEagle:s,showQuote:!0,playAudio:!1,title:c}),watch:{playAudio(){this.checkAudio()}},created(){this.initAnimation()},methods:{checkAudio(){this.$refs.AudioPlayer?.pause(),this.playAudio&&this.$refs.AudioPlayer?.play()},switchFullscreen(){this.fullScreen=!this.fullScreen},handleFullscreen(){this.fullScreen?document.exitFullscreen():document.querySelector("#app").requestFullscreen()},initAnimation(){this.loading=!0;const e=this;setTimeout((function(){e.loading=!1}),g)}}};const R=(0,y.Z)(B,[["render",i]]);var G=R,X=n(9601),K=X.Z,Y=(n(9773),n(8957)),ee=n(1850),te=n(8600),ne=n(3498),oe=n(3504),ae=n(2482);const re={dark:!0,colors:{primary:"#131313",secondary:"#99ddcc",error:"#f44336",info:"#2196f3",success:"#319828",warning:"#ff9900",overlay:"#707070"}};var ie=(0,Y.Rd)({components:ee,directives:te,icons:{defaultSet:"mdi",aliases:oe.j,sets:{mdi:oe.t,fa:ne.fa}},locale:{locale:"en",fallback:"en",messages:{en:ae.Z}},theme:{defaultTheme:"darkCustom",themes:{darkCustom:re}}});(0,o.ri)(G).use(ie).use(K).mount("#app")},3892:function(e,t,n){var o={"./camino-verde.jpg":2787,"./cerro-gata.jpg":1790,"./convento-verde.jpg":5561,"./flores-verde.jpg":2147,"./molineta-verdina.jpg":7474,"./peral-nubes.jpg":7310,"./rama-rivera.jpg":1208,"./retortillo-atardecer.jpg":2572,"./rivera-margaritas.jpg":2414,"./tronco-verde.jpg":2142};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=3892},8593:function(e,t,n){var o={"./camino-verde.jpg":2787,"./cerro-gata.jpg":1790,"./convento-verde.jpg":5561,"./flores-verde.jpg":2147,"./molineta-verdina.jpg":7474,"./peral-nubes.jpg":7310,"./rama-rivera.jpg":1208,"./retortillo-atardecer.jpg":2572,"./rivera-margaritas.jpg":2414,"./tronco-verde.jpg":2142};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=8593},2787:function(e,t,n){"use strict";e.exports=n.p+"img/camino-verde.98378ee2.jpg"},1790:function(e,t,n){"use strict";e.exports=n.p+"img/cerro-gata.da29fb69.jpg"},5561:function(e,t,n){"use strict";e.exports=n.p+"img/convento-verde.cd95303b.jpg"},2147:function(e,t,n){"use strict";e.exports=n.p+"img/flores-verde.8259e033.jpg"},7474:function(e,t,n){"use strict";e.exports=n.p+"img/molineta-verdina.0f4cd5cb.jpg"},7310:function(e,t,n){"use strict";e.exports=n.p+"img/peral-nubes.c9b17ee3.jpg"},1208:function(e,t,n){"use strict";e.exports=n.p+"img/rama-rivera.3868a6fb.jpg"},2572:function(e,t,n){"use strict";e.exports=n.p+"img/retortillo-atardecer.679075d1.jpg"},2414:function(e,t,n){"use strict";e.exports=n.p+"img/rivera-margaritas.045775d8.jpg"},2142:function(e,t,n){"use strict";e.exports=n.p+"img/tronco-verde.b41087b0.jpg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],r=e[d][2];for(var s=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,r<i&&(i=r));if(s){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/navasskape/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],u=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var d=u(n)}for(t&&t(o);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunkriverside"]=self["webpackChunkriverside"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3648)}));o=n.O(o)})();
//# sourceMappingURL=app.eac54f48.js.map