(this["webpackJsonpwuhan-virus-tracker-india"]=this["webpackJsonpwuhan-virus-tracker-india"]||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},200:function(e,a,t){},204:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),c=t.n(o),l=(t(96),t(18)),i=t(21),s=t(260),d=t(257),m=t(259),u=t(258),f=[{statecode:"TT",name:"Total",lat:24.070541,long:83.003948},{statecode:"MH",name:"Maharashtra",lat:19.076,long:72.8777},{statecode:"AP",name:"Andhra Pradesh",lat:14.7504291,long:78.57002559},{statecode:"KA",name:"Karnataka",lat:12.57038129,long:76.91999711},{statecode:"TN",name:"Tamil Nadu",lat:13.0827,long:80.2707},{statecode:"UP",name:"Uttar Pradesh",lat:27.59998069,long:78.05000565},{statecode:"DL",name:"Delhi",lat:28.6699929,long:77.23000403},{statecode:"WB",name:"West Bengal",lat:22.58039044,long:88.32994665},{statecode:"OR",name:"Odisha",lat:20.94092,long:84.803467},{statecode:"KL",name:"Kerala",lat:8.5241,long:76.9366},{statecode:"TG",name:"Telangana",lat:18.1124,long:79.0193},{statecode:"BR",name:"Bihar",lat:25.5941,long:85.1376},{statecode:"AS",name:"Assam",lat:26.244156,long:92.537842},{statecode:"GJ",name:"Gujarat",lat:22.309425,long:72.13623},{statecode:"RJ",name:"Rajasthan",lat:25.9124,long:73.7873},{statecode:"MP",name:"Madhya Pradesh",lat:23.2599,long:77.4126},{statecode:"HR",name:"Haryana",lat:28.45000633,long:77.01999101},{statecode:"CT",name:"Chhattisgarh",lat:21.295132,long:81.828232},{statecode:"PB",name:"Punjab",lat:31.51997398,long:75.98000281},{statecode:"JH",name:"Jharkhand",lat:23.80039349,long:86.41998572},{statecode:"JK",name:"Jammu and Kashmir",lat:34.29995933,long:74.46665849},{statecode:"UT",name:"Uttarakhand",lat:26.8467,long:80.9462},{statecode:"GA",name:"Goa",lat:15.491997,long:73.81800065},{statecode:"PY",name:"Puducherry",lat:11.93499371,long:79.83000037},{statecode:"TR",name:"Tripura",lat:23.83540428,long:91.27999914},{statecode:"HP",name:"Himachal Pradesh",lat:31.10002545,long:77.571167},{statecode:"CH",name:"Chandigarh",lat:30.71999697,long:77.16659704},{statecode:"MN",name:"Manipur",lat:24.79997072,long:93.95001705},{statecode:"AR",name:"Arunachal Pradesh",lat:27.10039878,long:93.61660071},{statecode:"NL",name:"Nagaland",lat:25.6669979,long:94.11657019},{statecode:"ML",name:"Meghalaya",lat:25.57049217,long:91.8800142},{statecode:"LA",name:"Ladakh",lat:34.209515,long:77.615112},{statecode:"AN",name:"Andaman and Nicobar Islands",lat:11.66702557,long:92.73598262},{statecode:"DN",name:"Dadra and Nagar Haveli and Daman and Diu",lat:20.26657819,long:73.0166178},{statecode:"SK",name:"Sikkim",lat:27.3333303,long:88.6166475},{statecode:"MZ",name:"Mizoram",lat:23.71039899,long:92.72001461},{statecode:"UN",name:"State Unassigned",lat:0,long:0},{statecode:"LD",name:"Lakshadweep",lat:10.56257331,long:72.63686717}],g=(t(97),t(244)),h=t(248),b=t(249);t(98);function p(e){var a=e.title,t=e.isColor1,n=e.isColor2,o=e.isColor3,c=e.isColor4,l=e.cases,i=e.active,s=e.onClick,d=e.isDark;return r.a.createElement(g.a,{onClick:s,className:"card ".concat(d&&"card--darkmode"," ").concat(i&&"card--selected","\n       ").concat(n&&"card--color2","\n      ").concat(o&&"card--color3","\n      ").concat(c&&"card--color4")},r.a.createElement(h.a,null,r.a.createElement(b.a,{className:"card_title ".concat(d&&"card--darkmode"),color:"textSecondary"},a),r.a.createElement("h2",{className:"\n      ".concat(t&&"card_color1","\n      ").concat(n&&"card_color2","\n      ").concat(o&&"card_color3","\n      ").concat(c&&"card_color4")},l)))}var v=t(263),k=t(264),E=t(261),y=t(262),C=t(83),N=t.n(C),w=function(e){return e?"".concat(N()(e).format("0a")):"+0"},_={active:{color:"#a820ff",multiplier:800},confirmed:{color:"#3783ea",multiplier:650},recovered:{color:"#2c9947",multiplier:650},deaths:{color:"#e9113f",multiplier:2400}};t(102);var j=function(e){var a=e.casesType,t=e.center,n=e.mapData,o=e.isDark;return r.a.createElement("div",{className:"map ".concat(o&&"map--darkMode")},r.a.createElement(v.a,{key:"maps",center:t,zoom:7,maxZoom:10,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,minZoom:4,attributionControl:!0,bounds:[[27.1751,70.23846],[20.940737,93.781153]]},r.a.createElement(k.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> \u2014 Map data \xa9 <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"active";return e.map((function(e,t){return"TT"!==e.statecode?r.a.createElement(E.a,{key:t,center:[e.lat,e.lng],fillOpacity:.3,stroke:!0,color:_[a].color,fillColor:_[a].color,radius:Math.sqrt(e[a])*_[a].multiplier},r.a.createElement(y.a,{key:e.statecode},r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-name"},e.state),r.a.createElement("div",{className:"info-active"},"Active:",e.active),r.a.createElement("div",{className:"info-confirmed"},"Recovered:",e.confirmed),r.a.createElement("div",{className:"info-recovered"},"Recovered:",e.recovered),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",e.deaths)))):r.a.createElement("div",null)}))}(n,a)))},O=(t(103),t(56)),M=(t(200),{bezierCurve:!1,legend:{display:!1},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{ticks:{display:!1},gridLines:{display:!1,drawBorder:!1}}],yAxes:[{ticks:{display:!1},gridLines:{display:!1,drawBorder:!1}}]}}),S=function(e){var a=e.data,t=e.isDark,n=a.cases_time_series?r.a.createElement(O.Line,{data:{labels:a.cases_time_series.map((function(e){return e.date})),datasets:[{data:a.cases_time_series.map((function(e){return e.dailydeceased})),label:"Deaths",borderColor:"#ff3333",fill:!0,backgroundColor:"rgba(218, 31, 31, 0.5)",borderWidth:1}]},options:Object(l.a)(Object(l.a)({},M),{},{title:{display:!0,text:"Deceased Cases",fontColor:"".concat(t?"white":"grey"),fontSize:20,position:"left"}})}):null,o=a.cases_time_series?r.a.createElement(O.Line,{data:{labels:a.cases_time_series.map((function(e){return e.date})),datasets:[{data:a.cases_time_series.map((function(e){return e.dailyconfirmed})),label:"Infected",borderColor:"#3333ff",backgroundColor:"rgba(56, 56, 244, 0.5)",borderWidth:1,fill:!0}]},options:Object(l.a)(Object(l.a)({},M),{},{title:{display:!0,text:"Confirmed Cases",fontColor:"".concat(t?"white":"grey"),fontSize:20,position:"left"}})}):null,c=a.cases_time_series?r.a.createElement(O.Line,{data:{labels:a.cases_time_series.map((function(e){return e.date})),datasets:[{data:a.cases_time_series.map((function(e){return e.dailyrecovered})),label:"Recovered",borderColor:"#33ff33",fill:!0,backgroundColor:"rgba(56, 244,56 , 0.5)",borderWidth:1}]},options:Object(l.a)(Object(l.a)({},M),{},{title:{display:!0,text:"Recovered Cases",fontSize:20,fontColor:"".concat(t?"white":"grey"),position:"left"}})}):null;return r.a.createElement("div",{className:"chart-container"},r.a.createElement("div",{className:"chart ".concat(t&&"chart--darkMode")},n),r.a.createElement("div",{className:"chart ".concat(t&&"chart--darkMode")},o),r.a.createElement("div",{className:"chart ".concat(t&&"chart--darkMode")},c))},D=t(252),R=t(251),T=t(256),L=t(255),A=t(253),x=t(254),P=t(250),B=t(201),H=[{id:"state",label:"State",align:"left"},{id:"code",label:"StateCode",align:"center"},{id:"active",label:"Active",align:"center",format:function(e){return e.toLocaleString("en-US")}},{id:"confirmed",label:"Confirmed",align:"center",format:function(e){return e.toLocaleString("en-IN")}},{id:"recovered",label:"Recovered",align:"center",format:function(e){return e.toLocaleString("en-IN")}},{id:"deaths",label:"Deceased",align:"center",format:function(e){return e.toLocaleString("en-IN")}}];function W(e){var a=e.states,t=e.isDark,n=Object(P.a)({tablecontainer:{backgroundColor:"".concat(t?"black":"white"),borderRadius:10,boxShadow:"0 0 8px -4px rgba(0, 0, 0, 0.6)",marginBottom:10,marginTop:10,height:600},oddRow:{backgroundColor:"".concat(t?"#424242":"#f3f2f8")},evenRow:{backgroundColor:"".concat(t?"#616161":"#bdbdbd")}})(),o=0;return r.a.createElement(R.a,{className:n.tablecontainer},r.a.createElement(D.a,{stickyHeader:!0,"aria-aria-label":"Sticky Table"},r.a.createElement(A.a,null,r.a.createElement(x.a,null,H.map((function(e){return r.a.createElement(L.a,{key:e.id,align:e.align,style:t?{backgroundColor:"#1f1f1f",color:"white",border:0}:{}},e.label)})))),r.a.createElement(T.a,null,a.map((function(e){return r.a.createElement(x.a,{key:Math.random()/Math.random(),className:o++%2?n.oddRow:n.evenRow},r.a.createElement(L.a,{key:e.state,align:"left",style:{borderRadius:15,border:0,color:"white"}},e.state),r.a.createElement(L.a,{key:e.statecode,align:"center",style:{borderRadius:15,border:0,color:"white"}},e.statecode),r.a.createElement(L.a,{key:Math.random()/Math.random(),align:"center",style:{borderRadius:15,border:0,color:"white"}},B(e.active)),r.a.createElement(L.a,{key:Math.random()/Math.random(),align:"center",style:{borderRadius:15,border:0,color:"white"}},B(e.confirmed)),r.a.createElement(L.a,{key:Math.random()/Math.random(),align:"center",style:{borderRadius:15,border:0,color:"white"}},B(e.recovered)),r.a.createElement(L.a,{key:Math.random()/Math.random(),align:"center",style:{borderRadius:15,border:0,color:"white"}},B(e.deaths)))})))))}var z=function(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(!0),g=Object(i.a)(c,2),h=g[0],b=(g[1],Object(n.useState)(window.innerWidth)),v=Object(i.a)(b,2),k=v[0],E=v[1],y=Object(n.useState)([]),C=Object(i.a)(y,2),N=C[0],_=C[1],O=Object(n.useState)("TT"),M=Object(i.a)(O,2),D=M[0],R=M[1],T=Object(n.useState)({}),L=Object(i.a)(T,2),A=L[0],x=L[1],P=Object(n.useState)("active"),B=Object(i.a)(P,2),H=B[0],z=B[1],J=Object(n.useState)([24.070541,83.003948]),K=Object(i.a)(J,2),U=K[0],I=K[1],G=function(e){E(window.innerWidth)};Object(n.useEffect)((function(){window.addEventListener("resize",G)})),Object(n.useEffect)((function(){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){o(e);for(var a=[],t=0;t<e.statewise.length;t++)for(var n=0;n<f.length;n++)if(e.statewise[t].statecode===f[n].statecode){var r=Object(l.a)(Object(l.a)({},e.statewise[t]),{},{lat:f[t].lat,lng:f[t].long,name:f[t].name});a.push(r)}_(a),x(a[0])}))}),[]);var Z=r.a.createElement(d.a,{className:"app_dropdown"},r.a.createElement(m.a,{className:"app_select",variant:"outlined",value:D,onChange:function(e){var a=e.target.value;R(a),console.log("statecode -----",a);var t=N.filter((function(e){return e.statecode===a}))[0];x(t),I([t.lat,t.lng])}},N.map((function(e){return r.a.createElement(s.a,{key:e.statecode,value:e.statecode},e.name)}))),r.a.createElement(u.a,null,"Select state from Here"));return r.a.createElement("div",{className:"app ".concat(h&&"dark-mode")},r.a.createElement("div",{className:"app_header ".concat(h&&"dark-mode-header")},r.a.createElement("h4",null,"Wuhan Virus Tracker")),r.a.createElement("div",{className:"app_body"},r.a.createElement("div",{className:"app_right_left"},r.a.createElement("div",{className:"app_right"},r.a.createElement("div",{className:"app_right_select"},Z),r.a.createElement("div",{className:"app_status"},r.a.createElement(p,{isDark:h,onClick:function(e){return z("active")},title:"Active",active:"active"==H,isColor1:!0,cases:k<770?w(A.active):A.active}),r.a.createElement(p,{isDark:h,active:"confirmed"==H,isColor2:!0,onClick:function(e){return z("confirmed")},title:"Confirmed",cases:k<770?w(A.confirmed):A.confirmed}),r.a.createElement(p,{isDark:h,active:"recovered"==H,isColor3:!0,onClick:function(e){return z("recovered")},title:"Recovered",cases:k<770?w(A.recovered):A.recovered}),r.a.createElement(p,{isDark:h,active:"deaths"==H,isColor4:!0,onClick:function(e){return z("deaths")},title:"Deaths",cases:k<770?w(A.deaths):A.deaths})),r.a.createElement(j,{isDark:h,center:U,casesType:H,mapData:N})),r.a.createElement("div",{className:"app_left"},r.a.createElement(S,{isDark:h,data:t}))),r.a.createElement("div",{className:"stateinfotable"},r.a.createElement(W,{states:N,isDark:h}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))},91:function(e,a,t){e.exports=t(204)},96:function(e,a,t){},98:function(e,a,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.38750557.chunk.js.map