const squareList = arr => {
    // Only change code below this line
    return arr.filter((user) => user>0 && Number.isInteger(user)).map((user)=> user**2);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
  console.log(squaredIntegers);