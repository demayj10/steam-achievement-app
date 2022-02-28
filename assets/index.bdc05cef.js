var j=Object.defineProperty,M=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var G=(a,t,n)=>t in a?j(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,i=(a,t)=>{for(var n in t||(t={}))_.call(t,n)&&G(a,n,t[n]);if(A)for(var n of A(t))U.call(t,n)&&G(a,n,t[n]);return a},m=(a,t)=>M(a,F(t));import{u as y,R as e,A as H,T as W,I as q,d as z,a as p,b as V,c as b,e as w,f as $,g as J,C as K,r as I,O as Q,h as X,i as Y,j as Z,k as N,l as x,m as L,n as ee,G as T,B as v,L as te,F as ae,S as ne,o as re,p as se,q as ce,s as oe,M as le,P as ie,t as me,v as de,w as ue,x as pe,y as ge,z as he,D as ve,E}from"./vendor.b4165a8e.js";const Ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Ee();const fe=a=>{const{navTitle:t}=a,n=y(),c=()=>{localStorage.getItem("steamId")?n("games/"):n("steamId/")};return e.createElement(H,{position:"static"},e.createElement(W,null,e.createElement(q,{size:"large",edge:"start",onClick:()=>c()},e.createElement(z,null)),e.createElement(p,{variant:"h5"},t)))},Se=()=>b(),h=V,D="https://steam-achievements-server.herokuapp.com",ye=async a=>{const t=`${D}/gameDetails/${a}`,n=await w.get(t),c=new Set,r=[];return n.data.forEach(s=>{c.has(s.appid)||(c.add(s.appid),r.push(s))}),r},Ie=async(a,t)=>{const n=`${D}/achievementDetails/${a}/game/${t}`;return(await w.get(n)).data},be={steamId:"",games:[],groups:[],loadedAchievements:[],appStatus:"idle",error:null},f=$("games/fetchGames",async a=>{const t=await ye(a);return localStorage.setItem("games",JSON.stringify(t)),{steamId:a,games:t}}),S=$("game/fetchAchievements",async({steamId:a,gameId:t})=>await Ie(a,t)),B=J({name:"app",initialState:be,reducers:{fetchGamesFromStorage(a){const t=localStorage.getItem("steamId"),n=localStorage.getItem("games"),c=JSON.parse(n!==null?n:"{}");return m(i({},a),{steamId:t,games:c,appStatus:"fulfilled"})}},extraReducers(a){a.addCase(f.pending,t=>m(i({},t),{appStatus:"pending"})).addCase(f.fulfilled,(t,{payload:n})=>m(i({},t),{appStatus:"fulfilled",steamId:n.steamId,games:t.games.concat(n.games)})).addCase(f.rejected,t=>m(i({},t),{appStatus:"rejected"})).addCase(S.pending,t=>m(i({},t),{appStatus:"pending"})).addCase(S.fulfilled,(t,{payload:n})=>m(i({},t),{appStatus:"fulfilled",loadedAchievements:n})).addCase(S.rejected,t=>m(i({},t),{appStatus:"rejected"}))}});var Ce=B.reducer;const{fetchGamesFromStorage:Ae}=B.actions,Ge=a=>a.app.games,ke=(a,t)=>a.app.games.find(n=>n.appid===t),we=a=>a.app.loadedAchievements,R=a=>a.app.appStatus,$e=a=>a.app.steamId;const C=a=>{const{errorMessage:t}=a;return e.createElement("div",{id:"error-content"},e.createElement("h2",null,"Error!"),e.createElement("p",null,t))};C.defaultProps={errorMessage:"Something strange is a foot"};const O=()=>e.createElement("div",null,e.createElement(K,{thickness:3,size:100}));const Ne=()=>{const a=y(),t=b(),n=h(R),c="Acheivement Hunter";I.exports.useEffect(()=>{localStorage.getItem("steamId")===null||localStorage.getItem("games")===null?a("/steamId"):(t(Ae({})),a("/games"))},[]);let r=e.createElement(C,null);return n==="pending"?r=e.createElement(O,null):r=e.createElement(Q,null),e.createElement("div",{className:"App"},e.createElement(fe,{navTitle:c}),e.createElement("div",{id:"app-content","data-testid":"app-test"},r))},xe="modulepreload",k={},Le="/steam-achievement-app/",Te=function(t,n){return!n||n.length===0?t():Promise.all(n.map(c=>{if(c=`${Le}${c}`,c in k)return;k[c]=!0;const r=c.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":xe,r||(o.as="script",o.crossOrigin=""),o.href=c,document.head.appendChild(o),r)return new Promise((g,d)=>{o.addEventListener("load",g),o.addEventListener("error",d)})})).then(()=>t())},De=a=>{a&&Te(()=>import("./web-vitals.d62816c8.js"),[]).then(({getCLS:t,getFID:n,getFCP:c,getLCP:r,getTTFB:s})=>{t(a),n(a),c(a),r(a),s(a)})},Be=X({app:Ce}),Re=Y({reducer:Be,devTools:!1}),Oe=Z({palette:{primary:{main:"#5a7a96",light:"#89a9c7",dark:"#2d4e68"},secondary:{main:"#5a7c82",light:"#88abb1",dark:"#2e5056"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},components:{MuiLinearProgress:{styleOverrides:{root:{height:10,borderRadius:"1em"}}}}});const Pe=a=>{const{displayName:t,description:n,icon:c,iconGray:r,achieved:s}=a;return e.createElement(N,{elevation:10,className:"card-body"},e.createElement(x,{className:"card-image",component:"img",height:"125",image:s?c:r,alt:"achievement icon"}),e.createElement(L,{className:"card-content"},e.createElement(p,{variant:"h6"},t),e.createElement(p,{variant:"body1"},n)))};const je=()=>{const a=h(R),{gameId:t}=ee(),[n,c]=I.exports.useState(!1);if(t===void 0)return e.createElement("h2",null,"Where did your game id go?");const r=h(u=>ke(u,t)),s=h(we),o=s.filter(u=>u.achieved).length,g=Math.round(o/s.length*100);let d;if(a==="pending")d=e.createElement(O,null);else if(a==="fulfilled")if(r===void 0)d=e.createElement("h2",null,"Huh, that's weird, you're not supposed to be here!");else{const{appid:u,headerImage:P}=r;d=e.createElement("div",{key:u},e.createElement("div",{id:"game-cover-image-container"},e.createElement("img",{id:"game-cover-image",src:P,alt:"game cover"})),e.createElement("div",null,e.createElement(T,{container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center"},e.createElement(v,{sx:{display:"flex",alignItems:"center",width:"50%",mr:2}},e.createElement(v,{sx:{minWidth:40}},e.createElement(p,{variant:"body1"},`${o}/${s.length}`)),e.createElement(v,{sx:{width:"100%",mr:1,ml:3}},e.createElement(te,{variant:"determinate",value:g,color:"primary"})),e.createElement(v,{sx:{minWidth:40,mr:2}},e.createElement(p,{variant:"body1"},`${g}%`))),e.createElement(ae,{control:e.createElement(ne,null),label:"Hide Unlocked Achievements",value:n,onChange:()=>c(!n)}))),e.createElement("div",{id:"game-content"},e.createElement("div",{id:"achievement-card-container"},s.map(l=>!n||!l.achieved?e.createElement(Pe,{key:l.apiName,apiName:l.apiName,displayName:l.displayName,description:l.description,icon:l.icon,iconGray:l.iconGray,achieved:l.achieved,unlockTime:l.unlockTime}):null))))}else{const u="It looks like this game might not have achievements associated with it on Steam. Please reach out to the team if this is incorrect.";d=e.createElement(C,{errorMessage:u})}return e.createElement("div",{id:"single-game-content"},d)};const Me=a=>{const{id:t,name:n,headerImage:c}=a,r=h($e),s=Se(),o=y(),g=()=>{o(`/games/${t}`),s(S({steamId:r,gameId:t}))};return e.createElement(N,{className:"game-card",elevation:10},e.createElement(re,{onClick:()=>g()},e.createElement(x,{component:"img",image:c,alt:"game cover"}),e.createElement(L,null,e.createElement(p,{variant:"h5"},n))))},Fe=(a,t)=>a.name<t.name?-1:a.name>t.name?1:0,_e=(a,t)=>{switch(a){case"Game Title":t.sort(Fe);break}return t},Ue=()=>{const a=h(Ge),[t,n]=I.exports.useState(""),c=s=>{n(s.target.value)},r=_e(t,[...a]);return e.createElement("div",{id:"games-collection-container"},e.createElement(T,{container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",marginTop:"1em"},e.createElement(v,{sx:{width:100,mr:3}},e.createElement(se,{fullWidth:!0,variant:"standard"},e.createElement(ce,null,"Sort By"),e.createElement(oe,{value:t,onChange:c,label:"Sort By",defaultValue:""},e.createElement(le,{value:"Game Title"},"Game Title"))))),e.createElement("div",{id:"card-container"},r.map(s=>e.createElement(Me,{key:s.appid,id:s.appid,name:s.name,headerImage:s.headerImage}))))};const He=()=>{const a=b(),t=y(),[n,c]=I.exports.useState(""),r=()=>{a(f(n)),localStorage.setItem("steamId",n),c(""),t("/games")};return e.createElement(ie,{id:"submission-container"},e.createElement("div",{id:"submission-header"},e.createElement(p,{variant:"h3"},"Enter your Steam Id below to get started")),e.createElement("div",{id:"submission-content"},e.createElement(me,{label:"Steam ID",variant:"outlined",onChange:s=>c(s.target.value)}),e.createElement(de,{type:"submit",variant:"contained",onClick:()=>r()},"Submit")))},We=document.getElementById("root");ue.exports.render(e.createElement(e.StrictMode,null,e.createElement(pe,{store:Re},e.createElement(ge,{theme:Oe},e.createElement(he,{basename:"steam-achievement-app"},e.createElement(ve,null,e.createElement(E,{path:"/",element:e.createElement(Ne,null)},e.createElement(E,{path:"/steamId",element:e.createElement(He,null)}),e.createElement(E,{path:"/games",element:e.createElement(Ue,null)}),e.createElement(E,{path:"/games/:gameId",element:e.createElement(je,null)}))))))),We);De();
