"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{847:function(e,n,i){i.r(n);var t=i(439),c=i(791),s=i(689),r=i(87),o=(i(62),i(184));n.default=function(){var e=(0,s.UO)().movieId,n=(0,c.useState)(null),i=(0,t.Z)(n,2),a=i[0],l=i[1];(0,c.useEffect)((function(){fetch("".concat("https://api.themoviedb.org","/3/movie/").concat(e,"?api_key=").concat("84c9ab04e100be4662cee8d4849b6920")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){l(e)})).catch((function(e){console.log("Error fetching movie:",e)}))}),[e]);return a?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.rU,{to:"/",className:"button",onClick:function(){},children:"Go back"}),(0,o.jsxs)("div",{className:"movie_section",children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a.poster_path),alt:a.title,height:400}),(0,o.jsxs)("div",{className:"movie_info",children:[(0,o.jsx)("h2",{children:a.title}),(0,o.jsxs)("p",{children:["User Score: ",a.vote_average]}),(0,o.jsx)("h3",{children:"Overview"}),(0,o.jsx)("p",{className:"overview",children:a.overview}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("p",{children:a.genres.map((function(e){return(0,o.jsxs)("span",{children:[e.name,", "]},e.id)}))})]})]}),(0,o.jsxs)("div",{className:"additional_info",children:[(0,o.jsx)("p",{children:"Additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]}),(0,o.jsx)(s.j3,{})]}):(0,o.jsx)("div",{children:"Loading"})}},62:function(){}}]);
//# sourceMappingURL=847.b9ce85b7.chunk.js.map