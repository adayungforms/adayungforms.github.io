import{d as k,y as w,h as b,aw as u,r as a,o as d,i as x,w as t,e as s,B as i,f as B,b as m,t as C,c as V,F as S,j as P,ap as z,H,ax as N}from"./index-fd231fce.js";const U={class:"card-header"},A=k({name:"PermissionPage",__name:"index",setup(j){var n;const o=w(()=>({width:"85vw",justifyContent:"start"})),l=b((n=u())==null?void 0:n.username),_=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function p(){u().loginByUsername({username:l.value,password:"admin123"}).then(r=>{r.success&&(z().removeItem("async-routes"),H().clearAllCachePage(),N())})}return(r,c)=>{const v=a("el-tag"),f=a("el-option"),y=a("el-select"),g=a("el-card"),h=a("el-space");return d(),x(h,{direction:"vertical",size:"large"},{default:t(()=>[s(v,{style:i(o.value),size:"large",effect:"dark"},{default:t(()=>[B(" 模拟后台根据不同角色返回对应路由（具体参考完整版pure-admin代码） ")]),_:1},8,["style"]),s(g,{shadow:"never",style:i(o.value)},{header:t(()=>[m("div",U,[m("span",null,"当前角色："+C(l.value),1)])]),default:t(()=>[s(y,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=e=>l.value=e),onChange:p},{default:t(()=>[(d(),V(S,null,P(_,e=>s(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{A as default};
