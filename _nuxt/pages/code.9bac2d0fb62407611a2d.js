webpackJsonp([5],{"3pN4":function(e,n){e.exports='### Usage\n\n``` html\n<vl-code v-model="code" :options="options" @ready="onReady" />\n```\n\n``` js\nimport VlCode from \'vueleton/lib/code\';\n```\n\n### API\n\nProps         | Description                         | Default\n--------------|-------------------------------------|---------\ncode          | The string of code.                 | None\noptions       | Options object passed to CodeMirror. | `{lineNumbers: true, tabSize: 2}`\n\nEvents:\n\nEvents        | Description                         | Arguments\n--------------|-------------------------------------|-----------\nready         | When CodeMirror instance is ready.  | cm: the CodeMirror instance\n'},"4b8B":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o("woOf"),s=o.n(t),r=o("3pN4"),i=o.n(r),d=o("YVTo"),c={components:{VlCode:function(){return o.e(8).then(o.bind(null,"jHA6"))}},data:function(){return{mounted:!1,message:"",code:'console.log("hello, world");\n\nbody {\n  background: white;\n}\n\nTest `markdown`.',options:{mode:"javascript"},modes:["javascript","css","markdown"]}},computed:{mode:{get:function(){return this.options.mode},set:function(e){this.options=s()({},this.options,{mode:e})}}},mounted:function(){this.mounted=!0,d.a.doc=i.a},methods:{onReady:function(){this.message="CodeMirror is ready!"}}},a=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("section",[o("h3",[e._v("Code")]),o("div",{domProps:{textContent:e._s(e.message)}}),o("select",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],on:{change:function(n){var o=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.mode=n.target.multiple?o:o[0]}}},e._l(e.modes,function(n){return o("option",{domProps:{textContent:e._s(n)}})})),e.mounted?o("vl-code",{attrs:{options:e.options},on:{ready:e.onReady},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}}):e._e()],1)},u=[],l={render:a,staticRenderFns:u},m=l,p=o("VU/8"),f=p(c,m,null,null,null);n.default=f.exports},YVTo:function(e,n,o){"use strict";n.a={doc:null}}});
//# sourceMappingURL=code.9bac2d0fb62407611a2d.js.map