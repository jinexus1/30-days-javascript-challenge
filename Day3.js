let a = 10;
if (a >= 0) {
  if (a === 0) console.log("Zero");
  else console.log("Positive");
} else console.log("Negative");

let age = 26;
if (age >= 18) console.log("eligible to vote");
else console.log("Not eligible");

let ab = 10;
let b = 5;
let c = 6;
// A is the biggest
if (ab > b && ab > c) {
  console.log(a);
}
// B is the biggest
if (b > ab && b > c) {
  console.log(b);
}
//C is the largest
else {
  console.log(c);
}

let e = 1;
switch (e) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Input");
}

let score = 90;
switch (score) {
  case 90:
    console.log("A");
    break;
  case 80:
    console.log("B");
  case 70:
    console.log("C");
  case 60:
    console.log("D");
  default:
    console.log("working");
}

let even_odd = a % 2 == 0 ? "Even" : "Odd";
console.log(even_odd);

let year = 2024;
if (year % 4 == 0) {
  if (year % 400 == 0) console.log("leap year");
  else console.log("Not a leap year");
}
