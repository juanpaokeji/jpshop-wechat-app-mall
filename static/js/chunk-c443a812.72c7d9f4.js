(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c443a812"],{"02f4":function(t,e,n){var a=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var r,o,c=String(i(e)),s=a(n),l=c.length;return s<0||s>=l?t?"":void 0:(r=c.charCodeAt(s),r<55296||r>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):r:t?c.slice(s,s+2):o-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),i=n("32e9"),r=n("79e5"),o=n("be13"),c=n("2b4c"),s=n("520a"),l=c("species"),u=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=c(t),g=!r((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),f=g?!r((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e})):void 0;if(!g||!f||"replace"===t&&!u||"split"===t&&!p){var h=/./[d],v=n(o,d,""[t],(function(t,e,n,a,i){return e.exec===s?g&&!i?{done:!0,value:h.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}})),b=v[0],m=v[1];a(String.prototype,t,b),i(RegExp.prototype,d,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var a=n("aae3"),i=n("cb7c"),r=n("ebd6"),o=n("0390"),c=n("9def"),s=n("5f1b"),l=n("520a"),u=n("79e5"),p=Math.min,d=[].push,g="split",f="length",h="lastIndex",v=4294967295,b=!u((function(){RegExp(v,"y")}));n("214f")("split",2,(function(t,e,n,u){var m;return m="c"=="abbc"[g](/(b)*/)[1]||4!="test"[g](/(?:)/,-1)[f]||2!="ab"[g](/(?:ab)*/)[f]||4!="."[g](/(.?)(.?)/)[f]||"."[g](/()()/)[f]>1||""[g](/.?/)[f]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!a(t))return n.call(i,t,e);var r,o,c,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=void 0===e?v:e>>>0,b=new RegExp(t.source,u+"g");while(r=l.call(b,i)){if(o=b[h],o>p&&(s.push(i.slice(p,r.index)),r[f]>1&&r.index<i[f]&&d.apply(s,r.slice(1)),c=r[0][f],p=o,s[f]>=g))break;b[h]===r.index&&b[h]++}return p===i[f]?!c&&b.test("")||s.push(""):s.push(i.slice(p)),s[f]>g?s.slice(0,g):s}:"0"[g](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,a){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i,a):m.call(String(i),n,a)},function(t,e){var a=u(m,t,this,e,m!==n);if(a.done)return a.value;var l=i(t),d=String(this),g=r(l,RegExp),f=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),x=new g(b?l:"^(?:"+l.source+")",h),_=void 0===e?v:e>>>0;if(0===_)return[];if(0===d.length)return null===s(x,d)?[d]:[];var y=0,w=0,S=[];while(w<d.length){x.lastIndex=b?w:0;var k,E=s(x,b?d:d.slice(w));if(null===E||(k=p(c(x.lastIndex+(b?0:w)),d.length))===y)w=o(d,w,f);else{if(S.push(d.slice(y,w)),S.length===_)return S;for(var j=1;j<=E.length-1;j++)if(S.push(E[j]),S.length===_)return S;w=y=k}}return S.push(d.slice(y)),S}]}))},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"48fb":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return c}));var a=n("b775");function i(t){return Object(a["a"])({url:"/sales",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/goodsSales",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/leaderSales",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/userSales",method:"get",params:t})}},"504c":function(t,e,n){var a=n("9e1e"),i=n("0d58"),r=n("6821"),o=n("52a7").f;t.exports=function(t){return function(e){var n,c=r(e),s=i(c),l=s.length,u=0,p=[];while(l>u)n=s[u++],a&&!o.call(c,n)||p.push(t?[n,c[n]]:c[n]);return p}}},"520a":function(t,e,n){"use strict";var a=n("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,o=i,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(o=function(t){var e,n,o,u,p=this;return l&&(n=new RegExp("^"+p.source+"$(?!\\s)",a.call(p))),s&&(e=p[c]),o=i.call(p,t),s&&o&&(p[c]=p.global?o.index+o[0].length:e),l&&o&&o.length>1&&r.call(o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o}),t.exports=o},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"6b54":function(t,e,n){"use strict";n("3846");var a=n("cb7c"),i=n("0bfb"),r=n("9e1e"),o="toString",c=/./[o],s=function(t){n("2aba")(RegExp.prototype,o,t,!0)};n("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?s((function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)})):c.name!=o&&s((function(){return c.call(this)}))},8615:function(t,e,n){var a=n("5ca1"),i=n("504c")(!1);a(a.S,"Object",{values:function(t){return i(t)}})},a06a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vip-list-container"},[n("div",{staticClass:"vip-list-top"},[n("el-row",[n("el-col",{attrs:{span:5}},[n("div",{staticClass:"vip-list-top-col"},[n("span",{staticStyle:{padding:"0 5px"}},[t._v("商品名称")]),t._v(" "),n("el-input",{attrs:{placeholder:"请输入",size:"small"},model:{value:t.goods_name,callback:function(e){t.goods_name=e},expression:"goods_name"}})],1)]),t._v(" "),n("el-col",{attrs:{span:5}},[n("div",{staticClass:"vip-list-top-col"},[n("span",{staticStyle:{padding:"0 5px"}},[t._v("规格编码")]),t._v(" "),n("el-input",{attrs:{placeholder:"请输入",size:"small"},model:{value:t.goods_code,callback:function(e){t.goods_code=e},expression:"goods_code"}})],1)]),t._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"order-manage-top-col",staticStyle:{"padding-left":"0"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetimerange","range-separator":"至","start-placeholde":"开始时间","end-placeholde":"结束时间",size:"small"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)]),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),n("el-col",{staticStyle:{float:"right"},attrs:{span:2}},[n("a",{attrs:{href:t.export_url,target:"_blank"},on:{click:t.export_data}},[t._v("导出")])])],1)],1),t._v(" "),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.newList,stripe:""}},[n("el-table-column",{attrs:{prop:"goods_id",label:"商品ID",align:"center",width:"80px"}}),t._v(" "),n("el-table-column",{attrs:{label:"商品图",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("l-pic",{attrs:{picurl:t.row.pic_url,size:{width:40,height:40},disdel:!1,disview:!1}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",align:"center",width:"500px"}}),t._v(" "),n("el-table-column",{attrs:{prop:"price_total",label:"交易额",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"sale_total",label:"销售量",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"cost_price",label:"成本",align:"center"}})],1)],1),t._v(" "),n("div",{staticStyle:{"text-align":"right",margin:"15px 15px"}},[n("el-pagination",{staticClass:"page",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.count,"page-size":t.limit,"current-page":t.page},on:{"size-change":t.changePage,"current-change":t.changePage}})],1)])},i=[],r=n("48fb"),o=n("334a"),c=n("ed08"),s={name:"vipList",components:{LPic:o["a"]},data:function(){return{list:[],count:1,key:this.$store.state.app.activeApp.saa_key,limit:20,page:1,goods_name:"",goods_code:"",begin_time:"",end_time:"",time:"",export_url:"",newList:[]}},watch:{time:function(t){null!==t?(this.begin_time=Object(c["a"])(t[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.end_time=Object(c["a"])(t[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.begin_time="",this.end_time="")}},mounted:function(){this.getGoodsSales()},methods:{getGoodsSales:function(){var t=this,e={key:this.key,page:this.page,limit:this.limit};Object(r["a"])(e).then((function(e){if(200===e.status){t.list=e.data;var n=(t.page-1)*t.limit,a=t.page*t.limit;t.newList=t.list.slice(n,a),t.count=parseInt(e.count)}else 204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},search:function(){var t=this;this.params={key:this.key,limit:20,page:1,goods_name:this.goods_name,goods_code:this.goods_code,begin_time:this.begin_time,end_time:this.end_time},Object(r["a"])(this.params).then((function(e){200===e.status?(t.list=e.data,console.log(t.list),t.count=parseInt(e.count)):204===e.status?(t.list=[],t.count=1):t.$message.error(e.message)}))},export_data:function(){this.export_url="/api/web/index.php/goodsSalesExport?key="+this.key+"&goods_name="+this.goods_name+"&goods_code="+this.goods_code+"&begin_time="+this.begin_time+"&end_time="+this.end_time},tableList:function(){},changePage:function(t){void 0==t&&(t=1),this.page=t,this.getGoodsSales()}}},l=s,u=(n("ba69"),n("2877")),p=Object(u["a"])(l,a,i,!1,null,"513f3374",null);e["default"]=p.exports},a481:function(t,e,n){"use strict";var a=n("cb7c"),i=n("4bf8"),r=n("9def"),o=n("4588"),c=n("0390"),s=n("5f1b"),l=Math.max,u=Math.min,p=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,g=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,h){return[function(a,i){var r=t(this),o=void 0==a?void 0:a[e];return void 0!==o?o.call(a,r,i):n.call(String(r),a,i)},function(t,e){var i=h(n,t,this,e);if(i.done)return i.value;var p=a(t),d=String(this),g="function"===typeof e;g||(e=String(e));var b=p.global;if(b){var m=p.unicode;p.lastIndex=0}var x=[];while(1){var _=s(p,d);if(null===_)break;if(x.push(_),!b)break;var y=String(_[0]);""===y&&(p.lastIndex=c(d,r(p.lastIndex),m))}for(var w="",S=0,k=0;k<x.length;k++){_=x[k];for(var E=String(_[0]),j=l(u(o(_.index),d.length),0),R=[],$=1;$<_.length;$++)R.push(f(_[$]));var O=_.groups;if(g){var C=[E].concat(R,j,d);void 0!==O&&C.push(O);var I=String(e.apply(void 0,C))}else I=v(E,d,j,R,O,e);j>=S&&(w+=d.slice(S,j)+I,S=j+E.length)}return w+d.slice(S)}];function v(t,e,a,r,o,c){var s=a+t.length,l=r.length,u=g;return void 0!==o&&(o=i(o),u=d),n.call(c,u,(function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(s);case"<":c=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var d=p(u/10);return 0===d?n:d<=l?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):n}c=r[u-1]}return void 0===c?"":c}))}}))},aae3:function(t,e,n){var a=n("d3f4"),i=n("2d95"),r=n("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},ba69:function(t,e,n){"use strict";var a=n("d3ed"),i=n.n(a);i.a},d3ed:function(t,e,n){},ed08:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("28a5"),n("a481"),n("6b54");var a=n("53ca");function i(t,e){if(0===arguments.length)return null;var n,i=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(t)?n=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var r={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},o=i.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,e){var n=r[e];return"a"===e?["日","一","二","三","四","五","六"][n]:(t.length>0&&n<10&&(n="0"+n),n||0)}));return o}}}]);