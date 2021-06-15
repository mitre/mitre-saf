(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9092"],{"30dc":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-content",{class:1==a.$vuetify.theme.dark?"blank":"grey lighten-5"},[e("v-container",{staticClass:"text-center ",attrs:{fluid:""}},[e("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:a.snackbarSuccess,callback:function(t){a.snackbarSuccess=t},expression:"snackbarSuccess"}},[a._v("\n          Team Member Edited Successfully\n          "),e("v-btn",{attrs:{color:"pink",text:""},on:{click:function(t){a.snackbarSuccess=!1}}},[a._v("\n              Close\n          ")])],1),e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-toolbar",{staticClass:"elevation-1"},[e("router-link",{staticClass:"ma-0 google-font mb-0",staticStyle:{"border-radius":"5px","text-transform":"capitalize","text-decoration":"none"},attrs:{to:"/admin/dashboard/team/",color:1==a.$vuetify.theme.dark?"white":"black"}},[e("v-icon",{attrs:{left:""}},[a._v("mdi-arrow-left-thick")]),a._v("\n              Team")],1),a._v("\n               \n              "),e("div",{staticClass:"flex-grow-1"}),a.showTeamData?e("editTeam",{staticClass:"mr-2",attrs:{teamData:a.teamData},on:{editedSuccess:a.editedSuccessFun}}):a._e(),a._v("\n                   \n                  "),a.showTeamData?e("removeTeam",{staticClass:"mr-1",attrs:{teamData:{id:a.$route.params.id,name:a.teamData.name}}}):a._e(),a.showTeamData?e("v-tooltip",{attrs:{bottom:""},scopedSlots:a._u([{key:"activator",fn:function(t){var s=t.on;return[e("v-btn",a._g({attrs:{icon:"",target:"_blank"},on:{click:function(t){return a.showPublicURL(a.$route.params.id)}}},s),[e("v-icon",{attrs:{color:"indigo"}},[a._v("mdi-eye")])],1)]}}],null,!1,2902102809)},[e("span",[a._v("Show Public URL")])]):a._e()],1)],1)],1),a.showLoader?e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):a._e(),a.showTeamData?e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-1 elevation-1 py-5",class:1==a.$vuetify.theme.dark?"grey darken-4":"white",attrs:{col:"12",md:"3"}},[e("v-avatar",{attrs:{size:"120"}},[e("img",{attrs:{src:a.getImgUrl(a.teamData.image),"lazy-src":a.getImgUrl(a.teamData.image),alt:""}})]),e("p",{staticClass:"mt-3 mb-0 google-font mb-0",staticStyle:{"font-size":"120%"}},[a._v(a._s(a.teamData.name))]),e("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"100%"}},[a._v(a._s(a.teamData.designation))]),e("v-chip",{staticClass:"mt-2",attrs:{small:""}},[a._v(a._s(a.teamData.role))]),e("br"),e("br"),a.teamData.visible?e("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[a._v("Visible")]):e("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[a._v("Not Visible")]),a.teamData.active?e("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[a._v("Active")]):e("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[a._v("Not Active")]),e("br"),e("br"),e("br")],1),e("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==a.$vuetify.theme.dark?"grey darken-4":"white",attrs:{col:"12",md:"9"}},[e("p",{staticClass:"mb-0"},[e("b",[a._v("Bio")])]),e("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[a._v(a._s(a.teamData.bio))]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[a._v("Email")])]),e("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[a._v(a._s(a.teamData.email))]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[a._v("Mobile")])]),e("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[a._v(a._s(a.teamData.mbnumber))]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[a._v("User ID")])]),e("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[a._v(a._s(a.teamData.id))]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[a._v("Social Links")])]),e("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},a._l(a.teamData.socialLinks,(function(t,s){return e("span",{key:s,staticClass:"mr-1",staticStyle:{cursor:"pointer"}},[t?e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t,target:"_blank"}},[e("v-chip",{staticStyle:{"text-transform":"uppercase"},attrs:{small:""}},[a._v(a._s(s))])],1):a._e()])})),0)])],1)],1)],1)],1):a._e(),a.userNotFound?e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"elevation-1 pa-3 white"},[e("v-col",[e("h1",[a._v("User Not Found")])])],1)],1)],1)],1):a._e()],1)],1)},i=[],l=e("260b"),o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{"max-width":"300"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:a._u([{key:"activator",fn:function(t){var s=t.on;return[e("v-btn",a._g({attrs:{icon:"",dark:"",color:"red"},on:{click:function(t){t.stopPropagation(),a.dialog=!0}}},s),[e("v-icon",[a._v("mdi-delete")])],1)]}}])},[e("span",[a._v("Remove "+a._s(a.teamData.name)+"  ")])]),e("v-card",[e("v-card-title",{staticClass:"headline"},[a._v("Are you sure?")]),e("v-card-text",[a._v("\n        \n       Would you like to remove "+a._s(a.teamData.name)+" form the Team?\n    ")]),e("v-card-actions",[e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("\n        Disagree\n      ")]),e("v-btn",{attrs:{color:"green darken-1",text:"",loading:a.loading},on:{click:function(t){return a.deleteItem(a.teamData.id)}}},[a._v("\n        Agree\n      ")])],1)],1)],1)},n=[],c={props:{teamData:{}},data:function(){return{dialog:!1,loading:!1}},methods:{deleteItem:function(a){var t=this;this.loading=!0,l["a"].firestore().collection("team").where("id","==",a).get().then((function(a){a.forEach((function(a){a.ref.delete(),t.loading=!1,t.dialog=!1,t.$emit("RemoveSuceess"),t.$router.push({path:"/admin/dashboard/team",query:{msg:"removesuccess"}})}))}))}}},d=c,r=e("2877"),m=e("6544"),u=e.n(m),v=e("8336"),p=e("b0af"),b=e("99d9"),g=e("169a"),f=e("132d"),D=e("3a2f9"),h=Object(r["a"])(d,o,n,!1,null,null,null),k=h.exports;u()(h,{VBtn:v["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VDialog:g["a"],VIcon:f["a"],VTooltip:D["a"]});var C=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{width:"1200"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:a._u([{key:"activator",fn:function(t){var s=t.on;return[e("v-btn",a._g({attrs:{icon:"",color:"primary",dark:""},on:{click:function(t){t.stopPropagation(),a.dialog=!0}}},s),[e("v-icon",[a._v("mdi-lead-pencil")])],1)]}}])},[e("span",[a._v("Edit "+a._s(a.teamData.name)+" Details ")])]),a.dialog?e("v-card",[e("v-card-title",{staticClass:"headline white",attrs:{"primary-title":""}},[a._v("\n      Edit "+a._s(a.teamData.name)+" Details\n    ")]),e("v-card-text",{},[e("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[e("v-row",{staticClass:"pa-0"},[e("v-col",{attrs:{md:"12",cols:"12"}},[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-row",{staticClass:"pa-3"},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[a._v("Team Member Status")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[e("v-select",{attrs:{items:a.items,label:"Active Status",outlined:""},model:{value:a.updatedData.active,callback:function(t){a.$set(a.updatedData,"active",t)},expression:"updatedData.active"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[e("v-select",{attrs:{items:a.items,label:"Visiblity Status",outlined:""},model:{value:a.updatedData.visible,callback:function(t){a.$set(a.updatedData,"visible",t)},expression:"updatedData.visible"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{disabled:"",label:"ID",type:"text",outlined:""},model:{value:a.updatedData.id,callback:function(t){a.$set(a.updatedData,"id",t)},expression:"updatedData.id"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[e("v-select",{attrs:{items:a.teamRole,label:"Role",outlined:""},model:{value:a.updatedData.role,callback:function(t){a.$set(a.updatedData,"role",t)},expression:"updatedData.role"}})],1)],1),e("v-row",{staticClass:"pa-3"},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[a._v("Team Member Info")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{rules:a.nameRules,label:"Name",outlined:""},model:{value:a.updatedData.name,callback:function(t){a.$set(a.updatedData,"name",t)},expression:"updatedData.name"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{rules:a.nameRules,label:"Desigination",outlined:""},model:{value:a.updatedData.designation,callback:function(t){a.$set(a.updatedData,"designation",t)},expression:"updatedData.designation"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Image URL",outlined:""},model:{value:a.updatedData.image,callback:function(t){a.$set(a.updatedData,"image",t)},expression:"updatedData.image"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[e("v-dialog",{attrs:{"max-width":"290"},scopedSlots:a._u([{key:"activator",fn:function(t){var s=t.on;return[e("v-btn",a._g({staticClass:"mt-n6",attrs:{color:"primary",loading:a.imageUploading,dark:""}},s),[a._v("Upload Image")])]}}],null,!1,3016959100),model:{value:a.dialogImageUload,callback:function(t){a.dialogImageUload=t},expression:"dialogImageUload"}},[e("v-card",[e("v-card-title",[a._v("Upload Team Image")]),e("v-card-text",[e("v-img",{staticClass:"mb-6",attrs:{src:a.imagePre}}),e("v-file-input",{attrs:{accept:"image/*",label:"File input","prepend-icon":"",outlined:""},on:{change:a.onFileChange},model:{value:a.imageUpload,callback:function(t){a.imageUpload=t},expression:"imageUpload"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){a.dialogImageUload=!1}}},[a._v("Disagree")]),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:a.uploadImage}},[a._v("Agree")])],1)],1)],1)],1),e("v-col",{staticClass:"pa-1 ma-0 red",attrs:{md:"4",xs:"12",cols:"12"}},[e("v-img",{staticClass:"mt-n7",attrs:{src:a.updatedData.image}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",xs:"12",cols:"12"}},[e("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Bio"},model:{value:a.updatedData.bio,callback:function(t){a.$set(a.updatedData,"bio",t)},expression:"updatedData.bio"}})],1)],1),e("v-row",{staticClass:"pa-3"},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[a._v("Personal Info")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Contact Number",outlined:""},model:{value:a.updatedData.mbnumber,callback:function(t){a.$set(a.updatedData,"mbnumber",t)},expression:"updatedData.mbnumber"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"8",xs:"8",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{rules:a.emailRules,label:"Email Id",outlined:""},model:{value:a.updatedData.email,callback:function(t){a.$set(a.updatedData,"email",t)},expression:"updatedData.email"}})],1)],1),e("v-row",{staticClass:"pa-3"},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[a._v("Social Links")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Facebook",outlined:""},model:{value:a.updatedData.socialLinks.facebook,callback:function(t){a.$set(a.updatedData.socialLinks,"facebook",t)},expression:"updatedData.socialLinks.facebook"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Github",outlined:""},model:{value:a.updatedData.socialLinks.github,callback:function(t){a.$set(a.updatedData.socialLinks,"github",t)},expression:"updatedData.socialLinks.github"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Linkedin",outlined:""},model:{value:a.updatedData.socialLinks.linkedin,callback:function(t){a.$set(a.updatedData.socialLinks,"linkedin",t)},expression:"updatedData.socialLinks.linkedin"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Meetup",outlined:""},model:{value:a.updatedData.socialLinks.meetup,callback:function(t){a.$set(a.updatedData.socialLinks,"meetup",t)},expression:"updatedData.socialLinks.meetup"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Twitter",outlined:""},model:{value:a.updatedData.socialLinks.twitter,callback:function(t){a.$set(a.updatedData.socialLinks,"twitter",t)},expression:"updatedData.socialLinks.twitter"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Website/Blog",outlined:""},model:{value:a.updatedData.socialLinks.web,callback:function(t){a.$set(a.updatedData.socialLinks,"web",t)},expression:"updatedData.socialLinks.web"}})],1)],1)],1)],1)],1)],1)],1),e("v-divider"),e("v-card-actions",[e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("\n        Close\n      ")]),e("v-btn",{attrs:{color:"primary",disabled:!a.valid,loading:a.loading},on:{click:a.UpdateData}},[a._v("\n        Update "+a._s(a.teamData.name)+" Details\n      ")])],1)],1):a._e()],1)},_=[],x={props:{teamData:{}},data:function(){return{imageUpload:[],imagePre:"",imageUploading:!1,valid:!0,dialogImageUload:!1,nameRules:[function(a){return!!a||"Name is required"},function(a){return a&&a.length<=20||"Name must be less than 10 characters"}],emailRules:[function(a){return!!a||"E-mail is required"},function(a){return/.+@.+\..+/.test(a)||"E-mail must be valid"}],teamRole:["Core Team","Organizing Team","Volunteer"],dialog:!1,loading:!1,items:[!0,!1],active:Boolean,visible:Boolean,id:"",mbnumber:"",name:"",facebook:"",github:"",linkedin:"",email:"",meetup:"",twitter:"",web:"",bio:"",imageURL:"",image:"",designation:"",role:null,updatedData:{active:this.teamData.active,visible:this.teamData.visible,name:this.teamData.name,designation:this.teamData.designation,mbnumber:this.teamData.mbnumber,email:this.teamData.email,image:this.teamData.image,bio:this.teamData.bio,id:this.teamData.id,role:this.teamData.role,socialLinks:{facebook:this.teamData.socialLinks.facebook,github:this.teamData.socialLinks.github,linkedin:this.teamData.socialLinks.linkedin,meetup:this.teamData.socialLinks.meetup,twitter:this.teamData.socialLinks.twitter,web:this.teamData.socialLinks.web}}}},methods:{onFileChange:function(){var a=this,t=new FileReader;t.readAsDataURL(this.imageUpload),t.onload=function(){a.imagePre=t.result}},uploadImage:function(){var a=this;this.imageUploading=!0;var t="".concat(this.userId,".").concat(this.imageUpload.name.split(".")[1]),e=l["a"].storage().ref("team/"+t);e.put(this.imageUpload).then((function(){e.getDownloadURL().then((function(t){a.imageURL=t,a.imageUploading=!1,a.uploadImage="Uploaded"}))})),this.dialogImageUload=!1},UpdateData:function(){var a=this;a.loading=!0,this.$refs.form.validate()&&l["a"].firestore().collection("team").where("id","==",this.teamData.id).get().then((function(t){t.forEach((function(t){l["a"].firestore().collection("team").doc(t.id).update({active:a.updatedData.active,visible:a.updatedData.visible,name:a.updatedData.name,designation:a.updatedData.designation,mbnumber:a.updatedData.mbnumber,email:a.updatedData.email,image:a.updatedData.image,bio:a.updatedData.bio,id:a.updatedData.id,role:a.updatedData.role,socialLinks:{facebook:a.updatedData.socialLinks.facebook,github:a.updatedData.socialLinks.github,linkedin:a.updatedData.socialLinks.linkedin,meetup:a.updatedData.socialLinks.meetup,twitter:a.updatedData.socialLinks.twitter,web:a.updatedData.socialLinks.web}})}))})).then((function(){a.loading=!1,a.dialog=!1,a.$emit("editedSuccess")})).catch((function(){a.loading=!1}))}}},w=x,y=e("62ad"),L=e("a523"),V=e("ce7e"),S=e("23a7"),U=e("4bd4"),T=e("adda"),$=e("0fd9"),I=e("b974"),R=e("2fa4"),z=e("8654"),F=e("a844"),E=Object(r["a"])(w,C,_,!1,null,null,null),N=E.exports;u()(E,{VBtn:v["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VCol:y["a"],VContainer:L["a"],VDialog:g["a"],VDivider:V["a"],VFileInput:S["a"],VForm:U["a"],VIcon:f["a"],VImg:T["a"],VRow:$["a"],VSelect:I["a"],VSpacer:R["a"],VTextField:z["a"],VTextarea:F["a"],VTooltip:D["a"]});var A={components:{removeTeam:k,editTeam:N},name:"admin-dashboard",data:function(){return{snackbarSuccess:!1,userNotFound:!1,showTeamData:!1,showLoader:!0,teamLoader:!0,search:"",loading:!0,teamData:[]}},created:function(){this.$route.params.id&&this.getTeamData()},mounted:function(){l["a"].auth().currentUser||this.$router.replace("login")},methods:{showPublicURL:function(a){var t=this.$router.resolve({path:"/team/".concat(a)});window.open(t.href,"_blank")},editedSuccessFun:function(){this.snackbarSuccess=!0,this.getTeamData()},getTeamData:function(){var a=this;this.showLoader=!0,this.showTeamData=!1,this.userNotFound=!1,l["a"].firestore().collection("team").doc(this.$route.params.id).get().then((function(t){void 0==t.data()?(a.showLoader=!1,a.showTeamData=!1,a.userNotFound=!0):t.data()?(a.showTeamData=!0,a.showLoader=!1,a.teamData=t.data()):(a.showTeamData=!1,a.showLoader=!1,a.userNotFound=!0)}))},showTeam:function(a){this.$router.replace("/admin/dashboard/team/"+a)},getImgUrl:function(a){return a.length>0?a:e("72ab")}}},P=A,B=e("8212"),j=e("cc20"),M=e("a75b"),O=e("490a"),q=e("2db4"),J=e("71d9"),W=Object(r["a"])(P,s,i,!1,null,null,null);t["default"]=W.exports;u()(W,{VAvatar:B["a"],VBtn:v["a"],VChip:j["a"],VCol:y["a"],VContainer:L["a"],VContent:M["a"],VIcon:f["a"],VProgressCircular:O["a"],VRow:$["a"],VSnackbar:q["a"],VToolbar:J["a"],VTooltip:D["a"]})}}]);