function addTogether() {
    let [a,b] = arguments;
    
   
      
    if(arguments.length===1&&typeof a == 'number'){
      return (b) => addTogether(a,b);
    }
    else if(typeof a== 'number'&&typeof b== 'number'){
      return a+b
    }
    else{
      return undefined;
    }
  
  
  }
  
  console.log(addTogether(5)(7));