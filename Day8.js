//Activity 1
let name="archit"
let age=22

let personInfo=`Name:${name} and age:${age}`
console.log(personInfo)


let line1="Hey it feels good today."
let line2="Although the day is a bit humid."
let line3="But what a day to be alive."

const para=`${line1}\n${line2}\n${line3}`
console.log(para)

//Activity 2
let arr=[1,2,3,4,5]
//use of destructuring to extract first and last element
let [first, ...rest]=arr
let last=rest[rest.length-1]
console.log(first,last)

let book={
  author:"Peter Hankdi",
  title:"Sorrow Beyond Dreams",
  year:1989,
  pages: 128
}
//destructing the book to find the autor and title of the book object
let {author}=book
let {title}=book
console.log(author,title)

//Activity 3
let arrNew=[...arr,6,7,8]
console.log(arrNew)
//rest operator in a function to accept an arbitray number of args and then summ them
let sum=function sum(...args){
  let sum=0
  for(let i=0;i<args.length;i++){
    sum+=args[i]
    }
    return sum
}
console.log(sum(1,2,3,4));
//Activity 4
let mul=function multiply(num1,num2=1){
  return num1*num2
}
console.log(mul(2,3))

//Activity 5
//use of enhanced object literals to create an object with method and properties 
let person={
  name:"John",
  age:30,
  greet:function(){
    console.log("Hello, I am "+this.name+" and I am "+this.age+" years")
      }
}
//log
person.greet();