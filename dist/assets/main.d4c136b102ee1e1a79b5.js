!function(){"use strict";var l,r={751:function(e,t,r){var n=r(645),n=r.n(n)()(function(e){return e[1]});n.push([e.id,"h1{color:red}",""]),t.Z=n},304:function(e,t,r){r.r(t);var n=r(379),o=r.n(n),n=r(751),r={insert:"head",singleton:!1};o()(n.Z,r);t.default=n.Z.locals||{}},23:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(294));r(304);t.default=function(){return o.default.createElement("h1",null,"Simple APP")}},66:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.app=void 0;var o=n(r(294)),a=n(r(935)),u=n(r(23)),i=r(676),l=r(940),n=r(71),r=window.__PRELOADED_STATE__;console.log(r),delete window.__PRELOADED_STATE__;i=i.createStore(n.rootReducer,r,i.compose(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));t.app=o.default.createElement(l.Provider,{store:i},o.default.createElement(u.default,null)),a.default.hydrate(o.default.createElement(o.default.StrictMode,null,t.app),document.getElementById("root"))},848:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.X=t.N=t.M=void 0,t.M=5,t.N=10,t.X=3},226:function(e,t,r){var l=this&&this.__assign||function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.matrixReducer=void 0;var d=r(209),a=r(848);var _={matrix:function(e,t){void 0===e&&(e=a.M),void 0===t&&(t=a.N);for(var r=[],n=0;n<e;n++)r[n]=function(e,t){void 0===e&&(e=a.N);for(var r=[],n=0;n<e;n++){var o=Math.floor(1001*Math.random());r[n]={id:t+"x"+n,amount:o,bright:!1,part:!1}}return r}(t,n);return r}()};t.matrixReducer=function(e,t){var r=(e=void 0===e?_:e).matrix.concat();switch(t.type){case d.ADD_ROW:return l(l({},e),{matrix:c(c([],e.matrix),[t.payload])});case d.DELETE_ROW:r.splice(t.payload,1);for(var n=t.payload;n<r.length;n++)for(var o=0;o<r[n].length;o++){var a=+r[n][o].id.split("x")[0];r[n][o].id=a-1+"x"+o}return l(l({},e),{matrix:c([],r)});case d.INCREASE_AMOUNT:var u=t.payload.row,i=t.payload.column;return r[u][i].amount=r[u][i].amount+1,l(l({},e),{matrix:c([],r)});case d.MOUSE_OVER_CEIL:case d.MOUSE_OUT:case d.MOUSE_OVER_SUM:return l(l({},e),{matrix:c([],t.payload)});default:return e}}},71:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.rootReducer=void 0;var n=r(676),r=r(226);t.rootReducer=n.combineReducers({matrix:r.matrixReducer})},209:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MOUSE_OUT=t.MOUSE_OVER_SUM=t.MOUSE_OVER_CEIL=t.INCREASE_AMOUNT=t.DELETE_ROW=t.ADD_ROW=void 0,t.ADD_ROW="ADD_ROW",t.DELETE_ROW="DELETE_ROW",t.INCREASE_AMOUNT="INCREASE_AMOUNT",t.MOUSE_OVER_CEIL="MOUSE_OVER_CEIL",t.MOUSE_OVER_SUM="MOUSE_OVER_SUM",t.MOUSE_OUT="MOUSE_OUT"}},n={};function d(e){var t=n[e];if(void 0!==t)return t.exports;t=n[e]={id:e,exports:{}};return r[e].call(t.exports,t,t.exports,d),t.exports}d.m=r,l=[],d.O=function(e,t,r,n){if(!t){for(var o=1/0,a=0;a<l.length;a++){for(var t=l[a][0],r=l[a][1],n=l[a][2],u=!0,i=0;i<t.length;i++)(!1&n||n<=o)&&Object.keys(d.O).every(function(e){return d.O[e](t[i])})?t.splice(i--,1):(u=!1,n<o&&(o=n));u&&(l.splice(a--,1),e=r())}return e}n=n||0;for(var a=l.length;0<a&&l[a-1][2]>n;a--)l[a]=l[a-1];l[a]=[t,r,n]},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},d.d=function(e,t){for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var c={179:0};d.O.j=function(e){return 0===c[e]};function e(e,t){var r,n,o,a=t[0],u=t[1],i=t[2],l=0;for(r in u)d.o(u,r)&&(d.m[r]=u[r]);for(i&&(o=i(d)),e&&e(t);l<a.length;l++)n=a[l],d.o(c,n)&&c[n]&&c[n][0](),c[a[l]]=0;return d.O(o)}var t=self.webpackChunkmatrixSSRnew=self.webpackChunkmatrixSSRnew||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var e=d.O(void 0,[216],function(){return d(66)});d.O(e)}();