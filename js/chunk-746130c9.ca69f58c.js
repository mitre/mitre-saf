(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-746130c9"],{"1d123":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-content",{class:1==t.$vuetify.theme.dark?"blank":"grey lighten-5"},[i("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:t.isSnackbar,callback:function(a){t.isSnackbar=a},expression:"isSnackbar"}},[t._v("\n    "+t._s(t.snackBarText)+"\n    "),i("v-btn",{attrs:{color:"pink",text:""},on:{click:function(a){t.isSnackbar=!1}}},[t._v("Close")])],1),i("v-container",{staticClass:"text-center",attrs:{fluid:""}},[i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12",md:"11"}},[i("v-toolbar",{staticClass:"elevation-1"},[i("v-toolbar-title",[t._v("Speaker Details:")]),i("div",{staticClass:"flex-grow-1"}),i("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-search-web",label:"Search","single-line":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),i("AddSpeaker",{staticClass:"ml-2",on:{showSuccess:t.success}})],1)],1)],1),i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12",md:"11"}},[i("v-container",{attrs:{fluid:""}},[t.speakerLoader?i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{staticClass:"text-center",attrs:{col:"12",md:"2"}},[i("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):i("v-row",[i("v-container",{attrs:{fluid:""}},[i("v-data-iterator",{attrs:{items:t.speakerData,search:t.search},scopedSlots:t._u([{key:"default",fn:function(a){return[i("v-row",{attrs:{align:"center"}},t._l(a.items,(function(a,s){return i("v-col",{key:s,staticClass:"pa-1",attrs:{col:"12",cols:"6",md:"2",sm:"3"}},[i("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-center py-3 elevation-1",class:1==t.$vuetify.theme.dark?"grey darken-3":"white",staticStyle:{cursor:"pointer",height:"200px"},on:{click:function(e){return t.gotoSpeaker(a.id)}}},[i("v-avatar",{attrs:{size:"100"}},[i("img",{attrs:{src:a.image.length>0?a.image:e("72ab"),alt:""}})]),i("p",{staticClass:"mt-3 mb-0 google-font mb-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(a.name))]),i("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"70%"}},[t._v(t._s(a.designation))]),i("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"80%"}},[t._v(t._s(a.company.name))])],1)])})),1)]}}])})],1)],1)],1)],1)],1)],1)],1)},s=[],l=e("dc59"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center"},[e("v-dialog",{attrs:{scrollable:"",width:"1200"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({attrs:{color:"indigo",dark:""}},i),[t._v("Add Speaker")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline deep-purple accent-4 white--text"},[t._v("Add new Speaker")]),e("v-divider"),e("v-card-text",[e("v-container",{attrs:{fluid:""}},[e("v-form",{attrs:{"lazy-validation":""}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker Status")])]),e("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[e("v-select",{attrs:{items:t.visiblity,label:"Visiblity Status",outlined:""},model:{value:t.visible,callback:function(a){t.visible=a},expression:"visible"}})],1),e("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[e("v-text-field",{attrs:{label:"ID",type:"text",outlined:""},model:{value:t.userId,callback:function(a){t.userId=a},expression:"userId"}})],1)],1),e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker info")])]),e("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"8",xl:"3"}},[e("v-text-field",{attrs:{label:"Full Name",type:"text",outlined:""},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"4",xl:"3"}},[e("v-text-field",{attrs:{label:"Desigination",type:"text",outlined:""},model:{value:t.desigination,callback:function(a){t.desigination=a},expression:"desigination"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[e("v-text-field",{attrs:{label:"Profile Image URL",type:"text",outlined:""},model:{value:t.imageURL,callback:function(a){t.imageURL=a},expression:"imageURL"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[e("v-dialog",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({staticClass:"mt-n6",attrs:{color:"primary",loading:t.imageUploading,dark:""}},i),[t._v("Upload Image")])]}}]),model:{value:t.dialogImageUload,callback:function(a){t.dialogImageUload=a},expression:"dialogImageUload"}},[e("v-card",[e("v-card-title",[t._v("Upload Speaker Image")]),e("v-card-text",[e("v-img",{staticClass:"mb-6",attrs:{src:t.imagePre}}),e("v-file-input",{attrs:{accept:"image/*",label:"Select Image","prepend-icon":"",outlined:""},on:{change:t.onFileChange},model:{value:t.imageUpload,callback:function(a){t.imageUpload=a},expression:"imageUpload"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(a){t.dialogImageUload=!1}}},[t._v("Discard")]),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.uploadImage}},[t._v("Upload Image")])],1)],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[e("v-img",{staticClass:"mt-n7",attrs:{src:t.imageURL}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"10"}},[e("v-textarea",{attrs:{outlined:"",label:"Bio"},model:{value:t.bio,callback:function(a){t.bio=a},expression:"bio"}})],1)],1),e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Personal Info")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Contact Number",type:"tel",outlined:""},model:{value:t.mbnumber,callback:function(a){t.mbnumber=a},expression:"mbnumber"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Email",type:"email",outlined:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Company Name",type:"text",outlined:""},model:{value:t.companyName,callback:function(a){t.companyName=a},expression:"companyName"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Company URL",type:"url",outlined:""},model:{value:t.companyURL,callback:function(a){t.companyURL=a},expression:"companyURL"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"City",type:"text",outlined:""},model:{value:t.city,callback:function(a){t.city=a},expression:"city"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Country",type:"text",outlined:""},model:{value:t.country,callback:function(a){t.country=a},expression:"country"}})],1)],1),e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Social Links")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Facebook",type:"url",outlined:""},model:{value:t.facebook,callback:function(a){t.facebook=a},expression:"facebook"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Twitter",type:"url",outlined:""},model:{value:t.twitter,callback:function(a){t.twitter=a},expression:"twitter"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Github",type:"url",outlined:""},model:{value:t.github,callback:function(a){t.github=a},expression:"github"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"LinkdeIN",type:"url",outlined:""},model:{value:t.linkedin,callback:function(a){t.linkedin=a},expression:"linkedin"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Medium",type:"url",outlined:""},model:{value:t.medium,callback:function(a){t.medium=a},expression:"medium"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Website",type:"url",outlined:""},model:{value:t.website,callback:function(a){t.website=a},expression:"website"}})],1)],1)],1)],1)],1)],1)],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("Close")]),e("v-btn",{attrs:{color:"primary",dark:"",loading:t.addSpeakerLoading},on:{click:t.saveData}},[t._v("Add new Speaker")])],1)],1)],1)],1)},n=[],c={name:"addSpeaker",data:function(){return{dialog:!1,dialogImageUload:!1,visiblity:[!0,!1],uploadbtnText:"Upload Image",visible:Boolean,userId:"",name:"",desigination:"",imageURL:"",imagePre:"",imageUploading:!1,bio:"",imageUpload:[],mbnumber:"",email:"",companyName:"",companyURL:"",country:"",city:"",facebook:"",github:"",linkedin:"",twitter:"",medium:"",website:"",addSpeakerLoading:!1}},methods:{onFileChange:function(){var t=this,a=new FileReader;a.readAsDataURL(this.imageUpload),a.onload=function(){t.imagePre=a.result}},uploadImage:function(){var t=this;this.imageUploading=!0;var a="".concat(this.userId,".").concat(this.imageUpload.name.split(".")[1]),e=l["a"].storage.ref("speakers/"+a);e.put(this.imageUpload).then((function(){e.getDownloadURL().then((function(a){t.imageURL=a,t.imageUploading=!1,t.uploadImage="Uploaded"}))})),this.dialogImageUload=!1},saveData:function(){var t=this;this.addSpeakerLoading=!0;var a={visible:this.visible,id:this.userId,name:this.name,designation:this.desigination,mbnumber:this.mbnumber,email:this.email,image:this.imageURL,bio:this.bio,city:this.city,country:this.country,company:{name:this.companyName,url:this.companyURL},socialLinks:{facebook:this.facebook,github:this.github,linkedin:this.linkedin,medium:this.medium,twitter:this.twitter,web:this.website}};l["a"].firestore.collection("speakers").doc(a.id).set(a).then((function(){t.dialog=!1,t.addSpeakerLoading=!1,t.$emit("showSuccess",!0)})).catch((function(){}))}}},r=c,d=e("2877"),m=e("6544"),u=e.n(m),v=e("8336"),p=e("b0af"),b=e("99d9"),g=e("62ad"),f=e("a523"),k=e("169a"),h=e("ce7e"),x=e("23a7"),y=e("4bd4"),C=e("adda"),w=e("0fd9"),S=e("b974"),U=e("2fa4"),_=e("8654"),V=e("a844"),I=Object(d["a"])(r,o,n,!1,null,null,null),L=I.exports;u()(I,{VBtn:v["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VCol:g["a"],VContainer:f["a"],VDialog:k["a"],VDivider:h["a"],VFileInput:x["a"],VForm:y["a"],VImg:C["a"],VRow:w["a"],VSelect:S["a"],VSpacer:U["a"],VTextField:_["a"],VTextarea:V["a"]});var R={name:"speakers",components:{AddSpeaker:L},data:function(){return{search:"",speakerData:[],loading:!0,speakerLoader:!0,isSnackbar:!1,snackBarText:""}},created:function(){this.$route.query.msg&&(this.isSnackbar=!0,this.snackBarText="Speaker Removed Successfully")},mounted:function(){l["a"].auth.currentUser?this.showData():this.$router.replace("login")},methods:{gotoSpeaker:function(t){this.$router.replace("/admin/dashboard/speaker/"+t)},success:function(){this.isSnackbar=!0,this.snackBarText="Speaker Added Successfully",this.showData()},showData:function(){var t=this;this.speakerLoader=!0,this.speakerData=[],l["a"].firestore.collection("speakers").get().then((function(a){a.forEach((function(a){t.id=a.id,t.speakerData.push(a.data())})),t.speakerLoader=!1,t.loading=!1})).catch((function(){}))}}},D=R,T=e("8212"),z=e("a75b"),N=e("c377"),A=e("490a"),F=e("2db4"),B=e("71d9"),$=e("2a7f"),P=e("269a"),j=e.n(P),E=e("5607"),J=Object(d["a"])(D,i,s,!1,null,null,null);a["default"]=J.exports;u()(J,{VAvatar:T["a"],VBtn:v["a"],VCol:g["a"],VContainer:f["a"],VContent:z["a"],VDataIterator:N["a"],VProgressCircular:A["a"],VRow:w["a"],VSnackbar:F["a"],VTextField:_["a"],VToolbar:B["a"],VToolbarTitle:$["a"]}),j()(J,{Ripple:E["a"]})}}]);