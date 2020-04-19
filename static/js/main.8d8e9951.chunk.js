(this["webpackJsonpreact_movie-app"]=this["webpackJsonpreact_movie-app"]||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/time.82835079.jpg"},46:function(e,t,n){e.exports=n(75)},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(36),l=n.n(i),o=n(17),c=n(18),u=n(6),s=n.n(u),d=n(11),p=n(12),m=n(13),f=n(15),v=n(14),g=n(4),h=n(2),b=n(1),x=n(9),E=n(3),y=n.n(E);function _(){var e=Object(h.a)(["\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 150px);\n    text-align:center;\n    grid-gap:20px;\n"]);return _=function(){return e},e}function k(){var e=Object(h.a)(["\n    font-size: 2rem;\n    font-weight: 600;\n    border-bottom:3px solid #FC427B;\n    /* line-height:1.7; */\n    &:hover{\n        color: #FC427B;\n        border-bottom:3px solid white;\n        transition: color 0.5s linear;\n    }\n"]);return k=function(){return e},e}function j(){var e=Object(h.a)(["\n    padding-top:10px;\n    &:not(:last-child) {\n        margin-bottom: 50px;\n    }\n"]);return j=function(){return e},e}var w=b.default.div(j()),O=b.default.span(k()),M=b.default.div(_()),A=function(e){var t=e.title,n=e.children;return r.a.createElement(w,null,r.a.createElement(O,null,t),r.a.createElement(M,null,n))};A.propsTypes={title:y.a.string.isRequired,children:y.a.oneOfType([y.a.arrayOf(y.a.node),y.a.node])};var F=A;function z(){var e=Object(h.a)(["\n    font-size:3rem;\n    text-align:center;\n    /* justify-content:center; */\n    /* align-items:center; */\n    &>i{\n        animation: loadings 0.5s linear infinite;\n    }\n    &>div{\n        font-size:2rem;\n    }\n    @keyframes loadings{\n        0%{\n            transform:rotateZ(0);\n        }\n        100%{\n            transform:rotateZ(360deg);\n        }\n    }\n"]);return z=function(){return e},e}var C=b.default.div(z()),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,r.a.createElement("i",{className:"fas fa-spinner"}),r.a.createElement("div",null,"Loading")))};function S(){var e=Object(h.a)(["\n    color:#e84118;\n    font-weight:600;\n    font-size:3rem;\n    animation: colors 4s linear infinite;\n\n    @keyframes colors{\n        0%{\n            color:#A3CB38;\n        }\n        30%{\n            color:#EA2027;\n        }\n        60%{\n            color:#0652DD;\n        }\n        100%{\n            color:#A3CB38;\n        }\n    }\n"]);return S=function(){return e},e}function U(){var e=Object(h.a)(["\n    width:100%;\n    height:50vh;\n    display:flex;\n    align-items:flex-end;\n    justify-content:center;\n\n"]);return U=function(){return e},e}var T=b.default.div(U()),P=b.default.span(S()),L=function(e){var t=e.text;return r.a.createElement(T,null,r.a.createElement(P,null,t))};L.protoType={text:y.a.string.isRequired};var B=L;function D(){var e=Object(h.a)(["\n    width:100%;\n    position:relative;\n    &:hover {\n        ","{\n            opacity:1;\n        }\n        ","{\n            opacity:1;\n        }\n        ","\n        {\n            color:#ff4757;\n        }\n        ","{\n            opacity:1;\n        }\n    }\n"]);return D=function(){return e},e}function N(){var e=Object(h.a)(["\n    font-size:1rem;\n    color:white;\n    opacity:0.5;\n"]);return N=function(){return e},e}function q(){var e=Object(h.a)(["\n    display:block;\n    /* color:white; */\n    margin-top:30px;\n    margin-bottom:10px;\n    color:#6D214F;\n    font-size:1.5rem;\n    &:hover{\n        color:#ff4757;\n    }\n    transition:color 0.5s ease-in-out;\n"]);return q=function(){return e},e}function V(){var e=Object(h.a)(["\n    position:absolute;\n    top:3px;\n    left:3px;\n    opacity:0;\n    color:#32ff7e;\n    font-size:1rem;\n    &>span{\n        color:yellow;\n    }\n    transition:opacity 0.4s linear;\n"]);return V=function(){return e},e}function I(){var e=Object(h.a)(["\n    background-image:url(",");\n    width:100%;\n    height:200px;\n    border-radius:5px;\n    background-size:cover;\n    background-position:center center;\n    opacity:0.4;\n    transition: opacity 0.4s linear;\n"]);return I=function(){return e},e}function J(){var e=Object(h.a)(["\n    font-size:0.8rem;\n    width:100%;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    justify-content:space-between;\n    align-items:center;\n"]);return J=function(){return e},e}var Z=b.default.div(J()),G=b.default.div(I(),(function(e){return"".concat(e.bgUrl)})),H=b.default.span(V()),K=b.default.span(q()),Q=b.default.span(N()),W=b.default.div(D(),G,H,K,Q),X=function(e){var t=e.id,a=e.imageUrl,i=e.title,l=e.rating,c=e.year,u=e.isMovie,s=void 0!==u&&u;e.isAdult;return r.a.createElement(o.b,{to:s?"movie/".concat(t):"tv/".concat(t)},r.a.createElement(Z,null,r.a.createElement(W,null,r.a.createElement(G,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(20)}),r.a.createElement(H,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2605"),l,"/10"),r.a.createElement(K,null,i&&i.length>15?"".concat(i.substring(0,15),"..."):i),r.a.createElement(Q,null,c))))};X.prototype={id:y.a.number.isRequired,imageUrl:y.a.string,title:y.a.string.isRequired,number:y.a.number,year:y.a.string,isMovie:y.a.bool,isAdult:y.a.bool};var Y=X;function $(){var e=Object(h.a)(["\n  padding: 0px 10px;\n"]);return $=function(){return e},e}var ee=b.default.div($()),te=function(e){var t=e.getPopular,n=e.upComing,a=e.topRated,i=e.tvtopRated,l=e.getLatest,o=e.today,c=e.error,u=e.loading;e.test;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Flix")),u?r.a.createElement(R,null):r.a.createElement(ee,null,n&&n.length>0&&r.a.createElement(F,{title:"\uac1c\ubd09 \uc608\uc815 \uc601\ud654"},n.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date,isMovie:!0},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),t&&t.length>0&&r.a.createElement(F,{title:"\uc778\uae30 \uc601\ud654"},t.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date,isMovie:!0},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),a&&a.length>0&&r.a.createElement(F,{title:"\ud3c9\uc810 \ub192\uc740 \uc601\ud654"},a.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date,isMovie:!0},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),i&&i.length>0&&r.a.createElement(F,{title:"\ud3c9\uc810 \ub192\uc740 TV"},i.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date,isMovie:!1},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),l&&l.length>0&&r.a.createElement(F,{title:"sdf"},l.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date,isMovie:!1},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),o&&o.length>0&&r.a.createElement(F,{title:"\uc624\ub298 \ubc29\uc601 tv"},o.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date,isMovie:!1},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),c&&r.a.createElement(B,{text:c})))},ne=n(43),ae=n.n(ne),re=n(44);n.n(re).a.config();var ie=ae.a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"349254ebae30eb6fc6ef0a307c64feca",language:"ko"}}),le=function(){return ie.get("tv/popular")},oe=function(){return ie.get("tv/airing_today")},ce=function(){return ie.get("tv/on_the_air")},ue=function(){return ie.get("tv/top_rated")},se=function(){return ie.get("tv/latest")},de=function(e){return ie.get("tv/".concat(e),{params:{append_to_response:"videos"}})},pe=function(e){return ie.get("search/tv",{params:{query:e}})},me=function(){return ie.get("movie/now_playing")},fe=function(){return ie.get("movie/popular")},ve=function(){return ie.get("movie/upcoming")},ge=function(){return ie.get("movie/top_rated")},he=function(){return ie.get("movie/latest")},be=function(e){return ie.get("movie/".concat(e),{params:{append_to_response:"videos"}})},xe=function(e){return ie.get("search/movie",{params:{query:e}})},Ee=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={getPopular:null,tvgetPopular:null,upComing:null,topRated:null,tvtopRated:null,getLatest:null,today:null,error:null,loading:!0,test:null},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(s.a.mark((function e(){var t,n,a,r,i,l,o,c,u,d,p,m,f,v,g;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe();case 3:return t=e.sent,n=t.data.results,e.next=7,le();case 7:return a=e.sent,r=a.data.results,e.next=11,ve();case 11:return i=e.sent,l=i.data.results,e.next=15,ge();case 15:return o=e.sent,c=o.data.results,e.next=19,ue();case 19:return u=e.sent,d=u.data.results,e.next=23,se();case 23:return p=e.sent,m=p.data.results,e.next=27,oe();case 27:return f=e.sent,v=f.data.results,e.next=31,ie.get("movie/now_playing");case 31:g=e.sent,this.setState({getPopular:n,tvgetPopular:r,upComing:l,topRated:c,tvtopRated:d,getLatest:m,today:v,test:g}),e.next=38;break;case 35:e.prev=35,e.t0=e.catch(0),this.setState({error:"Can Not Found."});case 38:return e.prev=38,this.setState({loading:!1}),e.finish(38);case 41:case"end":return e.stop()}}),e,this,[[0,35,38,41]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,this.state))}}]),n}(r.a.Component);function ye(){var e=Object(h.a)(["\n  padding: 0px 10px;\n"]);return ye=function(){return e},e}var _e=b.default.div(ye()),ke=function(e){var t=e.getPopular,n=e.today,a=e.weeklyAir,i=e.topRated,l=e.getLatest,o=e.error,c=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"TV Show")),c?r.a.createElement(R,null):r.a.createElement(_e,null,r.a.createElement(F,{title:"tv \uc778\uae30 \uc21c\uc704"},t.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date,isMovie:!1},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),r.a.createElement(F,{title:"tv \uc624\ub298 \ubc29\uc601"},n.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date,isMovie:!1},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),r.a.createElement(F,{title:"tv \uae08\uc8fc \ubc29\uc601 \ubaa9\ub85d"},a.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date,isMovie:!1},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),r.a.createElement(F,{title:"tv \ud3c9\uc810 \ub192\uc740 \uc21c\uc11c"},i.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date,isMovie:!1},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))}))),r.a.createElement(F,{title:"tv \uc81c\uc791 \uc608\uc815 \uc791\ud488"},l.length>1?l.map((function(e){var t;return r.a.createElement(Y,(t={key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average,year:e.first_air_date?e.first_air_date:"\ubbf8\uc815",isMovie:!1},Object(g.a)(t,"isMovie",!1),Object(g.a)(t,"isAdult",!0===e.adult),t))})):r.a.createElement(Y,{key:l.id,id:l.id,imageUrl:l.poster_path,title:l.name,rating:l.vote_average,year:l.first_air_date?l.first_air_date:"\ubbf8\uc815",isMovie:!1,isAdult:!0===l.adult})),o&&r.a.createElement(B,{text:o})))},je=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={getPopular:null,today:null,weeklyAir:null,topRated:null,getLatest:null,error:null,loading:!0},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(s.a.mark((function e(){var t,n,a,r,i,l,o,c,u,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le();case 3:return t=e.sent,n=t.data.results,e.next=7,oe();case 7:return a=e.sent,r=a.data.results,e.next=11,ce();case 11:return i=e.sent,l=i.data.results,e.next=15,ue();case 15:return o=e.sent,c=o.data.results,e.next=19,se();case 19:u=e.sent,d=u.data,this.setState({getPopular:n,today:r,weeklyAir:l,topRated:c,getLatest:d}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),this.setState({error:"Can Not Found."});case 27:return e.prev=27,this.setState({loading:!1}),e.finish(27);case 30:case"end":return e.stop()}}),e,this,[[0,24,27,30]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.getPopular,n=e.today,a=e.weeklyAir,i=e.topRated,l=e.getLatest,o=e.error,c=e.loading;return r.a.createElement(ke,{getPopular:t,today:n,weeklyAir:a,topRated:i,getLatest:l,error:o,loading:c})}}]),n}(r.a.Component);function we(){var e=Object(h.a)(["\n  padding: 0px 10px;\n"]);return we=function(){return e},e}var Oe=b.default.div(we()),Me=function(e){var t=e.nowPlaying,n=e.getPopular,a=e.upComing,i=e.topRated,l=e.getLatest,o=e.error,c=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Movies")),c?r.a.createElement(R,null):r.a.createElement(Oe,null,r.a.createElement(F,{title:"\ud604\uc7ac \uc0c1\uc601\uc911\uc778 \uc601\ud654"},t.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date,isMovie:!0,isAdult:!0===e.adult})}))),r.a.createElement(F,{title:"\uc778\uae30\uc788\ub294 \uc601\ud654"},n.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date,isMovie:!0,isAdult:!0===e.adult})}))),r.a.createElement(F,{title:"\uac1c\ubd09 \uc608\uc815 \uc601\ud654"},a.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date,isMovie:!0,isAdult:!0===e.adult})}))),r.a.createElement(F,{title:"\ub192\uc740 \ud3c9\uc810"},i.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date,isMovie:!0,isAdult:!0===e.adult})}))),r.a.createElement(F,{title:"\uac1c\ubd09 \uc608\uc815 \uc601\ud654"},l.length>1?l.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,year:e.release_date?e.release_date:"\ubbf8\uc815",isMovie:!0,isAdult:!0===e.adult})})):r.a.createElement(Y,{key:l.id,id:l.id,imageUrl:l.poster_path,title:l.title,rating:l.vote_average,year:l.release_date?l.release_date:"\ubbf8\uc815",isMovie:!0,isAdult:!0===l.adult})),o&&r.a.createElement(B,{text:o})))},Ae=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,getPopular:null,upComing:null,topRated:null,getLatest:null,error:null,loading:!0},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(s.a.mark((function e(){var t,n,a,r,i,l,o,c,u,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me();case 3:return t=e.sent,n=t.data.results,e.next=7,fe();case 7:return a=e.sent,r=a.data.results,e.next=11,ve();case 11:return i=e.sent,l=i.data.results,e.next=15,ge();case 15:return o=e.sent,c=o.data.results,e.next=19,he();case 19:u=e.sent,d=u.data,this.setState({nowPlaying:n,getPopular:r,upComing:l,topRated:c,getLatest:d}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),this.setState({error:"Can Not Found."});case 27:return e.prev=27,this.setState({loading:!1}),e.finish(27);case 30:case"end":return e.stop()}}),e,this,[[0,24,27,30]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(Me,this.state)}}]),n}(r.a.Component);function Fe(){var e=Object(h.a)(["\n    all:unset;\n    font-size:1.5rem;\n    color:#1B9CFC;\n    width:100%;\n    height:2rem;\n    border-bottom:1px solid #6D214F;\n    box-shadow: 0px 2.5px 5px 0px rgba(0,0,0,0.75);\n "]);return Fe=function(){return e},e}function ze(){var e=Object(h.a)(["\n    margin-bottom:50px;\n "]);return ze=function(){return e},e}function Ce(){var e=Object(h.a)(["\n  padding: 0px 20px;\n\n"]);return Ce=function(){return e},e}var Re=b.default.div(Ce()),Se=b.default.form(ze()),Ue=b.default.input(Fe()),Te=function(e){var t=e.MovieResults,n=e.tvResults,a=e.searchTerm,i=e.error,l=e.loading,o=e.handleSubmit,c=e.updateTerm;return r.a.createElement(Re,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Search")),r.a.createElement(Se,{onSubmit:o},r.a.createElement(Ue,{placeholder:"Search by Moive and TV Show  is name...",value:a,onChange:c})),l?r.a.createElement(R,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(F,{title:"\uc601\ud654"},t.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path?e.poster_path:e.backdrop_path,title:e.title,rating:e.vote_average,year:e.release_date?e.release_date:"\ubbf8\uc815",isMovie:!0,isAdult:!0===e.adult})}))),n&&n.length>0&&r.a.createElement(F,{title:"TV \ud504\ub85c\uadf8\ub7a8"},n.map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path?e.poster_path:e.backdrop_path,title:e.name,rating:e.vote_average,year:e.first_air_date?e.first_air_date:"\ubbf8\uc815",isMovie:!1,isAdult:!0===e.adult})})))),i&&r.a.createElement(B,{text:i}))},Pe=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={MovieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(d.a)(s.a.mark((function t(){var n,a,r,i,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,xe(n);case 5:return a=t.sent,r=a.data.results,t.next=9,pe(n);case 9:i=t.sent,l=i.data.results,e.setState({MovieResults:r,tvResults:l}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can Not Found."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.MovieResults,n=e.tvResults,a=e.searchTerm,i=e.error,l=e.loading;return r.a.createElement(Te,{MovieResults:t,tvResults:n,searchTerm:a,error:i,loading:l,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(r.a.Component);function Le(){var e=Object(h.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:column;\n    &>div{\n        width:140px;\n        color:red;\n        margin:5px;\n        cursor: pointer;\n    }\n    &>div>span{\n        width:500px;\n        color:white;\n        margin-top:3px;\n        line-height:1.5;\n        display:none;\n        cursor:cell;\n\n    }\n    &>div:hover{\n        width:100%;\n        &>span{\n            display:block;\n        }\n    }\n"]);return Le=function(){return e},e}function Be(){var e=Object(h.a)(["\n\n"]);return Be=function(){return e},e}function De(){var e=Object(h.a)(["\n    width:100%;\n    display:flex;\n    flex:1;\n    flex-direction:column;\n    padding:10px;\n"]);return De=function(){return e},e}function Ne(){var e=Object(h.a)(["\n    position:absolute;\n    top:-20px;\n    left:0;\n    width:100%;\n    height: calc(100vh - 55px);\n    background-image:url(",");\n    background-position:center center;\n    background-size:100% 100%;\n    z-index:-1;\n    filter:blur(6px);\n    opacity:0.7;\n\n"]);return Ne=function(){return e},e}function qe(){var e=Object(h.a)(["\n    font-size:1.3rem;\n    color:#FEA47F;\n    border-bottom:1px solid #F8EFBA;\n    &:hover{\n        color: #F97F51;\n        border-bottom:1px solid #FC427B;\n    }\n"]);return qe=function(){return e},e}function Ve(){var e=Object(h.a)(["\n    background-image:url(",");\n    width:100%;\n    height:800px;\n    background-size:100% 100%;\n    background-position:cover cover;\n    background-repeat:no-repeat;\n    display:flex;\n    flex:0.7;\n    z-index:2;\n    &:hover{\n\n\n    }\n"]);return Ve=function(){return e},e}function Ie(){var e=Object(h.a)(["\n    position:absolute;\n    top:0;\n    right:0;\n    color:white;\n    margin-bottom:1rem;\n    display:flex;\n    justify-content:flex-start;\n    font-size:1.5rem;\n    width:50px;\n    &:hover{\n        color:#ff4757;\n        transition:color 0.5s ease-in-out;\n    }\n"]);return Ie=function(){return e},e}function Je(){var e=Object(h.a)(["\n    font-size:1.8rem;\n    margin-top:0.7rem;\n"]);return Je=function(){return e},e}function Ze(){var e=Object(h.a)(["\n    text-align:center;\n    font-size:1rem;\n    font-weight:400;\n    border:1px solid red;\n    margin-top:0.7rem;\n    line-height:1.7;\n    background:#487eb0;\n    color:black;\n    flex:1;\n    border-radius:10px;\n    padding:5px;\n    box-shadow: 0px 5px 7px 0px #3B3B98;\n"]);return Ze=function(){return e},e}function Ge(){var e=Object(h.a)(["\n    font-size:1.6rem;\n    margin: 0.7rem 0 0 0;\n"]);return Ge=function(){return e},e}function He(){var e=Object(h.a)(["\n    font-size:1.8rem;\n    margin-top:0.7rem;\n\n"]);return He=function(){return e},e}function Ke(){var e=Object(h.a)(["\n    font-size:1.8rem;\n    margin-top:0.7rem;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(h.a)(["\n    font-size:3rem;\n    font-weight:700;\n    margin: 0.8rem 0;\n    line-height:1.5;\n"]);return Qe=function(){return e},e}function We(){var e=Object(h.a)(["\n    position:relative;\n    padding: 0px 10px;\n    margin-top:1rem;\n    display:flex;\n    /* flex-direction:column; */\n    @media screen and (max-width: 420px) {\n        display:block;        \n    }\n"]);return We=function(){return e},e}var Xe=b.default.div(We()),Ye=b.default.span(Qe()),$e=b.default.span(Ke()),et=b.default.span(He()),tt=b.default.div(Ge()),nt=b.default.p(Ze()),at=b.default.div(Je()),rt=Object(b.default)(o.b)(Ie()),it=b.default.div(Ve(),(function(e){return"".concat(e.bgUrl)})),lt=b.default.a(qe()),ot=b.default.div(Ne(),(function(e){return"".concat(e.bgUrl)})),ct=b.default.div(De()),ut=b.default.div(Be()),st=b.default.div(Le()),dt=function(){return alert("\ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),0},pt=1,mt=function(e){e.reasults;var t=e.error,a=e.loading,i=e.result;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Loaging")),r.a.createElement(R,null)):t?r.a.createElement(B,null):r.a.createElement(Xe,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Loaging"),r.a.createElement("link",{rel:"shortcut icon",href:i.networks&&i.networks.length>=1?"https://image.tmdb.org/t/p/original".concat(i.networks[0].logo_path):"https://image.tmdb.org/t/p/original".concat(i.poster_path)})),r.a.createElement(x.a,null,r.a.createElement("title",null,i.title?i.title:i.name)),r.a.createElement("div",{style:{display:"none"}},pt=1),r.a.createElement(rt,{to:-1!==window.location.href.indexOf("movie")?"/movie":-1!==window.location.href.indexOf("tv")?"/tv":"/"},r.a.createElement("i",{className:"fas fa-arrow-left fa-2x"})),r.a.createElement(it,{bgUrl:i.adult?n(20):i.poster_path?"https://image.tmdb.org/t/p/original".concat(i.poster_path):i.last_episode_to_air?"https://image.tmdb.org/t/p/original".concat(i.last_episode_to_air.still_path):n(20)}),r.a.createElement(ct,null,r.a.createElement(Ye,null,"movie"===document.location.href.split("#/")[1].split("/")[0]?i.title:i.name,r.a.createElement("span",{style:{fontSize:"1rem"}},"(","movie"===document.location.href.split("#/")[1].split("/")[0]?i.original_title:i.original_name,")")),r.a.createElement("div",{style:{margin:"1rem"}},r.a.createElement(lt,{href:"https://www.youtube.com/watch?v=".concat(i.videos.results.length>0?i.videos.results[0].key:""),onClick:i.videos.results.length>0?null:dt,target:"_blank"},"\uc601\uc0c1 \ubc14\ub85c\uac00\uae30(youtube)")),r.a.createElement("div",{style:{margin:"1rem"}},r.a.createElement(lt,{href:"".concat(i.homepage),onClick:i.homepage&&i.homepage.length>0?null:dt,target:"_blank"},"\uacf5\uc2dd \ud648\ud398\uc774\uc9c0")),r.a.createElement($e,null,"\ucd5c\uadfc \ubc29\uc601: ",i.release_date?i.release_date:i.last_air_date),r.a.createElement(ut,null,i.episode_run_time?i.episode_run_time.length>1?i.episode_run_time.map((function(e){return r.a.createElement(tt,{key:e},"\uc5d0\ud53c\uc18c\ub4dc",pt++,":",0===e?"":"".concat(e,"\ubd84"))})):r.a.createElement(tt,{key:i.id},i.episode_run_time>0?"".concat(i.episode_run_time,"\ubd84"):""):r.a.createElement(tt,{key:i.id},i.runtime>0?"".concat(i.runtime,"\ubd84"):"")),r.a.createElement(st,null,i.seasons?i.seasons.length>=1?i.seasons.map((function(e){return r.a.createElement("div",{key:e.id},"".concat(e.name,": ").concat(e.air_date),r.a.createElement("span",null,"".concat(e.overview)))})):r.a.createElement("div",{key:i.id},"".concat(i.seasons.name,": ").concat(i.seasons.air_date),r.a.createElement("span",null,"".concat(i.overview))):null),r.a.createElement(et,null,"\uc7a5\ub974: ",i.genres.map((function(e,t){return t===i.genres.length-1?r.a.createElement("span",{key:e.id},e.name):r.a.createElement("span",{key:e.id},e.name,",")}))),r.a.createElement(at,null,"\ud3c9\uc810: ",i.vote_average),r.a.createElement(nt,null,i.overview),t&&r.a.createElement(B,{text:t}),r.a.createElement(ot,{bgUrl:i.adult?n(20):i.poster_path?"https://image.tmdb.org/t/p/original".concat(i.backdrop_path?i.backdrop_path:i.poster_path):n(20)}))))},ft=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(p.a)(this,n),a=t.call(this,e);var r=e.location.pathname;return a.state={reasults:null,error:null,loading:!0,isMovie:r.includes("/movie/")},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(s.a.mark((function e(){var t,n,a,r,i,l,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(l=null,e.prev=6,!r){e.next=14;break}return e.next=10,be(i);case 10:o=e.sent,l=o.data,e.next=18;break;case 14:return e.next=16,de(i);case 16:c=e.sent,l=c.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can Not Found."});case 23:return e.prev=23,this.setState({loading:!1,result:l}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.reasults,n=e.error,a=e.loading,i=e.result;return r.a.createElement(r.a.Fragment,null,r.a.createElement(mt,{reasults:t,error:n,loading:a,result:i}))}}]),n}(r.a.Component);function vt(){var e=Object(h.a)(["\n    color:white;\n    font-size:1.3rem;\n"]);return vt=function(){return e},e}function gt(){var e=Object(h.a)(["\n   width:80px;\n   height:50px;\n   text-align:center;\n   display:flex;\n   align-items:center;\n   justify-content:center;\n   border-bottom: 3px solid ",";\n   transition: border-bottom 0.3s ease-in-out;\n"]);return gt=function(){return e},e}function ht(){var e=Object(h.a)(["\n    display:flex;\n    width:100%;\n    justify-content:space-around;\n    list-style:none;\n"]);return ht=function(){return e},e}function bt(){var e=Object(h.a)(["\n    width:100%;\n    height:50px;\n    z-index:100;\n    position:fixed;\n    top:0;\n    left:0;\n    display:flex;\n    text-align:center;\n    justify-content:space-around;\n    align-items:center;\n    background-color:#00a8ff;\n    box-shadow: 0px 3px 15px 3.5px #3c6382;\n\n"]);return bt=function(){return e},e}var xt=b.default.header(bt()),Et=b.default.ul(ht()),yt=b.default.li(gt(),(function(e){return e.current?"#2f3542":"none"})),_t=Object(b.default)(o.b)(vt()),kt=Object(c.g)((function(e){var t=e.location.pathname;return r.a.createElement(xt,null,r.a.createElement(Et,null,r.a.createElement(yt,{current:"/"===t},r.a.createElement(_t,{to:"/"},"Home")),r.a.createElement(yt,{current:"/tv"===t},r.a.createElement(_t,{to:"/tv"},"TV")),r.a.createElement(yt,{current:"/movie"===t},r.a.createElement(_t,{to:"/movie"},"movie")),r.a.createElement(yt,{current:"/search"===t},r.a.createElement(_t,{to:"/search"},"Search"))))})),jt=function(){return r.a.createElement(o.a,null,r.a.createElement(kt,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0,component:Ee}),r.a.createElement(c.b,{path:"/tv",exact:!0,component:je}),r.a.createElement(c.b,{path:"/movie",exact:!0,component:Ae}),r.a.createElement(c.b,{path:"/search",component:Pe}),r.a.createElement(c.b,{path:"/movie/:id",component:ft}),r.a.createElement(c.b,{path:"/tv/:id",component:ft}),r.a.createElement(c.a,{from:"*",to:"/"})))},wt=n(45),Ot=n.n(wt);function Mt(){var e=Object(h.a)(["\n    ",";\n    a{\n        list-style:none;\n        text-decoration:none;\n    }\n    *{\n        margin:0;\n        padding:0;\n        box-sizing:border-box;\n    }\n    html{\n        font-size:16px;\n    }\n    body{\n        font-size:14px;\n        background-color:#130f40;\n        color:white;\n        padding-top:55px;\n        height:100%;\n        width:100%;\n        \n    }\n        \n    ::-webkit-scrollbar { \n        width: 10px; \n        z-index:-100;\n    }\n    ::-webkit-scrollbar-track { \n        background-color: #6D214F;\n        z-index:-100;\n        &:hover{\n            background-color: #1B9CFC;\n        }\n    }\n    \n    ::-webkit-scrollbar-thumb { \n        z-index:-100;\n\n        background: #FC427B;\n        border-radius:10px; }\n    ::-webkit-scrollbar-thumb:hover { background: #FD7272;  }\n    ::-webkit-scrollbar-thumb:active { background: #F97F51; }\n    ::-webkit-scrollbar-button { \n        display: none;                 \n        z-index:-100;\n    }\n\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover, \n    input:-webkit-autofill:focus,\n    textarea:-webkit-autofill,\n    textarea:-webkit-autofill:hover,\n    textarea:-webkit-autofill:focus,\n    select:-webkit-autofill,\n    select:-webkit-autofill:hover,\n    select:-webkit-autofill:focus {\n    border: 1px solid green;\n    -webkit-text-fill-color: green;\n    transition: background-color 5000s ease-in-out 0s;\n    }\n"]);return Mt=function(){return e},e}var At=Object(b.createGlobalStyle)(Mt(),Ot.a);var Ft=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(At,null),r.a.createElement(jt,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ft,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.8d8e9951.chunk.js.map