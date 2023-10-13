function frankenSplice(arr1, arr2, n) {
    let k = n;
    let arr = [...arr2];
    for(let i=0;i<arr1.length;i++){
      arr.splice(k,0,arr1[i]);
      k++;
    }
    return arr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);