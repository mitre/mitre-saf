import{_ as c}from"./LibraryPage.vue.205a4850.js";import{u as l,t as u}from"./gql.c45e0d70.js";import{g as e,i as y,j as p,v as m,u as t,o as _}from"./entry.54e69cac.js";import"./components.cdb0ef34.js";const P={__name:"inspecjs",setup(b){const r=e(!1),n=e(""),s=e(""),i=async()=>{await l("getLibraryPageByName",()=>u({name:"InSpecJS"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,s.value=a.value.libraryPages.data[0].attributes.library})};return y(async()=>{await p(async()=>{await i(),r.value=!0})}),(a,g)=>{const o=c;return _(),m(o,{"is-loaded":t(r),"page-title":t(s),"library-content":t(n)},null,8,["is-loaded","page-title","library-content"])}}};export{P as default};