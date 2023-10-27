function destroyer(arr,...arg) {
  
    return arr.filter((users)=> !arg.includes(users));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));