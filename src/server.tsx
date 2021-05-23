import fs from 'fs'
import express, {Request, Response} from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
//import  { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import  App  from './App'
import { Html, HtmlParams } from './Html/Server'

import  {createStore} from 'redux'
import { Provider } from 'react-redux'
import {rootReducer} from './redux/rootReducer'
import url from 'url'
import {FormParamsMatrix} from './components/FormParamsMatrix/FormParamsMatrix'

const port = 3000
const server = express()
const jsFiles: Array<string> = []

fs.readdirSync('./dist/assets').forEach(file => {
    if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
})

server.use('/assets', express.static('./dist/assets'))

server.get('*', (req:Request, res: Response) => {
    handlerRender(req, res)
})

function handlerRender(req: Request, res: Response) {
    const store = createStore(rootReducer)
     const query = url.parse(req.url, true).query
     const rows = query.rows as string
     const columns = query.columns as string
     if (!parseInt(rows) || !parseInt(columns)) {
        ReactDOMServer.renderToNodeStream(
            <HtmlParams scripts={jsFiles} >
                <Provider store = {store}>
                    <StaticRouter location={req.url} context={{}}>
                        <FormParamsMatrix />
                    </StaticRouter>
                </Provider>
            </HtmlParams>).pipe(res)
     } else {
        ReactDOMServer.renderToNodeStream(
            <Html scripts={jsFiles} preloadedState={store.getState()}>
                <Provider store = {store}>
                    <StaticRouter location={req.url} context={{}}>
                        <App />
                    </StaticRouter>
                </Provider>
            </Html>).pipe(res)
     }
        
}

// function renderFullPage(html, prelodedState) {
  
// }

server.listen(port, () => console.log(`Listening on port ${port}`))