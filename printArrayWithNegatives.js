function printArrayWithNegatives(array){
  // set an empty array to push new values into
  let negatives = [];
  // loop through array values
  for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
      negatives.push(array[i]);
    }
  }
  // return new array of negative values
  return negatives;
}

console.log(printArrayWithNegatives([-1, 4, 6, 10, -5, -25, 11, 12, -20, -8]));