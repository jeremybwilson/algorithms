function printSumEvenNumbers(array){
  let new_array = [];
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      sum += array[i];
    }
  }
  return sum;
}
console.log(`The sum of the even numbers is:`, printSumEvenNumbers([1,2,3,4,5,6,7,8,9,10]));


// sum all the even numbers between 0 and 1000
function get_sum_even_numbers(){
  var sum = 0;
  for(var index = 0; index < 1001; index += 1){
    // determine if index value is even
    if(index % 2 === 0){
      sum += index;
    }
  }
  // return the sum
  return sum;
}
// get_sum_even_numbers();

function printSumAllEvenNums(){
  let sum = 0;
  for(let i = 1; i < 1001; i++){
    if(i % 2 === 0){
      sum += i;
    }
  }
  // return sum
  return sum;
}
console.log(printSumAllEvenNums());