const path = require("path")

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts$|\.tsx$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                    options: {
                        configFile: "ts.config.json"
                    }
                },
            ],
        },
        stylus: {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                }
            ],
        },
    }

    if (env === 'production') {
        modules.stylus.use.splice(2, 0, { loader: "postcss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
            App: path.resolve(__dirname, 'src/App/'),
            Pages: path.resolve(__dirname, 'src/Pages/'),
        },
    }

    return {
        modules,
        resolve,
    }
}