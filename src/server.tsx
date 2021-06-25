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
import { getMatrix } from "./matrixService/matrixService";

import http from 'http'
import url from 'url'
import fs from 'fs'
//const fsp = require('fs').promises;

const PORT = process.env.PORT || 4000;
 //------------------------------
//  const jsFiles: Array<string> = []
//  fs.readdirSync(path.resolve(__dirname, '../dist/assets/')).forEach(file => {
//     if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
//  })
//   console.log('jsFiles', jsFiles)
//------------------------

const server = http.createServer((req, res) => {
   let data:string
   let filePath = req.url
   const extname = path.extname(filePath)
   let contentType = 'text/html';
   // try {
      if ( /^\/\?M=/.test(filePath) || /^\/$/.test(filePath)) {
            data = handleRender(req, res)
      } else  {
         switch(extname) {
            case '.js': 
               contentType = 'text/javascript';
               break;
         }
         filePath = path.resolve(__dirname, `../dist${filePath}`)        
         data = fs.readFileSync(filePath, 'utf8')
         
      }
      res.writeHead(200, { 'Content-Type': contentType });
   // } catch(e){
   //    data = 'Щось пішло не так!'
   // }
      res.end(data, 'utf-8')
})

function handleRender(req:http.IncomingMessage, res:http.ServerResponse) {
   const query = url.parse(req.url, true).query
   const rows = query.M as string
   const columns = query.N as string
   const X = query.X as string

      const preloadedState = {
         matrix: getMatrix(+rows, +columns),
         params:  {M1:+rows, N1:+columns, X1:+X}
      }
      const store = createStore(rootReducer, preloadedState);
      const html = renderToString(
         <Provider store={store}>
            <App />
         </Provider>
      )
      
      let data = renderFullPage(html, preloadedState)
   // }
   if (!data) {
      data  = 'No data'
   }
   return data
}

function renderFullPage(html:string, preloadedState={}) {
      const indexFile = path.resolve('./dist/index.html');
      let data:any = fs.readFileSync(indexFile);
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
         `)
         return data
      } else return false
}

server.listen(PORT)
console.log(`http server running at port:${PORT}` )
