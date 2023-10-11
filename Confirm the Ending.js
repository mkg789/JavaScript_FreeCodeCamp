function confirmEnding(str, target) {
    const ex = new RegExp(target+'$');
    return ex.test(str);
  }
  
  confirmEnding("Bastian", "n");