function bouncer(arr) {
    return arr.filter(elem => Boolean(elem));
  }
  console.log(bouncer([7, "ate", "", false, 9]))
  bouncer([7, "ate", "", false, 9]);