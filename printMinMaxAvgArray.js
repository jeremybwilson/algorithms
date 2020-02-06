
function findAverage(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  let average = sum / array.length;
  console.log(average);
  return average;
}

// console.log(findAverage([2,4,6,8,10,20]));

function findMaxValue(array){
  let max = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}

// console.log(findMaxValue([2,4,6,8,10,20]));


function findMinValue(array){
  let min = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
    }
  }
  return min;
}

// console.log(findMinValue([2,4,6,8,10,20]));

function findMinMaxAvg(array){
  let min = array[0];
  let max = array[0];
  let sum = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
    }
    if(array[i] > max){
      max = array[i];
    }
    sum += array[i];
  }
  let avg = sum / array.length;
  let new_array = [min, max, avg];
  return new_array;
}

console.log(findMinMaxAvg([2,4,6,8,10,20]));