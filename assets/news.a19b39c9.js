import{h as g,d as m,j as f,H as w,k as b,o,c as l,l as j,F as h,I as y,e as v,n as i,p as B,q as $,s as k,v as D,x as L,y as z,z as C,A as P,B as R,C as A,D as E,E as F,G as I,J,K}from"./main.d4a0785c.js";const M="Y5Pet",N="x-X7U",O="oOJAu",T="_8fzKZ";var U={section:M,main:N,limiter:O,group:T};const q=m({setup(G){const{t:H,locale:_,fallbackLocale:c}=f({inheritLocale:!0}),u=w();function p(a,s){return new Date(s).getTime()-new Date(a).getTime()}let r=u.getRoutes(),d=b(()=>{let a=[],s={};for(let e=0;e<r.length;e++){const t=r[e];t.meta.layout==="news"&&(s[t.meta.date]||(s[t.meta.date]=[]),s[t.meta.date].push(t))}for(const e of Object.values(s)){const t=e.find(n=>n.meta.locale===_.value);if(t){a.push(t);continue}a.push(e.find(n=>n.meta.locale===c.value))}return a=a.sort((e,t)=>p(e.meta.date,t.meta.date)),a=a.map(e=>({title:e.meta.title,description:e.meta.description,date:e.meta.date,url:e.path,picture:new URL({"/data/news/2022-03-11/picture.jpg":B,"/data/news/2022-03-28/picture.jpg":$,"/data/news/2022-03-29/picture.jpg":k,"/data/news/2022-04-10/picture.jpg":D,"/data/news/2022-04-11/picture.jpg":L,"/data/news/2022-04-12/picture.jpg":z,"/data/news/2022-04-17/picture.jpg":C,"/data/news/2022-04-19/picture.jpg":P,"/data/news/2022-04-21/picture.jpg":R,"/data/news/2022-04-26/picture.jpg":A,"/data/news/2022-05-09/picture.jpg":E,"/data/news/2022-05-11/picture.jpg":F,"/data/news/2022-05-12/picture.jpg":I}[`/data/news/${e.meta.date.substring(0,10)}/picture.jpg`],self.location).href})),a});return(a,s)=>{const e=K;return o(),l("main",{class:i([a.$style.main,a.$style.limiter])},[j("div",{class:i([a.$style.group,a.$style.section])},[(o(!0),l(h,null,y(v(d),t=>(o(),J(e,{title:t.title,description:t.description,picture:t.picture,date:t.date,url:t.url},null,8,["title","description","picture","date","url"]))),256))],2)],2)}}}),x={$style:U};var X=g(q,[["__cssModules",x]]);export{X as default};
