import{d,g as E,a as q,h,t as f,Y as u,Z as l}from"./firebase-51484e84.js";const i={AVAILABLE:1,BORROWED:2},m={AI:1,VIA:2,ALK:3},L={[m.AI]:"小栗方 Ai 學習機",[m.VIA]:"VIA Pixetto 視覺感測器",[m.ALK]:"ALK950 邊緣運算推論器"},S={[i.AVAILABLE]:"可借用",[i.BORROWED]:"已借出"};let a,p,A=null;const g=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let s="";for(let t=0;t<20;t++)s+=e.charAt(Math.floor(Math.random()*e.length));return s},T=d("storeEquipment",{state:()=>({equipments:[],equipmentsLoaded:!1,loading:null}),actions:{init(){return a=E(q,"equipments"),p=h(a),this.loading=this.getEquipments(),this.loading},async getEquipments(){this.equipmentsLoaded=!1;let e=()=>{},s=new Promise(t=>e=t);return A&&A(),A=f(p,async t=>{let n=[];t.forEach(r=>{let o={ref:r.ref,content:r.data()};n.push(o)}),this.equipments=n,this.equipmentsLoaded=!0,e(this.equipments)},t=>{console.error("error.message: ",t.message)}),s},async updateEquipment(e,s){await u(l(a,e),{content:s})},generateAutoId(){return g()},async giveBackEquipment(e){await u(l(a,e),{borrower:"",endDate:"",startDate:"",status:i.AVAILABLE,borrowerId:"",selectedTime:"",returnTime:""})},async rentEquipment(e,{borrower:s,endDate:t,startDate:n,selectedTime:r,returnTime:o,borrowerId:c}){await u(l(a,e),{borrower:s,endDate:t,startDate:n,status:i.BORROWED,borrowerId:c,selectedTime:r,returnTime:o})}},getters:{}});export{i as S,L as T,m as a,S as b,T as u};