function print1to255(){
  for(var i = 1; i < 256; i++){
    console.log(i);
  }
};
// print1to255();
console.log(print1to255());

function print1to255() {
  // set arr as empty array
  let arr = [];
  // iterate through fixed values 1 to 255
  for(let i = 1; i < 256; i += 1) {
    // for each loop, push the value of i
    arr.push(i);
  }
  // return the array
  return arr;
}
// print1to255();
// console.log(print1to255());

const print1To255 = () => {
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
console.log(print1To255());

// ES6 version
const print1To255ES6 = () => {
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
console.log(print1To255ES6());