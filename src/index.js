

// import getStr01 from './module/test01'
// import isIncludeApi from './module/test02'
// import promiseStr from './module/test03'
// import asyncStr from './module/async'

const hello = async (msg)=>{
    const {default: getStr01} = await import(/* webpackChunkName: "text" */ './module/text')
    const {default: isIncludeApi} =await  import(/* webpackChunkName: "includes" */ './module/includes')
    const {default: promiseStr} = await import(/* webpackChunkName: "promise" */ './module/promise')
    const {default: asyncStr} = await import(/* webpackChunkName: "async" */ './module/async')

    console.log('sdddsd')
    let result = ''
    if(isIncludeApi()) {
        result = getStr01()
        const s1 = await promiseStr()
        const s2 = await asyncStr()
        result = [s1, s2].join(',')
    }


    return `hello ${msg}  ${result}`
}

console.log('11233')
document.getElementById('test').onclick =  (e)=>{
    hello('world').then(msg=>{
        alert(msg)
        document.getElementById('test').innerHTML = msg

    })

    
}