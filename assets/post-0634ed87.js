import{d as c,g as p,a as u,h as g,i as P,t as f,X as h,j as m,Z as l,Y as w}from"./firebase-51484e84.js";let o,i,n=null;const S=c("storePost",{state:()=>({posts:[],postsLoaded:!1,loading:null}),actions:{init(){o=p(u,"posts"),i=g(o,P("date","desc")),this.loading=this.getPosts()},async getPosts(){this.postsLoaded=!1;let t=()=>{},e=new Promise(s=>t=s);return n&&n(),n=f(i,s=>{let r=[];s.forEach(a=>{let d={_id:a.id,content:a.data().content,date:a.data().date,col:"posts"};r.push(d)}),this.posts=r,this.postsLoaded=!0,t()},s=>{console.error("error.message: ",s.message)}),e},async addPost(t){let e=new Date().getTime(),s=e.toString();await h(o,{content:t,date:s})},async deletePost(t){await m(l(o,t))},async updatePost(t,e){await w(l(o,t),{content:e})}},getters:{getPostContent:t=>e=>t.posts.filter(s=>s._id===e)[0].content}});export{S as u};