"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{1138:function(e,t,n){n.d(t,{Z:function(){return s}});n(2791);var r=n(501),a=n(6871),c="MovieGallery_galleryList__M2SqI",u="MovieGallery_galleryItem__1rxQO",i=n(184);function s(e){var t=e.movies,n=(0,a.TH)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("ul",{className:c,children:[t&&t.map((function(e){var t=e.title,a=e.id,c=e.poster_path;return(0,i.jsx)("li",{className:u,children:(0,i.jsxs)(r.rU,{to:"/movies/".concat(a),state:{from:n},children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:t}),(0,i.jsx)("p",{children:t})]})},a)})),(0,i.jsx)(a.j3,{})]})})}},1757:function(e,t,n){n.d(t,{KS:function(){return o},TW:function(){return l},hG:function(){return f},z1:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),i=n.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var s="a2d752373b5fc20ba7d7c26c66d25d31",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/trending/all/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7165:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(885),a=n(2791),c=n(1757),u=n(6066),i=(n(5462),n(1138)),s="idle",o="pending",p="resolved",f="rejected",l=n(184);function d(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],d=t[1],v=(0,a.useState)("pending"),h=(0,r.Z)(v,2),m=h[0],g=h[1];if((0,a.useEffect)((function(){g(o),c.KS().then((function(e){d(e.results),g(p)})).catch((function(e){g(f)}))}),[]),m!==s&&m!==o)return m===p?(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Trending today"}),n&&(0,l.jsx)(i.Z,{movies:n})]}):m===m.REJECTED?u.Am.error(":( Try again",{position:"top-center"}):void u.Ix}}}]);
//# sourceMappingURL=Home.c458282e.chunk.js.map