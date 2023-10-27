function splitify(str) {
    // Only change code below this line
    let l =[];
    let strg = str.split(/\W/);
    for(let i =0;i<strg.length;i++){
      l.push(strg[i]);
    }
    return l;
  
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");
  console.log(splitify("Hello World,I-am code"))