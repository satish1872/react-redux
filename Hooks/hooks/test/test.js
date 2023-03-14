const {log}=console;


/* function func1(){ 
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },3000);

  var x = 2;
  let y = 12;
}

func1(); */

/* function func2(){
  for(var i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
}
}

func2(); */
/* 
(function(){
  setTimeout(()=> log(1),2000);
  log(2);
  setTimeout(()=> log(3),0);
  log(4);
})();

// 2 4 3 1 

 */

/* 
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}
sayHi();
// undefined , ref error

 */

/* for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// wrong : 3 3 3 3        3 3 3 3
// correct: 3 3 3 and 0 1 2
 */


/* const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

// 20 , NAN

 */

/* let l1=+true;
let l2=!'Lydia';

log(++l1,l2)
// 2   false

 */

/* 
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

// Hello ->shallow copy


 */

/* 
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); // true
console.log(a === b); // fasle
console.log(b === c); //fasle
 */
