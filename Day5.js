//Activity
let a=10
function oddEven(a){
  if(a%2==0)
    console.log("even");
  else
  console.log("odd");
}
let b=2
function squareNum(b){
  console.log(b*b);
}
//Activity
let c=3
let d=34
function maximum(c,d){
  if(c>d)
    console.log(c);
  else
    console.log(d);
}
let st1="Archit"
let st2=" Pandey"
console.log(st1+st2);
//Activity 3
let e=2
let f=10
let sum= (e,f)=> e+f
let input="Archit Pandey"
let searchCharacter='A'
const containsString = (input, searchCharacter) => {
  return typeof input === "string" && input.includes(searchString);
};
console.log(containsString);
//Activity
let num1=2
let num2=4
let product=function mul(num1,num2=10) {
  return num1*num2
}
console.log(product);
let return_mess = function message(name, age = 12) {
  if (age < 18) return "not eligible to vote ";
  else return "not eligible to vote";
};
console.log(return_mess);function repeatFunction(n, func) {
  return function (...args) {
    for (let i = 0; i < n; i++) {
      func(...args);
    }
  };
}

// Example usage
function sayHello() {
  console.log("Hello!");
}

const sayHello3Times = repeatFunction(3, sayHello);
sayHello3Times();

function composeFunctions(func1, func2, value) {
    return func2(func1(value));
}

// Example usage
function addTwo(x) {
    return x + 2;
}

function multiplyByThree(x) {
    return x * 3;
}

const result = composeFunctions(addTwo, multiplyByThree, 5);
console.log(result); // Output: 21