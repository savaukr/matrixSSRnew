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

//let staticBasePath = '../dist'

const server = http.createServer((req, res) => {
   // const resolvedBase = path.resolve(staticBasePath)
   // const safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
   // const fileLoc = path.join(resolvedBase, safeSuffix);
   // console.log('filelock=', fileLoc)
   //res.setHeader("Content-Type", "text/html; charset=utf-8;")
   if ( /^\/\?rows=/.test(req.url) || /^\/$/.test(req.url)) {
     try {
         handleRender(req, res)
      }  catch(e){
         res.end('Щось пішло не так!')
     }
   } 
   //    else {
   //       fs.readFile(fileLoc, function(err, data) {
   //          if (err) {
   //             res.writeHead(404, 'Not Found');
   //             res.write('404: File Not Found!');
   //             return res.end();
   //          }
            
   //          res.statusCode = 200;
   
   //          res.write(data);
   //          return res.end();
   //    });
   // }
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
   try {
      const indexFile = path.resolve('./dist/index.html');

      // const js0 = path.resolve(__dirname, '../dist/assets/main.91b2e5429de00d7c7d77.js')
      // const js1 = path.resolve(__dirname, '../dist/assets/vendors.8c9b81db073c8f35260e.js')
      // // let datajs0 = await fsp.readFile(js0)
      // let datajs1 = await fsp.readFile(js1)
      // // datajs0 = datajs0.toString()
      // datajs1 = datajs1.toString()
      // console.log('datajs0=',  datajs1)

      let data = await fsp.readFile(indexFile);
      data = data.toString()
      if (data) {
         // //data = data.replace(/<script .*?<\/script>/gi, '')
         // let arrSrces: string[] =  Array.from(data.matchAll(/src="(.*?)"/gi))
        
         // console.log('data=', data)
         // arrSrces.forEach((src) => { 
         //    const srcPath = `/../dist${src[1]}`
         //    data = data.replace(`${src[1]}`, `${srcPath}`) 
         // })
         // console.log('data=', data)
         data = data.replace('<div id="root"></div>', `
            <div id="root">${html}</div>
            <script>
                  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                  /</g,
                  '\\u003c'
                  )}
            </script>           
         `)
         return data
      } else return false
   } catch (e) {console.log(e)}
}

server.listen(PORT)
console.log(`http server running at port:${PORT}` )
