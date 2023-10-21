function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs:2,
    eat: function(){
      console.log("eat the food");
    },
    describe: function(){
      console.log("mkg");
    }
  };