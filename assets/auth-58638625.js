import{d as A,o as P,G as r,s as S,Z as l,a as u,K as c,J as d,b as i,e as v,f as n}from"./firebase-51484e84.js";import{r as m,H as h}from"./index-fcdd6f12.js";let g=()=>{};const N=A("storeAuth",{state:()=>({user:{},loadPromise:new Promise(e=>g=e)}),actions:{init(){P(n,e=>{if(e){console.log(this.user),this.user.id=e.uid,this.user.email=e.email,console.log(this.user);const s=l(u,"users",e.uid);c(s).then(t=>{t.exists?this.user.role=t.data().role:console.log("No such document!")}).catch(t=>{console.error("Error getting document: ",t)})}else this.user={};g()})},googleSignIn(){const e=new r;S(n,e).then(s=>{r.credentialFromResult(s).accessToken;const a=s.user;let o=l(u,"users",a.uid);c(o).then(p=>{if(p.exists())return d(o,{name:a.displayName,email:a.email,updatedAt:i()},{merge:!0});{let f="student";return d(o,{name:a.displayName,email:a.email,role:f,updatedAt:i(),createdAt:i()})}})}).catch(s=>{s.code,s.message,s.customData.email,r.credentialFromError(s)}),m.replace({name:h})},logoutUser(){v(n).then(()=>{}).catch(e=>{}),m.replace({name:h})}}});export{N as u};