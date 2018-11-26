
const isModernBuild = process.env.MODERN_BUILD

// const options = isModernBuild ? {
//     targets: {
//         esmodules: true
//     },
// } : {
//     "modules": false,
//     "useBuiltIns": 'usage'
// }

module.exports = {
    "plugins": ["@babel/plugin-syntax-dynamic-import"],
    presets: [

        [
            "@babel/preset-env",
            
            {
                "modules": false,
                "useBuiltIns": 'usage',
                include: [ 'es6.promise'],
                // exclude: ['es6.promise'],
                debug: true               
            }
        ]
    ]
}