var a = 'var a in global scope'

function func(){
    var a= 'var a in a function scope'

    console.log(a)

    var b = 'var b in function scope'
}

func()
if(true){
 console.log(a)
  //  var c = 'let c in block scope'
  let c = 'let c in block scope'
}

console.log(c)