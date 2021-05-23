import fs from 'fs'
import express, {Request, Response} from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import  App  from './App'
import { Html } from './Html/Server'

import  {createStore} from 'redux'
import { Provider } from 'react-redux'
import {rootReducer} from './redux/rootReducer'

const port = 3000
const server = express()
const jsFiles: Array<string> = []

fs.readdirSync('./dist/assets').forEach(file => {
    if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
})

server.use('/assets', express.static('./dist/assets'))

server.get('*', (req:Request, res: Response) => {
    handlerRender(req, res)
    // ReactDOMServer.renderToNodeStream(<Html scripts={jsFiles}>
    //     <StaticRouter location={req.url} context={{}}>
    //         <App />
    //     </StaticRouter>
    // </Html>).pipe(res)
})

function handlerRender(req: Request, res: Response) {
    const store = createStore(rootReducer)
    ReactDOMServer.renderToNodeStream(
        <Html scripts={jsFiles} preloadedState={store.getState()}>
            <Provider store = {store}>
                <StaticRouter location={req.url} context={{}}>
                    <App />
                </StaticRouter>
            </Provider>
        </Html>).pipe(res)
}

// function renderFullPage(html, prelodedState) {
  
// }

server.listen(port, () => console.log(`Listening on port ${port}`))