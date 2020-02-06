
function printSum1to255() {
  // declare sum var
  let sum = 0;
  for(let i = 1; i < 256; i++){
    sum += i;
  }
  return sum;
}

console.log(printSum1to255());

const printSum1To255_es6 = () => {
  // declare sum var
  let sum = 0;
  for(i = 1; i < 256; i++){
    // add to the sum the next value through each iteration
    sum += i;
    // console.log(sum);
  }
  return sum;
}

console.log(printSum1To255_es6());

// using an array
function print1to255Array() {
  // set arr as empty array
  var arr = [];
  // iterate through fixed values 1 to 255
  for(var index = 1; index < 256; index += 1) {
    // for each loop, push the value of i
    arr.push(index);
  }
  // return the array
  return arr;
}

// console.log(print1to255Array());


// using an array, pushing to a new array
function print1To255NewArray(){
  // create empty array variable
  let newArray = [];
  // loop through the numbers, 1 to 255
  for(var i = 1; i < 256; i++){
    // push the value of i to the new array 
    newArray.push(i);
  }
  // return new array
  return newArray;
}
console.log(print1To255NewArray());

// ES6 version
var print1To255NewArrayES6 = () => {
  // create empty array variable
  let newArray = [];
  // loop through the numbers, 1 to 255
  for(let i = 1; i < 256; i++){
    // push the value of i to the new array 
    newArray.push(i);
  }
  // return new array
  return newArray;  
}
console.log(print1To255NewArrayES6());