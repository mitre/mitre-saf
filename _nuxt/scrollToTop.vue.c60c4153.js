import{o as i,m as d,k as l,d as w,g as u,i as f,bh as h,c as m,a as s,u as p}from"./entry.3dc25c70.js";function _(c,o){return i(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"})])}const v={class:"max-w-3xl"},x={class:"text-fill transition hover:brightness-110"},B=w({__name:"scrollToTop",setup(c){const o=u(null),n=()=>{var t,r;const e=o;window&&(window.scrollY>0?(t=e.value)==null||t.classList.remove("hidden"):(r=e.value)==null||r.classList.add("hidden"))},a=()=>{window&&window.scrollTo({top:0,behavior:"smooth"})};return f(()=>{window&&window.addEventListener("scroll",n)}),h(()=>{window&&window.removeEventListener("scroll",n)}),(e,t)=>(i(),m("div",v,[s("div",{ref_key:"scrollTopButton",ref:o,class:"fixed bottom-0 right-0 hidden w-fit justify-end pb-3 pr-2 transition"},[s("div",x,[s("button",{class:"flex items-center",onClick:a},[l(p(_),{class:"h-10 w-8 text-blue-500 md:h-10 md:w-10"})])])],512)]))}});export{B as _};