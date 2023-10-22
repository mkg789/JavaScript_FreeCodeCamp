function sumAll(arr) {
    let max = 0;
    let min = 0;
    if(arr[0]>arr[1]){
      max = arr[0];
      min = arr[1];
    }
    else{
      max = arr[1];
      min = arr[0];
    }
    let sum = 0;
    for(let i = min;i<=max;i++){
      sum+=i
    }
    return sum;
  }
  
  sumAll([1, 4]);