// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of 
// the script.
var add=7;
var cash = () => {
  
  var random = 6;

  var rand1 = (x) => {
    random+=x;
  }

  var rand2 = (x) => {
    random=random*x;
  }
  
  rand1(add);
  rand2(add);

  return random;
};
console.log(cash());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
let count = 0;

const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

  counter = () => {
    return ++count;
  }

  return counter();
};
// Example usage: const myCounter = counterMaker();
const myCounter = () => counterMaker();
// myCounter(); // 1
// myCounter(); // 2
console.log(myCounter());
console.log(myCounter());

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
let count2 = 0;

const counterMaker2 = () => {
  const limit=5;
  counter = () => {
    if(count2>=limit){
      count2=0;
      return count2;
    } else {
      return ++count2;
    }
  }

  return counter();
};

const myCounter2 = () => counterMaker2();

console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counterVar = 20;
  
  return {
    increment: ++counterVar,
    decrement: --counterVar,
  };
};

console.log(counterFactory());