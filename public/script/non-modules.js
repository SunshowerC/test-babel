function nonModule() {
    return '<h1>hello non-module</h1>'
}

window.onload = ()=>{
    document.body.innerHTML =  nonModule()

}