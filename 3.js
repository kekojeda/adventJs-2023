const original = 'abcw'
const modified = 'abcdw'


function findNaughtyStep(original, modified) {
    if (original === modified) return ''

    for (let i = 0; i < original.length; i++) {

      if (original[i] !== modified[i]) {

        return original.length > modified.length ? original[i] : modified[i]

      }

    }

    return modified.slice(original.length); 
  }


console.log(
  findNaughtyStep(original,modified))

original === modified && console.log("son iguales");



for (let i = 0; i < original.length; i++) {
    
    
}


original > modified && console.log(original.split("").filter(step => !modified.includes(step)).join("")); 

original < modified && console.log(modified.split("").filter(step => !original.includes(step)).join(""));




