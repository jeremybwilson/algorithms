function printOdds1to255(){
  // let array = 0;
  // loop through all the values between 1 and 255
  for(let i = 0; i < 256; i++){
    if(i % 2 === 1){
      console.log(i);
    }
  }
  // return the array with new values
  // return array;
}

console.log(printOdds1to255());