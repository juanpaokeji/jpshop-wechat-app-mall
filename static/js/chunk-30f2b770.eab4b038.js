(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30f2b770"],{"02f4":function(t,e,n){var i=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var a,c,s=String(r(e)),o=i(n),l=s.length;return o<0||o>=l?t?"":void 0:(a=s.charCodeAt(o),a<55296||a>56319||o+1===l||(c=s.charCodeAt(o+1))<56320||c>57343?t?s.charAt(o):a:t?s.slice(o,o+2):c-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"0561":function(t,e,n){"use strict";var i=n("9b97"),r=n.n(i);r.a},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),r=n("32e9"),a=n("79e5"),c=n("be13"),s=n("2b4c"),o=n("520a"),l=s("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=s(t),p=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),f=p?!a((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[h](""),!e})):void 0;if(!p||!f||"replace"===t&&!u||"split"===t&&!d){var v=/./[h],g=n(c,h,""[t],(function(t,e,n,i,r){return e.exec===o?p&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}})),m=g[0],b=g[1];i(String.prototype,t,m),r(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var i=n("aae3"),r=n("cb7c"),a=n("ebd6"),c=n("0390"),s=n("9def"),o=n("5f1b"),l=n("520a"),u=n("79e5"),d=Math.min,h=[].push,p="split",f="length",v="lastIndex",g=4294967295,m=!u((function(){RegExp(g,"y")}));n("214f")("split",2,(function(t,e,n,u){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(r,t,e);var a,c,s,o=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=void 0===e?g:e>>>0,m=new RegExp(t.source,u+"g");while(a=l.call(m,r)){if(c=m[v],c>d&&(o.push(r.slice(d,a.index)),a[f]>1&&a.index<r[f]&&h.apply(o,a.slice(1)),s=a[0][f],d=c,o[f]>=p))break;m[v]===a.index&&m[v]++}return d===r[f]?!s&&m.test("")||o.push(""):o.push(r.slice(d)),o[f]>p?o.slice(0,p):o}:"0"[p](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r,i):b.call(String(r),n,i)},function(t,e){var i=u(b,t,this,e,b!==n);if(i.done)return i.value;var l=r(t),h=String(this),p=a(l,RegExp),f=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),x=new p(m?l:"^(?:"+l.source+")",v),y=void 0===e?g:e>>>0;if(0===y)return[];if(0===h.length)return null===o(x,h)?[h]:[];var k=0,_=0,C=[];while(_<h.length){x.lastIndex=m?_:0;var S,w=o(x,m?h:h.slice(_));if(null===w||(S=d(s(x.lastIndex+(m?0:_)),h.length))===k)_=c(h,_,f);else{if(C.push(h.slice(k,_)),C.length===y)return C;for(var j=1;j<=w.length-1;j++)if(C.push(w[j]),C.length===y)return C;_=k=S}}return C.push(h.slice(k)),C}]}))},"2fdb":function(t,e,n){"use strict";var i=n("5ca1"),r=n("d2c8"),a="includes";i(i.P+i.F*n("5147")(a),"String",{includes:function(t){return!!~r(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,n){var i=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(r){}}return!0}},"520a":function(t,e,n){"use strict";var i=n("0bfb"),r=RegExp.prototype.exec,a=String.prototype.replace,c=r,s="lastIndex",o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(c=function(t){var e,n,c,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",i.call(d))),o&&(e=d[s]),c=r.call(d,t),o&&c&&(d[s]=d.global?c.index+c[0].length:e),l&&c&&c.length>1&&a.call(c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"7cf9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"employee-role-container"},[n("div",[n("div",[n("el-tag",{attrs:{type:"danger"}},[t._v("创建权限组，/404，/info/updatePW，/login，总览，*，未授权，等6个页面必须选择")])],1),t._v(" "),t.isAdd?n("el-row",{staticClass:"employee-role-row"},[n("el-col",{staticClass:"employee-role-row-col",staticStyle:{"text-align":"left","padding-left":"15px"},attrs:{span:14}},[n("div",{staticStyle:{padding:"0 10px"}},[t._v("请输入角色名")]),t._v(" "),n("el-input",{staticStyle:{width:"30%"},attrs:{placeholder:"请输入角色名",size:"small"},model:{value:t.role.title,callback:function(e){t.$set(t.role,"title",e)},expression:"role.title"}})],1),t._v(" "),n("el-col",{staticStyle:{"text-align":"right","padding-right":"40px"},attrs:{span:10}},[n("div",{staticStyle:{color:"#fff"}},[t._v("1")])])],1):n("el-row",{staticClass:"employee-role-row"},[n("el-col",{staticClass:"employee-role-row-col",staticStyle:{"text-align":"left","padding-left":"15px"},attrs:{span:14}},[n("div",{staticStyle:{padding:"0 10px"}},[t._v("选择角色")]),t._v(" "),n("el-select",{staticStyle:{width:"30%"},attrs:{placeholder:"请选择",size:"small"},on:{change:function(e){return t.selectRole(t.roleId)}},model:{value:t.roleId,callback:function(e){t.roleId=e},expression:"roleId"}},t._l(t.roleList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1),t._v(" "),n("div",{staticStyle:{padding:"0 10px"}},[n("el-button",{attrs:{type:"text"},on:{click:function(e){t.disName=!0}}},[n("i",{staticClass:"el-icon-edit"})]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.del}},[n("svg-icon",{attrs:{"icon-class":"shanchu"}})],1)],1)],1),t._v(" "),n("el-col",{staticStyle:{"text-align":"right","padding-right":"40px"},attrs:{span:10}},[n("el-button",{staticStyle:{padding:"8px 30px"},attrs:{type:"primary",size:"small"},on:{click:t.add}},[t._v("新 增")])],1)],1)],1),t._v(" "),n("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]),t._v(" "),n("el-divider"),t._v(" "),n("el-scrollbar",{attrs:{wrapStyle:{height:"calc(100vh - 320px)"},viewStyle:{height:"calc(100vh - 330px)"},noresize:!0}},[n("el-checkbox-group",{on:{change:t.handleCheckedCitiesChange},model:{value:t.checkedCities,callback:function(e){t.checkedCities=e},expression:"checkedCities"}},t._l(t.actionList,(function(e){return n("div",{key:e.id,staticClass:"check-content"},[n("div",{staticStyle:{width:"10%"}},[n("el-checkbox",{attrs:{label:e.id},on:{change:function(n){return t.roleChange(n,e.id)}}},[t._v(t._s(e.name?e.name:e.path))])],1),t._v(" "),n("div",{staticStyle:{width:"90%"}},t._l(e.children,(function(i){return n("el-row",{key:i.id,staticClass:"check-content-role-one"},[n("el-col",{attrs:{span:4}},[n("el-checkbox",{attrs:{label:i.id},on:{change:function(n){return t.oneChange(n,e.id,i.id)}}},[t._v(t._s(i.name))])],1),t._v(" "),n("el-col",{staticClass:"check-content-role-one-two",attrs:{span:20}},t._l(i.two_list,(function(e){return n("el-checkbox",{key:e.id,staticStyle:{width:"150px",height:"30px"},attrs:{label:e.id}},[t._v(t._s(e.title))])})),1)],1)})),1),t._v(" "),n("el-divider")],1)})),0)],1),t._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[n("el-button",{staticStyle:{padding:"8px 30px"},attrs:{type:"primary",size:"small"},on:{click:t.submit}},[t._v("提 交")])],1),t._v(" "),n("el-dialog",{attrs:{title:"修改名称",visible:t.disName,width:"30%"},on:{"update:visible":function(e){t.disName=e}}},[n("div",[n("span",{staticStyle:{padding:"0 10px"}},[t._v("角色名称：")]),t._v(" "),n("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"请输入角色名称",size:"small"},model:{value:t.role.title,callback:function(e){t.$set(t.role,"title",e)},expression:"role.title"}})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.disName=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.putName}},[t._v("确 定")])],1)])],1)},r=[],a=(n("6762"),n("2fdb"),n("7514"),n("28a5"),n("2909")),c=n("ef75"),s={name:"setting-role",data:function(){return{actionList:[],roleList:[],roleId:"",isAdd:!1,role:{title:"",status:"1",rules:"",key:this.$store.state.app.activeApp.saa_key},isIndeterminate:!0,checkAll:[],checkedCities:[],disName:!1}},computed:{options:function(){var t=this.actionList.map((function(t){return t.children?[t.id].concat(Object(a["a"])(t.children.map((function(t){return t.id})))):[t.id]}));return t.flat()}},watch:{role:function(t){this.checkedCities=t.rules.split(",")},checkedCities:function(t){this.role.rules=t.join(",")}},mounted:function(){var t=this;this.getRoleList(),Object(c["h"])({key:this.$store.state.app.activeApp.saa_key}).then((function(e){t.actionList=e.data}))},methods:{add:function(){this.role={title:"",status:"1",rules:"",key:this.$store.state.app.activeApp.saa_key},this.isAdd=!0},del:function(){var t=this;Object(c["b"])({key:this.$store.state.app.activeApp.saa_key,id:this.role.id}).then((function(e){200===e.status?(t.$message.success("删除成功！"),t.disName=!1,t.getRoleList()):t.$message.error(e.message)}))},submit:function(){var t=this;if(this.isAdd)Object(c["k"])(this.role).then((function(e){200===e.status?(t.$message.success("添加成功！"),t.isAdd=!1,t.getRoleList()):t.$message.error(e.message)}));else{var e={key:this.$store.state.app.activeApp.saa_key,rules:this.role.rules,id:this.role.id};Object(c["m"])(e).then((function(e){200===e.status?(t.$message.success("修改成功！"),t.isAdd=!1,t.getRoleList()):t.$message.error(e.message)}))}},putName:function(){var t=this,e={key:this.$store.state.app.activeApp.saa_key,id:this.role.id,title:this.role.title};Object(c["m"])(e).then((function(e){200===e.status?(t.$message.success("修改成功！"),t.disName=!1,t.getRoleList()):t.$message.error(e.message)}))},getActionList:function(){var t=this;Object(c["c"])({key:this.$store.state.app.activeApp.saa_key}).then((function(e){200===e.status?t.actionList=e.data:t.$message.error(e.message)}))},getRoleList:function(){var t=this;Object(c["g"])({key:this.$store.state.app.activeApp.saa_key}).then((function(e){200===e.status?(t.roleList=e.data,t.role=t.roleList[0],t.roleId=t.roleList[0].id):204===e.status?t.roleList=[]:t.$message.error(e.message)}))},selectRole:function(t){this.role=this.roleList.find((function(e){return e.id===t}))},handleCheckAllChange:function(t){this.checkedCities=t?this.options:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(t){this.checkedCities=t},roleChange:function(t,e){var n=this,i=this.actionList.find((function(t){return t.id===e})),r=[];i.children&&r.push.apply(r,Object(a["a"])(i.children.map((function(t){return t.id})))),r.forEach((function(e){t?n.checkedCities.indexOf(e)<0&&n.checkedCities.push(e):n.checkedCities.splice(n.checkedCities.indexOf(e),1)}))},oneChange:function(t,e,n){var i=this.actionList.find((function(t){return t.id===e})),r=this.checkedCities.map((function(t){return i.children.map((function(t){return t.id})).join(",").includes(t)})).filter((function(t){return 1==t}));return 0!=r.length||this.checkedCities.splice(this.checkedCities.indexOf(e),1),!1}}},o=s,l=(n("0561"),n("2877")),u=Object(l["a"])(o,i,r,!1,null,"42b0e128",null);e["default"]=u.exports},"9b97":function(t,e,n){},aae3:function(t,e,n){var i=n("d3f4"),r=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},d2c8:function(t,e,n){var i=n("aae3"),r=n("be13");t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},ef75:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"j",(function(){return c})),n.d(e,"l",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"m",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"f",(function(){return f})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return g}));var i=n("b775");function r(t){return Object(i["a"])({url:"/merchantSubUser",method:"get",params:t})}function a(t){var e=t.id;return delete t.id,Object(i["a"])({url:"/merchantSubUser/"+e,method:"get",params:t})}function c(t){return Object(i["a"])({url:"/merchantSubUser",method:"post",data:t})}function s(t){var e=t.id;return delete t.id,Object(i["a"])({url:"/merchantSubUser/"+e,method:"put",data:t})}function o(t){var e=t.id;return delete t.id,Object(i["a"])({url:"/merchantSubUser/"+e,method:"delete",data:t})}function l(t){return Object(i["a"])({url:"/merchantSubGroup",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/merchantNewRules",method:"get",params:t})}function d(t){var e=t.id;return delete t.id,Object(i["a"])({url:"/merchantSubGroup/"+e,method:"put",data:t})}function h(t){var e=t.id;return delete t.id,Object(i["a"])({url:"/merchantSubGroup/"+e,method:"delete",data:t})}function p(t){return Object(i["a"])({url:"/merchantSubGroup",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/merchantSubKefu",method:"get",params:t})}function v(t){return Object(i["a"])({url:"/merchantMenu",method:"get",params:t})}function g(t){return Object(i["a"])({url:"/merchantSubMenu",method:"get",params:t})}}}]);