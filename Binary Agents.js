function binaryAgent(str) {
    let str1 = str.split(' ');
    let l = []
    for(let i in str1){
      let sum = 0;
      
      for(let j =str1[i].length-1,power = 0;j>=0 ;j--,power++){
        sum+=parseInt(str1[i][j])*Math.pow(2,power);
       
  
      }
      l.push(sum);
    }
    let stg = '';
    for(let i in l){
      stg+=String.fromCharCode(l[i])
    }
    return stg;
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));