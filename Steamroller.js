function steamrollArray(arr) {
    let l = []
    for(let i in arr){
      if(!Array.isArray(arr[i])){
        l.push(arr[i]);
      }else{   
        l.push(...steamrollArray(arr[i]));
        }    
      }
    return l;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));