const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes==1){
    return names[0];
  } else if (par-strokes >= 2) {
    return names[1];
  } else if (par-strokes == 1) {
    return names[2];
  } else if(par==strokes){
    return names[3];
  }else if (par-strokes == -1) {
    return names[4];
  } else if (par-strokes == -2) {
    return names[5];
  } else{
    return names[6];
  }

  
  // Only change code above this line
}

golfScore(5, 4);