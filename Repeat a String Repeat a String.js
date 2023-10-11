function repeatStringNumTimes(str, num) {
    let rep = '';
    for(let i = 0;i<num;i++){
      rep+=str;
    }
    return rep;
  }
  
  repeatStringNumTimes("abc", 3);