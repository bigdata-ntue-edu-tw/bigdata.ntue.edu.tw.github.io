import{w as _}from"./moment-820a4055.js";import{k as g}from"./firebase-917d75a2.js";import{u as v}from"./course-6cf91645.js";import{s as k,e as y}from"./loading-f001d740.js";import{r as D,M as C}from"./index-08706a63.js";import{_ as Y}from"./plugin-vue_export-helper-c27b6911.js";import{a as b,w as I,l as d,m as e,F as N,Y as w,k as n,x as L,y as l,E as p,t as M,D as c,B as S,aD as x,aE as B,a3 as f}from"./runtime-core.esm-bundler-1860ea7f.js";import"./runtime-dom.esm-bundler-d3981d03.js";const A={setup(){const o=v(),{courses:a}=g(o),m=b(()=>a.value.map(t=>({content:{instructor:t.content.instructor,startdAt:_(Number(t.content.startdAt)).format("YYYY-MM-DD"),title:t.content.title,imageUrl:t.content.imageUrl,sessionLength:t.sessions.length},_id:t._id,formatDate:t.formatDate}))),r=t=>{D.push({name:C,query:{id:t._id}})};return I([a],t=>{k(),a.value.map(i=>i.formatDate=_(Number(i.date)).format("YYYY-MM-DD")),y()},{immediate:!0,deep:!0}),{courses:a,displayCourses:m,handleNewsClick:r}}},E=o=>(x("data-v-46baafd6"),o=o(),B(),o),R={class:"inner"},U={class:"content-box"},V=E(()=>e("header",null,[e("h1",null,"講座、教材資源")],-1)),$={class:"bottom"},F={class:"img-wrapper"},T={class:"date"},q={class:"description"},z={key:0,class:"instructor"},j={class:"session_week"};function G(o,a,m,r,t,i){const u=f("el-col"),h=f("el-row");return n(),d("div",R,[e("div",U,[V,e("div",$,[(n(!0),d(N,null,w(r.displayCourses,s=>(n(),L(h,{key:s._id,gutter:24,class:"news-row",onClick:H=>r.handleNewsClick(s)},{default:l(()=>[p(u,{md:6,sm:24},{default:l(()=>[e("div",F,[e("div",{class:"img",style:M({backgroundImage:s.content.imageUrl?"url("+s.content.imageUrl+")":"url("+o.bannerImage+")"})},null,4)])]),_:2},1024),p(u,{md:18,sm:24},{default:l(()=>[e("div",T,c(s.formatDate),1),e("div",q,c(s.content.title),1),s.content.instructor?(n(),d("div",z," 授課教師： "+c(o.instructor),1)):S("",!0),e("div",j," 已進行： "+c(s.content.sessionLength)+" 週 ",1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])])])}const tt=Y(A,[["render",G],["__scopeId","data-v-46baafd6"]]);export{tt as default};
