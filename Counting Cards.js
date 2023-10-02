let count = 0;

function cc(card) {
  // Only change code below this line
  if (card>=0 && card<=6){
    count+=1;
  }
  else if (card>=7 && card<=9){
    count+=0;
  }else{
    count-=1;
  }

  if (count>0){
    return count.toString()+" Bet";
  }
  else{
    return count.toString()+" Hold";
  }
  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');