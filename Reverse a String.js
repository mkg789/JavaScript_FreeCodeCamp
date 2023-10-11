function reverseString(str) {
    let mkg = '';
    for(let i=str.length-1;i>=0;i--){
      mkg+=str[i];
    }
    return mkg;
  }
  
  reverseString("hello");