(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50264c18"],{"167f":function(t,e,a){"use strict";a("580a")},"3d44":function(t,e,a){"use strict";a.r(e);var s=a("b542"),i=a.n(s);for(var o in s)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(o);e["default"]=i.a},"580a":function(t,e,a){},"651b":function(t,e,a){"use strict";a.r(e);var s=a("e1ec"),i=a("3d44");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("167f");var r=a("2877"),l=a("6544"),n=a.n(l),c=a("8212"),p=a("8336"),u=a("cc20"),h=a("ef9a"),d=a("62ad"),v=a("a523"),m=a("a75b"),b=a("132d"),f=a("490a"),g=a("0fd9"),k=a("2db4"),C=a("2fa4"),_=a("71d9"),y=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=y.exports,n()(y,{VAvatar:c["a"],VBtn:p["a"],VChip:u["a"],VChipGroup:h["a"],VCol:d["a"],VContainer:v["a"],VContent:m["a"],VIcon:b["a"],VProgressCircular:f["a"],VRow:g["a"],VSnackbar:k["a"],VSpacer:C["a"],VToolbar:_["a"]})},"72ab":function(t,e,a){t.exports=a.p+"img/avatar.d5a816ad.png"},"8adc":function(t,e,a){},"8f5a":function(t,e,a){},b542:function(t,e){},cc20:function(t,e,a){"use strict";a("8adc");var s=a("58df"),i=a("0789"),o=a("9d26"),r=a("a9ad"),l=a("4e82"),n=a("7560"),c=a("f2e7"),p=a("1c87"),u=a("af2b"),h=a("d9bd");e["a"]=Object(s["a"])(r["a"],u["a"],p["a"],n["a"],Object(l["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...p["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(p["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(h["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(i["b"],t)},genClose(){return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:a,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const i=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(i,s),e)}})},e1ec:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}));var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",{class:1==t.$vuetify.theme.dark?"blank":"grey lighten-5"},[s("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:t.snackbarSuccess,callback:function(e){t.snackbarSuccess=e},expression:"snackbarSuccess"}},[t._v("\n    Speaker Edited Successfully\n    "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbarSuccess=!1}}},[t._v("Close")])],1),s("v-container",{staticClass:"text-center",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-toolbar",{staticClass:"elevation-1"},[s("router-link",{staticClass:"ma-0 google-font mb-0",staticStyle:{"border-radius":"5px","text-transform":"capitalize","text-decoration":"none"},attrs:{to:"/admin/dashboard/speaker/",color:1==t.$vuetify.theme.dark?"white":"black"}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left-thick")]),s("span",{class:1==t.$vuetify.theme.dark?"white--text":"black--text"},[t._v("Speakers")])],1),s("v-spacer"),!t.isLoading&&t.isSpeakerFound?s("editSpeaker",{staticClass:"mr-5",attrs:{speakerData:t.speaker},on:{showEditSuccess:t.editSuccessFunction}}):t._e(),!t.isLoading&&t.isSpeakerFound?s("removeSpeakers",{staticClass:"mr-5",attrs:{speakerData:{id:t.$route.params.id,name:t.speaker.name}}}):t._e()],1)],1)],1),t.isLoading?s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):!t.isLoading&&t.isSpeakerFound?s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"pa-1 elevation-1 py-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"3"}},[s("v-avatar",{attrs:{size:"120"}},[s("img",{attrs:{src:t.speaker.image.length>0?t.speaker.image:a("72ab"),alt:t.speaker.name}})]),s("p",{staticClass:"mt-3 mb-0 google-font mb-0 text--black",staticStyle:{"font-size":"120%"}},[t._v("\n                "+t._s(t.speaker.name)+"\n              ")]),s("p",{staticClass:"mt-1 mb-0 google-font mt-0 greyText",staticStyle:{"font-size":"100%"}},[t._v("\n                "+t._s(t.speaker.designation)+"\n              ")]),s("v-chip",{staticClass:"mt-2",attrs:{href:t.speaker.company.url,target:"_blank",small:""}},[t._v(t._s(t.speaker.company.name))]),s("br"),s("br"),t.speaker.visible?s("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Visible")]):s("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Visible")])],1),s("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"9"}},[s("p",{staticClass:"mb-0"},[s("b",[t._v("Bio")])]),s("p",{staticClass:"mt-1 mb-0 google-font greyText mt-0"},[t._v("\n                "+t._s(t.speaker.bio)+"\n              ")]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Email")])]),s("p",{staticClass:"mt-0 mb-0 google-font greyText mt-0"},[t._v("\n                "+t._s(t.speaker.email)+"\n              ")]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Mobile")])]),s("p",{staticClass:"mt-0 mb-0 google-font greyText mt-0"},[t._v("\n                "+t._s(t.speaker.mbnumber)+"\n              ")]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Location")])]),s("p",{staticClass:"mt-0 mb-0 google-font greyText mt-0"},[t._v("\n                "+t._s(t.speaker.city)+", "+t._s(t.speaker.country)+"\n              ")]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("User ID")])]),s("p",{staticClass:"mt-0 mb-0 google-font greyText mt-0"},[t._v("\n                "+t._s(t.speaker.id)+"\n              ")]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Social Links")])]),s("p",{staticClass:"mt-1 mb-0 mt-0"},[s("v-chip-group",{attrs:{column:""}},t._l(t.speaker.socialLinks,(function(e,a){return s("v-chip",{key:a,staticClass:"google-font",attrs:{href:e,target:"_blank"}},[t._v(t._s(a.charAt(0).toUpperCase()+a.slice(1)))])})),1)],1)])],1)],1)],1)],1):s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"elevation-1 pa-3 white"},[s("v-col",[s("h1",[t._v("User Not Found")])])],1)],1)],1)],1)],1)],1)},i=[]},ef9a:function(t,e,a){"use strict";a("8f5a");var s=a("7efd"),i=a("a9ad"),o=a("58df");e["a"]=Object(o["a"])(s["a"],i["a"]).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...s["a"].options.methods.genData.call(this)})}}})}}]);