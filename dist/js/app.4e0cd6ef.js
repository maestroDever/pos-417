(function(n){function e(e){for(var o,a,c=e[0],i=e[1],l=e[2],u=0,d=[];u<c.length;u++)a=c[u],s[a]&&d.push(s[a][0]),s[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,a=1;a<t.length;a++){var c=t[a];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},a={app:0},s={app:0},r=[];function c(n){return i.p+"js/"+({about:"about","buttons-and-icons~text-and-colors":"buttons-and-icons~text-and-colors","buttons-and-icons":"buttons-and-icons","text-and-colors":"text-and-colors"}[n]||n)+"."+{about:"cee80ce8","buttons-and-icons~text-and-colors":"941d7eff","buttons-and-icons":"b10e3a88","text-and-colors":"2f0d9554","chunk-2d56a9e7":"4d6a8cdb"}[n]+".js"}function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={about:1,"buttons-and-icons~text-and-colors":1,"buttons-and-icons":1,"text-and-colors":1,"chunk-2d56a9e7":1};a[n]?e.push(a[n]):0!==a[n]&&t[n]&&e.push(a[n]=new Promise(function(e,t){for(var o="css/"+({about:"about","buttons-and-icons~text-and-colors":"buttons-and-icons~text-and-colors","buttons-and-icons":"buttons-and-icons","text-and-colors":"text-and-colors"}[n]||n)+"."+{about:"dae4f505","buttons-and-icons~text-and-colors":"710ba92b","buttons-and-icons":"b0b602de","text-and-colors":"3457f727","chunk-2d56a9e7":"2b465c87"}[n]+".css",s=i.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+n+" failed.\n("+o+")");r.request=o,delete a[n],m.parentNode.removeChild(m),t(r)},m.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(m)}).then(function(){a[n]=0}));var o=s[n];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise(function(e,t){o=s[n]=[e,t]});e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(n),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var t=s[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+n+" failed.\n("+o+": "+a+")");r.type=o,r.request=a,t[1](r)}s[n]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/",i.oe=function(n){throw console.error(n),n};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var o=t("1356"),a=t.n(o);a.a},1356:function(n,e,t){},"41cb":function(n,e,t){"use strict";var o=t("2b0e"),a=t("8c4f"),s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-container",[t("v-flex",{attrs:{"mb-5":"","text-xs-center":""}},[t("h1",{staticClass:"display-3"},[n._v("System Sign In")])]),t("v-layout",{attrs:{"justify-center":""}},[t("v-flex",{attrs:{md6:"","mt-5":""}},[t("v-card",[t("v-layout",{attrs:{"justify-center":""}},[t("v-flex",{attrs:{"pa-5":"","mt-2":""}},[t("v-form",{ref:"form"},[t("v-text-field",{attrs:{"prepend-icon":"access_time",label:"Email"},model:{value:n.email,callback:function(e){n.email=e},expression:"email"}}),t("v-text-field",{attrs:{type:n.show1?"text":"password",label:"Password","prepend-icon":"access_time"},model:{value:n.password,callback:function(e){n.password=e},expression:"password"}}),t("v-layout",{staticClass:"justify-center align-center"},[t("v-btn",{attrs:{large:"",color:"info"},on:{click:n.login}},[n._v("Submit")])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],c=(t("a481"),t("bd86")),i=t("8aa5"),l=t.n(i),u=(t("9138"),{name:"login",data:function(){return Object(c["a"])({show1:!1,password:"Password",email:""},"password","")},methods:{login:function(){var n=this;l.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){n.$router.replace("/mainmenu"),console.log("Login Successful")}).catch(function(n){alert(n.message),console.log("Error Logging In")})}}}),d=u,m=(t("cccb"),t("2877")),b=t("6544"),f=t.n(b),p=t("8336"),h=t("b0af"),j=t("a523"),v=t("0e8f"),g=t("4bd4"),y=t("a722"),x=t("2677"),k=Object(m["a"])(d,s,r,!1,null,null,null),w=k.exports;f()(k,{VBtn:p["a"],VCard:h["a"],VContainer:j["a"],VFlex:v["a"],VForm:g["a"],VLayout:y["a"],VTextField:x["a"]}),o["a"].use(a["a"]);e["a"]=new a["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:w},{path:"/test",name:"test",component:function(){return t.e("chunk-2d56a9e7").then(t.bind(null,"78c1"))}},{path:"/inshop",name:"inshop",component:function(){return t.e("about").then(t.bind(null,"0f15"))}},{path:"/phone",name:"phone",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("text-and-colors")]).then(t.bind(null,"4f77"))}},{path:"/delivery",name:"delivery",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"edb0"))}},{path:"/timeclocksignin",name:"timeclocksignin",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"c410"))}},{path:"/ordersearch",name:"ordersearch",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"4797"))}},{path:"/customersearch",name:"customersearch",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"2715"))}},{path:"/mainmenu",name:"mainmenu",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"ffd3"))}},{path:"/admin",name:"admin",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"3530"))}},{path:"/adminsignin",name:"adminsignin",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"a1d2"))}},{path:"/menu",name:"menu",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"9a0b"))},props:function(n){return{orderID:n.query.order_id}}},{path:"/deliverymenu",name:"deliverymenu",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"23b5"))}},{path:"/pickupmenu",name:"pickupmenu",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"5513"))}},{path:"/orderComplete",name:"orderComplete",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"b9ed"))}},{path:"/tombstone",name:"tombstone",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"313e"))}},{path:"/testpage",name:"testpage",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"7454"))}},{path:"/newcustomer",name:"newcustomer",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"bef1"))}},{path:"/customerprofile",name:"customerprofile",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"8dd2"))},props:function(n){return{customerID:n.query.customerID}}},{path:"/schedule",name:"schedule",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"6b7b"))}},{path:"/schedule1",name:"schedule1",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"3baa"))}},{path:"/addshift",name:"addShift",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"534c"))}},{path:"/editshifts/:id",name:"editShifts",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"cd65"))}},{path:"/shiftlist",name:"shiftList",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"a8f3"))}},{path:"/showshifts/:id",name:"showShifts",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"f310"))}},{path:"/thisweeksschedule",name:"thisWeeksSchedule",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"9962"))}},{path:"/nextweeksschedule",name:"nextWeeksSchedule",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"8007"))}},{path:"/reports",name:"reports",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"c11b"))}},{path:"/editschedule",name:"editschedule",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"4b1b"))}},{path:"/employeemanagement",name:"employeemanagement",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"c8e8"))}},{path:"/menumanagement",name:"menumanagement",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"1608"))}},{path:"/storedashboard",name:"storedashboard",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"7b3b"))}},{path:"/timeclockmanagement",name:"timeclockmanagement",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"6ac0"))}},{path:"/inventorymanagement",name:"inventorymanagement",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"bb4a"))}},{path:"/customermanagement",name:"customermanagement",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"ff22"))}},{path:"/payoutmanagement",name:"payoutmanagement",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"97ff"))}},{path:"/ordermanagement",name:"ordermanagement",component:function(){return Promise.all([t.e("buttons-and-icons~text-and-colors"),t.e("buttons-and-icons")]).then(t.bind(null,"6b22"))}}],scrollBehavior:function(n,e,t){return{x:0,y:0}}})},4678:function(n,e,t){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(n){var e=s(n);return t(e)}function s(n){var e=o[n];if(!(e+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e}a.keys=function(){return Object.keys(o)},a.resolve=s,n.exports=a,a.id="4678"},"4e69":function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),a=t("bb71");t("da64");o["a"].use(a["a"],{iconfont:"md"});var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-app",{attrs:{dark:""}},[t("v-content",[t("v-container",[t("router-view")],1)],1)],1)},r=[],c=t("b3e6"),i={name:"App",components:{Navdrawer:c["a"]},created:function(){console.log(this.$store.state.db)}},l=i,u=(t("034f"),t("2877")),d=t("6544"),m=t.n(d),b=t("7496"),f=t("a523"),p=t("549c"),h=Object(u["a"])(l,s,r,!1,null,null,null),j=h.exports;m()(h,{VApp:b["a"],VContainer:f["a"],VContent:p["a"]});var v=t("41cb"),g=t("2f62");o["a"].use(g["a"]);var y=new g["a"].Store({state:{forSale:[{invId:1,item:"An Item",image:"//placehold.it/200",price:999},{invId:2,quantity:"An Item",item:"//placehold.it/200",price:999},{invId:3,quantity:"An Item",item:"//placehold.it/200",price:999},{invId:4,quantity:"An Item",item:"//placehold.it/200",price:999}],inCart:[]},getters:{forSale:function(n){return n.forSale},inCart:function(n){return n.inCart}},mutations:{SUBMIT:function(n,e){n.inCart.push(e)},REMOVE_FROM_CART:function(n,e){n.inCart.splice(e,1)}},actions:{submit:function(n,e){n.commit("SUBMIT",e)},removeFromCart:function(n,e){n.commit("REMOVE_FROM_CART",e)}}}),x=t("bc3a"),k=t.n(x),w=t("62b0"),P=t.n(w),_=(t("5807"),t("1685")),S=t.n(_),C={apiKey:"AIzaSyBXm9T3GTYi7NnbE7FzXhqlCBr0sQdJNAc",clientId:"95363375085-nsi2gjj7lclk2cioiothpencmp508vnb.apps.googleusercontent.com",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets"};o["a"].use(P.a);var T=t("c1df");T.updateLocale("en",{week:{dow:1,doy:4}}),o["a"].use(t("2ead"),{moment:T}),o["a"].prototype.$http=k.a,o["a"].config.productionTip=!1,o["a"].use(S.a,C),new o["a"]({router:v["a"],store:y,axios:k.a,render:function(n){return n(j)}}).$mount("#app")},"82dd":function(n,e,t){},8625:function(n,e,t){"use strict";var o=t("82dd"),a=t.n(o);a.a},9138:function(n,e,t){"use strict";t.d(e,"e",function(){return r}),t.d(e,"o",function(){return c}),t.d(e,"n",function(){return i}),t.d(e,"c",function(){return l}),t.d(e,"b",function(){return u}),t.d(e,"i",function(){return m}),t.d(e,"g",function(){return b}),t.d(e,"d",function(){return f}),t.d(e,"h",function(){return p}),t.d(e,"f",function(){return h}),t.d(e,"l",function(){return j}),t.d(e,"a",function(){return v}),t.d(e,"m",function(){return d}),t.d(e,"q",function(){return g}),t.d(e,"j",function(){return y}),t.d(e,"p",function(){return x}),t.d(e,"k",function(){return k});var o=t("59ca"),a=t.n(o),s=(t("e71f"),{apiKey:"AIzaSyD5i6GMDNAi0tgYGj6Ec3U2GVXHaLSx_78",authDomain:"deploy-7003e.firebaseapp.com",databaseURL:"https://deploy-7003e.firebaseio.com",projectId:"deploy-7003e",storageBucket:"deploy-7003e.appspot.com",messagingSenderId:"1048716810899"});a.a.initializeApp(s);var r=a.a.firestore(),c=r.collection("schedule"),i=r.collection("schedule2"),l=r.collection("customers"),u=r.collection("currentOrders"),d=r.collection("pastOrders"),m=r.collection("newsUpdates"),b=r.collection("localPromos"),f=r.collection("dailyPromos"),p=r.collection("nationalPromos"),h=r.collection("employees"),j=r.collection("pastEmployees"),v=r.collection("buildingOrder"),g=(r.collection("scheduleDates"),r.collection("thisWeeksScheduleDates")),y=r.collection("nextWeeksScheduleDates"),x=r.collection("scheduleRequests"),k=r.collection("oldScheduleRequests")},b3e6:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("nav",[t("v-toolbar",{attrs:{height:"50",app:""}},[t("v-toolbar-side-icon",{on:{click:function(e){n.drawer=!n.drawer}}}),t("v-toolbar-title",[n._v("POS")]),t("v-spacer")],1),t("v-navigation-drawer",{attrs:{app:"",dark:"",width:275},model:{value:n.drawer,callback:function(e){n.drawer=e},expression:"drawer"}},[t("v-toolbar",[t("v-list",{staticClass:"pa-0"},[t("v-list-tile",{attrs:{avatar:""}},[t("router-link",{attrs:{to:"/mainmenu"}},[t("v-list-tile-avatar",[t("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/deploy-7003e.appspot.com/o/silver-mine-subs-beltline-733_1413916173403.png?alt=media&token=1cc3549b-3012-41e0-8af0-8a13b0842684"}})])],1),t("v-spacer"),t("v-list-tile-content",[t("router-link",{staticClass:"mainmenu",attrs:{to:"mainmenu"}},[t("v-list-tile-title",[t("h2",[n._v("Silvermine Subs")])])],1)],1)],1)],1)],1),t("v-flex",{attrs:{"mt-2":""}},[t("v-list",n._l(n.items,function(e,o){return t("v-list-tile",{key:o,attrs:{to:e.to,router:"",exact:""}},[t("v-list-tile-action",[t("v-icon",{attrs:{large:""}},[n._v(n._s(e.icon))])],1),t("v-spacer"),t("v-list-tile-content",[t("h3",[t("v-list-tile-title",{domProps:{textContent:n._s(e.title)}})],1)])],1)}),1)],1),t("router-link",{attrs:{to:"/adminsignin"}},[t("v-footer",{staticClass:"justify-center pl-0",attrs:{height:"45",inset:"",app:""}},[t("v-icon",{staticClass:"icon__flip",attrs:{left:""}},[n._v("build")]),t("span",[t("h1",{staticClass:"router-link"},[n._v("Admin")])]),t("v-icon",{attrs:{right:""}},[n._v("build")])],1)],1)],1)],1)},a=[],s=t("1980"),r=t.n(s),c={props:{permanent:Boolean},components:{draggable:r.a},data:function(){return{drawer:!1,items:[{icon:"person_add",title:"Inshop",to:"/inshop"},{icon:"phone",title:"Phone",to:"/phone"},{icon:"drive_eta",title:"Delivery",to:"/delivery"},{icon:"search",title:"Order Search",to:"/ordersearch"},{icon:"schedule",title:"Time Clock",to:"/timeclocksignin"},{icon:"calendar_today",title:"Schedule",to:"/schedule"}]}}},i=c,l=(t("8625"),t("2877")),u=t("6544"),d=t.n(u),m=t("0e8f"),b=t("553a"),f=t("132d"),p=t("8860"),h=t("ba95"),j=t("40fe"),v=t("c954"),g=t("5d23"),y=t("f774"),x=t("9910"),k=t("71d9"),w=t("706c"),P=t("2a7f"),_=Object(l["a"])(i,o,a,!1,null,null,null);e["a"]=_.exports;d()(_,{VFlex:m["a"],VFooter:b["a"],VIcon:f["a"],VList:p["a"],VListTile:h["a"],VListTileAction:j["a"],VListTileAvatar:v["a"],VListTileContent:g["a"],VListTileTitle:g["b"],VNavigationDrawer:y["a"],VSpacer:x["a"],VToolbar:k["a"],VToolbarSideIcon:w["a"],VToolbarTitle:P["b"]})},cccb:function(n,e,t){"use strict";var o=t("4e69"),a=t.n(o);a.a}});
//# sourceMappingURL=app.4e0cd6ef.js.map