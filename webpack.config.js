const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
            use: ['style-loader', 'css-loader'],
            exclude: /\.module\.css$/
        },
        cssModules: {
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                { loader: "css-modules-typescript-loader"},
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {localIdentName: '[local]--[hash:base64:5]'}
                    }
                }
            ],
            include: /\.module\.css$/
        },
        cssModulesIsomorph: {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                { loader: "css-modules-typescript-loader"},
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: {localIdentName: '[local]--[hash:base64:5]'}
                    }
                }
            ],
            include: /\.module\.css$/
        },
        stylusIsomorph: {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader",
                }
            ],
            exclude: /\.module\.css$/
        }
    }

    if (env === 'production') {
        modules.stylus.use.splice(2, 0, { loader: "postcss-loader" }),
        modules.stylusIsomorph.use.splice(2, 0, { loader: "postcss-loader" }),
        modules.cssModules.use.splice(3, 0, { loader: "postcss-loader" })
    }


    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { // ?????? ?????? ???? ????????????, ?????? ?? ?? tsconfig.json, ?????????? Webpack ???????? ???????????? ???????????? ???? ????????????????????
            App: path.resolve(__dirname, 'src/App/'),
            Pages: path.resolve(__dirname, 'src/Pages/'),
        },
    }

    return {
        modules,
        resolve,
    }
}