function myReplace(str, before, after) {
    let l= "";
    if(!(Boolean(before[0]===before[0].toUpperCase())===(Boolean(after[0]===after[0].toUpperCase())))) {
      if(before[0]!==before[0].toUpperCase()){
        l = after[0].toLowerCase() + after.slice(1);
      }
      else{
        l = after[0].toUpperCase() + after.slice(1);
      }
    }
    else{
      l = after;
    }
    let str1 = str.replace(before, l);
  
    return str1;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  console.log(myReplace("Let us go to the store", "store", "mall"));