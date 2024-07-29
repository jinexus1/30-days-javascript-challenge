const myPromise=new Promise((resolve,reject)=>{
  console.log("this is promise");
  setTimeout(()=>{
    resolve("this is 'resolve' after 2 seconds");
  },2000)
   
})
myPromise.then(message=>{
  console.log(message);
})
const myPromise1 = new Promise((resolve, reject) => {
  console.log("this is promise");
  // setTimeout(()=>{
  //   resolve("this is 'resolve' after 2 seconds");
  // },2000)
  setTimeout(() => {
    reject(new Error("this is 'reject' after 2 seconds"));
  }, 2000);
});
myPromise1.catch(error => {
  console.error(error.message);
});
//myPromise1.catch((error) => {
//   console.error(error.message);
// });