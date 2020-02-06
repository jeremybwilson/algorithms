function printArrayValsSquared(array){
  let new_array = [];
  for(let i = 0; i < array .length; i++){
    // new_array.push(array[i] * array[i]);
    vals_squared = array[i] * array[i];
    new_array.push(vals_squared);
  }
  return new_array;
}

console.log(printArrayValsSquared([2,4,6,8,10,20]));