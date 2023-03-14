const {log}=console

// array can store complex data
const names=["praksh","ram",1,2,3,4,["html","css","js"],
{schoolName:"STES"}
]

// log(names)

// names.forEach(element => {
//   log(element)
// });

// for(let i=0;i<names.length;i++)
// {
//   if(names[i]==="ram")
//   delete names[i];
//   else
//   log(names[i])
// }
// log(names)

// for let of  
// if index not needed
// gives every ellement in array
// for(let name of names)
// log(name)


// for let in --Important same for array and objects
// gives every index in array
// for(let index in names){
//   log(names[index])
// }

/* copying an array -- array reference */

/* 
let arr1=[1,2,3,4]
let arr2=arr1;// both array are pointing to smae memory location
// shallow copy
arr2.push(5)

// both array are pointing to same memory location
// log(arr1)
// log(arr2)

//spread opertor
let arr3=[...arr1]
arr3.push(6);
log(arr3);
log(arr1) 
 */


/* Mutable (changed) Objects or Imutable (not Changed) */

let arr1=[1,2,3,4]
let arr2=[1,2,3,4]
let arr3=[1,2,3,4]

/* 

arr1.push(10)
arr1.push(4,5,6,7);
// log(arr1)
arr1=arr1.concat(arr2)
log(arr1)
let arr4=arr1.concat(arr1,arr2,"daaf");
log(arr4)

*/

/* let courses=["aaf","afaf","aafafa","grggr","vvv","zzzz"]

courses.pop()

log(courses.slice(1,3));
log(typeof courses)

courses.splice()

let str = "hello"
let res=[...str].reverse().join("")
log(res)
 */

/* 
function ascendingOrder(a,b){
  return a-b;
}

function decendingOrder(a,b){
  return b-a;
}
let numbers=[1,2,3,4,0,11,12,6,8]
numbers.sort(ascendingOrder);
log(numbers) */

/* Split and Join 
 * madam--> madam
*/

/* const str="madfdam";
// split()-> convert string into array of characters
// join() -> convert array into string
let revStr=str.split().reverse().join();
if(str===revStr)
log("Pelindrome")
else
log("Not")
 */
/* const arr=[1,2,["add","css","js"],5,6]

const [,,courses,a,]=arr
log(courses,a) */

/* swap numbers --> interview question cypress*/
/* let a1=5;
let  a2=10;
[a1,a2]=[a2,a1];
log(a1,a2)
 */

/* includes arr.includes() */

/* const availableSize=["S","M","L","XL","XXL"]
const readlinesync=require("readline-sync");
const userSize=readlinesync.question("Which size u want?");

const isSizeFound=availableSize.includes(userSize)

if(isSizeFound)
log("Found")
else
log("Not Found") */

/* comuted properties */
/* 
let course="html" 
const obj={
  name:"Prakash",
  age:100,
  [course]:"courses not available"
}

log(obj.age)
log(obj)
log(obj[courses])
 */

/* property existence */

/* 

const obj={
  name:"prakash",
  city:"Mumbai"
}

log("name" in obj)

// loop over object
// for let key in obj
for(let key in obj){
  log(key,":",obj[key])
}

 */


/* Object reference and shallow copy */

/* const person1={
  name:"prakash",
  address:{
    city:"Mumbai",
    locality:{
      village:"sirsha"
    }
  }
} */

// shallow copy--> copy of object and object both point to same memory location
/* const person2=person1;
person2.work="self-employed"
log(person1)
log(person2) */

/* shallow copy  method2: using object.assign(target,source)
 only work for level1 key , nested key -->shallow copy
*/
/* const person3=Object.assign({},person1)
person3.work='youtuber'
person3.address.locality.village2="sirsha2"
log(person1)
log(person3) */

/* Deep copy  */

/* const obj={
  name:"prakash",
  address:{
    city:"Mumbai",
    locality:{
      village:"sirsha"
    }
  }
} */

/* deep copy  method1: using spread operator but not for nested keys*/
/* const obj2={...obj,address:{...obj.address,
locality:{...obj.address.locality}
}};
obj2.address.locality.village2="sirsa2"
log(obj)
log(obj2) */

/* deep copy: create ur own funciton interview question */
/* function getCopiedObj(source){
  const targetObj={}
  const keys=Object.keys(source)
  // log(keys)
  for(let key of keys )
  {
    if(typeof source[key]==="object")
    targetObj[key]=getCopiedObj(source[key])
    else{
      targetObj[key]=source[key]
    }
    // log(key)
    // log(typeof source[key])
  }
  return targetObj
}

const copyobj=getCopiedObj(obj);
copyobj.address.locality.village2="sirsa2"

log(obj)
log(copyobj)



 */

/* optional-chaining */
/* 
const user={
  name:"prakash",
  address:{
    city:"Mumbai",
    locality:{
      village:"sirsha"
    }
  },
  getCityName:()=>{
    log("Welcome",user.name)
  }
}
// sol: 01
if(user.play!==undefined)
log(user.play.play2)
else
log("play key not found")
// log(user)

// solution2: optional chaining ?.

log("Sol 2",user?.address?.city?.landmark)
user?.getCityName()
log("functional not present",user.getDisplayAddress?.()); 


 */

/* Destructuring */
/* 
const obj={
  name:"prakash",
  address:{
    city:"Mumbai",
    locality:{
      village:"sirsha"
    }
  },
  getCityName:()=>{
    log("Welcome",user.name)
  }
}

let {username,getCityName,name,...restObj}=obj;
log("username key in obj is ", username)
log("name key in obj is ", name)
let arr=[1,2,3,4,5,6]
 let [a,b,c,...rest]=arr
log(rest)

// avoid this as it cause confusions in naming
let {address:myAddress}=obj
log("My address is =",myAddress)

let {address:{city}}=obj
log("city is ", city)
// log("once  address key is destructured , it no longer exist"+address);

 */

/* Short Hand */

/* function getObject(name, city){
  return {
    name:name,
    city:city
  }
} */

function getObject(name, city){
  return {
    name,
    city
  }
}

const obj=getObject("prakash","Mumbai")
log(obj)

const student="Ashish";
const course="redux";
log({student,course})

/* sum of number from n1 to n2 */
/* 
function getSum(min, max){
  return ((max*(max+1))/2)-(min*(min-1))/2;
}

log(getSum(1,10))


 */

/* Pure function */

function sum(a,b){
  return a+b;
}

log(sum(2,3)) 


/* first class function */

function greet(){
  function wrapper(){
    log("hello Prakash");
  }
  return wrapper;
}

greet()();


/* HOC */
// function accepting function as argument-->HOC

/* function fn1(){
  log("Hello")
}

// this is an HOC
function fn2(fun){
  log("World");
  fun();
}


fn2(fn1);

function displayMsg(){
  return function(){
    log("Hello from inner function")
  }
}


displayMsg()()


const arr=[1,2,3,4,5,6]
function power(n,x){
  return Math.pow(n,x);
}


function findNthPower(arr,x){
  let res=[];
  for(let ele of arr){
    res.push(power(ele,x))
  }
  return res;
}

let res=findNthPower(arr,3);
log(res)

 */

/* 
map-filter
*/

/* 
const arr=[11,2,3,4,5]

function findnthPower(ele,n){
  return Math.pow(ele,n);
}

// let res=arr.map((ele)=>{
//  return findnthPower(ele,2)
// })

let res=arr.map((ele, )=>{
  // return findnthPower(ele,2)
  return ele**3 
 })

log(res)
 */


/* Filter */
/* const arr=[11,2,3,4,15]

function greaterthan5(ele){
  return ele>5
}

function filterNum(arr){
  // const tempArr=arr.filter(ele=>ele>5)
  const tempArr=arr.filter(greaterthan5)
  return tempArr;
}

let res=filterNum(arr)
log(res)
 */

/* Reduce */


const arr=[11,2,3,4,15]

// let res=arr.reduce((acc=0,curr)=>{
//  if(curr>=4)
//  acc+=curr;
//  return acc;
// })


/* let res=arr.reduce((acc=[],curr)=>{
  if(curr>=4)
  acc.push(curr);
  return acc;
 })

log(res) */
/* 

let products = [
  {
    id: "1",
    item: "Shirt"
  },
  {
    id: "2",
    item: "Jeans"
  },
  {
    id: "3",
    item: "T-shirt"
  },
  {
    id: "4",
    item: "Denim Jacket"
  },
  {
    id: "5",
    item: "Casual Shoes"
  }
 ];

function removeMe(item){
  for(let i=0;i<products.length;i++){
    if(products[i].item===item){
      return products.splice(i,1);
    }
  }
}

let res=removeMe("Shirt");
log(res)
 */

const clothingStock = [
  {
    id: "1",
    color: "red",
    category: "men shirt",
    item: "Regular Fit Men Shirt",
    inStock: true
  },
  {
    id: "2",
    color: "green",
    category: "women shirt",
    item: "Slim Fit Women Shirt",
    inStock: true
  },
  {
    id: "3",
    color: "blue",
    category: "men shirt",
    item: "Oversized Men Shirt",
    inStock: false
  },
  {
    id: "4",
    color: "yellow",
    category: "men tshirt",
    item: "Regular Fit Men Tshirt",
    inStock: false
  },
  
  
 {
    id: "5",
    color: "magenta",
    category: "women jeans",
    item: "Ankle Lenght Women Jeans",
    inStock: true
  },
  {
    id: "6",
    color: "yellow",
    category: "men shirt",
    item: "Casual Fit Men Shirt",
    inStock: true
  },
  {
    id: "7",
    color: "green",
    category: "men jeans",
    item: "Carrot Fit Men Jeans",
    inStock: true
  },
  {
    id: "8",
    color: "red",
    category: "women shirt",
    item: "Casual Fit Women Shirt",
    inStock: false
  }
 ];

 /* 3a - Console all the different colors available for women's shirts */

//  clothingStock

function fun3a(clothingStock){
  let res=[];
  for(let cloth of clothingStock){
    let arr=[];
    arr=cloth.category.split(" ");
    // log(arr);
    let flag1=false,flag2=false;
    for(let word of arr){
      if(word==='women')
      flag1=true;
      else if(word==='shirt')
      flag2=true;
    }
    if(flag1&&flag2)
      res.push(cloth.color);
  }
  return res;
}

let res3a=fun3a(clothingStock);
log(res3a)


/*  3b - Console all the different colors available for men's shirts which are currently in stock. */

function fun3b(clothingStock){
  let res=[];
  for(let cloth of clothingStock){
    if(cloth.inStock)
    res.push(cloth.color);
  }
  return res;
}

let res3b=fun3b(clothingStock);
log(res3b)

/* Assignment 7: Write a javaScript function 
to protect email addresses. 
The part before ‘@’ should be clipped into
 half followed by 3 dots (...) 
 
Input: psakari123@gmail.com
Output: psaka...@gmail.com

 */

let Input="psakari123@gmail.com"
function findIndex(email){
  for(let i=0;i<email.length;i++)
  if(email[i]=='@')
  return i;
}
function clip(email){
  let res="";
  let indexOfchar=findIndex(email);
   res=email.slice(0,(indexOfchar+1)/2)+"..."+
          email.slice(indexOfchar);
          return res;
  ;
}

log(clip(Input))


/* Assignment 8: Given an input string S that
 contains multiple words, you need to remove 
 all the spaces present in the input string. 
 There can be multiple spaces present after
  any word’ */

  let str="     I am      a     Web    Developer   "
  log(str.trim().split(" ").join(""))


  /* 

  Assignment 9: Given an object obj, we have to
   invert its key and value for each entry.
    Inversion will result in value being used as
     key and key as value.

  let obj = { name: "Prakash", age: 111, hairColor: "black", likes: "food" };
Output: { '111': 'age', Prakash: 'name', black: 'hairColor', food: 'likes' }

 */

let obj2 = { name: "Prakash", age: 111, hairColor: "black", likes: "food" };

let objAns={};
for(let key in obj2){
  let val=obj2[key]
  objAns[val]=key;
}
log(objAns)


/* Assignment 10: Given an array of numbers, 
we have to find the number with the most frequency
 and return it. If there are two or more numbers 
 with the same most frequency then return the
  biggest number.
  
  
  Input: const numbers = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];

Output: 4
  */

const numbers10 = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];

function find10(number){
  let fre=new Map();
 let ans={largest:-10,fre:0}
 for(let num of numbers10){
   if(!fre.has(num))
   fre.set(num,1)
   else
   fre.set(num,fre.get(num)+1);
   let currfre=fre.get(num)
   if(currfre>ans.fre||
    (currfre===ans.fre&&num>ans.largest)
    ){
    ans.largest=num;
    ans.fre=currfre;
   }
 }
//  log(ans)
 return ans.largest;
}
log(find10(numbers10))
 
/* var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

age2=rl.question('What is your age?', (age)=>{
  log("Hello",age)
  rl.close();
}); */


/* find sum of even as well sum of odds */
const arr4=[1,2,3,4,5,6]


let res=arr4.reduce((acc,curr)=> curr%2==0?{...acc,even:acc.even+curr}:{...acc,odd:acc.odd+curr},{even:0,odd:0})


log(res)

/* out in single array */
const arr5=[1,2,3,4,[5,6,7],[8,[9]]]

function flat(arr){
  let res=[];
  for(let num of arr){
    if(typeof num==='object')
    res.push(...flat(num))
    else
    res.push(num)
  }
  return res;
}

log(flat(arr5))

/*  */