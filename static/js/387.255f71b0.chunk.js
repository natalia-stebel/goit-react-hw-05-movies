"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{1757:function(t,n,e){e.d(n,{KS:function(){return o},TW:function(){return d},hG:function(){return f},z1:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var s="a2d752373b5fc20ba7d7c26c66d25d31",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/all/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},4387:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),i=e(1757),s=e(2791),o=e(6871),p=e(6553),f=e(184);function d(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],d=(0,o.UO)().id;(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.TW)(d);case 3:n=t.sent,c(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[d]);return(0,f.jsx)(f.Fragment,{children:e&&(0,f.jsx)("ul",{children:e.map((function(t){return(0,f.jsxs)("li",{children:[t.profile_path," ? (",(0,f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(t.profile_path),alt:t.name}),") :",p,(0,f.jsx)("p",{children:t.name}),(0,f.jsxs)("p",{children:["Character: ",t.character||"Unknown"]})]},t.cast_id)}))})})}},6553:function(t,n,e){t.exports=e.p+"static/media/error.c09d8165f1834217eec3.jpg"}}]);
//# sourceMappingURL=387.255f71b0.chunk.js.map