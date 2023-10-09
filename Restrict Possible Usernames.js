let username = "JackOfAllTrades";
let userCheck = /[a-z]+\d{2,}$|^[A-Z]+[a-z]+\d*$/i; // Change this line
let result = userCheck.test(username);