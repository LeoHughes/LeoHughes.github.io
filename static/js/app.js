webpackJsonp([1,0],[function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(31),r=a(o),i=n(30),s=a(i),u=n(17),d=a(u),c=n(19),l=a(c),f=n(22),m=a(f),p=n(18),h=a(p);r.default.use(s.default);var v=[{path:"/",name:"Index",component:d.default},{path:"/add",name:"Add",component:l.default},{path:"/edit",name:"Edit",component:l.default},{path:"/top",name:"Top",component:m.default},{path:"/about",name:"About",component:h.default}],w=new s.default({routes:v});new r.default({el:"#app",router:w})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={authDomain:"dictionary.wilddogio.com",syncURL:"https://dictionary.wilddogio.com"};wilddog.initializeApp(n);var a=function(){return wilddog},o=function(){return wilddog.sync().ref("/words")},r=function(){return wilddog.sync().ref("/author")};e.getWilddog=a,e.getRef=o,e.getAuthorRef=r},function(t,e,n){var a,o;n(16),a=n(6);var r=n(29);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=a(o),i=n(21),s=a(i),u=n(1),d=(0,u.getRef)();e.default={name:"app",components:{Head_:r.default,Search:s.default},data:function(){return{name:"Dictionary",count:"正在计算中"}},beforeMount:function(){var t=this;d.orderByKey().on("value",function(e){t.count=e.numChildren()})}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=a(o),i="这是一个翻译程序开发英文单词的小型SPA应用，任何人都可以添加、修改词条信息。";e.default={name:"about",components:{Head_:r.default},data:function(){return{name:this.$route.name,text:i}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){"Add"===t.name&&c.orderByKey().equalTo(t.word.auth).once("value",function(e){var n=e.child(t.word.auth).val();n?(n.count+=1,c.child(t.word.auth).update(n)):(n={},n.name=t.word.auth,n.count=1,c.child(t.word.auth).set(n))})}function r(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=n<10?"0"+n:n,o=t.getDate(),r=o<10?"0"+o:o;return e+"/"+a+"/"+r}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=a(i),u=n(1),d=(0,u.getRef)(),c=(0,u.getAuthorRef)();e.default={name:"control",components:{Head_:s.default},data:function(){return{name:this.$route.name,warnInfo:"",word:{name:this.$route.query.key,transContent:"",description:"",date:r(),auth:"",website:""},addComplate:!1,showComplateInfo:"",complateInfo:""}},beforeRouteEnter:function(t,e,n){t.query.key?n():n("/")},beforeMount:function(){var t=this;"Edit"===this.name&&d.orderByKey().equalTo(t.word.name).on("value",function(e){var n=e.child(t.word.name).val();n&&(t.word.transContent=n.transContent,t.word.description=n.description,t.word.auth=n.auth,t.word.website=n.website)})},watch:{addComplate:function(){this.addComplate&&(this.showComplateInfo=!0)}},methods:{checkVal:function(t){t.target.value?this.warnInfo="":(t.target.focus(),this.warnInfo="Please check the "+t.target.name+".")},back:function(){this.warnInfo="",this.$router.back()},update:function(){for(var t in this.word)if(!this.word[t])return void(this.warnInfo="Please enter the corresponding data.");var e=this;d.child(e.word.name).set(e.word).then(function(){e.complateInfo="Thanks for your help,wish you have a nice day :-D.",e.addComplate=!0,o(e),setTimeout(function(){e.$router.go(-1)},3e3)}).catch(function(t){e.complateInfo="Because some unpredictable reasons fail,or you will come back a little :-D?",setTimeout(function(){e.$router.go(-1)},3e3)})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"head_",props:{title:{type:String,required:!0}},data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"result",props:{isShow:{type:Boolean,required:!0},keyWord:{type:String,required:!0},resData:{type:Array,required:!0}},data:function(){return{}},methods:{goBack:function(){this.$emit("goBack")}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),r=a(o),i=n(1),s=(0,i.getRef)();e.default={name:"search",components:{Result:r.default},data:function(){return{key:"",showResult:!1,result:[]}},props:{wordsCount:{type:[String,Number],required:!0}},methods:{search:function(t){var e=this;return""===e.key?void document.getElementById("searchInput").focus():void s.orderByChild("name").equalTo(e.key).on("value",function(t){t.val();e.showResult=!0,e.result=[],t.forEach(function(t){e.result.push(t.val())})})},back:function(){this.showResult&&(this.showResult=!1),this.key="",this.result=[]}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=a(o),i=n(1),s=(0,i.getAuthorRef)();e.default={name:"top",components:{Head_:r.default},data:function(){return{name:this.$route.name,allCount:0,topList:[]}},created:function(){var t=this;s.orderByChild("count").limitToFirst(10).on("child_added",function(e){t.topList.push(e.val()),t.topList.sort(function(t,e){return e.count-t.count})})}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var a,o;n(13),a=n(3);var r=n(26);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},function(t,e,n){var a,o;n(14),a=n(4);var r=n(27);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},function(t,e,n){var a,o;n(11),a=n(5);var r=n(24);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},function(t,e,n){var a,o;n(12),a=n(7);var r=n(25);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},function(t,e,n){var a,o;n(10),a=n(8);var r=n(23);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},function(t,e,n){var a,o;n(15),a=n(9);var r=n(28);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"container"}},[e("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.key,expression:"key",modifiers:{lazy:!0,trim:!0}}],staticClass:"search-input",class:{active:t.key.length>0},attrs:{id:"searchInput",type:"text",placeholder:"Please enter the words",maxlength:"30",required:"required"},domProps:{value:t._s(t.key)},on:{keyup:function(e){13===e.keyCode&&t.search(e)},change:function(e){t.key=e.target.value.trim()}}}),e("p",{staticClass:"info"},["翻译【暂只支持英译中】"]),e("p",{staticClass:"info"},["词条总数：",e("span",{domProps:{textContent:t._s(t.wordsCount)}})]),t.showResult?t._e():e("p",[e("button",{staticClass:"trans-button",attrs:{type:"button"},on:{click:t.search}},["Translate"])]),e("Result",{attrs:{isShow:t.showResult,keyWord:t.key,resData:t.result},on:{goBack:t.back}}),t.showResult?t._e():e("p",{staticClass:"brand-info"},[e("router-link",{attrs:{to:{name:"About"}}},["@about"])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("transition",{attrs:{name:"transition-animation"}},[e("section",{attrs:{id:"control"}},[e("Head_",{attrs:{title:t.name}}),t.addComplate?t._e():e("div",{staticClass:"controlForm"},[e("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.warnInfo,expression:"warnInfo !== ''"}],staticClass:"item warn"},[e("p",{domProps:{textContent:t._s(t.warnInfo)}})]),e("div",{staticClass:"item"},[e("div",{staticClass:"item-label"},["Words*:"]),e("div",{staticClass:"item-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.word.name,expression:"word.name"}],attrs:{type:"text",placeholder:"Enter the new words.(20)",maxlength:"20",disabled:"disabled"},domProps:{value:t._s(t.word.name)},on:{input:function(e){e.target.composing||(t.word.name=e.target.value)}}})])]),e("div",{staticClass:"item"},[e("div",{staticClass:"item-label"},["Explanation*:"]),e("div",{staticClass:"item-input"},[e("textarea",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.word.transContent,expression:"word.transContent",modifiers:{lazy:!0,trim:!0}}],attrs:{name:"explanations",placeholder:"Enter the explanations.(40)",maxlength:"40",rows:"3",required:"required"},domProps:{value:t._s(t.word.transContent)},on:{blur:t.checkVal,change:function(e){t.word.transContent=e.target.value.trim()}}})])]),e("div",{staticClass:"item"},[e("div",{staticClass:"item-label"},["Description*:"]),e("div",{staticClass:"item-input"},[e("textarea",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.word.description,expression:"word.description",modifiers:{lazy:!0,trim:!0}}],attrs:{name:"interpretation",placeholder:"Enter the program interpretation.(60)",maxlength:"40",rows:"3"},domProps:{value:t._s(t.word.description)},on:{blur:t.checkVal,change:function(e){t.word.description=e.target.value.trim()}}})])]),e("div",{staticClass:"item"},[e("div",{staticClass:"item-label"},["Author*:"]),e("div",{staticClass:"item-input"},[e("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.word.auth,expression:"word.auth",modifiers:{lazy:!0,trim:!0}}],attrs:{name:"author name",type:"text",placeholder:"Enter the author name.(20)",maxlength:"20",disabled:"Edit"===this.name},domProps:{value:t._s(t.word.auth)},on:{blur:t.checkVal,change:function(e){t.word.auth=e.target.value.trim()}}})])]),e("div",{staticClass:"item"},[e("div",{staticClass:"item-label"},["Website*:"]),e("div",{staticClass:"item-input"},[e("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.word.website,expression:"word.website",modifiers:{lazy:!0,trim:!0}}],attrs:{name:"website",type:"url",placeholder:"Enter website or email.(40)",maxlength:"40"},domProps:{value:t._s(t.word.website)},on:{blur:t.checkVal,change:function(e){t.word.website=e.target.value.trim()}}})])]),e("div",{staticClass:"control-item"},[e("button",{staticClass:"btn add",attrs:{type:"button"},on:{click:t.update}},["Complete"]),e("button",{staticClass:"btn cancel",attrs:{type:"button"},on:{click:t.back}},["Cancel"])])]),t.showComplateInfo?e("div",{staticClass:"complateInfo"},[e("p",{domProps:{textContent:t._s(t.complateInfo)}})]):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("transition",{attrs:{name:"transition-animation"}},[e("section",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{id:"result"}},[e("p",{staticClass:"topBar"},[e("a",{staticClass:"back",on:{click:t.goBack}},["back"]),e("router-link",{directives:[{name:"show",rawName:"v-show",value:0!==t.resData.length,expression:"resData.length !== 0"}],staticClass:"edit",attrs:{to:{name:"Edit",query:{key:t.keyWord}}}},["edit"])]),0!==t.resData.length?e("ul",{staticClass:"infoUl"},[t._l(t.resData,function(n){return e("li",[e("h2",{domProps:{textContent:t._s(n.name)}}),e("p",{domProps:{textContent:t._s("[ 常见释义 ] : "+n.transContent)}}),e("p",{domProps:{textContent:t._s("[ 常见程序开发释义 ] : "+n.description)}}),e("p",{staticClass:"auth"},["贡献者：",e("a",{attrs:{href:n.website,target:"_blank"},domProps:{textContent:t._s(n.auth)}})])])})]):e("div",{staticClass:"noDataInfo"},[e("p",["暂无 ",e("strong",{domProps:{textContent:t._s(t.keyWord)}})," 的查询结果."]),e("p",{staticClass:"addLink"},[e("router-link",{attrs:{to:{name:"Add",query:{key:t.keyWord}}}},["点击添加"])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("transition",{attrs:{name:"transition-animation"}},[e("section",{staticClass:"app-container"},[e("Head_",{attrs:{title:t.name}}),e("Search",{attrs:{wordsCount:t.count}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("transition",{attrs:{name:"transition-animation"}},[e("section",{attrs:{id:"about"}},[e("Head_",{attrs:{title:t.name}}),e("div",{attrs:{id:"about-info"},domProps:{textContent:t._s(t.text)}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("transition",{attrs:{name:"transition-animation"}},[e("section",{attrs:{id:"top"}},[e("Head_",{attrs:{title:t.name}}),e("div",{attrs:{id:"topList"}},[e("transition-group",{attrs:{tag:"ul",name:"list"}},[e("li",{key:-1,staticClass:"list-item"},[e("div",["Number"]),e("div",["Name"]),e("div",["Count"])]),t._l(t.topList,function(n,a){return e("li",{key:a,staticClass:"list-item"},[e("div",{domProps:{textContent:t._s(a+1)}}),e("div",{domProps:{textContent:t._s(n.name)}}),e("div",{domProps:{textContent:t._s(n.count)}})])})])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"header"},[e("a",{staticClass:"bland",domProps:{textContent:t._s(t.title)}}),"Dictionary"===t.title?e("router-link",{staticClass:"top",attrs:{to:{name:"Top"}}},["Top"]):e("router-link",{staticClass:"top",attrs:{to:{name:"Index"}}},["Back"])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.js.map