// import fs from "fs";
// import express, { Request, Response } from "express";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// //import  { renderToString } from 'react-dom/server'
// import { StaticRouter } from "react-router";
// import App from "./App";
// import { Html, HtmlParams } from "./Html/Server";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { rootReducer } from "./redux/rootReducer";
// import url from "url";
// import { FormParamsMatrix } from "./components/FormParamsMatrix/FormParamsMatrix";

// import { getMatrix } from "./redux/matrixReducer";

// const port = 4000;
// const server = express();
// const jsFiles: Array<string> = [];

// fs.readdirSync("./dist/assets").forEach((file) => {
//   if (file.split(".").pop() === "js") jsFiles.push("/assets/" + file);
// });

// server.use("/assets", express.static("./dist/assets"));

// server.get("*", (req: Request, res: Response) => {
//   handlerRender(req, res);
// });

// function handlerRender(req: Request, res: Response) {
//   //const store = createStore(rootReducer);
//   const query = url.parse(req.url, true).query;
//   const rows = query.rows as string;
//   const columns = query.columns as string;
//   const preloadedState = getMatrix(+rows, +columns)
//   const store = createStore(rootReducer, {matrix:{matrix:preloadedState}});

//   if (!parseInt(rows) || !parseInt(columns)) {
//     ReactDOMServer.renderToNodeStream(
//       <HtmlParams scripts={jsFiles}>
//         <FormParamsMatrix />
//       </HtmlParams>
//     ).pipe(res);
//   } else {
//     ReactDOMServer.renderToNodeStream(
//       <Html scripts={jsFiles} preloadedState={store.getState()}>
//         <Provider store={store}>
//           <StaticRouter location={req.url} context={{}}>
//             <App />
//           </StaticRouter>
//         </Provider>
//       </Html>
//     ).pipe(res);
//   }
// }

// server.listen(port, () => console.log(`Listening on port ${port}`));

//=====================================================================================================================

import path from 'path';
import React from 'react';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer'
import { renderToString } from 'react-dom/server'
import App from './App';
import { FormParamsMatrix } from './components/FormParamsMatrix/FormParamsMatrix'
import { getMatrix } from "./redux/matrixReducer";

import http from 'http'
import url from 'url'
import fs from 'fs'
const fsp = require('fs').promises;

const PORT = process.env.PORT || 4000;
 //------------------------------
 const jsFiles: Array<string> = []
 fs.readdirSync(path.resolve(__dirname, '../dist/assets/')).forEach(file => {
    if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
 })
 console.log('jsFiles', jsFiles)
//------------------------

const server = http.createServer((req, res) => {
   res.setHeader("Content-Type", "text/html; charset=utf-8;")
   if ( /^\/\?rows=/.test(req.url) || /^\/$/.test(req.url)) {
     try {
         handleRender(req, res)
      }  catch(e){
         res.end('Щось пішло не так!')
     }
   }
})

async function handleRender(req:any, res:any) {
   const query = url.parse(req.url, true).query
   const rows = query.rows as string
   const columns = query.columns as string
   let data
  
   if (!parseInt(rows) || !parseInt(columns)) {
      const html= renderToString(<FormParamsMatrix/>)
      data = await renderFullPage(html)
   }   else {
      //const store = createStore(rootReducer)
      //const preloadedState = store.getState()
      const preloadedState = getMatrix(+rows, +columns)
      const store = createStore(rootReducer, {matrix:{matrix:preloadedState}});
      const html = renderToString(
         <Provider store={store}>
            <App />
         </Provider>
      )
      
      data = await renderFullPage(html, preloadedState)
   }
   if (data) {
      res.end(data)
   }
      else res.end('No data')
}

async function renderFullPage(html:string, preloadedState={}) {
   const indexFile = path.resolve('./dist/index.html');
   //const cssFile = path.resolve('./server/main.css')
   // const js0 = path.resolve(jsFiles[0])
   // const js1 = path.resolve(jsFiles[1])
   let data = await fsp.readFile(indexFile);
   data = data.toString()
   if (data) {
      data = data.replace('<div id="root"></div>', `
         <div id="root">${html}</div>
         <script>
               window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
               /</g,
               '\\u003c'
               )}
         </script>
         <script  defer src="/dist/${jsFiles[0]}"></script>
         <script src="${jsFiles[1]}" ></script>

      `)
    //   data = data.replace(/href="\//g, `href="/build/`)
    //   data = data.replace(/src="\/static/g, `src="/build/static`)
      return data
   } else return false
}

server.listen(PORT)
console.log(`http server running at port:${PORT}` )
