(function(t){function e(e){for(var a,o,s=e[0],u=e[1],i=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},c=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-181639a0":"86a6579a","chunk-2d0cc614":"3836126d","chunk-2d0ccbf6":"45cdc48f","chunk-2d22615c":"117e41d4","chunk-4aa5c498":"dd72738c","chunk-52c23b3d":"69e102ae","chunk-5a7e51b7":"4f88a429","chunk-5db9f4a8":"caafbfd1","chunk-6731d658":"f6fc926a","chunk-695dfe75":"b5390d29","chunk-a605d0e2":"13814c91","chunk-2d0ac1cc":"95d523ed","chunk-2d0b1638":"5d0c220c","chunk-2d0e4926":"ab4031d0","chunk-33a3d25e":"a17607fb","chunk-affa8e92":"8da10a10"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t);var i=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,n[1](i)}r[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00c2":function(t,e,n){"use strict";e["a"]={getAccessToken:function(){return window.localStorage.getItem("access_token")},getRefreshToken:function(){return window.localStorage.getItem("refresh_token")},saveToken:function(t){var e=t.access_token,n=t.refresh_token;window.localStorage.setItem("access_token",e),window.localStorage.setItem("refresh_token",n)},updateAccessToken:function(t){window.localStorage.setItem("access_token",t)},destroyToken:function(){window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token")}}},"05cc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"border-bottom bg-nav-green bb-green",attrs:{toggleable:"lg",type:"dark"}},[a("div",{staticClass:"container"},[a("b-navbar-brand",{attrs:{to:{name:"home"}}},[a("img",{attrs:{src:n("3154"),alt:"Logo"}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:{name:"posts"}}},[t._v("Bài viết")]),a("b-nav-item",{attrs:{to:{name:"play-list"}}},[t._v("Danh sách")]),a("b-nav-item",{attrs:{to:{name:"pages"}}},[t._v("Trang")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"input-group bg-white rounded-pill mr-2"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text bg-transparent border-0"},[a("i",{staticClass:"ti ti-search"})])]),a("input",{staticClass:"form-control border-0 pl-0",attrs:{type:"text",name:"search",placeholder:"Tìm kiếm"}}),a("span",{staticClass:"mx-2 mt-1"},[a("b-button",{attrs:{type:"submit",pill:"",variant:"primary",size:"sm"}},[t._v("Search")])],1)])]),a("b-nav-item-dropdown",{directives:[{name:"show",rawName:"v-show",value:t.isAuthenticated,expression:"isAuthenticated"}],attrs:{right:""}},[a("template",{slot:"button-content"},[a("b-avatar",{attrs:{size:"2rem"}}),t._v(" "+t._s(t.currentUser.username)+" ")],1),a("b-dropdown-item",{on:{click:function(e){return t.logout()}}},[t._v("Đăng xuất")])],2)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAuthenticated,expression:"!isAuthenticated"}],staticClass:"py-2"},[a("b-button",{staticClass:"btn-custom btn-success mr-2 animate-up-1",attrs:{to:{name:"login"},variant:"link",size:"sm"}},[t._v(" Đăng nhập ")]),a("b-button",{staticClass:"btn-custom btn-primary animate-up-1",attrs:{to:{name:"register"},variant:"link",size:"sm"}},[t._v(" Đăng ký ")])],1)],1)],1)])},r=[],c=(n("b0c0"),n("ac1f"),n("5319"),n("841c"),n("5530")),o=n("2f62"),s=n("6c33"),u=n("90d2"),i={name:"TheNav",computed:Object(c["a"])({},Object(o["b"])(["currentUser","isAuthenticated"])),methods:{onSubmit:function(t){var e=t.target.search.value;this.$store.commit(u["n"],e),"search"!==this.$route.name&&this.$router.replace({name:"search"})},logout:function(){var t=this;this.$store.dispatch(s["m"]).then((function(){"home"!==t.$route.name&&t.$router.replace({name:"home"})}))}}},l=i,f=n("2877"),d=Object(f["a"])(l,a,r,!1,null,null,null);e["a"]=d.exports},"0d39":function(t,e,n){},3154:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAgCAYAAACPb1E+AAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABBFJREFUWIXtmG9olVUcxz9nd9uduV1vNWtb27q7iRnKnFcyFUuqDQyRelNU9IcIhSgLetG7SCIokEhhKSyjIGPFgpDhixiGNWGb4XRu17YX/rl2cTPnvLqN5+7P3bcXexp3u9c9d8+WIvSFA5ff8zu/87m/c87vnOcxLJAkFQElwBLgKhA1xgzMob8H+AgYNMbsXiguJFVK2i8pqlRNSOqW9ImkMoc4pZJ+k/SzpLsXCq5Q0vc2zHgawGQlbJ9PJeWliVUj6YKk95JsHknZ8wF8RFJvBnDpMntSUmFSrHsk/SFptaQsSU9IqpV0SdLjbgEfknRN0tgcAf/VuKQ/JflmZO0LSX9JOibpXUnFbgHzJIVdZHCmEppceyYp9muaZd2amz1IA7kL+BDIcvUvU/WyMabejp0NvAQU2m2p3b41xhzKCFJSCXAByAFoiUbp6OvjxVWr8Oel7IUUxeJxfujqoqqoiPWlpQATwBWgwhhj2VndD/TPaB3GmN5MIb8E3sLO/OctLXzQ1ITX4+H5lSvZHgqxqbw8pV/zxYscaG+nIRxmJJFgd00N72/YkOyy0xhT6zS+I6Qmy0YM8Cbbz8difN3ezjenTnFpcJDtoRB127ZNPd/R2MhX7e2UFBTwRlUVb4ZCVPj900IDF5nMppw4nCBfnW0XjCUSauzpUXMkMs3eHImosadHY4mE00baOC9AG/Kkix2cqcYl7XNimHW6JeUD18lgR3f391Pf1UXf0BABv59XKisp8/mcumHHLzTGjN/MwWnwnZkAfnbsGFsOHiQ7K4snAwGGRkdZf+AAB0+fzgRyCfBYJo5pJemU03wNWJaera/XNcuaZo/EYgru3au2aLq7R8qUfzwfyBF3S21S9Z2deqGhwcltQlLLbBwpa1LSEeBhJktOYUqPOWhC4srwMPfn5zu6Ar327x5jzNNOkKPYJ8tt0pgxJjfZsFDn8H+qOwLS1e13T2srI4kEXo+HzYEAa4qK+D0SoSUanfJ5ffVqfjpzho1lZYSKi/kxHObeRYuoDgbnPJ6rTO46epT4+Dj5ubk8WldH9MYNfjl7lu86OqgOBqkOBvF5vfx6/jy1x48zIfH24cNctSw3w7mf7oDfz+ZAgIRELB4HYMCyaAiH6bx8mbtycnhuxQqazp3jRG8vg6OjPLNs2a2FTKf7Fi9mx9q1bLFhti5fTt/QEHtaW3mqogKf1+sQIb1cv5E1hMMc6u5m5dKlPGhfwf4eHqbuxAkA3lm3jlKfj03l5dR3drJv61a3Q7mrkxdiMSYkFuXkUGwX6gHLmpp2gAd8PrweD1cti+vxOCUFBeRlZ5STlDr5fzFfKGXbZ/WaJNvtzCJAjqTkb0gnjaT5vV/cAt0R050FtN1uCAe1/QOWsTo3rcXt7QAAAABJRU5ErkJggg=="},4360:function(t,e,n){"use strict";var a,r,c,o,s,u,i,l,f=n("2b0e"),d=n("2f62"),h=(n("d3b7"),n("ade3")),m=n("5ce5"),p=n("00c2"),b=n("6c33"),g=n("90d2"),v={errors:[],user:{},isAuthenticated:!!p["a"].getAccessToken()},k={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},y=(a={},Object(h["a"])(a,b["l"],(function(t,e){var n=t.commit;return new Promise((function(t,a){m["e"].post("rest-auth/login",e).then((function(e){var a=e.data;n(g["c"],a.user),p["a"].saveToken(a),t(a)})).catch((function(){n(g["d"],["Thông tin tài khoản đăng nhập không hợp lệ"]),a()}))}))})),Object(h["a"])(a,b["m"],(function(t){var e=t.commit;e(g["b"])})),Object(h["a"])(a,b["o"],(function(t,e){var n=t.commit;return new Promise((function(t,a){m["e"].post("rest-auth/registration",e).then((function(e){var a=e.data;n(g["c"],a.user),p["a"].saveToken(a),t(a)})).catch((function(){n(g["d"],["Thông tin tài khoản đăng ký không hợp lệ"]),a()}))}))})),Object(h["a"])(a,b["b"],(function(t){var e=t.commit,n=t.dispatch,a=t.state;return p["a"].getAccessToken()?(m["e"].setHeader(),m["e"].get("rest-auth/user").then((function(t){var n=t.data;e(g["c"],n)})).catch((function(){m["e"].post("rest-auth/token/refresh",{refresh:p["a"].getRefreshToken()}).then((function(t){var e=t.data;p["a"].updateAccessToken(e.access),n(b["b"])})).catch((function(){e(g["b"])}))}))):e(g["b"]),a.isAuthenticated})),a),P=(r={},Object(h["a"])(r,g["d"],(function(t,e){t.errors=e})),Object(h["a"])(r,g["c"],(function(t,e){t.isAuthenticated=!0,t.user=e,t.errors=[]})),Object(h["a"])(r,g["b"],(function(t){t.isAuthenticated=!1,t.user={},t.errors=[],p["a"].destroyToken()})),r),w={state:v,getters:k,actions:y,mutations:P},A={posts:[],pagePost:1,numPagePost:0,countPost:0,hasNextPost:!1,currentPost:{}},x={posts:function(t){return t.posts},pagePost:function(t){return t.pagePost},numPagePost:function(t){return t.numPagePost},countPost:function(t){return t.countPost},hasNextPost:function(t){return t.hasNextPost}},j=(c={},Object(h["a"])(c,b["i"],(function(t,e){var n=t.commit;return m["c"].query(e).then((function(t){var e=t.data;n(g["m"],e),n(g["g"],e)}))})),Object(h["a"])(c,b["h"],(function(t,e){var n=t.commit;return m["c"].query(e).then((function(t){var e=t.data;n(g["l"],e)}))})),c),O=(o={},Object(h["a"])(o,g["m"],(function(t,e){t.posts=e.results})),Object(h["a"])(o,g["l"],(function(t,e){t.currentPost=e.results})),Object(h["a"])(o,g["g"],(function(t,e){t.pagePost=e.page,t.numPagePost=e.num_page,t.countPost=e.count,t.hasNextPost=e.has_next})),o),C={state:A,getters:x,actions:j,mutations:O},L=(n("96cf"),n("1da1")),N=n("323e"),S=n.n(N),T={pages:[],pageWeb:1,numPageWeb:0,countPage:0,hasNextPage:!1,currentPage:{}},q={pages:function(t){return t.pages},page:function(t){return t.currentPage},pageWeb:function(t){return t.pageWeb},numPageWeb:function(t){return t.numPageWeb},countPage:function(t){return t.countPage},hasNextPage:function(t){return t.hasNextPage}},_=(s={},Object(h["a"])(s,b["j"],(function(){S.a.start()})),Object(h["a"])(s,b["c"],(function(){S.a.done()})),Object(h["a"])(s,b["e"],(function(t,e){var n=t.commit;return m["a"].query(e).then((function(t){var e=t.data;n(g["i"],e),n(g["e"],e)}))})),Object(h["a"])(s,b["d"],(function(t,e){return Object(L["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,nt.dispatch(b["j"]),n.next=4,m["a"].get(e);case 4:return r=n.sent,c=r.data,a(g["h"],c),nt.dispatch(b["c"]),n.abrupt("return",c);case 9:case"end":return n.stop()}}),n)})))()})),s),B=(u={},Object(h["a"])(u,g["i"],(function(t,e){t.pages=e.results})),Object(h["a"])(u,g["h"],(function(t,e){t.currentPage=e})),Object(h["a"])(u,g["e"],(function(t,e){t.pageWeb=e.page,t.numPageWeb=e.num_page,t.countPage=e.count,t.hasNextPage=e.has_next})),u),R={state:T,getters:q,actions:_,mutations:B},E={playLists:[],playlist:{},pagePlayList:1,numPagePlayList:0,countPlayList:0,hasNextPlayList:!1},U={playLists:function(t){return t.playLists},playlist:function(t){return t.playlist},pagePlayList:function(t){return t.pagePlayList},numPagePlayList:function(t){return t.numPagePlayList},countPlayList:function(t){return t.countPlayList},hasNextPlayList:function(t){return t.hasNextPlayList}},H=(i={},Object(h["a"])(i,b["g"],(function(t,e){var n=t.commit;return m["b"].query(e).then((function(t){var e=t.data;n(g["k"],e),n(g["f"],e)}))})),Object(h["a"])(i,b["f"],(function(t,e){return Object(L["a"])(regeneratorRuntime.mark((function n(){var a,r,c,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,r=e.params,c=e.slug,nt.dispatch(b["j"]),nt.dispatch(b["c"]),n.next=6,m["b"].query(r,c);case 6:return o=n.sent,s=o.data,a(g["j"],s),n.abrupt("return",s);case 10:case"end":return n.stop()}}),n)})))()})),Object(h["a"])(i,b["n"],(function(t,e){t.commit;return m["b"].delete(e)})),i),F=(l={},Object(h["a"])(l,g["k"],(function(t,e){t.playLists=e.results})),Object(h["a"])(l,g["f"],(function(t,e){t.pagePlayList=e.page,t.numPagePlayList=e.num_page,t.countPlayList=e.count,t.hasNextPlayList=e.has_next})),Object(h["a"])(l,g["j"],(function(t,e){t.playlist=e})),l),I={state:E,getters:U,actions:H,mutations:F},J={topics:[]},W={topics:function(t){return t.topics}},z=Object(h["a"])({},b["k"],(function(t,e){var n=t.commit;return m["d"].query(e).then((function(t){var e=t.data;n(g["o"],e)}))})),D=Object(h["a"])({},g["o"],(function(t,e){t.topics=e.results})),X={state:J,getters:W,actions:z,mutations:D},M=(n("ac1f"),n("841c"),{search:""}),G={search:function(t){return t.search}},K={},V=Object(h["a"])({},g["n"],(function(t,e){t.search=e})),Y={state:M,getters:G,actions:K,mutations:V},Z={message:""},Q={message:function(t){return t.message}},$={},tt=Object(h["a"])({},g["a"],(function(t,e){t.message=e})),et={state:Z,getters:Q,actions:$,mutations:tt};f["default"].use(d["a"]);var nt=e["a"]=new d["a"].Store({modules:{auth:w,post:C,page:R,playlist:I,topic:X,search:Y,home:et}})},"56d7":function(t,e,n){"use strict";n.r(e);n("4160"),n("45fc"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("1dce"),c=n.n(r),o=n("5f5b"),s=(n("f9e3"),n("2dd8"),n("10ca"),n("a5d8"),n("c898"),n("0d39"),n("e37d")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(this.$route.meta.layout||"base-layout",{tag:"component"}),n("VMessageBottom")],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-main",staticStyle:{"min-height":"100vh"},attrs:{id:"app"}},[n("TheNav"),n("TheHeader",{directives:[{name:"show",rawName:"v-show",value:t.isAuthenticated,expression:"isAuthenticated"}],staticClass:"mb-6"}),n("main",{staticClass:"container my-4"},[n("router-view")],1)],1)},f=[],d=n("5530"),h=n("2f62"),m=n("05cc"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-scroller bg-white box-shadow border-bottom"},[n("div",{staticClass:"container"},[n("div",{staticClass:"d-flex justify-content-between"},[n("nav",{staticClass:"nav nav-underline"},[n("div",{staticClass:"nav-link text-dark mb-0"},[t._v(" Go to: ")]),n("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Bài viết xem sau",expression:"'Bài viết xem sau'"}],staticClass:"nav-link text-dark mb-0 h5",attrs:{href:"#"}},[n("i",{staticClass:"ti ti-timer"})]),n("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Danh sách của tôi",expression:"'Danh sách của tôi'"}],staticClass:"nav-link text-dark mb-0 h5",attrs:{to:{name:"my-playlist"}}},[n("i",{staticClass:"ti ti-layers-alt"})]),n("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Bài viết đã thích",expression:"'Bài viết đã thích'"}],staticClass:"nav-link text-dark mb-0 h5",attrs:{to:{name:"posts-liked"}}},[n("i",{staticClass:"ti ti-heart"})])],1),t._m(0)])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-1"},[n("a",{staticClass:"icon icon-shape icon-shape-success rounded-circle",attrs:{href:"#"}},[n("i",{staticClass:"ti ti-plus"})])])}],g={name:"TheHeader",computed:Object(d["a"])({},Object(h["b"])(["currentUser"]))},v=g,k=n("2877"),y=Object(k["a"])(v,p,b,!1,null,null,null),P=y.exports,w={name:"Base",computed:Object(d["a"])({},Object(h["b"])(["isAuthenticated"])),components:{TheNav:m["a"],TheHeader:P}},A=w,x=Object(k["a"])(A,l,f,!1,null,null,null),j=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.message&&t.dismissCountDown,expression:"message && dismissCountDown"}],staticClass:"message-bottom"},[n("b-alert",{attrs:{show:t.message&&t.dismissCountDown,variant:"success",dismissible:""},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.message)+" ")])],1)},C=[],L=n("90d2"),N={name:"VMessageBottom",data:function(){return{dismissCountDown:0}},computed:Object(d["a"])({},Object(h["b"])(["message"])),watch:{message:function(){this.dismissCountDown=5}},methods:{countDownChanged:function(t){this.dismissCountDown=t,0===t&&this.$store.commit(L["a"],"")}}},S=N,T=Object(k["a"])(S,O,C,!1,null,null,null),q=T.exports,_={name:"App",components:{"base-layout":j,VMessageBottom:q}},B=_,R=Object(k["a"])(B,u,i,!1,null,null,null),E=R.exports,U=n("8c4f");a["default"].use(U["a"]);var H=new U["a"]({mode:"history",linkActiveClass:"color-active",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-a605d0e2"),n.e("chunk-33a3d25e")]).then(n.bind(null,"bb51"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-695dfe75").then(n.bind(null,"a55b"))},meta:{layout:function(){return n.e("chunk-2d0cc614").then(n.bind(null,"4e4a"))}}},{path:"/register",name:"register",component:function(){return n.e("chunk-affa8e92").then(n.bind(null,"73cf"))},meta:{layout:function(){return n.e("chunk-2d0cc614").then(n.bind(null,"4e4a"))}}},{path:"/setting",name:"setting",component:function(){return n.e("chunk-2d0ccbf6").then(n.bind(null,"4ef5"))}},{path:"/posts",name:"posts",component:function(){return Promise.all([n.e("chunk-a605d0e2"),n.e("chunk-2d0ac1cc")]).then(n.bind(null,"17c3"))}},{path:"/pages",name:"pages",component:function(){return n.e("chunk-181639a0").then(n.bind(null,"ee3e"))}},{path:"/pages/:name",name:"page-detail",component:function(){return Promise.all([n.e("chunk-a605d0e2"),n.e("chunk-2d0b1638")]).then(n.bind(null,"2048"))},meta:{layout:function(){return n.e("chunk-2d22615c").then(n.bind(null,"e6c8"))}}},{path:"/playlist",name:"play-list",component:function(){return n.e("chunk-52c23b3d").then(n.bind(null,"fddd"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-4aa5c498").then(n.bind(null,"2d3b"))}},{path:"/my-playlist",name:"my-playlist",component:function(){return n.e("chunk-6731d658").then(n.bind(null,"2ece"))},meta:{loginRequired:!0}},{path:"/posts-liked",name:"posts-liked",component:function(){return Promise.all([n.e("chunk-a605d0e2"),n.e("chunk-2d0e4926")]).then(n.bind(null,"9191"))},meta:{loginRequired:!0}},{path:"/playlist/:slug",name:"playlist-detail",component:function(){return n.e("chunk-5db9f4a8").then(n.bind(null,"b4ac"))},props:!0},{path:"*",name:"not-found",component:function(){return n.e("chunk-5a7e51b7").then(n.bind(null,"9703"))}}]}),F=n("4360");function I(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var J={created:function(){var t=I(this);t&&(document.title="DevBlog - ".concat(t))}},W={methods:{gotoLogin:function(){this.$router.push({name:"login",query:{redirect:this.$route.path}}),this.$store.commit(L["d"],["Bạn phải đăng nhập để tiếp tục"])}}},z=n("5ce5"),D=n("6c33");[c.a,o["a"],s["a"]].forEach((function(t){return a["default"].use(t)})),z["e"].init(),H.beforeEach((function(t,e,n){Promise.all([F["a"].dispatch(D["b"])]).then((function(e){var a=t.matched.some((function(t){return t.meta.loginRequired}))&&!e[0];a&&n({name:"login",query:{redirect:t.path}}),n()}))})),[W,J].forEach((function(t){return a["default"].mixin(t)})),a["default"].config.productionTip=!1,new a["default"]({router:H,store:F["a"],render:function(t){return t(E)}}).$mount("#app")},"5ce5":function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return m}));n("99af");var a=n("2b0e"),r=n("bc3a"),c=n.n(r),o=n("a7fe"),s=n.n(o),u="https://videv-blog.herokuapp.com/api/v1",i=n("00c2"),l={init:function(){a["default"].use(s.a,c.a),a["default"].axios.defaults.baseURL=u,a["default"].axios.defaults.xsrfCookieName="csrftoken",a["default"].axios.defaults.xsrfHeaderName="X-CSRFTOKEN"},setHeader:function(){a["default"].axios.defaults.headers.common["Authorization"]="Bearer ".concat(i["a"].getAccessToken())},deleteHeader:function(){delete a["default"].axios.defaults.headers.common["Authorization"]},query:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=n?"".concat(n,"/"):n;return a["default"].axios.get("".concat(t,"/").concat(r),e).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e?"".concat(e,"/"):e;return a["default"].axios.get("".concat(t,"/").concat(n)).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))},post:function(t,e){return a["default"].axios.post("".concat(t,"/"),e)},update:function(t,e,n){var r=e?"".concat(e,"/"):e;return a["default"].axios.patch("".concat(t,"/").concat(r),n)},put:function(t,e){return a["default"].axios.put("".concat(t,"/"),e)},delete:function(t,e){var n=e?"".concat(e,"/"):e;return a["default"].axios.delete("".concat(t,"/").concat(n)).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))}},f=(e["e"]=l,{query:function(t){return l.query("posts",{params:t})},update:function(t){return l.update("posts",t)}}),d={query:function(t){return l.query("websites",{params:t})},get:function(t){return l.get("websites",t)},update:function(t){return l.update("websites",t)}},h={query:function(t,e){return l.query("playlists",{params:t},e)},get:function(t){return l.get("playlists",t)},update:function(t,e){return l.update("playlists",t,e)},delete:function(t){return l.delete("playlists",t)}},m={query:function(t){return l.query("topics",{params:t})}}},"6c33":function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"i",(function(){return c})),n.d(e,"h",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"g",(function(){return i})),n.d(e,"f",(function(){return l})),n.d(e,"k",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"l",(function(){return h})),n.d(e,"o",(function(){return m})),n.d(e,"m",(function(){return p})),n.d(e,"b",(function(){return b})),n.d(e,"n",(function(){return g}));var a="fetchStart",r="fetchEnd",c="fetchPosts",o="fetchPost",s="fetchPages",u="fetchPage",i="fetchPlayLists",l="fetchPlayList",f="fetchTopics",d="changeLayout",h="login",m="register",p="logout",b="checkAuth",g="playlistDelete"},"90d2":function(t,e,n){"use strict";n.d(e,"m",(function(){return a})),n.d(e,"l",(function(){return r})),n.d(e,"g",(function(){return c})),n.d(e,"i",(function(){return o})),n.d(e,"h",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"k",(function(){return i})),n.d(e,"j",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"o",(function(){return d})),n.d(e,"n",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"a",(function(){return g}));var a="setPosts",r="setPost",c="setInfoPost",o="setPages",s="setPage",u="setInfoPage",i="setPlayLists",l="setPlayList",f="setInfoPlayList",d="setTopics",h="setSearch",m="setAuth",p="purgeAuth",b="setErrors",g="setMessage"},c898:function(t,e,n){}});
//# sourceMappingURL=app.b197b8b4.js.map