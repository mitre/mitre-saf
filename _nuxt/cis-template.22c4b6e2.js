import{H as f,T as h,M as v}from"./components.cdb0ef34.js";import{g as c,i as w,j as g,c as a,k as t,w as i,a as e,o as n,b as T,_ as y,l as C}from"./entry.54e69cac.js";import{_ as k}from"./LoadingSpinner.c509a183.js";import{u as P,k as B}from"./gql.c45e0d70.js";import{P as H}from"./prism-ruby.23e63c4d.js";const M={class:"max-w-8xl relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"},b={key:0},S={class:"sm:flex sm:items-center"},I={class:"sm:flex-auto my-5 max-w-7xl mx-auto"},L=e("h1",{class:"text-center text-5xl font-bold text-header mb-5"},[e("strong",null,"CIS Template")],-1),N=["innerHTML"],V={key:1,class:"text-center my-5"},F={__name:"cis-template",setup(A){const s=c(!1),o=c(null),m=async()=>{o.value=await P("getTextContentByPage",()=>B({pageName:"CIS-Template"})).then(({data:l})=>l.value.textContents.data[0].attributes.text)};return w(async()=>{await g(async()=>{await m(),s.value=!0}),window.Prism=window.Prism||{},window.Prism.manual=!0,H.highlightAll()}),(l,D)=>{const r=h,_=v,d=f,p=y,u=k,x=C;return n(),a("div",null,[t(d,null,{default:i(()=>[t(r,null,{default:i(()=>[T("CIS Template")]),_:1}),t(_,{name:"description",content:"CIS Template Code Block"})]),_:1}),e("div",null,[t(p),e("div",M,[s.value?(n(),a("div",b,[e("div",S,[e("div",I,[L,e("div",{class:"prose prose-xl mx-auto mt-8 max-w-none text-left leading-8 dark:prose-invert",innerHTML:o.value},null,8,N)])])])):(n(),a("div",V,[t(u)])),t(x)])])])}}};export{F as default};