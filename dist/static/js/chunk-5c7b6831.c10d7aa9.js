(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c7b6831"],{"38e4":function(e,s,n){},"4eeb":function(e,s,n){"use strict";var t=n("38e4"),o=n.n(t);o.a},"9ed6":function(e,s,n){"use strict";n.r(s);var t=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"back"},[n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.loginForm.userName,callback:function(s){e.$set(e.loginForm,"userName",s)},expression:"loginForm.userName"}}),n("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.loginForm.passWord,callback:function(s){e.$set(e.loginForm,"passWord",s)},expression:"loginForm.passWord"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 登录 ")])],1)],1)],1)},o=[],a={data:function(){return{loginForm:{userName:"",passWord:""}}},methods:{onSubmit:function(e){var s=this;""!==this.userName&&""!==this.passWord&&this.$store.dispatch("LoginByUsername",this.loginForm).then((function(){s.$router.push("/")}))}}},r=a,i=(n("4eeb"),n("2877")),l=Object(i["a"])(r,t,o,!1,null,"82520d86",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5c7b6831.c10d7aa9.js.map