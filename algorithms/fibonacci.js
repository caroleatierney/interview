values = 0;
evenArray = []
fibArray = [0,1]
sumEven=0

fiba = () => {
  for (i=2; values<4000000; i++) {
    values = fibArray[i-1] + fibArray[i-2]
    fibArray.push(values)

    // console.log('values', values, 'fib array', fibArray[i-1], fibArray[i-2]);

    if (values % 2 === 0) {
      // console.log('Even Value', values)
      evenArray.push(values)
      sumEven += values
    }

  }

  console.log('fib array', fibArray);
  console.log('even array', evenArray);
  return(console.log('Sum of Even Numbers', sumEven));
}

fiba();
