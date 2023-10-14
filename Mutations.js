function mutation(arr) {
    let bool;
    let firstword = arr[0].toLowerCase();
    let secondword = arr[1].toLowerCase().split('');
    for(let i = 0;i<secondword.length;i++){
      if(firstword.indexOf(secondword[i])==-1){
        bool = false;
        return bool;
      }
      else{
        bool = true;
      }
    }
    return bool;
  }
  
  mutation(["hello", "hey"]);