import React from 'react'
import {IStateMatrixHelp} from '../typesTS/typesTS'

interface Html {
    scripts: Array<string>,
    preloadedState: {
        matrix: IStateMatrixHelp;
    }
}

export function Html({ children, scripts, preloadedState }: React.PropsWithChildren<Html>) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>React Starter Pack</title>
            </head>
            <body>
                <div id="root">{children}</div>
                <script>
                    window.__PRELOADED_STATE__ = `${JSON.stringify(preloadedState).replace(
                        /</g,
                        '\\u003c'
                    )}`
                </script>
                {scripts.map((script, index) => <script src={script} key={index} />)}
            </body>
        </html>
    )
}