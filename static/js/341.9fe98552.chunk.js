"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[341],{341:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(439),s=n(791),a=n(689),i=n(87),c=n(390),o=n(184),u=function(e){var t,n,u=e.onGetCast,l=e.onGetReviews,d=(0,a.UO)().movieId,h=null!==(t=null===(n=(0,a.TH)().state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/",p=(0,s.useState)({}),f=(0,r.Z)(p,2),m=f[0],x=f[1],v=(0,s.useMemo)((function(){return(0,c.Mu)(d)}),[d]),j=(0,s.useMemo)((function(){return(0,c.Eb)(d)}),[d]),b=(0,s.useMemo)((function(){return(0,c.Hu)(d)}),[d]);(0,s.useEffect)((function(){v.then(x),j.then((function(e){u(e.cast)})),b.then((function(e){l(e.results)}))}),[v,j,b,u,l]),console.log("movies",m);var g=m.title,w=m.overview,k=m.vote_average,N=m.poster_path,y=m.genres,_=m.backdrop_path,Z=m.runtime,M=m.release_date,U=m.production_countries,C=m.original_language,R=m.popularity,E=m.homepage;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"container-details",children:[(0,o.jsx)("div",{className:"container-btn-last",children:(0,o.jsx)(i.rU,{to:h,children:(0,o.jsx)("button",{type:"button",children:(0,o.jsx)("i",{className:"bx bx-chevron-left bx-sm bx-fade-left-hover"})})})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{className:"background-image",src:"https://image.tmdb.org/t/p/w500/".concat(_),alt:g}),(0,o.jsxs)("div",{className:"details-content",children:[(0,o.jsxs)("ul",{className:"details-list",children:[(0,o.jsx)("li",{children:(0,o.jsxs)("h2",{className:"title-details",children:[g," (",M&&M.slice(0,4),")"]})}),(0,o.jsxs)("li",{className:"item-details one-info",children:[(0,o.jsx)("p",{children:U&&U.map((function(e){return e.name})).join(", ")}),(0,o.jsx)("p",{children:y&&y.map((function(e){return e.name})).join(", ")})]}),(0,o.jsxs)("li",{className:"item-details one-info",children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Language: "}),C]}),(0,o.jsxs)("p",{children:[Z," minutes / ",Math.round(Z/60)," hours"]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Range:"})," ",k]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Popularity:"})," ",Math.floor(10*R)/10]})]}),(0,o.jsx)("li",{className:"item-details three-info",children:(0,o.jsx)("p",{children:w})}),(0,o.jsxs)("li",{className:"item-details btns-info",children:[(0,o.jsxs)("button",{type:"button",className:"btn-watch",children:[(0,o.jsx)("i",{className:"bx bx-right-arrow"}),(0,o.jsx)("a",{href:E,children:"Watch"})]}),(0,o.jsx)(i.rU,{to:"cast",children:(0,o.jsx)("button",{type:"button",className:"btn-link",children:"Top Billed Cast"})}),(0,o.jsx)(i.rU,{to:"reviews",children:(0,o.jsx)("button",{type:"button",className:"btn-link",children:"Reviews"})})]})]}),(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(N),alt:g})]})]})]}),(0,o.jsx)(a.j3,{})]})}},390:function(e,t,n){n.d(t,{Eb:function(){return l},Hu:function(){return d},Mu:function(){return u},Xy:function(){return o}});var r=n(861),s=n(757),a=n.n(s),i=n(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t),e.prev=1,e.next=4,i.Z.get(n,{params:{api_key:"da273fadec6e0549daf77f4eda281870"}});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("trending/movie/day?");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("movie/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("movie/".concat(t,"/credits"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("movie/".concat(t,"/reviews"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=341.9fe98552.chunk.js.map