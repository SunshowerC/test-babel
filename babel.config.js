module.exports = {
    "plugins": ["@babel/plugin-syntax-dynamic-import"],
    presets: [

        [
            "@babel/preset-env",
            {
                "modules": false,
                "useBuiltIns": "usage"
            }
        ],
                
        // ["react-app", {
        //     absoluteRuntime: false
        // }],
    ]
}