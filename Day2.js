//Activity 1: Arithmetic Operation
let a=10
let b=8
function addition(a, b) {
  return a + b;
};
function sub(a,b){
  return a-b;
};

function multiplication(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};
function remainder(a, b) {
  return a % b;
};
let sum=addition(a,b);
console.log(sum);
let diff=sub(a,b);
console.log(diff);
let mul=multiplication(a,b)
console.log(mul);
let div=divide(a,b)
console.log(div);
let rem=remainder(a,b)
console.log(rem);

//Assignment Operator
a+=2
console.log(a);//12
b-=2
console.log(b);//6

//Comparision Operator
console.log(a < b);//flase
console.log(a > b);//true
console.log(a >= b);//true
console.log(a <= b);//true

console.log('2'== 2);//true
console.log('2'=== 2);//false

//Logical Operator
console.log(a < b && a > b);//false
console.log(a >= b || a <= b);//true
console.log(!b);//false

//Terninary Operator
let ter=a>=0?"positive":"negative"
console.log(ter);//positive