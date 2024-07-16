//Activity 1
//Task 1
for(let i=1;i<=10;i++){
  console.log(i);
}
//Task 2
for (let i = 1; i <= 10; i++) {
  console.log("5 * ",i," = ",5*i);
}

//Activity 2
//Task 3
let i=1
while(i<=10){
  console.log(i);
  i=i+1
}
//Task 4
// let j=1;
// while(j<=10){
//   console.log("5 * ", j, " = ", 5 * j);
//   j++;
// }
while(i>0){
  console.log(i);
  i--;
}
//Activity 3
//Task 5
let c=1
do{
  console.log(c);
  c++;
}while(c<=5);
//Task 6
let fact=1
let d=5
do{
  fact=fact*d;
  d--;
}while(d>=1);
console.log(fact)

//Activity 4:
//Task 7
let message=""
for (let index = 0; index < 5; index++) {
  for (let j = 0; j <= index; j++) {
    message+="*"
  }console.log(message);
}

//Activity 5:
//Task 8
for (let index = 1; index <= 10; index++) {
  if(index==5)
      continue;
  else
    console.log(index)
  
}
//Task 9
for (let index = 1; index <= 10; index++) {
  if (index == 7) break;
  else console.log(index);
}