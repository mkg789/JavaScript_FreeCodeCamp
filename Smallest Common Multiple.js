function smallestCommons(arr) {
    let [a,b]=arr.sort((a,b)=>a-b);
    let max = 1;
    let l =[]
    for(let i = a;i<=b;i++){
      max*=i;
      l.push(i);
    }
    for(let j = 1;j<=max;j++){
      let count =0;
      for(let i = a;i<=b;i++){
        if(j%i==0){
          count++;
        }
  
      }
      if(count==l.length){
        return j;
      }
    }
    
  }
  
  console.log(smallestCommons([2, 10]));