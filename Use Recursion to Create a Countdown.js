// Only change code below this line
function countdown(n, newArr=[]) {
    if (n <= 0) {
        return newArr;
    }
    newArr.push(n);
    return countdown(n - 1, newArr)
}
// Only change code above this line