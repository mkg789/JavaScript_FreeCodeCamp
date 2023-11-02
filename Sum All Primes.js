function isPrime(num){
    let i, flag=true;
    for(i=2;i<num-1;i++){
      if(num%i==0){
        flag = false;
        break;
      }
    }
    return flag
  }
  function sumPrimes(num) {
    let sum =1;
    for(let i=0;i<=num;i++){
      if((isPrime(i))&&i%2!==0){
        sum+=i;
      }
    }
    return sum
  }
  console.log(sumPrimes(977));