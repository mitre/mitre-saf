(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d87ccfba"],{"72ca":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},e._l(e.categoryOrder,(function(t){return n("v-col",{key:t,staticClass:"ma-0 pa-1 d-flex",style:{"max-width":e.maxWidth+"rem","flex-basis":"auto"},attrs:{outlined:""}},[n("v-card",{staticClass:"ma-0 pa-1",class:e.$vuetify.theme.dark?"grey darken-4":"grey lighten-3",staticStyle:{"flex-grow":"1"},attrs:{outlined:""}},[n("h2",{staticClass:"font-weight-bold justify-center text-center google-font ma-1"},[e._v("\n        "+e._s(t)+"\n      ")]),e._l(e.getByCategory(e.profiles,t),(function(t,r){return n("v-card",{key:t.category+t.longName+r,staticClass:"google-font break-word ma-1",class:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-4",attrs:{href:t.link,target:"_blank",label:"",outlined:""}},[n("v-list",{staticClass:"pa-0"},[n("v-list-item",{staticClass:"ma-0 pa-0"},[n("v-list-item-avatar",{staticClass:"mx-2"},[n("v-img",{staticStyle:{"max-width":"28px","max-height":"28px"},attrs:{src:a("57ae")("./"+t.svg+".svg")}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"pr-4",staticStyle:{"font-size":"0.9rem"}},[e._v(e._s(t.shortName))])],1)],1)],1)],1)}))],2)],1)})),1)},r=[],s={props:{profiles:Array,categoryOrder:Array,maxWidth:Number},methods:{getByCategory:function(e,t){var a=e.filter((function(e){return e.category.some((function(e){return e===t}))}));return a.sort((function(e,t){return e["shortName"]>t["shortName"]?1:e["shortName"]<t["shortName"]?-1:0}))}}},i=s,o=a("2877"),c=a("6544"),m=a.n(c),l=a("b0af"),g=a("62ad"),h=a("adda"),S=a("8860"),d=a("da13"),b=a("8270"),u=a("5d23"),k=a("0fd9"),p=Object(o["a"])(i,n,r,!1,null,"53511f79",null);t["a"]=p.exports;m()(p,{VCard:l["a"],VCol:g["a"],VImg:h["a"],VList:S["a"],VListItem:d["a"],VListItemAvatar:b["a"],VListItemContent:u["a"],VListItemTitle:u["b"],VRow:k["a"]})},"9d33":function(e){e.exports=JSON.parse('{"hardening":[{"shortName":"Windows 2016 STIG","longName":"Windows 2016 r2 STIG","link":"https://github.com/mitre/chef-stig-windows-server-2016-v1r4-hardening","svg":"chef-2","category":["Operating Systems"]},{"shortName":"Windows 2012 STIG","longName":"Windows 2012 r2 STIG","link":"https://github.com/mitre/chef-stig-windows-2012-v2r12-memberserver-hardening","svg":"chef-2","category":["Operating Systems"]},{"shortName":"Ubuntu 16.04 STIG","longName":"Ubuntu 16.04 Linux STIG","link":"https://github.com/mitre/chef-canonical-ubuntu-16.04-lts-stig-hardening","svg":"chef-2","category":["Operating Systems"]},{"shortName":"Red Hat 7 STIG","longName":"Red Hat Enterprise 7 Linux STIG","link":"https://github.com/mitre/ansible-rhel7-stig-hardening","svg":"ansible","category":["Operating Systems"]},{"shortName":"Red Hat 7 STIG","longName":"Red Hat Enterprise 7 Linux STIG","link":"https://github.com/USGS-CIDA/stig","svg":"chef-2","category":["Operating Systems"]},{"shortName":"Docker CIS Benchmark","longName":"Docker CIS Benchmark","link":"https://github.com/mitre/ansible-cis-docker-ce-hardening","svg":"ansible","category":["Virtual Platforms"]},{"shortName":"Docker CIS Benchmark","longName":"Docker CIS Benchmark","link":"https://github.com/mitre/chef-cis-docker-ce-hardening","svg":"chef-2","category":["Virtual Platforms"]},{"shortName":"Tomcat CIS Benchmark","longName":"Apache Tomcat 7 and 8 CIS Benchmark","link":"https://github.com/mitre/ansible-cis-tomcat-hardening","svg":"ansible","category":["Web Servers"]},{"shortName":"Tomcat CIS Benchmark","longName":"Apache Tomcat 8 CIS Benchmark","link":"https://github.com/mitre/chef-cis-tomcat-hardening","svg":"chef-2","category":["Web Servers"]},{"shortName":"NGINX [WIP]","longName":"NGINX [Work-In-Progress]","link":"https://github.com/mitre/chef-nginx-hardening","svg":"chef-2","category":["Web Servers"]},{"shortName":"IIS Sites STIG","longName":"IIS Sites STIG","link":"https://github.com/mitre/chef-iis-site-hardening","svg":"chef-2","category":["Web Servers"]},{"shortName":"IIS Server STIG","longName":"IIS Server STIG","link":"https://github.com/mitre/chef-iis-85-hardening","svg":"chef-2","category":["Web Servers"]},{"shortName":"AWS CIS Benchmark","longName":"AWS Foundations CIS Benchmark","link":"https://github.com/mitre/cis-aws-foundations-hardening","svg":"terraform","category":["Cloud Service Providers"]},{"shortName":"MongoDB STIG","longName":"MongoDB Enterprise STIG","link":"https://github.com/mitre/chef-stig-mongodb-enterprise-advanced-hardening","svg":"chef-2","category":["Databases"]},{"shortName":"DRAFT: VMWARE VCSA 6.7 STIG","longName":"VMware vCenter Server Appliance 6.7 STIG","link":"https://github.com/mitre/chef-stig-mongodb-enterprise-advanced-hardening","svg":"ansible","category":["Virtual Platforms"]},{"shortName":"Elasticsearch","longName":"Elasticsearch","link":"https://github.com/mitre/elasticsearch-hardening","svg":"chef-2","category":["Application Logic"]},{"shortName":"JRE 8 STIG","longName":"Oracle Java Runtime Environment 8 Unix STIG","link":"https://github.com/mitre/oracle-java-runtime-environment-8-stig-hardening","svg":"chef-2","category":["Application Logic"]},{"shortName":"Red Hat 8 STIG","longName":"Red Hat Enterprise 8 Linux STIG","link":"https://github.com/ansible-lockdown/RHEL8-STIG","svg":"ansible","category":["Operating Systems"]},{"shortName":"Windows 2016 CIS Benchmark","longName":"Windows 2016 CIS Benchmark","link":"https://github.com/ansible-lockdown/Windows-2016-CIS","svg":"ansible","category":["Operating Systems"]},{"shortName":"Red Hat 7 CIS Benchmark","longName":"Red Hat Enterprise 7 Linux CIS Benchmark","link":"https://github.com/ansible-lockdown/RHEL7-CIS","svg":"ansible","category":["Operating Systems"]},{"shortName":"Ubuntu 18.04 CIS Benchmark","longName":"Ubuntu 18.04 Linux CIS Benchmark","link":"https://github.com/ansible-lockdown/UBUNTU18-CIS","svg":"ansible","category":["Operating Systems"]},{"shortName":"Apache CIS Benchmark","longName":"Apache 2.4 CIS Benchmark","link":"https://github.com/ansible-lockdown/APACHE-2.4-CIS","svg":"ansible","category":["Web Servers"]},{"shortName":"Azure CIS Benchmark","longName":"Azure CIS Benchmark","link":"https://github.com/ansible-lockdown/AZURE-CIS","svg":"ansible","category":["Cloud Service Providers"]},{"shortName":"Apache STIG","longName":"Apache 2.4 STIG","link":"https://github.com/ansible-lockdown/APACHE-2.4-STIG","svg":"ansible","category":["Web Servers"]},{"shortName":"Windows 2016 STIG","longName":"Windows 2016 STIG","link":"https://github.com/ansible-lockdown/Windows-2016-STIG","svg":"ansible","category":["Operating Systems"]},{"shortName":"Windows 2019 STIG","longName":"Windows 2019 STIG","link":"https://github.com/ansible-lockdown/Windows-2019-STIG","svg":"ansible","category":["Operating Systems"]},{"shortName":"Red Hat 8 CIS Benchmark","longName":"Red Hat Enterprise 8 Linux CIS Benchmark","link":"https://github.com/ansible-lockdown/RHEL8-CIS","svg":"ansible","category":["Operating Systems"]},{"shortName":"Ubuntu 20.04 CIS Benchmark","longName":"Ubuntu 20.04 Linux CIS Benchmark","link":"https://github.com/ansible-lockdown/UBUNTU20-CIS","svg":"ansible","category":["Operating Systems"]},{"shortName":"Windows 2019 CIS Benchmark","longName":"Windows 2019 CIS Benchmark","link":"https://github.com/ansible-lockdown/Windows-2019-CIS","svg":"ansible","category":["Operating Systems"]},{"shortName":"PostgreSQL 12.x CIS Benchmark","longName":"PostgreSQL 12.x CIS Benchmark","link":"https://github.com/ansible-lockdown/POSTGRES-12-CIS","svg":"ansible","category":["Databases"]},{"shortName":"PostgreSQL 9.x CIS Benchmark","longName":"PostgreSQL 9.x CIS Benchmark","link":"https://github.com/ansible-lockdown/POSTGRES-9-CIS","svg":"ansible","category":["Databases"]},{"shortName":"Kubernetes CIS Benchmark","longName":"Kubernetes CIS Benchmark","link":"https://github.com/ansible-lockdown/Kubernetes1.6.1-CIS","svg":"ansible","category":["Cloud Service Provider"]},{"shortName":"Windows 2012 Server CIS Benchmark","longName":"Windows 2012 Server CIS Benchmark","link":"https://github.com/ansible-lockdown/Windows-2012-Member-Server-STIG","svg":"ansible","category":["Operating Systems"]},{"shortName":"Windows 2012 Server CIS Benchmark","longName":"Windows 2012 Server CIS Benchmark","link":"https://github.com/ansible-lockdown/Windows-2012-Member-Server-STIG","svg":"ansible","category":["Operating Systems"]},{"shortName":"Windows 2012 Server CIS Benchmark","longName":"Windows 2012 Server CIS Benchmark","link":"https://github.com/ansible-lockdown/Windows-2012-Member-Server-STIG","svg":"ansible","category":["Operating Systems"]},{"shortName":"Windows 2008 Server CIS Benchmark","longName":"Windows 2008 r2 Server CIS Benchmark","link":"https://github.com/ansible-lockdown/Windows-2008R2-Member-Server-STIG","svg":"ansible","category":["Operating Systems"]},{"shortName":"Windows 2012 Domain Controller CIS Benchmark","longName":"Windows 2012 Domain Controller CIS Benchmark","link":"https://github.com/ansible-lockdown/Windows-2012-Domain-Controller-STIG","svg":"ansible","category":["Operating Systems"]},{"shortName":"Tomcat 9 STIG","longName":"Tomcat 9 STIG","link":"https://github.com/ansible-lockdown/TOMCAT-9-STIG","svg":"ansible","category":["Web Servers"]}]}')},bfa4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12",lg:"10"}},[a("Header",[a("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Harden")]),a("p",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("\n          These open-source community-based hardening baselines help to securely configure common system components. MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites. If you are interested in new hardening baselines, please contact us at\n          "),a("a",{attrs:{href:e.mail_link}},[e._v("\n            "+e._s(e.db.communityEmail)+"\n          ")]),e._v("\n          .\n        ")])])],1)],1),a("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12",lg:"10"}},[a("profileTemplateCompact",{attrs:{profiles:e.hardening.hardening,categoryOrder:e.categoryOrder,maxWidth:20}})],1)],1)],1)},r=[],s=a("72ca"),i=a("262f"),o=a("9d33"),c=a("d67c"),m={components:{profileTemplateCompact:s["a"],Header:i["a"]},data:function(){return{hardening:o,db:c,categoryOrder:["Cloud Service Providers","Virtual Platforms","Operating Systems","Databases","Application Logic","Web Servers"]}},computed:{mail_link:function(){return"mailto:"+c.communityEmail}}},l=m,g=a("2877"),h=a("6544"),S=a.n(h),d=a("62ad"),b=a("a523"),u=a("0fd9"),k=Object(g["a"])(l,n,r,!1,null,null,null);t["default"]=k.exports;S()(k,{VCol:d["a"],VContainer:b["a"],VRow:u["a"]})}}]);