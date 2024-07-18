let arr=[1,2,3,4,5]
let first=arr[0];
let last=arr[arr.length-1]

arr.push(6)
console.log(arr);

arr.pop()
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(1);
console.log(arr);

let doubleArr=arr.map(arr=>arr*2);
console.log(doubleArr);

let evenArr=arr.filter(arr=>arr%2==0)
console.log(evenArr);

let reduceArr=arr.reduce(arr=>arr+=arr)
console.log(reduceArr);

for (let index = 0; index < arr.length; index++) {
  console.log( arr[index]);
  
}
arr.forEach(element => {
  console.log(element);
})

let matrix=[[1,2,3],[2,3,4],[5,6,7]]
for (let i = 0; i < matrix.length; i++) {
  let row = "";
  for (let j = 0; j < matrix[i].length; j++) {
    row += matrix[i][j] + " ";
  }
  console.log(row.trim());
}


