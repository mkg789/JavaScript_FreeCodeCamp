function translatePigLatin(str) {
    let i=0;
    let bool = true;
    let fir = [];
    let las = [];
    while(bool&(i<str.length)){
      if(str[i]!=='a'&&str[i]!=='e'&&str[i]!=='i'&&str[i]!=='o'&&str[i]!=='u'){
        las.push(str[i]);
      }
      else{
        fir.push(str.slice(i,str.length));
        bool = false;
      }
      i++
    }
    if(las.length===0){
      las.push('way');
    }
    else{
      las.push('ay')
    }
    return fir.concat(las).join('');
  }
  
  translatePigLatin("consonant");
  console.log(translatePigLatin("consonant"));