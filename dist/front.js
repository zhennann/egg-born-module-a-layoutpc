window["a-layoutpc"]=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e){t.exports=window.Vue},function(t,e,n){var i=n(2);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(10).default)("e0cf0406",i,!0,{})},function(t,e,n){(t.exports=n(3)(!0)).push([t.i,".eb-layout-container-pc {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #343D46;\n  white-space: nowrap;\n}\n.eb-layout-container-pc .eb-layout-header:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 100%;\n  top: 100%;\n  bottom: auto;\n  height: 10px;\n  pointer-events: none;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), color-stop(40%, rgba(0, 0, 0, 0.1)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(80%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n}\n.eb-layout-container-pc .eb-layout-header .title {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  /* if set, the width not expand automatically */\n  /* min-width: 180px; */\n  color: #C3D4E7;\n  font-size: 30px;\n  font-weight: 700;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.eb-layout-container-pc .eb-layout-header .tabs {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  height: 100%;\n  background-color: #343D46 !important;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link {\n  color: #C3D4E7;\n  max-width: 200px;\n  align-items: flex-start;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link .close {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 16px;\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 8px;\n  visibility: hidden;\n  color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active {\n  color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link:hover {\n  color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n  background-color: hsla(0, 0%, 100%, 0.12);\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link:hover .close {\n  visibility: visible;\n}\n.eb-layout-container-pc .eb-layout-header .tabs:after {\n  display: none;\n}\n.eb-layout-container-pc .eb-layout-header .buttons {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  border-right: 1px solid #414D5B;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.eb-layout-container-pc .eb-layout-header .buttons a {\n  color: #C3D4E7;\n  padding: 6px;\n}\n.eb-layout-container-pc .eb-layout-header .buttons a:hover {\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 4px;\n}\n.eb-layout-container-pc .eb-layout-header .mine {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  color: #C3D4E7;\n  padding-left: 12px;\n}\n.eb-layout-container-pc .eb-layout-header .mine .item {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n}\n.eb-layout-container-pc .eb-layout-header .mine a {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header .mine:hover {\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 4px;\n}\n.eb-layout-container-pc .eb-layout-groups {\n  position: relative;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-group {\n  position: relative;\n  height: 100%;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-views {\n  position: relative;\n  height: 100%;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-views .eb-layout-view {\n  position: absolute;\n}\n.device-ios .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close,\n.device-android .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close,\n.device-windowsPhone .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close {\n  visibility: visible;\n}\n.device-windows .eb-layout-container-pc ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n  background-color: #F4F7F8;\n}\n.device-windows .eb-layout-container-pc ::-webkit-scrollbar-thumb {\n  border-radius: 0;\n  background-color: #D3E4E7;\n}\n","",{version:3,sources:["/Users/yangjian/Documents/data/cabloy/egg-born-demo/src/module/a-layoutpc/front/src/assets/css/module.less","module.less"],names:[],mappings:"AAAA;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;ACCF;ADLA;EAOI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;ACCJ;ADCI;EACE,WAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,yNAAA;EACA,6JAAA;EACA,2JAAA;ACCN;AD3BA;EA8BM,aAAA;EACA,mBAAA;EACA,YAAA;ECAJ,+CAA+C;EAC/C,sBAAsB;EDElB,cAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;ACAN;ADvCA;EA2CM,aAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,oCAAA;ACDN;AD9CA;EAkDQ,cAAA;EACA,gBAAA;EACA,uBAAA;ACDR;ADnDA;EAuDU,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;ACDV;ADhEA;EAsEQ,gEAAA;ACHR;ADnEA;EA4EQ,gEAAA;EACA,yCAAA;ACNR;ADvEA;EAgFU,mBAAA;ACNV;ADUM;EACE,aAAA;ACRR;AD7EA;EA0FM,aAAA;EACA,mBAAA;EACA,YAAA;EACA,+BAAA;EACA,iBAAA;EACA,kBAAA;ACVN;ADrFA;EAkGQ,cAAA;EACA,YAAA;ACVR;ADzFA;EAuGQ,yCAAA;EACA,kBAAA;ACXR;AD7FA;EA6GM,aAAA;EACA,mBAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;ACbN;ADpGA;EAoHQ,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ACbR;AD1GA;EA2HQ,YAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;ACdR;ADiBM;EACE,yCAAA;EACA,kBAAA;ACfR;ADpHA;EAyII,kBAAA;AClBJ;ADvHA;EA4IM,kBAAA;EACA,YAAA;AClBN;AD3HA;EAiJM,kBAAA;EACA,YAAA;ACnBN;AD/HA;EAqJQ,kBAAA;ACnBR;ADyBA;;;EAQY,mBAAA;AC5BZ;ADoCA;EAGM,WAAA;EACA,YAAA;EACA,yBAAA;ACpCN;AD+BA;EASM,gBAAA;EACA,yBAAA;ACrCN",file:"module.less",sourcesContent:[".eb-layout-container-pc {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-color: #C3D4E7;\n\n  .eb-layout-header {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: #343D46;\n    white-space: nowrap;\n\n    &:after {\n      content: '';\n      position: absolute;\n      right: 0;\n      width: 100%;\n      top: 100%;\n      bottom: auto;\n      height: 10px;\n      pointer-events: none;\n      background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), color-stop(40%, rgba(0, 0, 0, 0.1)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(80%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0)));\n      background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n    }\n\n    .title {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      /* if set, the width not expand automatically */\n      /* min-width: 180px; */\n      color: #C3D4E7;\n      font-size: 30px;\n      font-weight: 700;\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n\n    .tabs {\n      display: flex;\n      align-items: center;\n      flex-grow: 1;\n      height: 100%;\n      background-color: #343D46 !important;\n\n      .tab-link {\n        color: #C3D4E7;\n        max-width: 200px;\n        align-items: flex-start;\n\n        .close {\n          position: absolute;\n          left: 0;\n          top: 0;\n          width: 16px;\n          height: 16px;\n          line-height: 16px;\n          font-size: 16px;\n          background-color: hsla(0, 0%, 100%, .12);\n          border-radius: 8px;\n          visibility: hidden;\n          color: #C3D4E7;\n        }\n      }\n\n      .tab-link.tab-link-active {\n        color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n\n        .close {}\n      }\n\n      .tab-link:hover {\n        color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n        background-color: hsla(0, 0%, 100%, .12);\n\n        .close {\n          visibility: visible;\n        }\n      }\n\n      &:after {\n        display: none;\n      }\n    }\n\n    .buttons {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      border-right: 1px solid #414D5B;\n      padding-left: 6px;\n      padding-right: 6px;\n\n      a {\n        color: #C3D4E7;\n        padding: 6px;\n      }\n\n      a:hover {\n        background-color: hsla(0, 0%, 100%, .12);\n        border-radius: 4px;\n      }\n    }\n\n    .mine {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      color: #C3D4E7;\n      padding-left: 12px;\n\n      .item {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        padding-right: 12px;\n      }\n\n      a {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        color: #C3D4E7;\n      }\n\n      &:hover {\n        background-color: hsla(0, 0%, 100%, .12);\n        border-radius: 4px;\n      }\n    }\n  }\n\n  .eb-layout-groups {\n    position: relative;\n\n    .eb-layout-group {\n      position: relative;\n      height: 100%;\n    }\n\n    .eb-layout-views {\n      position: relative;\n      height: 100%;\n\n      .eb-layout-view {\n        position: absolute;\n      }\n    }\n  }\n}\n\n.device-ios,\n.device-android,\n.device-windowsPhone {\n  .eb-layout-container-pc {\n    .eb-layout-header {\n      .tabs {\n        .tab-link.tab-link-active {\n          .close {\n            visibility: visible;\n          }\n        }\n      }\n    }\n  }\n}\n\n.device-windows {\n  .eb-layout-container-pc {\n    ::-webkit-scrollbar {\n      width: 10px;\n      height: 10px;\n      background-color: #F4F7F8;\n    }\n\n    ::-webkit-scrollbar-thumb {\n      border-radius: 0;\n      background-color: #D3E4E7;\n    }\n  }\n}\n",".eb-layout-container-pc {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #343D46;\n  white-space: nowrap;\n}\n.eb-layout-container-pc .eb-layout-header:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 100%;\n  top: 100%;\n  bottom: auto;\n  height: 10px;\n  pointer-events: none;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), color-stop(40%, rgba(0, 0, 0, 0.1)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(80%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n}\n.eb-layout-container-pc .eb-layout-header .title {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  /* if set, the width not expand automatically */\n  /* min-width: 180px; */\n  color: #C3D4E7;\n  font-size: 30px;\n  font-weight: 700;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.eb-layout-container-pc .eb-layout-header .tabs {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  height: 100%;\n  background-color: #343D46 !important;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link {\n  color: #C3D4E7;\n  max-width: 200px;\n  align-items: flex-start;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link .close {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 16px;\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 8px;\n  visibility: hidden;\n  color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active {\n  color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link:hover {\n  color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n  background-color: hsla(0, 0%, 100%, 0.12);\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link:hover .close {\n  visibility: visible;\n}\n.eb-layout-container-pc .eb-layout-header .tabs:after {\n  display: none;\n}\n.eb-layout-container-pc .eb-layout-header .buttons {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  border-right: 1px solid #414D5B;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.eb-layout-container-pc .eb-layout-header .buttons a {\n  color: #C3D4E7;\n  padding: 6px;\n}\n.eb-layout-container-pc .eb-layout-header .buttons a:hover {\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 4px;\n}\n.eb-layout-container-pc .eb-layout-header .mine {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  color: #C3D4E7;\n  padding-left: 12px;\n}\n.eb-layout-container-pc .eb-layout-header .mine .item {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n}\n.eb-layout-container-pc .eb-layout-header .mine a {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header .mine:hover {\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 4px;\n}\n.eb-layout-container-pc .eb-layout-groups {\n  position: relative;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-group {\n  position: relative;\n  height: 100%;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-views {\n  position: relative;\n  height: 100%;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-views .eb-layout-view {\n  position: absolute;\n}\n.device-ios .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close,\n.device-android .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close,\n.device-windowsPhone .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close {\n  visibility: visible;\n}\n.device-windows .eb-layout-container-pc ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n  background-color: #F4F7F8;\n}\n.device-windows .eb-layout-container-pc ::-webkit-scrollbar-thumb {\n  border-radius: 0;\n  background-color: #D3E4E7;\n}\n"]}])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";n.r(e),e.default=[]},function(t,e,n){"use strict";n.r(e),e.default=function(t){return{state:{},getters:{},mutations:{},actions:{}}}},function(t,e,n){"use strict";n.r(e),e.default={layout:{login:"/a/login/login",loginOnStart:!0,header:{buttons:[{name:"Home",iconMaterial:"dashboard",url:"/a/base/menu/list",target:"_dashboard"},{name:"Atom",iconMaterial:"group_work",url:"/a/base/atom/list"}],mine:{name:"Mine",iconMaterial:"person",url:"/a/user/user/mine"}},size:{small:320,top:60,spacing:10}}}},function(t,e,n){"use strict";n.r(e),e.default={"zh-cn":n(8).default}},function(t,e,n){"use strict";n.r(e),e.default={Home:"首页",Atom:"原子",Mine:"我的","Not LoggedIn":"未登录","Sign in":"登录","Log Out":"退出登录"}},function(t,e,n){"use strict";function i(t,e,n,i,o,r,a,s){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}n.r(e);var o,r=i({render:function(t){var e=this,n=[],i=!0,o=!1,r=void 0;try{for(var a,s=function(){var i=a.value,o=t("div",{domProps:{innerText:i.title}}),r=t("f7-icon",{staticClass:"close",attrs:{material:"close"},nativeOn:{click:function(t){e.layout.removeGroup(i.id),t.stopPropagation(),t.preventDefault()}}});n.push(t("eb-link",{ref:i.id,key:i.id,attrs:{tabLink:"#".concat(i.id)},props:{onPerform:function(){e.$f7.tab.show("#".concat(i.id))}}},[o,r]))},l=this.groups[Symbol.iterator]();!(i=(a=l.next()).done);i=!0)s()}catch(t){o=!0,r=t}finally{try{i||null==l.return||l.return()}finally{if(o)throw r}}return t("f7-toolbar",{ref:"toolbar",attrs:{top:!0,tabbar:!0,scrollable:!0}},n)},computed:{layout:function(){return this.$parent.$parent},groups:function(){return this.layout.groups}},methods:{isTabActive:function(t){return this.$$(this.$refs[t].$el).hasClass("tab-link-active")}}},void 0,void 0,!1,null,"b8afb67c",null).exports,a=n(0),s=n.n(a),l=i({render:function(t){var e=[];this.groups.length>2&&e.push(t("f7-link",{props:{iconMaterial:"expand_more",popoverOpen:"#".concat(this.popoverId)}}));var n=!0,i=!1,o=void 0;try{for(var r,a=this.$config.layout.header.buttons[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var s=r.value,l={iconMaterial:s.iconMaterial,ebHref:s.url,ebTarget:s.target};e.push(t("eb-link",{key:s.name,props:l}))}}catch(t){i=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}var u=[],c=!0,d=!1,p=void 0;try{for(var h,A=this.groups[Symbol.iterator]();!(c=(h=A.next()).done);c=!0){var b=h.value;u.push(t("eb-list-item",{key:b.id,props:{popoverClose:!0,ebHref:b.url,title:b.title}}))}}catch(t){d=!0,p=t}finally{try{c||null==A.return||A.return()}finally{if(d)throw p}}var g=t("f7-list",{attrs:{inset:!0}},u);return e.push(t("f7-popover",{attrs:{id:this.popoverId}},[g])),t("div",e)},data:function(){return{popoverId:s.a.prototype.$meta.util.nextId("popover")}},computed:{layout:function(){return this.$parent.$parent},groups:function(){return this.layout.groups}}},void 0,void 0,!1,null,"00c0242a",null).exports,u=i({data:function(){return{popoverId:s.a.prototype.$meta.util.nextId("popover")}},computed:{loggedIn:function(){return this.$store.state.auth.loggedIn},user:function(){return this.$store.state.auth.user},userName:function(){var t=this.user.op.userName;return this.user.op.id!==this.user.agent.id&&(t="".concat(t,"(").concat(this.$text("Agent"),")")),t},userAvatar:function(){var t=this.user.op.avatar;t||(t=this.$meta.config.modules["a-base"].user.avatar.default);return this.$meta.util.combineImageUrl(t,48)}},methods:{onSignin:function(){this.$meta.vueLayout.openLogin()},onLogout:function(){var t=this;this.$f7.dialog.confirm(this.$text("Are you sure to perform this operation?"),function(){t.$api.post("/a/base/auth/logout").then(function(){t.$meta.vueApp.reload({echo:!0})})})}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("f7-link",{attrs:{"popover-open":"#"+t.popoverId}},[t.loggedIn?n("div",{staticClass:"item"},[n("img",{staticClass:"avatar avatar24",attrs:{src:t.userAvatar}})]):t._e(),t._v(" "),t.loggedIn?n("div",{staticClass:"item name"},[t._v(t._s(t.userName))]):t._e(),t._v(" "),t.loggedIn?t._e():n("div",{staticClass:"item status"},[t._v(t._s(t.$text("Not LoggedIn")))])]),t._v(" "),n("f7-popover",{attrs:{id:t.popoverId}},[n("f7-list",{attrs:{inset:""}},[n("eb-list-item",{attrs:{"popover-close":"",title:t.$text("Mine"),link:"#","eb-href":t.$config.layout.header.mine.url}},[n("f7-icon",{attrs:{slot:"media",material:t.$config.layout.header.mine.iconMaterial},slot:"media"})],1),t._v(" "),t.loggedIn?t._e():n("eb-list-item",{attrs:{"popover-close":"",link:"#",onPerform:t.onSignin}},[t._v(t._s(t.$text("Sign in")))]),t._v(" "),t.loggedIn?n("eb-list-item",{attrs:{"popover-close":"",link:"#",onPerform:t.onLogout}},[t._v(t._s(t.$text("Log Out")))]):t._e()],1)],1)],1)},[],!1,null,"351493c4",null),c=i({components:{ebTabs:r,ebButtons:l,ebMine:u.exports},render:function(t){var e=t("div",{staticClass:"title",domProps:{innerText:this.title}}),n=t("eb-tabs",{ref:"tabs",staticClass:"tabs"}),i=t("eb-buttons",{staticClass:"buttons"}),o=t("eb-mine",{staticClass:"mine"});return t("div",{staticClass:"eb-layout-header"},[e,n,i,o])},computed:{title:function(){return this.$store.getters["auth/title"]}},methods:{isTabActive:function(t){return this.$refs.tabs.isTabActive(t)}}},void 0,void 0,!1,null,"9bb12c40",null).exports,d=i({render:function(t){var e=this,n=[];if(this.views)for(var i=0;i<this.views.length;i++){var o=this.views[i],r={id:o.id,init:!1,pushState:!1,stackPages:!0,pushStateOnLoad:!1,preloadPreviousPage:!1,"data-index":i};n.push(t("eb-view",{ref:o.id,id:o.id,key:o.id,staticClass:"eb-layout-view eb-layout-view-size-".concat(o.size),attrs:r,props:{size:o.size,sizeExtent:o.sizeExtent},on:{"view:ready":function(t){e.onViewReady(t)},"view:title":function(t){e.onViewTitle(t)}}}))}return t("div",n)},props:{groupId:{type:String},views:{type:Array}},computed:{size:function(){return this.$parent.$parent.$parent.$parent.size},groups:function(){return this.$parent.$parent.$parent.$parent.groups}},methods:{onViewReady:function(t){var e=this,n=this.views.find(function(e){return e.id===t.id});this.$meta.vueLayout._patchRouter.loadRoute(n.url,function(i){if(!i)throw new Error("not found route: ".concat(n.url));var o,r=i.route.component.meta,a=r&&r.size||"small",s=e.size[a];e.$$(t.$el).css({width:"".concat(s,"px")}),0===parseInt(e.$$(t.$el).data("index"))&&(o=r&&r.title)&&(o=e.$text(o)),n.size=a,n.sizeExtent={width:e.size[a],height:e.size.main},e.reLayout(),n.callback({view:t,title:o}),delete n.callback})},resize:function(){var t=this;this.$nextTick(function(){t._resize(),t._reLayout()})},_resize:function(){var t=!0,e=!1,n=void 0;try{for(var i,o=this.views[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var r=i.value,a=this.$refs[r.id],s=this.size[r.size];this.$$(a.$el).css({width:"".concat(s,"px")}),r.sizeExtent={width:this.size[r.size],height:this.size.main}}}catch(t){e=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}},reLayout:function(){var t=this;this.$nextTick(function(){t._reLayout()})},_reLayout:function(){for(var t=this.size.width,e=0,n=this.views.length-1;n>=0;n--){var i=this.$refs[this.views[n].id],o=t-this.$$(i.$el).width()-e;if(!(o>0))break;t=o,e=this.size.spacing}var r=parseInt(this.size.width-t/2);e=0;for(var a=null,s=this.views.length-1;s>=0;s--){var l=this.$refs[this.views[s].id],u=this.$$(l.$el).width();if(r-=u+e,e=this.size.spacing,r<0&&null===a){var c=this.views[s+1];a=r+u+e<2*e&&"small"!==c.size}r<0&&r+u>0&&(r-=r+u),!0!==a?this.$$(l.$el).show():this.$$(l.$el).hide();var d=this.$$(l.$el).css("left");"auto"===d||"0px"===d?this.$$(l.$el).css({left:"".concat(r,"px")}):parseInt(d)!==r&&this.$$(l.$el).animate({left:r},{duration:600})}},onViewTitle:function(t){var e=this;if(0===parseInt(this.$$(t.page.$view.$el).data("index"))){var n=this.groups.find(function(t){return t.id===e.groupId});t.title&&(n.title=t.title)}},getView:function(t){return this.$refs[t]}}},void 0,void 0,!1,null,"b9d9f962",null),p=i({components:{ebGroup:d.exports},render:function(t){var e=[],n=!0,i=!1,o=void 0;try{for(var r,a=this.groups[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var s=r.value,l=t("eb-group",{ref:s.id,staticClass:"eb-layout-views",props:{groupId:s.id,views:s.views}});e.push(t("f7-tab",{key:s.id,staticClass:"eb-layout-group".concat(s.dashboard?" eb-layout-group-dashboard":""),attrs:{id:s.id,"data-groupId":s.id},on:{"tab:show":this.onTabShow}},[l]))}}catch(t){i=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return t("f7-tabs",{staticClass:"eb-layout-groups"},e)},computed:{layout:function(){return this.$parent},groups:function(){return this.$parent.groups}},methods:{reLayout:function(t){this.$refs[t].reLayout()},resizeGroup:function(t){this.$refs[t].resize()},getView:function(t,e){return this.$refs[t].getView(e)},onTabShow:function(t){var e=this;this.$nextTick(function(){var n=e.$$(t.target).data("groupId"),i=e.layout.$refs.header.$refs.tabs.$refs[n];i&&i.$el.scrollIntoView(!1)})}}},void 0,void 0,!1,null,"f128c972",null),h=i({meta:{global:!1},components:{ebHeader:c,ebGroups:p.exports},render:function(t){var e=t("eb-header",{ref:"header",style:{height:"".concat(this.size.top,"px")}}),n=t("eb-groups",{ref:"groups",style:{height:"".concat(this.size.height-this.size.top-2*this.size.spacing,"px"),top:"".concat(this.size.spacing,"px")}});return t("div",{staticClass:"eb-layout-container eb-layout-container-pc"},[e,n])},data:function(){return{started:!1,size:{width:0,height:0,small:0,middle:0,large:0,enough:!1,top:0,main:0,spacing:0},groups:[],router:null}},mounted:function(){var t=this;this.$f7ready(function(){t.start()})},methods:{onResize:function(){this.started&&(this.setSize(),this.resizeGroups())},resizeGroups:function(){var t=!0,e=!1,n=void 0;try{for(var i,o=this.groups[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var r=i.value;this.$refs.groups.resizeGroup(r.id)}}catch(t){e=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}},setSize:function(){var t=this.size.width=this.$$(this.$el).width(),e=this.size.height=this.$$(this.$el).height(),n=this.size.spacing=this.$config.layout.size.spacing,i=parseInt((t-3*n)/3);i<this.$config.layout.size.small?(this.size.small=parseInt((t-2*n)/2),this.size.enough=!1):(this.size.small=i,this.size.enough=!0),this.size.middle=2*this.size.small,this.size.enough?this.size.large=3*this.size.small+n:this.size.large=this.size.middle,this.size.top=this.$config.layout.size.top,this.size.main=e-this.size.top-2*n},start:function(){var t=this;this.setSize();var e=this.$meta.vueApp;if(e.checkIfNeedOpenLogin())this.openLogin();else{var n=e.popupHashInit();n?this.navigate(n):this.openHome()}this.$nextTick(function(){t.started=!0})},openHome:function(){var t=this.$config.layout.header.buttons.find(function(t){return"Home"===t.name});t&&this.navigate(t.url,{target:"_dashboard"})},navigate:function(t,e){var n=this;if(t){if(0===t.indexOf("https://")||0===t.indexOf("http://"))return location.assign(t);var i,o=(e=e||{}).ctx,r=e.target;if("_self"===r)o.$view.f7View.router.navigate(t,e);else i=!o||!o.$view||"_group"===r||this.$$(o.$view.$el).parents(".eb-layout-group-dashboard").length>0?null:this.$$(o.$view.$el).parents(".eb-layout-group").data("groupId"),this.getView({ctx:o,groupId:i,url:t,dashboard:"_dashboard"===r}).then(function(i){i&&(i.options&&n.$utils.extend(e,i.options),i.view.f7View.router.navigate(t,e))})}},getGroup:function(t){var e=t.id,n=t.url;return e?this.groups.find(function(t){return t.id===e}):this.groups.find(function(t){return t.url===n})},getView:function(t){var e=this,n=t.ctx,i=t.groupId,o=t.url,r=t.dashboard;return new Promise(function(t){var a=e.getGroup({id:i,url:o});if(a||(i=e.$meta.util.nextId("layoutgroup"),a={id:i,url:o,title:"",dashboard:r,views:[]},r?e.groups.unshift(a):e.groups.push(a)),a.url===o&&a.views.length>0)e.$f7.tab.show("#".concat(a.id)),t(null);else{var s=-1;if(n&&n.$view&&(s=parseInt(e.$$(n.$view.$el).data("index")))>=a.views.length-1&&(s=-1),-1===s){var l=e.$meta.util.nextId("layoutgroupview");a.views.push({id:l,url:o,size:"small",sizeExtent:{width:e.size.small,height:e.size.main},callback:function(n){var i=n.view,o=n.title;o&&(a.title=o),e.$nextTick(function(){e.$f7.tab.show("#".concat(a.id)),t({view:i,options:null})})}})}else{for(var u=a.views.length-1;u>=0;u--)u>s+1&&a.views.splice(u,1);e.$refs.groups.reLayout(i);var c=e.$refs.groups.getView(a.id,a.views[s+1].id);t({view:c,options:{reloadAll:!0}})}}})},removeGroup:function(t){var e,n=this,i=this.groups.findIndex(function(e){return e.id===t}),o=this.groups[i];this.$refs.header.isTabActive(t)&&(this.groups.length-1>i?e=this.groups[i+1].id:i>0&&(e=this.groups[i-1].id)),this.groups.splice(i,1),this.$nextTick(function(){e&&n.$f7.tab.show("#".concat(e)),0!==n.groups.length||o.dashboard||n.openHome()})},openLogin:function(t){var e=t&&"string"!=typeof t?t.url.url:t;e&&"/"!==e&&this.$store.commit("auth/setHashInit",e),this.navigate(this.$config.layout.login)},hideView:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var e=parseInt(this.$$(t.$el).data("index")),n=this.$$(t.$el).parents(".eb-layout-group").data("groupId"),i=this.getGroup({id:n}),o=i.views.length-1;o>=0;o--)o>=e&&i.views.splice(o,1);0===i.views.length?this.removeGroup(n):this.$refs.groups.reLayout(n)},backLink:function(t){var e=!1;if(this.$meta.util.historyUrlEmpty(t.$f7router.history[t.$f7router.history.length-1])){var n=t.$$(t.$el).parents(".view");parseInt(n.data("index"))>0&&(e=!0)}else e=!0;return e}}},void 0,void 0,!1,null,"c710be7a",null).exports;n(1);e.default={install:function(t,e){return o?console.error("already installed."):(o=t,e({routes:n(4).default,store:n(5).default(o),config:n(6).default,locales:n(7).default,components:{layout:h}}))}}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],a=r[0],s={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return A});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,c=function(){},d=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function A(t,e,n,o){u=n,d=o||{};var a=i(t,e);return b(a),function(e){for(var n=[],o=0;o<a.length;o++){var s=a[o];(l=r[s.id]).refs--,n.push(l)}e?b(a=i(t,e)):a=[];for(o=0;o<n.length;o++){var l;if(0===(l=n[o]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete r[l.id]}}}}function b(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(f(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(f(n.parts[o]));r[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function f(t){var e,n,i=document.querySelector("style["+p+'~="'+t.id+'"]');if(i){if(u)return c;i.parentNode.removeChild(i)}if(h){var o=l++;i=s||(s=g()),e=m.bind(null,i,o,!1),n=m.bind(null,i,o,!0)}else i=g(),e=function(t,e){var n=e.css,i=e.media,o=e.sourceMap;i&&t.setAttribute("media",i);d.ssrId&&t.setAttribute(p,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var v,y=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function m(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}}]);