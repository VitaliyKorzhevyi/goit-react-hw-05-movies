"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[288],{9331:function(e,r,t){t.d(r,{V:function(){return s},Z:function(){return c}});var n=t(6154),a=t(184),c=function(){return(0,a.jsx)("div",{className:"container-loader",children:(0,a.jsx)(n.BR,{height:"80",width:"80",radius:"9",color:"white",ariaLabel:"three-dots-loading"})})},s=function(){return(0,a.jsx)(n.CJ,{visible:!0,height:"80",width:"80",color:"#ffd447",ariaLabel:"triangle-loading",wrapperStyle:{},wrapperClass:""})}},5915:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(9439),a=t(2791),c=t(1087),s=t(7689),i=t(4390),u=t(9331),o=t.p+"static/media/placeholderBackdropSearch.e9ef355049c0a83ce743.jpg",l=t(5220),p=t(184),h=function(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],h=r[1],f=(0,c.lr)(),d=(0,n.Z)(f,2),m=d[0],v=d[1],x=(0,s.TH)();(0,a.useEffect)((function(){var e=m.get("name");null!==e&&(0,i.gH)(e).then((function(e){h(e.results)}))}),[m]);return(0,p.jsxs)("div",{className:"container-search",children:[(0,p.jsx)("div",{className:"container-search-input",children:(0,p.jsx)("input",{type:"text",className:"input-search",placeholder:"Search movie...",value:m.get("name")||"",onChange:function(e){e.preventDefault();var r=e.target.value;v(""!==r&&{name:r})}})}),t.length>0?(0,p.jsx)("ul",{className:"list-search",children:t.map((function(e){var r=e.id,t=e.original_title,n=e.title,a=e.poster_path,s=e.backdrop_path,i=e.original_language,u=e.vote_average,h=e.vote_count,f=e.release_date;return(0,p.jsx)(c.rU,{state:{from:x},to:"".concat(r),children:(0,p.jsxs)("li",{className:"item-search",children:[(0,p.jsx)("div",{className:"img-search-backdrop",children:(0,p.jsx)("img",{src:s?"https://image.tmdb.org/t/p/w500/".concat(s):o,alt:n})}),(0,p.jsxs)("ul",{className:"main-info-search",children:[(0,p.jsx)("li",{children:(0,p.jsx)("img",{className:"img-search-poster",src:a?"https://image.tmdb.org/t/p/w500/".concat(a):l,alt:n})}),(0,p.jsxs)("li",{className:"info-search-item",children:[(0,p.jsx)("p",{className:"title-search-item",children:t}),(0,p.jsxs)("p",{className:"text-search-item",children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"Original language: "}),i]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"Release date: "}),f]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("strong",{children:"Rating: "}),Math.floor(10*u)/10,"(",h,")"]})]})]})]})]})},r)}))}):(0,p.jsx)("div",{className:"placeholder-search",children:(0,p.jsx)(u.V,{})})]})}},4390:function(e,r,t){t.d(r,{Eb:function(){return p},Hu:function(){return h},Mu:function(){return l},Xy:function(){return o},gH:function(){return f}});var n=t(5861),a=t(7757),c=t.n(a),s=t(5294),i=t(2094);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(r),e.prev=1,e.next=4,s.Z.get(t,{params:{api_key:"da273fadec6e0549daf77f4eda281870"}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),i.Am.error("Error"),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("trending/movie/day?");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(r,"/credits"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(r,"/reviews"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("search/movie?query=".concat(r,"&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},5220:function(e,r,t){e.exports=t.p+"static/media/placeholderPosterSearch.8541b50faee003fe31f7.png"}}]);
//# sourceMappingURL=288.a83bf7f7.chunk.js.map