function shiftArrayValues(array){
  // set the temp var to the 1st value of the array (array[0])
  let temp = array[0];
  // for(let i = 0; i < array.length; i++){
  // }
  // assign our current position to the next position
  array[0] = array[array.length - 1];
  // now switch (reset) the value of array[0]
  array[array.length - 1] = temp;
  return array;
}

console.log(shiftArrayValues([9, 5, 6, 7, 8, 4]));