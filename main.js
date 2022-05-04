 const stringLength = (string) => {
 counter = 0;
 for(let i = 0; i < string.length; i += 1){
  counter++
 }
 return counter;
}

const reverseString = (string)=> {
 let newString = "";
 for(let i = string.length -1; i>= 0; i--){
   newString += string[i];
 } 
 return newString;
}

const user = (array) => {
 let sum = 0;
 let n = array.length;
 for(let i = 0; i < array.length; i++){
   sum += array[i];
  }
  return sum/n;
}

const add = (a,b) => {
  return a + b;
}

const subtract = (a,b) => {
  return a - b;
}

const multiply = (a,b) => {
  return a * b;
}

const divide = (a,b) => {
  return a / b;
}

const capitalise = (string) => {
  let lower = string.toLowerCase();
  return string.charAt(0).toUpperCase() + lower.slice(1)
}



module.exports = { stringLength, reverseString, user, add, subtract, multiply, divide, capitalise}