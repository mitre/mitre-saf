import{_ as c}from"./LibraryPage.vue.0c53de91.js";import{u as l,v as u}from"./gql.e27c2bd3.js";import{g as e,i as y,j as m,m as p,u as t,o as b}from"./entry.106e6bea.js";import"./components.e7b1a1f2.js";const P={__name:"ts-inspec-objects",setup(_){const r=e(!1),n=e(""),s=e(""),i=async()=>{await l("getLibraryPageByName",()=>u({name:"TS InSpec Objects"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,s.value=a.value.libraryPages.data[0].attributes.library})};return y(async()=>{await m(async()=>{await i(),r.value=!0})}),(a,g)=>{const o=c;return b(),p(o,{"is-loaded":t(r),"page-title":t(s),"library-content":t(n)},null,8,["is-loaded","page-title","library-content"])}}};export{P as default};