(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-774b3672"],{"00c5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"align-center":"","justify-center":"","grid-list-md":"","fill-height":"","text-xs-center":""}},[t.isCompatible&&!t.nfcDisabled?s("div",[s("v-fade-transition",{attrs:{mode:"out-in"}},[t.scanSuccess?s("v-icon",{attrs:{color:"success",size:"50"}},[t._v("check_circle")]):s("v-progress-circular",{attrs:{indeterminate:"",size:"50",color:"primary"}})],1),s("p",{staticClass:"pa-4"},[t._v(t._s(t.$t("nfc.waiting")))])],1):t.nfcDisabled?s("div",[s("p",{staticClass:"pa-4"},[t._v("\n      "+t._s(t.$t("nfc.disabled"))+"\n    ")]),s("v-btn",{attrs:{color:"primary"},on:{click:t.showSettings}},[t._v(t._s(t.$t("enable")))])],1):s("div",[s("p",{staticClass:"pa-4"},[t._v("\n      "+t._s(t.$t("nfc.incompatible"))+"\n    ")])]),s("v-alert",{staticClass:"bottomToast",attrs:{transition:"fade-transition",value:t.scanSuccess,type:"success"}},[t._v(t._s(t.$t("nfc.success")))])],1)},n=[],r={name:"nfc",data(){return{scanSuccess:!1,isCompatible:!0,nfcDisabled:!1,items:JSON.parse(localStorage.getItem("nfcScanHistory")||"[]")}},watch:{items:function(t){localStorage.setItem("nfcScanHistory",JSON.stringify(t))},scanSuccess:function(t){t&&setTimeout(()=>{this.scanSuccess=!1},3e3)}},mounted(){this.registerTagEvent()},beforeDestroy(){this.unregisterTagEvent()},methods:{registerTagEvent(){document.removeEventListener("resume",this.registerTagEvent,!1),"undefined"!==typeof nfc?nfc.addTagDiscoveredListener(this.scan,this.registerSuccess,this.registerError):this.registerError()},registerSuccess(){this.isCompatible=!0,this.nfcDisabled=!1},unregisterTagEvent(){"undefined"!==typeof nfc&&nfc.removeTagDiscoveredListener(this.scan)},registerError(t){"NFC_DISABLED"===t?(this.isCompatible=!0,this.nfcDisabled=!0):(this.isCompatible=!1,this.nfcDisabled=!1)},showSettings(){nfc.showSettings(),document.addEventListener("resume",this.registerTagEvent,!1)},scan(t){let e=t.tag;if(e){let t=nfc.bytesToHexString(e.id);this.items.push(t),this.scanSuccess=!0}}}},c=r,a=s("2877"),o=s("6544"),l=s.n(o),u=s("0798"),d=s("8336"),h=s("a523"),f=s("0789"),g=s("132d"),v=s("490a"),m=Object(a["a"])(c,i,n,!1,null,null,null);m.options.__file="Nfc.vue";e["default"]=m.exports;l()(m,{VAlert:u["a"],VBtn:d["a"],VContainer:h["a"],VFadeTransition:f["b"],VIcon:g["a"],VProgressCircular:v["a"]})},"0798":function(t,e,s){"use strict";s("a57f");var i=s("9d26"),n=s("b64a"),r=s("98a1"),c=s("2b0e"),a=c["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),o=s("58df");e["a"]=Object(o["a"])(n["a"],r["a"],a).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(i["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(i["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],s=this.outline?this.setTextColor:this.setBackgroundColor,i=t("div",s(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i}})},a57f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-774b3672.bcfc9def.js.map