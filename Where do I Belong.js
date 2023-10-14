function getIndexToIns(arr, num) {

    for(let i=0;i<arr.length;i++){
      if(i+1<arr.length && arr[i]>arr[i+1] ){
        return 2;
      }
      if(arr[i]>=num){
        return i;
      }
    }
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);