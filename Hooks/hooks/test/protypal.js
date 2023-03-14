const {log}=console;

/* 
let arr=[1,2,3]

const obj={
  name:"Prakash",
  age:100,
  getName:()=>{
    log("name is ",obj.name);
  }
}

// never do this
// obj.__proto__

const obj2={
  name:"Prakash",
}

// obj2.__proto__=obj; 
*/

async function getUserData(){
	console.log("Inside get user data");
    let response1 = await     fetch('https://jsonplaceholder.typicode.com/users');
    let response2 = await fetch('https://jsonplaceholder.typicode.com/users');
    let response3 = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("After all promise is executed");
}
console.log("Before get user data");
getUserData();
console.log("After get user data");

/* 
op
  1. Before get user data
    2. Inside get user data
    3. After get user data
    4. After all promise is executed

*/

/*  Write a function to memoize 
filter function in js 
if same aray is passed then o/p should be same
for given callback
 -------DONT KNOW--------
*/


let arr=[1,2,3,4,5,6,7,8,9,10]
callbackfun=function(ele){
  return ele>=5;
}

let res=arr.filter((ele)=>{
  return ele>=5
});

log(res)

Array.prototype.memoizeFilter=(callbackfun)=>{
  const mp=new Map();
  for(let i=0;i<this.length;i++){
    let ele=this[i];
    if(!mp.has(ele+callbackfun)){
      mp.set(ele+callbackfun,callbackfun(ele))
    }
    return mp.get(ele+callbackfun);
  }
}

let res2=arr.memoizeFilter(callbackfun);
// log(res2);


