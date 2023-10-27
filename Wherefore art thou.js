function whatIsInAName(collection, source) {
    let c = []
    for(let i = 0; i<collection.length;i++){
      let bool = false;
      for(const sc in source){
        if(collection[i][sc]!== source[sc]){
          bool = true
        }
      }
      if(!bool){
        c.push(collection[i]);
      }
    }
    return c;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });