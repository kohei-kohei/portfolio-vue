(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],d=0,m=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"02f0":function(t,e,n){t.exports=n.p+"img/mycat.b4920050.jpeg"},"0b82":function(t,e,n){},"12aa":function(t,e,n){t.exports=n.p+"img/vue.22efb7c2.svg"},1748:function(t,e,n){t.exports=n.p+"img/git.64d5e98f.svg"},"2ab4":function(t,e,n){},"42b2":function(t,e,n){t.exports=n.p+"img/webrtc.520f0798.svg"},"4e4b":function(t,e,n){"use strict";n("7212")},"52c6":function(t,e,n){t.exports=n.p+"img/grpc.67519901.svg"},"5c0b":function(t,e,n){"use strict";n("9c0c")},"60f0":function(t,e,n){t.exports=n.p+"img/react.9a28da9f.svg"},7212:function(t,e,n){},"786f":function(t,e,n){},"7b09":function(t,e,n){"use strict";n("2ab4")},"999b":function(t,e,n){t.exports=n.p+"img/docker.589dd398.svg"},"9c0c":function(t,e,n){},bfc6:function(t,e,n){t.exports=n.p+"img/python.51c2eab2.svg"},c068:function(t,e,n){"use strict";n("786f")},c5ab:function(t,e,n){t.exports=n.p+"img/gopher.266d1cb0.svg"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("Top"),n("About"),n("Skill"),n("Experience"),n("Intern")],1),n("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"top d-flex align-center justify-center",style:{height:t.height+"px"},attrs:{fluid:""}},[n("h1",{staticClass:"text-h3 text-sm-h2 text-lg-h1 white--text"},[t._v(" Welcome to Kohei's page ")])])},c=[],s=r["a"].extend({data:function(){return{height:window.innerHeight,width:window.innerWidth}},methods:{handleResize:function(){this.height=window.innerHeight,this.width=window.innerWidth}},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.width!==window.innerWidth&&t.handleResize()}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}}),l=s,u=(n("7b09"),n("2877")),d=n("6544"),m=n.n(d),p=n("a523"),v=Object(u["a"])(l,o,c,!1,null,"84e49294",null),f=v.exports;m()(v,{VContainer:p["a"]});var b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("h2",{staticClass:"text-h4 text-sm-h3"},[t._v("About")]),r("v-row",{attrs:{justify:"center",align:"center","align-content":"center"}},[r("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[r("v-avatar",{attrs:{size:"200"}},[r("img",{attrs:{src:n("02f0"),alt:"mycat"}})])],1),r("v-col",{attrs:{cols:"12",sm:"8",lg:"6"}},[r("v-card",[r("v-card-title",[t._v("情報")]),r("v-card-text",{staticClass:"d-flex align-start text--primary"},[r("p",{staticClass:"item-name mr-5 mr-sm-12"},[t._v("Name")]),r("p",[t._v("Kohei")])]),r("v-card-text",{staticClass:"d-flex align-start text--primary"},[r("p",{staticClass:"item-name mr-5 mr-sm-12"},[t._v("GitHub")]),r("p",[r("a",{attrs:{href:"https://github.com/kohei-kohei"}},[r("v-icon",{attrs:{size:t.iconSize,color:"black"}},[t._v(" mdi-github ")]),t._v(" kohei-kohei ")],1)])]),r("v-card-text",{staticClass:"d-flex align-start text--primary"},[r("p",{staticClass:"item-name mr-5 mr-sm-12"},[t._v("Memo")]),r("p",[r("a",{attrs:{href:"https://scrapbox.io/kohei-kohei-develop/"}},[r("v-icon",{attrs:{size:t.iconSize,color:"green darken-1"}},[t._v(" mdi-file-document-edit-outline ")]),t._v(" Scrapbox ")],1)])]),r("v-card-text",{staticClass:"d-flex align-start text--primary"},[r("p",{staticClass:"item-name mr-5 mr-sm-12"},[t._v("Like")]),r("p",{staticClass:"like"},t._l(t.likeIcons,(function(e,n){return r("v-icon",{key:n,attrs:{size:t.iconSize,color:e.color}},[t._v(" "+t._s(e.icon)+" ")])})),1)]),r("v-card-title",[t._v("経歴")]),t._l(t.backgrounds,(function(e,n){return r("v-card-text",{key:n,staticClass:"d-flex align-start text--primary"},[r("p",{staticClass:"text-no-wrap mr-5"},[t._v(t._s(e.year))]),r("p",[t._v(" "+t._s(e.content)+" "),r("v-icon",{attrs:{size:t.iconSize,color:e.color}},[t._v(" "+t._s(e.icon)+" ")])],1)])}))],2)],1)],1)],1)},h=[],g=r["a"].extend({data:function(){return{iconSize:"22px",likeIcons:[{color:"black",icon:"mdi-apple"},{color:"blue",icon:"mdi-microsoft-visual-studio-code"},{color:"black",icon:"mdi-soccer"},{color:"black",icon:"mdi-badminton"},{color:"black",icon:"mdi-snowboard"},{color:"red accent-2",icon:"mdi-glass-cocktail"},{color:"black",icon:"mdi-airplane-takeoff"},{color:"red",icon:"mdi-music-box"},{color:"amber darken-2",icon:"mdi-cat"}],backgrounds:[{color:"grey darken-1",icon:"mdi-language-c",year:"'16年4月〜",content:"CSの基礎、画像・音声処理"},{color:"grey darken-1",icon:"mdi-language-python",year:"'19年4月〜",content:"機械学習を用いた自然言語処理の研究"},{color:"light-blue",icon:"mdi-language-go",year:"'22年4月〜",content:"バックエンドエンジニア(予定)"}]}}}),x=g,_=(n("c068"),n("8212")),y=n("b0af"),k=n("99d9"),C=n("62ad"),w=n("132d"),V=n("0fd9"),j=Object(u["a"])(x,b,h,!1,null,"2b7b61c8",null),O=j.exports;m()(j,{VAvatar:_["a"],VCard:y["a"],VCardText:k["a"],VCardTitle:k["b"],VCol:C["a"],VContainer:p["a"],VIcon:w["a"],VRow:V["a"]});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"text-h4 text-sm-h3"},[t._v("Skill")]),n("h3",{staticClass:"text-h5"},[n("v-icon",{attrs:{size:"20px",color:"black"}},[t._v(" mdi-file-code-outline ")]),t._v(" langage "),n("v-icon",{attrs:{size:"20px",color:"black"}},[t._v(" mdi-file-code-outline ")])],1),n("v-row",{attrs:{justify:"center","align-content":"center"}},t._l(t.langs,(function(e,r){return n("v-col",{key:r,attrs:{sm:"2"}},[n("img",{attrs:{src:e.src,alt:e.name}}),n("p",[t._v(t._s(e.name))])])})),1),n("h3",{staticClass:"text-h5"},[n("v-icon",{attrs:{size:"18px",color:"black"}},[t._v(" mdi-tools ")]),t._v(" other "),n("v-icon",{attrs:{size:"18px",color:"black"}},[t._v(" mdi-tools ")])],1),n("v-row",{attrs:{justify:"center","align-content":"center"}},t._l(t.tools,(function(e,r){return n("v-col",{key:r,attrs:{sm:"2"}},[n("img",{attrs:{src:e.src,alt:e.name}}),n("p",[t._v(t._s(e.name))])])})),1)],1)},T=[],z=r["a"].extend({data:function(){return{langs:[{src:n("c5ab"),name:"Go"},{src:n("d01d"),name:"TypeScript"},{src:n("60f0"),name:"React"},{src:n("12aa"),name:"Vue.js"},{src:n("bfc6"),name:"Python"}],tools:[{src:n("1748"),name:"Git"},{src:n("999b"),name:"Docker"},{src:n("52c6"),name:"gRPC"},{src:n("42b2"),name:"WebRTC"}]}}}),E=z,P=(n("daf9"),Object(u["a"])(E,S,T,!1,null,"707bc41d",null)),R=P.exports;m()(P,{VCol:C["a"],VContainer:p["a"],VIcon:w["a"],VRow:V["a"]});var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"text-h4 text-sm-h3"},[t._v("Experience")]),n("Timeline",{attrs:{items:t.interns}})],1)},I=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.items,(function(e,r){return n("v-timeline-item",{key:r,attrs:{color:e.color,icon:e.icon,"fill-dot":""}},[n("v-card",{attrs:{color:e.color,dark:""}},[n("span",{staticClass:"mt-2 ml-4"},[t._v(t._s(e.term))]),n("v-card-title",{staticClass:"title pt-0 pb-2"},[t._v(" "+t._s(e.name)+" ")]),n("v-card-text",{staticClass:"white text--primary pa-4"},[n("p",{staticClass:"mb-0"},[t._v(" "+t._s(e.content)+" ")])])],1)],1)})),1)},W=[],G=r["a"].extend({props:{items:Object}}),M=G,D=(n("4e4b"),n("8414")),L=n("1e06"),F=Object(u["a"])(M,$,W,!1,null,"529d89e7",null),H=F.exports;m()(F,{VCard:y["a"],VCardText:k["a"],VCardTitle:k["b"],VTimeline:D["a"],VTimelineItem:L["a"]});var K=r["a"].extend({components:{Timeline:H},data:function(){return{interns:[{color:"grey darken-4",icon:"mdi-table-clock",term:"2020年6月1日〜2021年1月28日",name:"デジタルクルーズ株式会社",content:"私1人で使用言語や設計を考え、エンジニアの方にアドバイスをいただきながら、GoとVueとMySQLを使って勤怠管理システムを実装し、EC2にデプロイしました。"},{color:"deep-orange darken-3",icon:"mdi-video-account",term:"2021年4月20日〜現在",name:"株式会社スタジアム",content:"GoとgRPCを用いてWeb面接システムの改善・開発を行いました。また、ReactとWebRTCを用いて面接画面などのUI・UXの改善を行いました。"}]}}}),U=K,B=Object(u["a"])(U,A,I,!1,null,null,null),J=B.exports;m()(B,{VContainer:p["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"text-h4 text-sm-h3"},[t._v("Intern")]),n("Timeline",{attrs:{items:t.interns}})],1)},Q=[],X=r["a"].extend({components:{Timeline:H},data:function(){return{interns:[{color:"red darken-2",icon:"mdi-cart-outline",term:"2020年8月 9days",name:"楽天株式会社",content:"５人１チームで新規プロダクトを考え、設計・開発を行いました。私のチームはFlaskとVueとPostgreSQLを用いて旅行に特化したSNSを作成しました。"},{color:"orange darken-2",icon:"mdi-chef-hat",term:"2020年9月 5days",name:"クックパッド株式会社",content:"前半２日間でRailsのハンズオンやサービス開発手法について学び、後半３日間でテーマに沿ったWEBアプリケーションを設計・開発しました。"},{color:"indigo darken-1",icon:"mdi-graph",term:"2020年9月 1day",name:"株式会社ファンコミュニケーションズ",content:"広告主のためのプラットフォームであるDSPの実装をPHPで行いました。"},{color:"grey darken-4",icon:"mdi-sail-boat",term:"2020年11月 2days",name:"株式会社VOYAGE GROUP",content:"４人１チームとなり、GoとAWSを用いてパフォーマンスチューニングを行いました。"},{color:"light-green darken-1",icon:"mdi-television-classic",term:"2021年3月 2days",name:"株式会社サイバーエージェント",content:"ABEMAの視聴データを題材に機械学習を用いた番組レコメンド機能を作成し、それをAPIに組み込む体験をしました。私は自由課題としてCodeDeployを用いた自動デプロイに挑戦しました。"}]}}}),Y=X,q=Object(u["a"])(Y,N,Q,!1,null,null,null),Z=q.exports;m()(q,{VContainer:p["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-7",attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"purple lighten-5 text-center",attrs:{flat:"",tile:"",width:"100%"}},[n("v-card-text",{staticClass:"subtitle-1 black--text pb-2"},[t._v(" This web page is created by "),n("v-icon",{attrs:{color:"green darken-2"}},[t._v(" mdi-vuejs ")]),n("v-icon",{attrs:{color:"light-blue lighten-2"}},[t._v(" mdi-vuetify ")]),n("v-icon",{attrs:{color:"blue"}},[t._v(" mdi-language-typescript ")])],1),n("v-card-text",{staticClass:"black--text pt-2"},[t._v(" © 2021 — "),n("strong",[t._v("Kohei")])])],1)],1)},et=[],nt=r["a"].extend({data:function(){return{}}}),rt=nt,at=n("553a"),it=Object(u["a"])(rt,tt,et,!1,null,null,null),ot=it.exports;m()(it,{VCard:y["a"],VCardText:k["a"],VFooter:at["a"],VIcon:w["a"]});var ct=r["a"].extend({name:"App",components:{Top:f,About:O,Skill:R,Experience:J,Intern:Z,Footer:ot},data:function(){return{}}}),st=ct,lt=(n("5c0b"),n("7496")),ut=n("f6c4"),dt=Object(u["a"])(st,a,i,!1,null,null,null),mt=dt.exports;m()(dt,{VApp:lt["a"],VMain:ut["a"]});var pt=n("f309");r["a"].use(pt["a"]);var vt=new pt["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:vt,render:function(t){return t(mt)}}).$mount("#app")},d01d:function(t,e,n){t.exports=n.p+"img/typescript-icon.9e8bfce4.svg"},daf9:function(t,e,n){"use strict";n("0b82")}});
//# sourceMappingURL=app.d159cd46.js.map