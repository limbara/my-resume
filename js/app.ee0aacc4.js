(function(){"use strict";var t={4587:function(t,e,i){i(6992),i(8674),i(7727);var a=i(144),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"min-h-screen min-w-screen bg-porcelain"},[i("main-page")],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"main-page"},[i("div",{staticClass:"main-page__left"},[i("div",{staticClass:"main-page__left__box"},[i("section",[i("div",{staticClass:"heading__wrapper heading__wrapper--white"},[i("h1",{staticClass:"heading heading--white heading--name"},[t._v(t._s(t.name))]),i("h2",{staticClass:"heading heading--white"},[t._v(t._s(t.position))])]),t.name?i("div",{staticClass:"float-left m-4 w-32 h-32 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44",staticStyle:{"shape-outside":"circle()"}},[i("avatar",{style:{width:"inherit",height:"inherit"},attrs:{name:t.name,src:this.photo?this.photo:""}})],1):t._e(),i("p",{staticClass:"text-justify esm:p-2 md:p-2 text-porcelain"},[t._v(" "+t._s(t.summary)+" ")])]),i("section",{staticClass:"clear-left"},[t._m(0),i("div",{staticClass:"contacts"},[i("p",{staticClass:"contacts__item"},[i("font-awesome-icon",{staticClass:"contacts__icon",attrs:{icon:["fas","map-marker-alt"]}}),i("span",{staticClass:"contacts__text"},[t._v(t._s(t.location))])],1),i("a",{staticClass:"contacts__item contacts__item--link",attrs:{href:"mailto: "+t.email}},[i("font-awesome-icon",{staticClass:"contacts__icon",attrs:{icon:["fas","envelope"]}}),i("span",{staticClass:"contacts__text"},[t._v(t._s(t.email))])],1),i("a",{staticClass:"contacts__item contacts__item--link",attrs:{href:t.github_link,target:"_blank"}},[i("font-awesome-icon",{staticClass:"contacts__icon",attrs:{icon:["fab","github"]}}),i("span",{staticClass:"contacts__text"},[t._v(t._s(t.github))])],1),i("a",{staticClass:"contacts__item contacts__item--link",attrs:{href:t.linkedin_link,target:"_blank"}},[i("font-awesome-icon",{staticClass:"contacts__icon",attrs:{icon:["fab","linkedin"]}}),i("span",{staticClass:"contacts__text"},[t._v(t._s(t.linkedin))])],1)])]),i("section",[t._m(1),i("div",{staticClass:"mt-4 flex flex-wrap"},[t._l(t.skills,(function(e,a){return[i("span",{key:a,staticClass:"skill-pill"},[t._v(" "+t._s(e)+" ")])]}))],2)]),i("section",[t._m(2),i("timeline",{staticClass:"timeline--white"},[t._l(t.educations,(function(e,a){return[i("timeline-content",{key:a,staticClass:"timeline-content--white",attrs:{from:e.from,to:e.to}},[i("p",[t._v(t._s(e.location)+", "+t._s(e.description))])])]}))],2)],1),i("section",[t._m(3),i("div",{staticClass:"flex m-1 p-1 flex-wrap"},t._l(t.certificates,(function(e,a){return i("certificate-card",t._b({key:a,staticClass:"certificate-card--white"},"certificate-card",e,!1))})),1)])])]),i("div",{staticClass:"main-page__right"},[i("div",{staticClass:"main-page__right__box"},[i("section",[t._m(4),i("timeline",[t._l(t.experiences,(function(e,a){return[i("timeline-content",{key:a,attrs:{from:e.from,to:e.to}},[e.location_url?i("p",[t._v(t._s(e.position)+" @ "),i("a",{staticClass:"text-calypso hover:text-glacier",attrs:{href:e.location_url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.location))])]):i("p",[t._v(t._s(e.position)+" @ "+t._s(e.location))]),i("div",{domProps:{innerHTML:t._s(e.description)}})])]}))],2)],1),i("section",[t._m(5),i("div",{staticClass:"flex m-1 p-1 flex-wrap"},t._l(t.projects,(function(e,a){return i("project-card",t._b({key:a},"project-card",e,!1))})),1)])])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"heading__wrapper heading__wrapper--white"},[i("h2",{staticClass:"heading heading--white"},[t._v("Contacts")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"heading__wrapper heading__wrapper--white"},[i("h2",{staticClass:"heading heading--white"},[t._v("Skills")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"heading__wrapper heading__wrapper--white"},[i("h2",{staticClass:"heading heading--white"},[t._v("Education")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"heading__wrapper heading__wrapper--white"},[i("h2",{staticClass:"heading heading--white"},[t._v("Certificates")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"heading__wrapper"},[i("h2",{staticClass:"heading"},[t._v("Experience")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"heading__wrapper"},[i("h2",{staticClass:"heading"},[t._v("Projects")])])}],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"c-avatar text-white font-bold "+(t.src?"":"bg-bossanova"),style:"\n  width: "+t.size+"px;\n  height: "+t.size+"px;\n  shape-outside: circle();\n  "+(t.src?"background-image: url("+t.src+")":"")+"\n  "+(t.src?"background-color: transparent":"")+" \n"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.src,expression:"!src"}],staticClass:"c-avatar__initial"},[t._v(t._s(t.getInitial))])])},l=[],p=(i(4916),{name:"Avatar",props:{name:{required:!0,type:String},src:{required:!1,type:String},size:{required:!1,type:Number,default:50}},computed:{getInitial:function(){return this.name.split(/\s|-/g).map((t=>t[0].toUpperCase())).join("")}}}),u=p,d=i(3736),m=(0,d.Z)(u,c,l,!1,null,"362448ea",null),_=m.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline"},[t._t("default")],2)},f=[],g={name:"Timeline"},v=g,k=(0,d.Z)(v,h,f,!1,null,"1bc46909",null),w=k.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline-content"},[i("div",{staticClass:"time time__wrapper"},[i("p",[i("time",{staticClass:"time time__text"},[t._v(t._s(t.from))]),t._v("  -  "),i("time",{staticClass:"time time__text"},[t._v(t._s(t.to))])])]),t._t("default")],2)},b=[],y={name:"TimelineContent",props:{from:{required:!0,type:String},to:{required:!0,type:String}}},x=y,j=(0,d.Z)(x,C,b,!1,null,"9c065af8",null),S=j.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"project-card",attrs:{href:t.link}},[i("div",{staticClass:"project-card__title-wrapper"},[i("h3",{staticClass:"project-card__title"},[t._v(t._s(t.title)+" ("+t._s(t.type)+")")]),i("font-awesome-icon",{staticClass:"project-card__link-icon",attrs:{icon:["fas","link"]}})],1),i("p",{staticClass:"project-card__description"},[t._v(t._s(t.description))]),i("p",{staticClass:"project-card__tech-stack"},[t._v("Tech Stack : "+t._s(t.tech_stack))])])},D=[],E={name:"ProjectCard",props:{title:String,type:String,description:String,link:{type:String,default:""},tech_stack:String}},I=E,T=(0,d.Z)(I,P,D,!1,null,"9b2ca874",null),A=T.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"certificate-card",attrs:{href:t.link}},[i("div",{staticClass:"certificate-card__title-wrapper"},[i("h3",{staticClass:"certificate-card__title"},[t._v(t._s(t.title))]),i("font-awesome-icon",{staticClass:"certificate-card__link-icon",attrs:{icon:["fas","link"]}})],1),i("p",{staticClass:"certificate-card__issued-at"},[t._v("Date : "+t._s(t.issued_at))])])},G=[],$={name:"CertificateCard",props:{title:String,link:{type:String,default:""},issued_at:String}},J=$,M=(0,d.Z)(J,O,G,!1,null,"2f82a3d3",null),F=M.exports,N={name:"main-page",components:{Avatar:_,Timeline:w,TimelineContent:S,ProjectCard:A,CertificateCard:F},mounted:function(){this.loadJsonFile()},data:function(){return{name:"",position:"",location:"",summary:"",photo:"",email:"",github:"",github_link:"",linkedin:"",linkedin_link:"",skills:[],experiences:[],educations:[],projects:[],certificates:[]}},methods:{loadJsonFile(){let t=i(7146);this.name=t.name,this.position=t.position,this.location=t.location,this.email=t.email,this.photo=t.photo,this.github=t.github,this.github_link=t.github_link,this.linkedin=t.linkedin,this.linkedin_link=t.linkedin_link,this.summary=t.summary,this.skills=t.skills,this.experiences=t.experiences,this.educations=t.educations,this.projects=t.projects,this.certificates=t.certificates}}},R=N,Z=(0,d.Z)(R,r,o,!1,null,"42779512",null),L=Z.exports,z={name:"App",components:{MainPage:L}},B=z,U=(0,d.Z)(B,n,s,!1,null,null,null),q=U.exports,V=i(8947),W=i(1436),H=i(1417),K=i(7810);V.vI.add(W.FU$,W.FGq,H.zhw,H.D9H,W.nNP),a.Z.component("font-awesome-icon",K.GN),a.Z.config.productionTip=!1,new a.Z({render:t=>t(q),mounted:()=>document.dispatchEvent(new Event("x-app-rendered"))}).$mount("#app")},7146:function(t){t.exports=JSON.parse('{"name":"Nico Limbara","location":"North Sumatra, Indonesia","position":"Software Engineer","photo":"./me.jpg","summary":"Detail-oriented Software Engineer with over 5 years experience and a demonstrated history of working in startup enviroment. Always eager to learn new things to keep up to date with the tech industry. Currently doing a bit of problem solving on Leetcode and focused on learning Golang, I\'m open to learn to new tech skill to support my career.","email":"limbaranico@yahoo.com","github":"github.com/limbara","github_link":"https://github.com/limbara","linkedin":"linkedin.com/in/nico-lim-740056130","linkedin_link":"https://id.linkedin.com/in/nico-lim-740056130","skills":["Javascript/ES6","Java","Go","PHP","MySQL","MongoDB","Redis","Firebase","Node.js","Laravel","HTML5","CSS3","Vue.js","React","Linux","Database Design"],"experiences":[{"from":"July 2022","to":"Present","position":"Back-End Engineer","location":"Ajaib - PT Harta Karunia Indonesia","location_url":"https://ajaib.co.id","description":"<ul><li>Responsible in maintaining and improving shared service performance</li><li>Developed and improve new Ajaib\'s internal tools to better serve customers</li></ul>"},{"from":"September 2021","to":"July 2022","position":"Software Engineer","location":"PT Nextbase Ventura Global","location_url":"https://nextbase.co","description":"<ul><li>Developed client\'s Shopify app project</li><li>Developed data analytics web app</li></ul>"},{"from":"Aug 2019","to":"September 2021","position":"Back-End Developer","location":"Diyo - PT. DIYO Solusi Digital","location_url":"https://www.diyo.app","description":"<ul><li>Designing database throughout development</li><li>Developing API for user and merchant app</li><li>Implementing 3rd party API</li><li>Built reusable code and libraries</li></ul>"},{"from":"June 2019","to":"Aug 2019","position":"Back-End Developer","location":"Dealjava - PT DIGITAL MEDIA GROUP","location_url":"https://dealjava.com","description":"<ul><li>Moving old framework codebase to a new codebase</li><li>Performing bug fixes</li></ul>"},{"from":"October 2017","to":"June 2019","position":"Front-End Developer","location":"Dealjava - PT DIGITAL MEDIA GROUP","location_url":"https://dealjava.com","description":"<ul><li>Developed and mantain customer facing website</li><li>Developed internal UI components</li><li>Implementing new features</li><li>Performing bug fixes</li><li>Improving website performance</li></ul>"}],"educations":[{"from":"September 2013","to":"September 2017","location":"Mikroskil","description":"Bachelor of Computer Science"}],"projects":[{"title":"Vue Time Date Range Picker","type":"Open Source Project","link":"https://www.npmjs.com/package/vue-time-date-range-picker","description":"Datetime picker component made with Vue.js","tech_stack":"Javascript, Vue.js, Webpack, Sass, Travis CI/CD, Jest Unit Test"},{"title":"Sort Visualizer","type":"Personal Project","link":"https://limbara.github.io/algo-visualizer/","description":"A Web application visualizing sorting algorithm","tech_stack":"Typescript, React.js, Sass"},{"title":"IDX Stock Watcher","type":"Personal Project","link":"https://idx-stock-watcher.herokuapp.com/","description":"Web app to see the last closing price update of Indonesian Stocks. Gets updated daily.","tech_stack":"Go, Mux Router, Cron Jobs, MongoDB, Docker"},{"title":"Simple Chat Application","type":"Personal Project","link":"https://simple-chat-client-react.herokuapp.com","description":"A Simple Chat Application made for the purpose of learning React.js & Web Socket","tech_stack":"Javascript, React, Node.js, Websocket"},{"title":"Simple Ethereum Smart Contract","type":"Personal Project","link":"https://github.com/limbara/Simple-Contract","description":"A Cli program that play around with ethereum smart contract that is running on local blockchain using Ganache.","tech_stack":"Javascript, Solidity"},{"title":"Flutter Card Clock","type":"Personal Project","link":"https://github.com/limbara/flutter_card_clock/raw/master/card_clock.mp4","description":"An clock app that is made to participate in the Flutter Clock contest.","tech_stack":"Flutter"}],"certificates":[{"title":"Go: The Complete Developer\'s Guide (Golang)","link":"https://www.udemy.com/certificate/UC-3fca2da5-b591-4048-8cc1-d5fa96aa03e2/","issued_at":"April 2022"}]}')}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,s){if(!a){var r=1/0;for(p=0;p<t.length;p++){a=t[p][0],n=t[p][1],s=t[p][2];for(var o=!0,c=0;c<a.length;c++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[c])}))?a.splice(c--,1):(o=!1,s<r&&(r=s));if(o){t.splice(p--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[a,n,s]}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,r=a[0],o=a[1],c=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(c)var p=c(i)}for(e&&e(a);l<r.length;l++)s=r[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(p)},a=self["webpackChunkmy_resume"]=self["webpackChunkmy_resume"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(4587)}));a=i.O(a)})();
//# sourceMappingURL=app.ee0aacc4.js.map