(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63b3c110"],{"6fea":function(t,n,o){"use strict";var e=o("f6f1"),a=o.n(e);a.a},c641:function(t,n,o){"use strict";var e=o("f34a"),a=o.n(e);a.a},ceb8:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"procontainer"},[o("div",{staticClass:"help",on:{click:t.gohelp}},[o("svg-icon",{staticStyle:{"font-size":"20px",position:"relative",top:"3px"},attrs:{"icon-class":"bangzhu"}}),t._v(" "),o("div",[t._v("帮助教程")])],1),t._v(" "),o("div",{staticClass:"setting"},[o("div",[o("svg-icon",{staticStyle:{"font-size":"25px",position:"relative",top:"3px"},attrs:{"icon-class":"morentouxiang"}}),t._v(" "),o("el-dropdown",{on:{command:t.handleCommand}},[o("span",{staticStyle:{cursor:"pointer"}},[t._v("\n                            "+t._s(t.name)),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{command:1}},[t._v("基本资料")]),t._v(" "),o("el-dropdown-item",{attrs:{command:3,divided:""}},[t._v("退 出")])],1)],1)],1)])])])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"proName"},[e("img",{staticClass:"logo_url_login",staticStyle:{width:"95px",height:"35px",margin:"12.5px 0 0 60px"},attrs:{src:o("dd88"),alt:""}})])}],i=(o("7f7f"),{name:"Navbar",data:function(){return{name:this.$store.state.user.name}},mounted:function(){this.setImgUrl()},methods:{handleCommand:function(t){switch(t){case 1:this.$router.push({path:"/info/updatePW"});break;case 3:this.$store.dispatch("user/logout");break}},goToOld:function(){window.location.href="https://web.juanpao.com/adminMerchant"},gohelp:function(){console.log("todo"),window.location.href="http://wen.juanpao.cn/web/#/1?page_id=1"},setImgUrl:function(){if(sessionStorage.getItem("copyright")){var t=JSON.parse(sessionStorage.getItem("copyright"));if(t.logo_url){var n=document.body.querySelector("img[class=logo_url_login]");n&&(n.src=t.logo_url)}}}}}),s=i,c=(o("6fea"),o("2877")),r=Object(c["a"])(s,e,a,!1,null,"7da1d2a8",null);n["a"]=r.exports},dd88:function(t,n,o){t.exports=o.p+"static/img/logo2.4a842ec4.png"},f34a:function(t,n,o){},f6f1:function(t,n,o){},f82c:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{height:"100%"}},[o("div",{staticClass:"header"},[o("navbar")],1),t._v(" "),o("div",{staticClass:"app-container"},[o("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[o("router-view",{key:t.key})],1)],1)])},a=[],i=o("bc3a"),s=o.n(i),c=o("ceb8"),r=(o("5c96"),{name:"app",components:{Navbar:c["a"]},data:function(){return{}},computed:{key:function(){return this.$route.path}},mounted:function(){this.getVendor()},methods:{getVendor:function(){var t=this.$loading({lock:!0,text:"由于yii框架必须要依赖vendor,系统正在自动安装中,请耐心等待请勿关闭浏览器,安装完成后请手动刷新",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});s.a.get("api/vendor.php").then((function(n){200===n.status&&t.close()})).catch((function(n){t.close()}))}}}),l=r,d=(o("c641"),o("2877")),u=Object(d["a"])(l,e,a,!1,null,"5533e9cd",null);n["default"]=u.exports}}]);