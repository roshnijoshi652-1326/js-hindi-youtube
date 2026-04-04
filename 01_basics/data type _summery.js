// primitive 

// 7 types: string,number,boolearn,null,undefined,symbol,bigInt

 const score = 100
 const scoreValue =100.3

 const isLoggedIn = false;
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId =Symbol('123')
 console.log(id === anotherId);

 //const bigNumber = 3435475866446494856n

// reference (non primitive)

// array , object, functions

//array
const heros =["shaktiman","naagraj","doga"]

//object
 let myobj={
    name: "roshni",
    age:20,
}
//function

const myfunctionn=function(){
    console.log("hello world");
}

console.log(typeof outsideTemp );