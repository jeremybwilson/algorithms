function squareNegativeValues(array){
  // declare an empty placeholder holder
  let new_array = [];
  // iterate through the values in the provided array
  for(let i = 0; i < array.length; i++){
    // determine which array values are negative
    if(array[i] < 0){
      // square the value and push it to the new array
      new_array.push(array[i] * array[i]);
    }
  }
  return new_array;
}

console.log(squareNegativeValues([-1, 2, 4, 6, -4, 5, -10, 12, -12]));