function printSumOfEvens1to1000(){
  let sum = 0;
  for(let i = 0; i < 1001; i++){
    if(i % 2 === 0){
      sum += i;
    }
  }
  return sum;
}

console.log(printSumOfEvens1to1000());