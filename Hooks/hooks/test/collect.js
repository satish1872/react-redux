const {log}=console


// const obj={
//   0:"val1",
//   1:"val2",
//   2:23,
//   3:[2,3,4]
// }

// const len=obj
// log(obj)

// var mp=new Map();
// mp.set(0,"val1");
// mp.set(1,"val2");
// mp.set(2,[1,2,3]);

//  const enque=(mp)=>{
//     mp.erase(0)

  
//  }

//  enque(mp);


//  //
//  const arr=[1,2,3,4,5,6,7]

//  const nthLargest= function(arr,n){
//    arr.sort
//  }

const input =[{name:'A',pay:200},{name:'B',pay:100},{name:'A',pay:400},{name:'B',pay:100},]
// output:[{name:'A',pay:600},{name:'B',pay:200}]

var mp=new Map();
let output=[];
for(let i=0;i<input.length;i++){
  let key=input[i].name;
  let val=input[i].pay;
  if(!mp.has(key)){
    mp.set(key,val);
  }
  else{
    let prevVal=mp.get(key);
    mp.set(key,prevVal+val)
  }
}


for(let i=0;i<input.length;i++){
  let key=input[i].name;
 
  if(mp.has(key)){
    let val=mp.get(key)
    output.push({name:key, pay:val})
    mp.delete(key);
  }
}

// mp.forEach({key,val})

log(output)





/* ------------ */

// log(a )
// let a=10

// log(a )
// var a=10

// var a
// log(a )
//  a=10


// const swap=function( a, b){
// [a,b]=[b,a]
// }



const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 10,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
    age: 30,
  },
];

const res=users.filter(ele=>ele.isActive)
const res2=res.sort((a,b)=>{
  return b.age-a.age;
});
let output1=[]
res2.forEach(ele=> output.push(ele.name))
log(output)

// context api and redux

res.sort()

/* https://www.w3resource.com/javascript-exercises/javascript-object-exercise-2.php */


/* https://www.w3resource.com/javascript-exercises/javascript-object-exercise-3.php */
  var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Object.size=function (student){
  len=0;
for(let index in student){
  len++;
}
return len;
}
console.log(Object.size(student));


/* w3resource.com/javascript-exercises/javascript-object-exercise-5.php */
function cylinder(height,dia){
  this.height=height;
  this.dia=dia;
}

cylinder.prototype.volume=function (){
  return 3.14*((this.dia/2.0)**2)*(this.height)
}

var cyl=new cylinder(7,4);
log("Cylinder volume is=",cyl.volume().toFixed(4))


/*  https://www.w3resource.com/javascript-exercises/javascript-object-exercise-10.php */

var library = [ 
  {
      title:  'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
  },
  {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
  }];

  const comparator=function(obj1,obj2){
    return obj1.libraryID-obj2.libraryID 
  }
log(library.sort(comparator));




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


const polling=async(time,pool)=>{

  let numberofcount=time*60/pool;
  let timer=new Date().getMinutes();
  let startTimer=timer;
  do{
    setInterval(async()=>{
      const res=await fetch(`https://jsonplaceholder.typicode.com/users
      `).then(val=>log(val))
     },pool*1000)
  }
  while(timer<=startTimer+time){
    timer=new Date().getMinutes();
  };
 }
 
 
 polling(1,2)