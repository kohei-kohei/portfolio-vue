(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],u=0,m=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"02f0":function(t,e,n){t.exports=n.p+"img/mycat.9f80ec9d.jpeg"},"0697":function(t,e,n){"use strict";n("424b")},"092a":function(t,e,n){t.exports=n.p+"img/mysql.dd2a5a35.svg"},1748:function(t,e,n){t.exports=n.p+"img/git.64d5e98f.svg"},"1daf":function(t,e,n){"use strict";n("f5e3")},"3d41":function(t,e,n){t.exports=n.p+"img/php.fa78b345.svg"},"3e74":function(t,e,n){"use strict";n("d17c")},"424b":function(t,e,n){},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5e24":function(t,e,n){"use strict";n("cf7e")},"786f":function(t,e,n){},"999b":function(t,e,n){t.exports=n.p+"img/docker.589dd398.svg"},"9c0c":function(t,e,n){},bfc6:function(t,e,n){t.exports=n.p+"img/python.51c2eab2.svg"},c068:function(t,e,n){"use strict";n("786f")},c5ab:function(t,e,n){t.exports=n.p+"img/gopher.266d1cb0.svg"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("Top"),n("About"),n("Skill"),n("Experience"),n("Intern")],1),n("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"top d-flex align-center justify-center",style:{height:t.height+"px"},attrs:{fluid:""}},[n("h1",{staticClass:"text-h3 text-sm-h2 text-lg-h1 white--text"},[t._v(" Welcome to Kohei's page ")])])},c=[],s=a["a"].extend({data:function(){return{height:window.innerHeight,width:window.innerWidth}},methods:{handleResize:function(){this.height=window.innerHeight,this.width=window.innerWidth}},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.width!==window.innerWidth&&t.handleResize}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}}),l=s,d=(n("1daf"),n("2877")),u=n("6544"),m=n.n(u),f=n("a523"),p=Object(d["a"])(l,o,c,!1,null,"21de9c57",null),v=p.exports;m()(p,{VContainer:f["a"]});var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h2",{staticClass:"text-h4 text-sm-h3"},[t._v("About")]),a("v-row",{attrs:{justify:"center",align:"center","align-content":"center"}},[a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-avatar",{attrs:{size:"200"}},[a("img",{attrs:{src:n("02f0"),alt:"mycat"}})])],1),a("v-col",{attrs:{cols:"12",sm:"8",lg:"6"}},[a("v-card",[a("v-card-title",[t._v("情報")]),a("v-card-text",{staticClass:"d-flex align-start text--primary"},[a("p",{staticClass:"item-name mr-5 mr-sm-12"},[t._v("Name")]),a("p",[t._v("Kohei")])]),a("v-card-text",{staticClass:"d-flex align-start text--primary"},[a("p",{staticClass:"item-name mr-5 mr-sm-12"},[t._v("GitHub")]),a("p",[a("a",{attrs:{href:"https://github.com/kohei-kohei"}},[a("v-icon",{attrs:{size:t.iconSize,color:"black"}},[t._v(" mdi-github ")]),t._v(" kohei-kohei ")],1)])]),a("v-card-text",{staticClass:"d-flex align-start text--primary"},[a("p",{staticClass:"item-name mr-5 mr-sm-12"},[t._v("Memo")]),a("p",[a("a",{attrs:{href:"https://scrapbox.io/kohei-kohei-develop/"}},[a("v-icon",{attrs:{size:t.iconSize,color:"green darken-1"}},[t._v(" mdi-file-document-edit-outline ")]),t._v(" Scrapbox ")],1)])]),a("v-card-text",{staticClass:"d-flex align-start text--primary"},[a("p",{staticClass:"item-name mr-5 mr-sm-12"},[t._v("Like")]),a("p",{staticClass:"like"},t._l(t.likeIcons,(function(e,n){return a("v-icon",{key:n,attrs:{size:t.iconSize,color:e.color}},[t._v(" "+t._s(e.icon)+" ")])})),1)]),a("v-card-title",[t._v("経歴")]),t._l(t.backgrounds,(function(e,n){return a("v-card-text",{key:n,staticClass:"d-flex align-start text--primary"},[a("p",{staticClass:"text-no-wrap mr-5"},[t._v(t._s(e.year))]),a("p",[t._v(" "+t._s(e.content)+" "),a("v-icon",{attrs:{size:t.iconSize,color:e.color}},[t._v(" "+t._s(e.icon)+" ")])],1)])}))],2)],1)],1)],1)},g=[],b=a["a"].extend({data:function(){return{iconSize:"22px",likeIcons:[{color:"black",icon:"mdi-apple"},{color:"blue",icon:"mdi-microsoft-visual-studio-code"},{color:"black",icon:"mdi-soccer"},{color:"black",icon:"mdi-badminton"},{color:"black",icon:"mdi-snowboard"},{color:"red accent-2",icon:"mdi-glass-cocktail"},{color:"black",icon:"mdi-airplane-takeoff"},{color:"red",icon:"mdi-music-box"},{color:"amber darken-2",icon:"mdi-cat"}],backgrounds:[{color:"grey darken-1",icon:"mdi-language-c",year:"'16年4月〜",content:"CSの基礎、画像・音声処理"},{color:"grey darken-1",icon:"mdi-language-python",year:"'19年4月〜",content:"機械学習を用いた自然言語処理の研究"},{color:"light-blue",icon:"mdi-language-go",year:"'22年4月〜",content:"バックエンドエンジニア(予定)"}]}}}),x=b,_=(n("c068"),n("8212")),y=n("b0af"),k=n("99d9"),C=n("62ad"),w=n("132d"),V=n("0fd9"),j=Object(d["a"])(x,h,g,!1,null,"2b7b61c8",null),S=j.exports;m()(j,{VAvatar:_["a"],VCard:y["a"],VCardText:k["a"],VCardTitle:k["b"],VCol:C["a"],VContainer:f["a"],VIcon:w["a"],VRow:V["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"text-h4 text-sm-h3"},[t._v("Skill")]),n("h3",{staticClass:"text-h5"},[n("v-icon",{attrs:{size:"20px",color:"black"}},[t._v(" mdi-file-code-outline ")]),t._v(" langage "),n("v-icon",{attrs:{size:"20px",color:"black"}},[t._v(" mdi-file-code-outline ")])],1),n("v-row",{attrs:{justify:"center","align-content":"center"}},t._l(t.langs,(function(e,a){return n("v-col",{key:a,attrs:{sm:"2"}},[n("img",{attrs:{src:e.src,alt:e.name}}),n("p",[t._v(t._s(e.name))])])})),1),n("h3",{staticClass:"text-h5"},[n("v-icon",{attrs:{size:"18px",color:"black"}},[t._v(" mdi-tools ")]),t._v(" other "),n("v-icon",{attrs:{size:"18px",color:"black"}},[t._v(" mdi-tools ")])],1),n("v-row",{attrs:{justify:"center","align-content":"center"}},t._l(t.tools,(function(e,a){return n("v-col",{key:a,attrs:{sm:"2"}},[n("img",{attrs:{src:e.src,alt:e.name}}),n("p",[t._v(t._s(e.name))])])})),1)],1)},z=[],T=a["a"].extend({data:function(){return{langs:[{src:n("4ffd"),name:"Vue"},{src:n("bfc6"),name:"Python"},{src:n("c5ab"),name:"Go"},{src:n("3d41"),name:"PHP"},{src:n("092a"),name:"MySQL"}],tools:[{src:n("1748"),name:"Git"},{src:n("999b"),name:"Docker"},{src:n("cd7f"),name:"EC2"}]}}}),E=T,P=(n("3e74"),Object(d["a"])(E,O,z,!1,null,"41ec8b28",null)),A=P.exports;m()(P,{VCol:C["a"],VContainer:f["a"],VIcon:w["a"],VRow:V["a"]});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"text-h4 text-sm-h3"},[t._v("Experience")]),n("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.interns,(function(e,a){return n("v-timeline-item",{key:a,attrs:{color:e.color,icon:e.icon,"fill-dot":""}},[n("v-card",{attrs:{color:e.color,dark:""}},[n("span",{staticClass:"mt-2 ml-4"},[t._v(t._s(e.term))]),n("v-card-title",{staticClass:"title pt-0 pb-2"},[t._v(" "+t._s(e.name)+" ")]),n("v-card-text",{staticClass:"white text--primary pa-4"},[n("p",{staticClass:"mb-0"},[t._v(" "+t._s(e.content)+" ")])])],1)],1)})),1)],1)},$=[],M=a["a"].extend({data:function(){return{interns:[{color:"grey darken-4",icon:"mdi-video-image",term:"2020年6月1日〜2021年1月28日",name:"デジタルクルーズ株式会社",content:"私1人で使用言語や設計を考え、エンジニアの方にアドバイスをいただきながら、GoとVueとMySQLを使って勤怠管理システムを実装し、EC2にデプロイしました。"}]}}}),G=M,R=(n("0697"),n("8414")),L=n("1e06"),W=Object(d["a"])(G,I,$,!1,null,"55a83780",null),D=W.exports;m()(W,{VCard:y["a"],VCardText:k["a"],VCardTitle:k["b"],VContainer:f["a"],VTimeline:R["a"],VTimelineItem:L["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"text-h4 text-sm-h3"},[t._v("Intern")]),n("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.interns,(function(e,a){return n("v-timeline-item",{key:a,attrs:{color:e.color,icon:e.icon,"fill-dot":""}},[n("v-card",{attrs:{color:e.color,dark:""}},[n("span",{staticClass:"mt-2 ml-4"},[t._v(t._s(e.term))]),n("v-card-title",{staticClass:"title pt-0 pb-2"},[t._v(" "+t._s(e.name)+" ")]),n("v-card-text",{staticClass:"white text--primary pa-4"},[n("p",{staticClass:"mb-0"},[t._v(" "+t._s(e.content)+" ")])])],1)],1)})),1)],1)},F=[],K=a["a"].extend({data:function(){return{interns:[{color:"red darken-2",icon:"mdi-cart-outline",term:"2020年8月 9days",name:"楽天株式会社",content:"５人１チームで新規プロダクトを考え、設計・開発を行いました。私のチームはFlaskとVueとPostgreSQLを用いて旅行に特化したSNSを作成しました。"},{color:"orange darken-2",icon:"mdi-chef-hat",term:"2020年9月 5days",name:"クックパッド株式会社",content:"前半２日間でRailsのハンズオンやサービス開発手法について学び、後半３日間でテーマに沿ったWEBアプリケーションを設計・開発しました。"},{color:"indigo darken-1",icon:"mdi-graph",term:"2020年9月 1day",name:"株式会社ファンコミュニケーションズ",content:"広告主のためのプラットフォームであるDSPの実装をPHPで行いました。"},{color:"grey darken-4",icon:"mdi-sail-boat",term:"2020年11月 2days",name:"株式会社VOYAGE GROUP",content:"４人１チームとなり、GoとAWSを用いてパフォーマンスチューニングを行いました。"}]}}}),Q=K,J=(n("5e24"),Object(d["a"])(Q,H,F,!1,null,"274a0ab3",null)),N=J.exports;m()(J,{VCard:y["a"],VCardText:k["a"],VCardTitle:k["b"],VContainer:f["a"],VTimeline:R["a"],VTimelineItem:L["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-7",attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"purple lighten-5 text-center",attrs:{flat:"",tile:"",width:"100%"}},[n("v-card-text",{staticClass:"subtitle-1 black--text pb-2"},[t._v(" This web page is created by "),n("v-icon",{attrs:{color:"green darken-2"}},[t._v(" mdi-vuejs ")]),n("v-icon",{attrs:{color:"light-blue lighten-2"}},[t._v(" mdi-vuetify ")]),n("v-icon",{attrs:{color:"blue"}},[t._v(" mdi-language-typescript ")])],1),n("v-card-text",{staticClass:"black--text pt-2"},[t._v(" © 2021 — "),n("strong",[t._v("Kohei")])])],1)],1)},B=[],U=a["a"].extend({data:function(){return{}}}),Y=U,X=n("553a"),Z=Object(d["a"])(Y,q,B,!1,null,null,null),tt=Z.exports;m()(Z,{VCard:y["a"],VCardText:k["a"],VFooter:X["a"],VIcon:w["a"]});var et=a["a"].extend({name:"App",components:{Top:v,About:S,Skill:A,Experience:D,Intern:N,Footer:tt},data:function(){return{}}}),nt=et,at=(n("5c0b"),n("7496")),rt=n("f6c4"),it=Object(d["a"])(nt,r,i,!1,null,null,null),ot=it.exports;m()(it,{VApp:at["a"],VMain:rt["a"]});var ct=n("f309");a["a"].use(ct["a"]);var st=new ct["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:st,render:function(t){return t(ot)}}).$mount("#app")},cd7f:function(t,e,n){t.exports=n.p+"img/aws-ec2.54c02a96.svg"},cf7e:function(t,e,n){},d17c:function(t,e,n){},f5e3:function(t,e,n){}});
//# sourceMappingURL=app.3a6e1045.js.map