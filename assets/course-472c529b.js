import{d as g,g as l,a as C,h as p,i as m,t as w,X as y,j as S,Z as c,Y as L,z as Z}from"./firebase-51484e84.js";let r,d,n=null;const z=g("storeCourse",{state:()=>({courses:[],coursesLoaded:!1,loading:null}),actions:{init(){r=l(C,"courses"),d=p(r,m("date","desc")),this.loading=this.getCourses()},async getCourses(){this.coursesLoaded=!1;let s=()=>{},o=new Promise(e=>s=e);return n&&n(),n=w(d,async e=>{let a=[];e.forEach(t=>{let i={ref:t.ref,_id:t.id,content:t.data().content,date:t.data().date,col:"courses",sessions:[]};a.push(i)});for(const t of a)(await Z(l(t.ref,"sessions"))).forEach(u=>{t.sessions.push({_id:u.id,...u.data()}),t.sessions.sort((f,h)=>f.order-h.order)});this.courses=a,this.coursesLoaded=!0,s()},e=>{console.error("error.message: ",e.message)}),o},async addCourse(s){let o=new Date().getTime(),e=o.toString();await y(r,{content:s,date:e})},async deleteCourse(s){await S(c(r,s))},async updateCourse(s,o){await L(c(r,s),{content:o})}},getters:{getCourseContent:s=>o=>s.courses.filter(e=>e._id===o)[0]}});export{z as u};