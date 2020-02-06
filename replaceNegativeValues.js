function replaceNegativeValuesWithZero(array){
  // declare an empty placeholder holder
  let new_array = [];
  // iterate through the values in the provided array
  for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
      array[i] = 0;
      new_array.push(array[i]);
    } else {
      new_array.push(array[i]);
    }
  }
  return new_array;
}

console.log(replaceNegativeValuesWithZero([-1, 2, 4, 6, -4, 5, -10, 12, -12]));