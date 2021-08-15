const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const config = {
    target: "web",
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        watchContentBase: true,
        overlay: true
    },
    entry: {
        app: {
            import: "./src/index.js",
            dependOn: [
                "react-vendors"
            ]
        },
        "react-vendors": [
            "react", "react-dom"
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "React Sandbox",
            favicon: "./src/assets/sandbox-icon-16.png"
        })
    ]
}

module.exports = (env, argv) => {
    if (env.prod) {
        config.mode = "production";
        config.devtool = false;
        config.output.publicPath = "";
    }
    return config;
}
