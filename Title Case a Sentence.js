function titleCase(str) {
    str = str.toLowerCase();
    let spl=str.split(' ');
    let finalstr = '';
    for(let i=0;i<spl.length;i++){
      let cap = spl[i];
      finalstr += cap[0].toUpperCase()+cap.slice(1,)+' ';
    }
    console.log(finalstr);
    return finalstr.trim();
  }
  
  titleCase("I'm a little tea pot");