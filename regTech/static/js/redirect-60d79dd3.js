import{d as c,u as s,f as p,c as u,o as _}from"./index-40df4809.js";const l=c({name:"Redirect",__name:"redirect",setup(i){const{currentRoute:r,replace:t}=s(),{params:a,query:n}=p(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,d)=>(_(),u("div"))}});export{l as default};
