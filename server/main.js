(()=>{"use strict";var r={65:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={addRowWrap:"addRowWrap--23EvB"}},429:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={matrixCeil:"matrixCeil--3qabq",part:"part--2y33u",bright:"bright--JZRK1",footer:"footer--3BAP2"}},190:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={form_params:"form_params--uHnqb",inputField:"inputField--2oikH"}},587:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={container:"container--2h9oB",matrixWrap:"matrixWrap--eJwd-",matrixContent:"matrixContent--2Qqqb",matrixHeader:"matrixHeader--3ud2A"}},102:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={matrixRow:"matrixRow--39Z-D",matrixCeil:"matrixCeil--2rmM2",sum:"sum--oxa6f",sidebarRow:"sidebarRow--Be181"}},23:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(r(297)),n=r(79),o=r(76),i=r(377),l=a(r(876)),d=r(333),c=r(226),i={addRow:i.addRow,addParams:i.addParams,addMatrix:i.addMatrix};t.default=n.connect(function(e){return{matrix:e.matrix.matrix,params:e.params}},i)(function(e){var t=e.addRow,r=e.addParams,a=e.addMatrix,n=e.matrix;e=function(e){t(function(e,t){for(var r=[],a=0;a<e;a++){var n=Math.floor(1001*Math.random());r[a]={id:t+"x"+a,amount:n,bright:!1,part:!1}}return r}(n[0].length,n.length))};try{return n.length?u.default.createElement("div",{className:"container"},u.default.createElement(l.default,null),u.default.createElement(o.AddRow,{addRowHandle:e})):u.default.createElement("div",{className:"container"},u.default.createElement(d.FormParamsMatrix,{addParamsHandle:function(){return function(e){r(e),a(c.getMatrix(e.M1,e.N1)),null!=globalThis.history&&history.pushState(null,null,"?M1="+e.M1+"&N1="+e.N1+"&X1="+e.X1)}}}))}catch(e){console.log(e.message)}})},793:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(r(622)),o=a(r(297)),i=r(561),l=r(79),d=r(71),c=r(747),f=a(r(23)),s=r(226),t=a(r(605)),m=a(r(835)),p=a(r(826)),r=process.env.PORT||4e3;t.default.createServer(function(e,t){var r=e.url,a=u.default.extname(r),n="text/html",r=/^\/\?M=/.test(r)||/^\/$/.test(r)?function(e){var t=m.default.parse(e.url,!0).query,r=t.M,e=t.N,t=t.X,e={matrix:{matrix:s.getMatrix(+r,+e)},params:{M1:+r,N1:+e,X1:+t}},t=i.createStore(d.rootReducer,e),e=function(e,t){void 0===t&&(t={});var r=u.default.resolve("./dist/index.html"),r=p.default.readFileSync(r);return!!(r=r.toString())&&(r=r.replace('<div id="root"></div>','\n            <div id="root">'+e+"</div>\n            <script>\n                  window.__PRELOADED_STATE__ = "+JSON.stringify(t).replace(/</g,"\\u003c")+"\n            <\/script>           \n         "))}(c.renderToString(o.default.createElement(l.Provider,{store:t},o.default.createElement(f.default,null))),e);e=e||"No data";return e}(e):(".js"===a&&(n="text/javascript"),r=u.default.resolve(__dirname,"../dist"+r),p.default.readFileSync(r,"utf8"));t.writeHead(200,{"Content-Type":n}),t.end(r,"utf-8")}).listen(r),console.log("http server running at port:"+r)},76:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AddRow=void 0;var i=o(r(297)),l=u(r(65));t.AddRow=function(e){e=e.addRowHandle;return i.default.createElement("div",{className:l.default.addRowWrap},i.default.createElement("button",{onClick:e},"Створити рядок"))}},267:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},f=this&&this.__spreadArray||function(e,t){for(var r=0,a=t.length,n=e.length;r<a;r++,n++)e[n]=t[r];return e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=o(r(297)),o=r(79),s=r(848),u=u(r(429)),r=r(377),m=u.default,r={increaseAmount:r.increaseAmount,mouseOverCeil:r.mouseOverCeil,mouseOut:r.mouseOut};t.default=o.connect(function(e){return{matrix:e.matrix.matrix,params:e.params}},r)(c.default.memo(function(e){function r(e){var t,a;"f"!==e.target.dataset.id[0]&&"s"!==e.target.dataset.id[0]&&(t=+e.target.dataset.id.split("x")[0],e=+e.target.dataset.id.split("x")[1],function(e,t,r){for(var a=[],n=0,u=0;u<e.length;u++)for(var o=0;o<e[u].length;o++)a[n]=Object.assign({},e[u][o]),n++;a.sort(function(e,t){return e.amount-t.amount});for(var i,l=+a.findIndex(function(e){return e.amount===t.amount}),d=l-Math.ceil(r/2),c=l+Math.ceil(r/2);d<0;)d++,c++;for(;c>=a.length;)d--,c--;return r%2&&((i=a[d].amount-a[l].amount)!=(r=a[l].amount-a[c].amount)&&r<i?d++:c--),f(f([],a.slice(d,l)),a.slice(l,c+1))}(a=n.concat(),a[t][e],u.X1|s.X).forEach(function(e){var t=+e.id.split("x")[0],r=+e.id.split("x")[1];e.bright=!e.bright,a[t][r]=Object.assign({},e)}),l(a))}var n=e.matrix,u=e.params,t=e.item,a=e.sum,o=e.footerClass,i=e.increaseAmount,l=e.mouseOverCeil,d=e.mouseOut,e={height:2*Math.round(100*t.amount/a)+"%"};return c.default.createElement("div",{key:t.id,className:m.matrixCeil+" "+(o?m.footer:"")+" "+(t.bright?m.bright:"")+" "+(t.part?m.part:""),"data-part":Math.round(100*t.amount/a)+"%","data-id":t.id,onClick:function(e){var t;"f"!==e.target.dataset.id[0]&&(t=+e.currentTarget.dataset.id.split("x")[0],e=+e.currentTarget.dataset.id.split("x")[1],i(t,e))},onMouseDown:function(e){e.preventDefault()},onMouseOver:r,onMouseOut:function(e){var t=n.concat();r(e),t.forEach(function(e){e.forEach(function(e){return e.bright=!1})}),d(t)}},t.part?c.default.createElement("div",null,Math.round(100*t.amount/a)+"%"):t.amount,c.default.createElement("div",{style:e}))}))},486:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var o=u(r(297)),u=r(79),r={deleteRow:r(377).deleteRow};t.default=u.connect(null,r)(function(e){var t=e.footerClass,r=e.deleteRow,a=e.ind,e=o.useCallback(function(e){r(a)},[a]);return t?o.default.createElement(o.default.Fragment,null):o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{onClick:e},"×"))})},333:function(e,t,r){var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.FormParamsMatrix=void 0;var l=u(r(297)),d=u(r(190)).default;t.FormParamsMatrix=function(e){var t=e.addParamsHandle,r=l.useState({M1:"",N1:"",X1:""}),a=r[0],n=r[1],u=l.useState(""),e=u[0],o=u[1],r=function(e){var t;n(i(i({},a),((t={})[e.target.name]=e.target.value,t)))},u=function(e){e.preventDefault(),t()({M1:+a.M1,N1:+a.N1,X1:+a.X1}),o("form is sending")};return l.default.createElement("div",{className:""+d.form_params},l.default.createElement("div",null,e),l.default.createElement("form",{id:"form",onSubmit:u},l.default.createElement("div",{className:""+d.inputField},l.default.createElement("label",{htmlFor:"M"},"Стрічки:"),l.default.createElement("input",{placeholder:"Введіть кількість стрічок",id:"M1",type:"text",name:"M1",value:a.M1,onChange:r})),l.default.createElement("div",{className:""+d.inputField},l.default.createElement("label",{htmlFor:"N"},"Стовбці:"),l.default.createElement("input",{placeholder:"Введіть кількість стовпчиків",id:"N1",type:"text",name:"N1",value:a.N1,onChange:r})),l.default.createElement("div",{className:""+d.inputField},l.default.createElement("label",{htmlFor:"X"},"X1:"),l.default.createElement("input",{placeholder:"Введіть X",id:"X1",type:"text",name:"X1",value:a.X1,onChange:r})),l.default.createElement("button",{className:"sendParams",onClick:u},"Відправити параметри матриці")))}},876:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=u(r(297)),l=r(79),d=o(r(704)),c=u(r(587)).default;t.default=l.connect(function(e){return{matrix:e.matrix.matrix}},null)(function(e){var t=e.matrix,r=i.useState(),e=r[0],a=r[1];function n(e){for(var t=[],r=0;r<e.length;r++)t[r]=i.default.createElement(d.default,{key:r,arrRow:e[r],ind:r,footerClass:""});return t[e.length]=i.default.createElement(d.default,{key:e.length,ind:e.length,arrRow:function(e){for(var t=[],r=e.length||0,a=e[0].length||0,n=0;n<a;n++){for(var u=0,o=0;o<r;o++)u+=e[o][n].amount;t[n]={id:"footer"+n,amount:Math.ceil(u/r)}}return t}(e),footerClass:"footer"}),t}return i.useEffect(function(){a(n(t))},[t]),i.default.createElement("div",{className:""+c.matrixWrap},i.default.createElement("div",{className:""+c.matrixContent},i.default.createElement("h4",null,"Matrix ",t.length,"x",t[0].length),i.default.createElement("div",{className:""+c.matrixHeader},"Сума по рядку"),e))})},704:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=u(r(297)),l=r(79),d=o(r(486)),c=o(r(267)),o=r(377),f=u(r(102)).default,o={mouseOverSum:o.mouseOverSum};t.default=l.connect(function(e){return{matrix:e.matrix.matrix}},o)(i.default.memo(function(e){var t=e.matrix,r=e.arrRow,a=e.footerClass,n=e.ind,u=e.mouseOverSum,o=i.useCallback(function(e){return e.reduce(function(e,t){return e+t.amount},0)},[r])(r),e=i.useCallback(function(e){e.target.dataset.ind&&(e=t.concat(),n<e.length&&e[n].forEach(function(e){e.part=!e.part}),u(e))},[r]),r=r.map(function(e){return i.default.createElement(c.default,{key:e.id,item:e,sum:o,footerClass:a})});return i.default.createElement("div",{className:""+f.matrixRow},i.default.createElement("div",{className:f.matrixCeil+" "+f.sidebarRow},i.default.createElement(d.default,{footerClass:a,ind:n})),r,i.default.createElement("div",{className:f.matrixCeil+" "+f.sum,"data-id":"sum","data-ind":n,onMouseOver:e,onMouseOut:e},o))}))},848:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.X=t.N=t.M=void 0,t.M=100,t.N=100,t.X=7},377:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addMatrix=t.addParams=t.mouseOverSum=t.mouseOut=t.mouseOverCeil=t.increaseAmount=t.deleteRow=t.addRow=void 0;var a=r(209);t.addRow=function(e){return{type:a.ADD_ROW,payload:e}},t.deleteRow=function(e){return{type:a.DELETE_ROW,payload:e}},t.increaseAmount=function(e,t){return{type:a.INCREASE_AMOUNT,payload:{row:e,column:t}}},t.mouseOverCeil=function(e){return{type:a.MOUSE_OVER_CEIL,payload:e}},t.mouseOut=function(e){return{type:a.MOUSE_OUT,payload:e}},t.mouseOverSum=function(e){return{type:a.MOUSE_OVER_SUM,payload:e}},t.addParams=function(e){return{type:a.ADD_PARAMS,payload:e}},t.addMatrix=function(e){return{type:a.ADD_MATRIX,payload:e}}},226:function(e,t,r){var l=this&&this.__assign||function(){return(l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},d=this&&this.__spreadArray||function(e,t){for(var r=0,a=t.length,n=e.length;r<a;r++,n++)e[n]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.matrixReducer=t.getMatrix=void 0;var c=r(209),r=r(848);function a(e,t){for(var r=[],a=0;a<e;a++)r[a]=function(e,t){for(var r=[],a=0;a<e;a++){var n=Math.floor(1001*Math.random());r[a]={id:t+"x"+a,amount:n,bright:!1,part:!1}}return r}(t,a);return r}var f={matrix:(t.getMatrix=a)(r.M,r.N)};t.matrixReducer=function(e,t){var r=(e=void 0===e?f:e).matrix.concat();switch(t.type){case c.ADD_ROW:return l(l({},e),{matrix:d(d([],e.matrix),[t.payload])});case c.DELETE_ROW:r.splice(t.payload,1);for(var a=t.payload;a<r.length;a++)for(var n=0;n<r[a].length;n++){var u=+r[a][n].id.split("x")[0];r[a][n].id=u-1+"x"+n}return l(l({},e),{matrix:d([],r)});case c.INCREASE_AMOUNT:var o=t.payload.row,i=t.payload.column;return r[o][i].amount=r[o][i].amount+1,l(l({},e),{matrix:d([],r)});case c.MOUSE_OVER_CEIL:case c.MOUSE_OUT:case c.MOUSE_OVER_SUM:case c.ADD_MATRIX:return l(l({},e),{matrix:d([],t.payload)});default:return e}}},708:function(e,t,r){var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.paramsReducer=void 0;var n=r(209),u={M1:null,N1:null,X1:null};t.paramsReducer=function(e,t){return void 0===e&&(e=u),t.type!==n.ADD_PARAMS?e:a(a({},e),t.payload)}},71:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rootReducer=void 0;var a=r(561),n=r(226),r=r(708);t.rootReducer=a.combineReducers({matrix:n.matrixReducer,params:r.paramsReducer})},209:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ADD_MATRIX=t.ADD_PARAMS=t.MOUSE_OUT=t.MOUSE_OVER_SUM=t.MOUSE_OVER_CEIL=t.INCREASE_AMOUNT=t.DELETE_ROW=t.ADD_ROW=void 0,t.ADD_ROW="ADD_ROW",t.DELETE_ROW="DELETE_ROW",t.INCREASE_AMOUNT="INCREASE_AMOUNT",t.MOUSE_OVER_CEIL="MOUSE_OVER_CEIL",t.MOUSE_OVER_SUM="MOUSE_OVER_SUM",t.MOUSE_OUT="MOUSE_OUT",t.ADD_PARAMS="ADD_PARAMS",t.ADD_MATRIX="ADD_MATRIX"},826:e=>{e.exports=require("fs")},605:e=>{e.exports=require("http")},622:e=>{e.exports=require("path")},297:e=>{e.exports=require("react")},747:e=>{e.exports=require("react-dom/server")},79:e=>{e.exports=require("react-redux")},561:e=>{e.exports=require("redux")},835:e=>{e.exports=require("url")}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;t=a[e]={exports:{}};return r[e].call(t.exports,t,t.exports,n),t.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};n(793)})();