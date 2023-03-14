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





