function printSumOfOdds1to5000(){
  let sum = 0;
  for(let i = 0; i < 5001; i++){
    if(i % 2 === 1){
      sum += i;
    }
  }
  return sum;
}

console.log(printSumOfOdds1to5000());