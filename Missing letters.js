function fearNotLetter(str) {
    for(let i=str.length-1;i>0;i--){
      if((str[i].charCodeAt(0)-str[i-1].charCodeAt(0))===2){
        return String.fromCharCode(str[i].charCodeAt(0)-1);
      }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));