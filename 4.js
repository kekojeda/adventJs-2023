const a = 'hola (odnum)'
const b = 'sa(u(cla)atn)s'

function decode(message) {
    const regex = /\(([^()]*)\)/;

    while (regex.test(message)) {
        message = message.replace(regex, (match, text) => text.split('').reverse().join(''));
    }

return message;
}

console.log(decode(message));


let indexFirstOP = b.indexOf("(")
let indexSecondOP = b.indexOf("(", indexFirstOP+1)

let indexFirstCP = b.indexOf(")")
let indexSecondCP = b.indexOf(")", indexFirstCP+1)

if(indexSecondOP != -1 ){
    
    for (let i = b.length -1 ; i >= 0 ; i--) {
        cadenaInvertida += cadenaAInvertir[i];
    }



}

let regExp = /ee/


console.log(indexFirstOP);
console.log(indexSecondOP);

console.log(indexFirstCP);
console.log(indexSecondCP);

let bArr = b.split("")



function decode(message) {

    let cadenaAInvertir = message.substring(message.indexOf(("(")), message.indexOf(")") +1 )
    // Code here
    return cadenaAInvertir
  }

  console.log(decode(b));

  ('sa(u(cla)atn)s')

  saulcatns


let cadenaAInvertir = a.slice(a.indexOf("(") + 1, a.indexOf(")"))

console.log(cadenaAInvertir);

let cadenaInvertida = ""

for (let i = cadenaAInvertir.length -1 ; i >= 0 ; i--) {
    cadenaInvertida += cadenaAInvertir[i];
}

let result = a.slice(0, a.indexOf("("))


console.log(result + cadenaInvertida);