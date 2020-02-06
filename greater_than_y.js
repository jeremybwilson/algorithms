// given an array and a value of Y, count and print each number of the array values greater than Y
function greaterThanY(array, Y){
  let count = 0;
  let new_array = [];
  for(let i = 0; i < array.length; i++){
    // check to see if the individual values are greater than Y
    if(array[i] > Y){
      new_array.push(array[i]);
      count++;
    }
  }
  results = [new_array, count];
  return results;
}

console.log(greaterThanY([3, 4, 5, 6, 7, 8, 10, 12, 15, 20], 8));

// Given an array and a value of Y, count and print...
// ...the number of array values greater than Y
function greaterThanY2(arr, Y){
  // set the counter to 0
  var count = 0;
  // loop through the entire array
  for(var i = 0; i < arr.length; i++){
    // check to see if the individual value...
    // ...of the array is larger than y
    if(arr[i] > Y){
      count++
    }
  }
  // return the count
  return count;
  // print the count
  // console.log(count);
}
var arrayVals1 = [1,3,5,7,10,12,14];
// console.log(greaterThanY2(arrayVals1, 4));


function greaterThanY3(array, Y){
  let count = 0;
  // loop through the entire array;
  for(var i = 0; i < array.length; i ++){
    // check to see if the individual value...
    // ...of the array is larger than y
    if(array[i] > Y){
      // console.log(array[i])
      count++;
    }
  }
  return count;
}
let arrayVals2 = [1,3,5,7,10,12];
console.log(greaterThanY3(arrayVals2, 4));


// print to new array, array values greater than Y
const greaterThanY4 = (array, Y) => {
  // set empty array variable to hold new array
  let newArray = [];
  // iterate through the array values
  for(var i = 0; i < array.length; i++){
    if(array[i] > Y){
      // push the array values into the new array
      newArray.push(array[i]);
    }
  }
  // return the new array;  
  return newArray;
}
console.log(greaterThanY4([1,3,5,7], 2));
console.log(greaterThanY4([1,3,5,7,10,12], 4));