const a = 'hola (odnum)'

console.log(a.substring(a.indexOf("("), a.indexOf(")") ));


console.log(a.slice(a.indexOf("("), a.indexOf(")") + 1));


let invertir = a.slice(a.indexOf("("), a.indexOf(")") + 1)

let result = ""

for (let i = invertir.length -2; i > 0 ; i--) {
    result += invertir[i];
    
}

console.log(result);