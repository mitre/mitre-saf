import{H as f,T as h,M as T}from"./components.cdb0ef34.js";import{g as c,i as g,j as v,c as a,k as t,w as i,a as e,o as n,b as w,_ as y,l as G}from"./entry.54e69cac.js";import{_ as k}from"./LoadingSpinner.c509a183.js";import{u as S,k as P}from"./gql.c45e0d70.js";import{P as B}from"./prism-ruby.23e63c4d.js";const C={class:"max-w-8xl relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"},H={key:0},M={class:"sm:flex sm:items-center"},b={class:"sm:flex-auto my-5 max-w-7xl mx-auto"},I=e("h1",{class:"text-center text-5xl font-bold text-header mb-5"},[e("strong",null,"STIG/SRG Template")],-1),L=["innerHTML"],N={key:1,class:"text-center my-5"},E={__name:"stig-srg-template",setup(R){const s=c(!1),o=c(null),m=async()=>{o.value=await S("getTextContentByPage",()=>P({pageName:"STIG-SRG-Template"})).then(({data:l})=>l.value.textContents.data[0].attributes.text)};return g(async()=>{await v(async()=>{await m(),s.value=!0}),window.Prism=window.Prism||{},window.Prism.manual=!0,B.highlightAll()}),(l,V)=>{const r=h,_=T,d=f,p=y,u=k,x=G;return n(),a("div",null,[t(d,null,{default:i(()=>[t(r,null,{default:i(()=>[w("STIG/SRG Template")]),_:1}),t(_,{name:"description",content:"STIG/SRG Template Code Block"})]),_:1}),e("div",null,[t(p),e("div",C,[s.value?(n(),a("div",H,[e("div",M,[e("div",b,[I,e("div",{class:"prose prose-xl mx-auto mt-8 max-w-none text-left leading-8 dark:prose-invert",innerHTML:o.value},null,8,L)])])])):(n(),a("div",N,[t(u)])),t(x)])])])}}};export{E as default};