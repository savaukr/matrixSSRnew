(()=>{"use strict";var r={65:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={addRowWrap:"addRowWrap--23EvB"}},429:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={matrixCeil:"matrixCeil--3qabq",part:"part--2y33u",bright:"bright--JZRK1",footer:"footer--3BAP2"}},190:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={form_params:"form_params--uHnqb",inputField:"inputField--2oikH"}},587:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={container:"container--2h9oB",matrixWrap:"matrixWrap--eJwd-",matrixContent:"matrixContent--2Qqqb",matrixHeader:"matrixHeader--3ud2A"}},102:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={matrixRow:"matrixRow--39Z-D",matrixCeil:"matrixCeil--2rmM2",sum:"sum--oxa6f",sidebarRow:"sidebarRow--Be181"}},23:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(r(297)),n=r(79),l=r(76),u=r(377),i=a(r(876)),d=r(333),s=r(263),u={addRow:u.addRow,addParams:u.addParams,addMatrix:u.addMatrix};t.default=n.connect(function(e){return{matrix:e.matrix}},u)(function(e){var t=e.matrix,r=e.addRow,a=e.addMatrix,n=e.addParams;try{return t.rows.allIds.length?o.default.createElement("div",{className:"container"},o.default.createElement(i.default,{matrix:t}),o.default.createElement(l.AddRow,{addRowHandle:function(e){r(s.addNewRow(t))}})):o.default.createElement("div",{className:"container"},o.default.createElement(d.FormParamsMatrix,{addParamsHandle:function(){return function(e){n(e),a(s.getMatrix(e.M1,e.N1)),null!=globalThis.history&&history.pushState(null,null,"?M1="+e.M1+"&N1="+e.N1+"&X1="+e.X1)}}}))}catch(e){console.log(e.message)}})},793:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(r(622)),l=a(r(297)),u=r(561),i=r(79),d=r(71),s=r(747),c=a(r(23)),f=r(263),t=a(r(605)),m=a(r(835)),p=a(r(826)),r=process.env.PORT||4e3;t.default.createServer(function(e,t){var r=e.url,a=o.default.extname(r),n="text/html",r=/^\/\?M=/.test(r)||/^\/$/.test(r)?function(e){var t=m.default.parse(e.url,!0).query,r=t.M,e=t.N,t=t.X,e={matrix:f.getMatrix(+r,+e),params:{M1:+r,N1:+e,X1:+t}},t=u.createStore(d.rootReducer,e),e=function(e,t){void 0===t&&(t={});var r=o.default.resolve("./dist/index.html"),r=p.default.readFileSync(r);return!!(r=r.toString())&&(r=r.replace('<div id="root"></div>','\n            <div id="root">'+e+"</div>\n            <script>\n                  window.__PRELOADED_STATE__ = "+JSON.stringify(t).replace(/</g,"\\u003c")+"\n            <\/script>           \n         "))}(s.renderToString(l.default.createElement(i.Provider,{store:t},l.default.createElement(c.default,null))),e);e=e||"No data";return e}(e):(".js"===a&&(n="text/javascript"),r=o.default.resolve(__dirname,"../dist"+r),p.default.readFileSync(r,"utf8"));t.writeHead(200,{"Content-Type":n}),t.end(r,"utf-8")}).listen(r),console.log("http server running at port:"+r)},76:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AddRow=void 0;var n=a(r(297)),o=a(r(65));t.AddRow=function(e){e=e.addRowHandle;return n.default.createElement("div",{className:o.default.addRowWrap},n.default.createElement("button",{onClick:e},"Створити рядок"))}},267:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(r(297)),d=r(79),s=r(377),c=r(848),f=a(r(429)).default;t.default=i.default.memo(function(e){var t=e.item,r=e.part,a=e.sum,n=e.footerClass,o=e.isBright,l=e.X1,e={height:2*Math.round(100*t.amount/a)+"%"},u=d.useDispatch();return i.default.createElement("div",{className:"\n          "+f.matrixCeil+" "+(n?f.footer:"")+"\n          "+(r?f.part:"")+"\n          "+(o?f.bright:"")+"\n        ",onClick:function(){u(s.increaseAmount(t.id))},onMouseOver:function(){u(s.mouseOverCeil(t.id,l||c.X))},onMouseOut:function(){u(s.mouseOut(t.id))}},r?i.default.createElement("div",null,Math.round(100*t.amount/a)+"%"):t.amount,i.default.createElement("div",{style:e}))})},486:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(297));t.default=function(e){var t=e.footerClass,e=e.deleteHandle;return t?n.default.createElement(n.default.Fragment,null):n.default.createElement(n.default.Fragment,null,n.default.createElement("button",{onClick:e},"×"))}},333:function(e,t,r){var u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FormParamsMatrix=void 0;var i=o(r(297)),d=l(r(190)).default;t.FormParamsMatrix=function(e){var t=e.addParamsHandle,r=i.useState({M1:"",N1:"",X1:""}),a=r[0],n=r[1],o=i.useState(""),e=o[0],l=o[1],r=function(e){var t;n(u(u({},a),((t={})[e.target.name]=e.target.value,t)))},o=function(e){e.preventDefault(),t()({M1:+a.M1,N1:+a.N1,X1:+a.X1}),l("form is sending")};return i.default.createElement("div",{className:""+d.form_params},i.default.createElement("div",null,e),i.default.createElement("form",{id:"form",onSubmit:o},i.default.createElement("div",{className:""+d.inputField},i.default.createElement("label",{htmlFor:"M"},"Стрічки:"),i.default.createElement("input",{placeholder:"Введіть кількість стрічок",id:"M1",type:"text",name:"M1",value:a.M1,onChange:r})),i.default.createElement("div",{className:""+d.inputField},i.default.createElement("label",{htmlFor:"N"},"Стовбці:"),i.default.createElement("input",{placeholder:"Введіть кількість стовпчиків",id:"N1",type:"text",name:"N1",value:a.N1,onChange:r})),i.default.createElement("div",{className:""+d.inputField},i.default.createElement("label",{htmlFor:"X"},"X1:"),i.default.createElement("input",{placeholder:"Введіть X",id:"X1",type:"text",name:"X1",value:a.X1,onChange:r})),i.default.createElement("button",{className:"sendParams",onClick:o},"Відправити параметри матриці")))}},876:function(e,t,r){var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=l(r(297)),l=r(79),d=u(r(704)),s=r(263),c=r(848),f=u(r(587)).default;t.default=l.connect(function(e){return a({},e)},null)(function(e){var t=e.matrix,r=i.useState(),e=r[0],n=r[1],o=i.useMemo(function(){return s.getAverages(t)},[t.ceils]);return i.useEffect(function(){var r,a;n((a=[],(r=t).rows.allIds.forEach(function(e){var t=r.rows.byId[e].ceils.map(function(e){return r.ceils.byId[e]});a[+e]=i.default.createElement(d.default,{key:e,rowId:e,oneRow:t,footerClass:"",bright:r.bright})}),a[c.maxRowId]=i.default.createElement(d.default,{key:c.maxRowId,rowId:""+c.maxRowId,oneRow:o,footerClass:"footer",bright:[]}),a))},[t]),i.default.createElement("div",{className:""+f.matrixWrap},i.default.createElement("div",{className:""+f.matrixContent},i.default.createElement("h4",null,"Matrix ",t.rows.allIds.length,"x",t.rows.byId[t.rows.allIds[0]].ceils.length),i.default.createElement("div",{className:""+f.matrixHeader},"Сума по рядку"),e))})},704:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=o(r(297)),f=r(79),m=l(r(486)),p=r(377),_=l(r(267)),v=r(263),h=l(r(102)).default;t.default=f.connect(function(e){return{params:e.params}},null)(c.default.memo(function(e){var r=e.params,t=e.rowId,a=e.oneRow,n=e.footerClass,o=e.bright,l=c.useState(!1),u=l[0],i=l[1],d=c.useMemo(function(){return v.getSumOfRow(a)},[a]),e=c.useCallback(function(e){i(function(e){return!e})},[u]),l=a.map(function(e){var t=!!o.includes(e.id,0);return c.default.createElement(_.default,{key:e.id,item:e,sum:d,footerClass:n,part:u,isBright:t,X1:r.X1})}),s=f.useDispatch();return c.default.createElement("div",{className:""+h.matrixRow},c.default.createElement("div",{className:h.matrixCeil+" "+h.sidebarRow},c.default.createElement(m.default,{footerClass:n,deleteHandle:function(e){s(p.deleteRow(+t))}})),l,c.default.createElement("div",{className:h.matrixCeil+" "+h.sum,"data-id":"sum","data-ind":t,onMouseOver:e,onMouseOut:e},d))}))},848:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.maxRowId=t.X=t.M=t.N=void 0,t.N=100,t.M=100,t.X=4,t.maxRowId=1e3},263:function(e,t){var d=this&&this.__assign||function(){return(d=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=this&&this.__spreadArray||function(e,t){for(var r=0,a=t.length,n=e.length;r<a;r++,n++)e[n]=t[r];return e};function r(e,t){for(var r={byId:{},allIds:[]},a={byId:{},allIds:[]},n=0;n<t;n++){for(var o=[],l=0;l<e;l++){var u=n+"x"+l,i=Math.floor(1001*Math.random());r.byId[u]={id:u,amount:i},r.allIds.push(u),o.push(u)}var d=""+n;a.byId[d]={id:d,ceils:s([],o)},a.allIds.push(d)}return r.allIds.sort(function(e,t){return r.byId[t].amount-r.byId[e].amount}),{ceils:r,rows:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.getBrightCeilsIds=t.addNewRow=t.getSumOfRow=t.getAverages=t.deleteRow=t.getMatrix=t.getMatrixRows=void 0,t.addNewRow=function(e){for(var t=d({},e),r=null!==(e=t.rows)&&void 0!==e&&e.allIds?null===(n=t.rows)||void 0===n?void 0:n.allIds.length:0,a=t.rows.allIds?t.rows.byId[t.rows.allIds[0]].ceils.length:0,n=""+(+t.rows.allIds[r-1]+1),o=[],l=0;l<a;l++){var u=r+"x"+l,i=Math.floor(1001*Math.random());t.ceils.byId[u]={id:u,amount:i},t.ceils.allIds.push(u),o.push(u)}return t.rows.byId[n]={id:n,ceils:s([],o)},t.rows.allIds.push(n),t},t.getMatrixRows=r,t.getMatrix=function(e,t){return d({bright:[]},r(e,t))},t.deleteRow=function(e,t,r){var a=""+e,e=t.byId[a].ceils;return t.allIds.splice(t.allIds.indexOf(a),1),t.byId[a]=null,e.forEach(function(e){r.allIds.splice(r.allIds.indexOf(e),1),r.byId[e]=null}),{rows:t,ceils:r}};t.getAverages=function(a){for(var e,n=[],o=null!==(e=a.rows)&&void 0!==e&&e.allIds?null===(e=a.rows)||void 0===e?void 0:e.allIds.length:0,t=a.rows.allIds?a.rows.byId[a.rows.allIds[0]].ceils.length:0,r=0;r<t;r++)!function(t){var r=0;a.rows.allIds.forEach(function(e){e=a.rows.byId[e].ceils[t];r+=a.ceils.byId[e].amount}),n[t]={id:"footer"+t,amount:Math.ceil(r/o)}}(r);return n};t.getSumOfRow=function(e){return e.reduce(function(e,t){return e+t.amount},0)};t.getBrightCeilsIds=function(r,e,t){var a=r.allIds.indexOf(e),n=a-t,o=0<n?a-t:0,a=a+t<r.allIds.length?a+t:r.allIds.length-1,a=r.allIds.slice(o,a+1);return a.sort(function(e,t){return r.byId[t].amount-r.byId[e].amount}),s([e],a.slice(0,t))}},377:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addMatrix=t.addParams=t.mouseOverSum=t.mouseOut=t.mouseOverCeil=t.increaseAmount=t.deleteRow=t.addRow=void 0;var a=r(209);t.addRow=function(e){return{type:a.ADD_ROW,payload:e}},t.deleteRow=function(e){return{type:a.DELETE_ROW,payload:e}},t.increaseAmount=function(e){return{type:a.INCREASE_AMOUNT,payload:e}},t.mouseOverCeil=function(e,t){return{type:a.MOUSE_OVER_CEIL,payload:{ceilId:e,X:t}}},t.mouseOut=function(e){return{type:a.MOUSE_OUT,payload:e}},t.mouseOverSum=function(e){return{type:a.MOUSE_OVER_SUM,payload:e}},t.addParams=function(e){return{type:a.ADD_PARAMS,payload:e}},t.addMatrix=function(e){return{type:a.ADD_MATRIX,payload:e}}},226:function(e,t,r){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.matrixReducer=void 0;var o=r(209),a=r(848),l=r(263),u=l.getMatrix(a.M,a.N);t.matrixReducer=function(e,t){switch(void 0===e&&(e=u),t.type){case o.ADD_ROW:return n(n({},e),t.payload);case o.DELETE_ROW:var r=n({},e.rows),a=n({},e.ceils);return n(n({},e),l.deleteRow(t.payload,r,a));case o.INCREASE_AMOUNT:a=n({},e.ceils);return a.byId[t.payload].amount=a.byId[t.payload].amount+1,n(n({},e),{ceils:a});case o.MOUSE_OVER_CEIL:return n(n({},e),{bright:l.getBrightCeilsIds(e.ceils,t.payload.ceilId,t.payload.X)});case o.MOUSE_OUT:return n(n({},e),{bright:[]});case o.ADD_MATRIX:return n(n({},e),t.payload);default:return e}}},708:function(e,t,r){var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.paramsReducer=void 0;var n=r(209),o={M1:null,N1:null,X1:null};t.paramsReducer=function(e,t){return void 0===e&&(e=o),t.type!==n.ADD_PARAMS?e:a(a({},e),t.payload)}},71:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rootReducer=void 0;var a=r(561),n=r(226),r=r(708);t.rootReducer=a.combineReducers({matrix:n.matrixReducer,params:r.paramsReducer})},209:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ADD_MATRIX=t.ADD_PARAMS=t.MOUSE_OUT=t.MOUSE_OVER_SUM=t.MOUSE_OVER_CEIL=t.INCREASE_AMOUNT=t.DELETE_ROW=t.ADD_ROW=void 0,t.ADD_ROW="ADD_ROW",t.DELETE_ROW="DELETE_ROW",t.INCREASE_AMOUNT="INCREASE_AMOUNT",t.MOUSE_OVER_CEIL="MOUSE_OVER_CEIL",t.MOUSE_OVER_SUM="MOUSE_OVER_SUM",t.MOUSE_OUT="MOUSE_OUT",t.ADD_PARAMS="ADD_PARAMS",t.ADD_MATRIX="ADD_MATRIX"},826:e=>{e.exports=require("fs")},605:e=>{e.exports=require("http")},622:e=>{e.exports=require("path")},297:e=>{e.exports=require("react")},747:e=>{e.exports=require("react-dom/server")},79:e=>{e.exports=require("react-redux")},561:e=>{e.exports=require("redux")},835:e=>{e.exports=require("url")}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;t=a[e]={exports:{}};return r[e].call(t.exports,t,t.exports,n),t.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};n(793)})();