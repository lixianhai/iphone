(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13f072a2"],{"2ea1":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app"},[e("div",[e("div",[e("span",[t._v("当前头像：")]),e("span",{staticClass:"img_wrap"},[e("img",{attrs:{src:t.userHeadPortrait}})])]),e("div",[e("span",[t._v("上传头像：")]),e("van-uploader",{attrs:{"max-count":1,"after-read":t.afterRead},model:{value:t.fileList,callback:function(a){t.fileList=a},expression:"fileList"}})],1)]),e("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.confirmChange}},[t._v("确认修改")])],1)},i=[],n={data:function(){return{fileList:[]}},methods:{afterRead:function(t){var a=t.content;this.$store.commit("setUserHeadPortraitPath",a),localStorage.setItem("userHeadPortraitPath",a)},confirmChange:function(){this.$router.go(-1)}},computed:{userHeadPortrait:function(){return this.$store.state.userHeadPortraitPath||localStorage.getItem("userHeadPortraitPath")}}},s=n,o=(e("d5c5"),e("2877")),c=Object(o["a"])(s,r,i,!1,null,"4d4eb252",null);a["default"]=c.exports},c9b8:function(t,a,e){},d5c5:function(t,a,e){"use strict";var r=e("c9b8"),i=e.n(r);i.a}}]);
//# sourceMappingURL=chunk-13f072a2.db7149cc.js.map