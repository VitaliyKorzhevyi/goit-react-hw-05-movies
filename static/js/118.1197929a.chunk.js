"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[118],{118:function(e,r,n){n.r(r),n.d(r,{default:function(){return i}});var t=n(439),a=n(791),s=n(689),c=n(390),u=n(184),i=function(){var e=(0,s.UO)().movieId,r=(0,a.useState)({}),n=(0,t.Z)(r,2),i=n[0],o=n[1];(0,a.useEffect)((function(){(0,c.Hu)(e).then((function(e){o(e.results)}))}),[e]);return console.log("reviews",i),(0,u.jsxs)("div",{className:"container-reviews",children:[(0,u.jsx)("h3",{children:"Reviews"}),i.length?(0,u.jsx)("ul",{className:"list-reviews",children:i.map((function(e){var r=e.id,n=e.author,t=e.author_details,a=e.url,s=e.content;return(0,u.jsx)("li",{children:(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"title-review",children:[(0,u.jsx)("p",{children:(0,u.jsxs)("strong",{children:["A review by ",n]})}),(0,u.jsxs)("span",{className:"rating-info",children:[(0,u.jsx)("i",{className:"bx bxs-star"}),t.rating,".0"]})]}),(0,u.jsxs)("p",{children:[s.length>400?"".concat(s.slice(0,400),"..."):s,s.length>400&&(0,u.jsx)("a",{href:a,className:"more-reviews",children:(0,u.jsx)("strong",{children:" Read more"})})]})]})},r)}))}):(0,u.jsx)("p",{children:"We don't have any information about reviews of this movie."})]})}},390:function(e,r,n){n.d(r,{Eb:function(){return f},Hu:function(){return l},Mu:function(){return o},Xy:function(){return i}});var t=n(861),a=n(757),s=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(r),e.prev=1,e.next=4,c.Z.get(n,{params:{api_key:"da273fadec6e0549daf77f4eda281870"}});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("trending/movie/day?");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(r,"/credits"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(r,"/reviews"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=118.1197929a.chunk.js.map