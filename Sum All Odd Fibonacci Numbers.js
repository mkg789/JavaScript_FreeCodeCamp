function sumFibs(num) {
    let sum = 1;
    let fib = 0;
    let in1 = 0;
    let in2 = 1;
    
    while(fib<num){
   
      
      let temp = in1+in2;
      in1=in2;
      in2=temp;
      fib=temp;
      if(fib>num){
        break;
      }
      if(fib%2!==0){
        sum+=fib;
      }
    }
    return sum;
  }
  
  console.log(sumFibs(1000));
  