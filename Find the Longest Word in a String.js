function findLongestWordLength(str) {
    let nstr = str.split(' ')
    let size = 0;
    for(let i =0 ;i<nstr.length;i++){
      if(nstr[i].length>size){
        size = nstr[i].length;
      }
    }
    return size;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));