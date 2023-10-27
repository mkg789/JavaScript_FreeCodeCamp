const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let i = [...arr]
  return i.sort(function(a,b){
    return a-b
  });
  // Only change code above this line
}

nonMutatingSort(globalArray);
console.log(nonMutatingSort([1, 30, 4, 21, 100000]))