import{a as M,c as g,t as B,G as y,y as N,ab as j,i as p,h as e,a7 as I,a8 as O,l as r,d as n,e as _,f as d,F as b,x as k,b as R,A as t,j as V,H as w,N as A}from"./index-360cec32.js";import{u as F}from"./equipment-932d79d9.js";import{s as H,e as P}from"./loading-ca52e56c.js";const G={class:"inner"},$={class:"content-box"},z={class:"card-header borrow__header"},J={class:"borrow__start"},K={class:"borrow__end"},Q={class:"borrow__list"},U={class:"borrow__item__name"},W={class:"yellow"},se={__name:"RentList",setup(X){const f=M(),x=g(()=>!!f.user.id),{loadPromise:E}=B(f);E.value.then(()=>{x.value||y.alert("請先登入","提示",{confirmButtonText:"確定",callback:()=>{N.replace({name:j})}})});const m=F();m.init();const{equipments:v,equipmentsLoaded:Y}=B(m),L=i=>{const s={};for(const o of i)o.borrowerId&&(s[o.borrowerId]||(s[o.borrowerId]=[]),s[o.borrowerId].push(o));return s},h=g(()=>(console.log(v.value),L(v.value.map(s=>s.content)))),q=async i=>{y.confirm("確定歸還內容都正確","確認歸還",{confirmButtonText:"確定歸還",cancelButtonText:"取消",callback:async s=>{if(s==="confirm"){H();const o=i.map(c=>c._id);await Promise.all(o.map(c=>m.giveBackEquipment(c))),P(),A({type:"success",message:"歸還成功"})}}})};return(i,s)=>{const o=_("el-empty"),u=_("el-col"),c=_("el-row"),S=_("el-button"),T=_("el-card");return d(),p("div",G,[e("div",$,[I(e("div",null,[r(o,{description:"目前沒有租借紀錄"})],512),[[O,!Object.keys(h.value).length]]),r(c,{gutter:12},{default:n(()=>[(d(!0),p(b,null,k(Object.entries(h.value),(a,D)=>(d(),R(u,{span:24,key:D},{default:n(()=>[r(T,{class:"box-card borrow"},{header:n(()=>[e("div",z,[r(c,{gutter:20},{default:n(()=>[r(u,{span:24},{default:n(()=>[e("span",null,"借物 ID："+t(a[0]),1)]),_:2},1024),r(u,{span:24},{default:n(()=>[e("span",null,"租借人 Email： "+t(a[1][0].borrower),1)]),_:2},1024)]),_:2},1024),r(S,{class:"button",onClick:V(l=>q(a[1]),["prevent"])},{default:n(()=>[w("完成歸還")]),_:2},1032,["onClick"])])]),default:n(()=>[e("div",J," 租借期間："+t(a[1][0].startDate)+" - "+t(a[1][0].endDate),1),e("div",K," 歸還時間："+t(a[1][0].returnTime),1),e("div",Q," 租借項目：共 "+t(a[1].length)+" 項 ",1),(d(!0),p(b,null,k(a[1],(l,C)=>(d(),p("div",{class:"borrow__item",key:C},[e("div",U,[w(t(l.name)+" "+t(l._id.split("-")[0])+"-"+t(l._id.split("-")[1])+"-",1),e("span",W,t(l._id.split("-")[2]),1)])]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})])])}}};export{se as default};