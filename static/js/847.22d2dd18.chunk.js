"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{847:function(e,n,i){i.r(n);var s=i(439),t=i(791),o=i(689),r=i(87),c=(i(62),i(184));n.default=function(){var e,n,i=(0,o.UO)().movieId,a=(0,t.useState)(null),l=(0,s.Z)(a,2),h=l[0],d=l[1],u=(0,o.TH)(),v=(0,t.useRef)(null!==(e=null===(n=u.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,t.useEffect)((function(){fetch("".concat("https://api.themoviedb.org","/3/movie/").concat(i,"?api_key=").concat("84c9ab04e100be4662cee8d4849b6920")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){d(e)})).catch((function(e){return console.log("Error fetching movie:",e),(0,c.jsx)("p",{children:"Sorry, no movie was found"})}))}),[i]),h?(console.log(u),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.rU,{to:v.current,className:"button",children:"Go back"}),(0,c.jsxs)("div",{className:"movie_section",children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(h.poster_path),alt:h.title,height:400}),(0,c.jsxs)("div",{className:"movie_info",children:[(0,c.jsx)("h2",{children:h.title}),(0,c.jsxs)("p",{children:["User Score: ",h.vote_average]}),(0,c.jsx)("h3",{children:"Overview"}),(0,c.jsx)("p",{className:"overview",children:h.overview}),(0,c.jsx)("h3",{children:"Genres"}),(0,c.jsx)("p",{children:h.genres.map((function(e){return(0,c.jsxs)("span",{children:[e.name,", "]},e.id)}))})]})]}),(0,c.jsxs)("div",{className:"additional_info",children:[(0,c.jsx)("p",{children:"Additional information"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(i,"/cast"),children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(i,"/reviews"),children:"Reviews"})})]})]}),(0,c.jsx)(o.j3,{})]})):(0,c.jsx)("div",{children:"Sorry, no movie was found"})}},62:function(){}}]);
//# sourceMappingURL=847.22d2dd18.chunk.js.map