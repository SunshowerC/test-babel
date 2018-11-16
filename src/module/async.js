
const wait = (time)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, time)
    })
}

const getData = async ()=>{
    await wait(2000)
    return 'some data'
}



const asyncFun = async ()=>{
    await wait(1000) 
    const data = await getData()
    return data
}

export default asyncFun