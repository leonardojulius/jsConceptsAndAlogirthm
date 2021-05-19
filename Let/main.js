

if(true){
//block scope
    let c = 'let c in block scope'
}

var a = 'var global a'
let b = 'let global b'

console.log(window.b);
//output is undifined