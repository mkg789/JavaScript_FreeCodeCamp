function uniteUnique(...arr) {
    let nel = [];
    for(let i in arr){
      for(let j in arr[i]){
        if(!nel.includes(arr[i][j])){
          nel.push(arr[i][j])
        }
      }
    }
    return nel;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));