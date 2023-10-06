const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    
    const failureItems = [];
    for(let i = 0; i<3;i++){
      const strg = `<li class="text-warning">${result.failure[i]}</li>`;
      failureItems.push(strg);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(makeList(result))