linear = () => {
  let item = 5;
  let string = [6,18,99,2,4,7,44,33,5,9,32,11,2,0]

  for (i=0; i<string.length; i++) {
    if (string[i] === item) {
      return(console.log('position', i));
    }
  }
}

linear();
