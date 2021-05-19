// characters of LET:
// 1. no repeated declaration
// 2. will not be added into window obj 
// 3. won't be hoisted
// 4. works in block scope



//console.log(A)
//const A = 'const A in global scope'

// blockscope
if(true){
    const B = 'const B in block scope'
}
console.log(B)