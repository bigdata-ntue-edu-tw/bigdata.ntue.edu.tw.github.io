import{s as _,e as g}from"./loading-bb5f32dc.js";import{k as B}from"./firebase-51484e84.js";import{I as P,B as S}from"./index-b9962f05.js";import{u as U}from"./post-0634ed87.js";import{r as b,P as k}from"./index-fcdd6f12.js";import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{a as v}from"./index-7c49e7b5.js";import{r as V,w as q,l as E,m as w,x as D,y as a,B as I,a3 as m,k as C,E as l,C as x,D as N}from"./runtime-core.esm-bundler-08e2c704.js";import"./index-1d84a674.js";import"./runtime-dom.esm-bundler-a91390dd.js";import"./quill-0ca21a08.js";import"./index-51ec6782.js";const F={props:["id"],setup(f){_();const{id:o}=f,r=U(),e=V(null),c={title:"",content:"",imageUrl:""},t=V({...c}),s=()=>{t.value={...c}},i=[{name:"ImageDrop",module:P},{name:"BlotFormatter",module:S}],u={modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]}},{postsLoaded:d}=B(r);return q(d,y=>{y&&(g(),o&&(t.value=r.getPostContent(o)))},{immediate:!0,deep:!0}),{id:o,form:t,rules:{title:[{required:!0,message:"請輸入公告標題",trigger:"blur"}]},formRef:e,onSubmit:()=>{_(),console.log(t.value),t.value.title&&t.value.content?(o?r.updatePost(o,t.value):r.addPost(t.value),s(),v.success(o?"更新公告成功":"新增公告成功"),b.replace({name:k})):v.error("公告標題、內容不得為空"),g()},cancel:()=>{s(),b.replace({name:k})},postStore:r,editorOption:u,editorModules:i}}},L={class:"inner"},M={class:"content-box"};function O(f,o,r,e,c,t){const s=m("el-input"),i=m("el-form-item"),u=m("quill-editor"),d=m("el-button"),p=m("el-form");return C(),E("div",L,[w("div",M,[e.postStore.loading?(C(),D(p,{key:0,ref:"formRef",model:e.form,rules:e.rules},{default:a(()=>[l(i,{label:"公告標題",prop:"title"},{default:a(()=>[l(s,{modelValue:e.form.title,"onUpdate:modelValue":o[0]||(o[0]=n=>e.form.title=n)},null,8,["modelValue"])]),_:1}),l(i,{label:"公告縮圖連結",prop:"title"},{default:a(()=>[l(s,{modelValue:e.form.imageUrl,"onUpdate:modelValue":o[1]||(o[1]=n=>e.form.imageUrl=n)},null,8,["modelValue"])]),_:1}),l(u,{class:"quill-editor",theme:"snow",content:e.form.content,"onUpdate:content":o[2]||(o[2]=n=>e.form.content=n),"content-type":"html",options:e.editorOption,modules:e.editorModules},null,8,["content","options","modules"]),l(i,null,{default:a(()=>[l(d,{type:"primary",onClick:e.onSubmit},{default:a(()=>[x(N(e.id?"更新":"建立"),1)]),_:1},8,["onClick"]),l(d,{onClick:e.cancel},{default:a(()=>[x("取消")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])):I("",!0)])])}const Z=h(F,[["render",O],["__scopeId","data-v-262d40c0"]]);export{Z as default};