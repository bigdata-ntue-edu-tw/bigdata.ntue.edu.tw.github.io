import{ad as E,a0 as q,a6 as h,ae as f,af as g,a1 as u,a2 as l}from"./index-c5edcf22.js";const o={AVAILABLE:1,BORROWED:2},m={AI:1,VIA:2,ALK:3},R={[m.AI]:"小栗方 Ai 學習機",[m.VIA]:"VIA Pixetto 視覺感測器",[m.ALK]:"ALK950 邊緣運算推論器"},S={[o.AVAILABLE]:"可借用",[o.BORROWED]:"已借出"};let a,p,A=null;const I=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let s="";for(let t=0;t<20;t++)s+=e.charAt(Math.floor(Math.random()*e.length));return s},T=E("storeEquipment",{state:()=>({equipments:[],equipmentsLoaded:!1,loading:null}),actions:{init(){return a=q(h,"equipments"),p=f(a),this.loading=this.getEquipments(),this.loading},async getEquipments(){this.equipmentsLoaded=!1;let e=()=>{},s=new Promise(t=>e=t);return A&&A(),A=g(p,async t=>{let n=[];t.forEach(r=>{let i={ref:r.ref,content:r.data()};n.push(i)}),this.equipments=n,this.equipmentsLoaded=!0,e(this.equipments)},t=>{console.error("error.message: ",t.message)}),s},async updateEquipment(e,s){await u(l(a,e),{content:s})},generateAutoId(){return I()},async giveBackEquipment(e){await u(l(a,e),{borrower:"",endDate:"",startDate:"",status:o.AVAILABLE,borrowerId:"",selectedTime:"",returnTime:"",borrowerData:{}})},async rentEquipment(e,{borrower:s,endDate:t,startDate:n,selectedTime:r,returnTime:i,borrowerId:c,borrowerData:d}){await u(l(a,e),{borrower:s,endDate:t,startDate:n,status:o.BORROWED,borrowerId:c,selectedTime:r,returnTime:i,borrowerData:{...d}})}},getters:{}});export{o as S,m as T,R as a,S as b,T as u};