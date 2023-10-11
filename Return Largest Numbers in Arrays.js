function largestOfFour(arr) {
    let ak = []; 
    for(let i=0;i<arr.length;i++){
      let sum = -100;
      for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]>sum){
          sum = arr[i][j];
        }
      }
      ak.push(sum);
    }
    console.log(ak)
    return ak;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);