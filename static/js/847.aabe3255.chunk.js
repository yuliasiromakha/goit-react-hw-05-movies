"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{847:function(e,n,i){i.r(n);var s=i(439),t=i(791),r=i(689),o=i(87),c=(i(62),i(184));n.default=function(){var e=(0,r.UO)().movieId,n=(0,t.useState)(null),i=(0,s.Z)(n,2),a=i[0],l=i[1],h=(0,r.TH)();return(0,t.useEffect)((function(){fetch("".concat("https://api.themoviedb.org","/3/movie/").concat(e,"?api_key=").concat("84c9ab04e100be4662cee8d4849b6920")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){l(e)})).catch((function(e){return console.log("Error fetching movie:",e),(0,c.jsx)("p",{children:"Sorry, no movie was found"})}))}),[e]),a?(console.log(h),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.rU,{to:h.state.from,className:"button",children:"Go back"}),(0,c.jsxs)("div",{className:"movie_section",children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a.poster_path),alt:a.title,height:400}),(0,c.jsxs)("div",{className:"movie_info",children:[(0,c.jsx)("h2",{children:a.title}),(0,c.jsxs)("p",{children:["User Score: ",a.vote_average]}),(0,c.jsx)("h3",{children:"Overview"}),(0,c.jsx)("p",{className:"overview",children:a.overview}),(0,c.jsx)("h3",{children:"Genres"}),(0,c.jsx)("p",{children:a.genres.map((function(e){return(0,c.jsxs)("span",{children:[e.name,", "]},e.id)}))})]})]}),(0,c.jsxs)("div",{className:"additional_info",children:[(0,c.jsx)("p",{children:"Additional information"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(o.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(o.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]}),(0,c.jsx)(r.j3,{})]})):(0,c.jsx)("div",{children:"Sorry, no movie was found"})}},62:function(){}}]);
//# sourceMappingURL=847.aabe3255.chunk.js.map