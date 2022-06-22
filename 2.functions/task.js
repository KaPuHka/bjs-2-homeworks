// Задание 1
function getArrayParams(arr) {

  let min, max, sum, avg;

  if (arr.length > 0){
    min = arr[0];
    max = arr[0];
    sum = 0;
    for( let j=0; j<arr.length; j++){
        min = Math.min(min, arr[j]);
        max = Math.max(max, arr[j]);
        sum += arr[j];
    }
    avg = parseFloat((sum/arr.length).toFixed(2));
  }

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  if (arr.length > 0){
    
    sum = 0;
    for( let j=0; j<arr.length; j++){
        sum += arr[j];
    }
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for(let j=0; j<arrOfArr.length; j++) {
    max = Math.max(max, func(arrOfArr[j]));
  }
  
  return max;
}

// Задание 3
function worker2(arr) {

  let param = this.getArrayParams(arr);

  return param.max - param.min;
}
