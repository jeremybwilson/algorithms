function printArrayWithOdds(array){
  let new_array = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 1){
      new_array.push(array[i]);
    }
  }
  // return the array with new values
  return new_array;
}

console.log(printArrayWithOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));