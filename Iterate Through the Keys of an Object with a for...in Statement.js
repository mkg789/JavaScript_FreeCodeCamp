const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let count =0;
    for(const i in allUsers){
      if(allUsers[i]['online']===true){
        count+=1;
      }
    }
    return count;
    // Only change code above this line
  }
  
  console.log(countOnline(users));