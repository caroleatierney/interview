
// =================================
// ======== Duplicate array ========
// =================================
var duplicateNumbers = [8,24,20,5,13,3,1,12,11,24,8,24,20,4,5,23,24,23,21,2,19,3,21,2,14,17,21,5,7,10,20,11,0,5,18,2,13,11,14,3,20,1,23,6,21,10,14,0,15,20];

dupNumbers = () => {
  let changed=true;
  let dupArray=[];
  let dup=null;

  while (changed===true) {
    let bigger= 0;
    changed=false;

    // use a bubble sort to order the array
    // continue looping through the array until no more sorting needs to be done
    for (var i = 0; i < duplicateNumbers.length; i++) {
      if (duplicateNumbers[i] > duplicateNumbers[i+1]) {
        bigger=duplicateNumbers[i];
        duplicateNumbers[i]=duplicateNumbers[i+1];
        duplicateNumbers[i+1]=bigger;
        changed=true
      }
    }
  }

  // loop through sorted array and write to a new array for each duplicate number
  for (var i = 0; i < duplicateNumbers.length; i++) {
    if (duplicateNumbers[i] === duplicateNumbers[i+1]) {
      if (duplicateNumbers[i+1]!=dup) {
        dup=duplicateNumbers[i];
        dupArray.push(duplicateNumbers[i])
      }
    }
  }
  console.log("dupArray", dupArray);
  console.log("duplicateNumbers",duplicateNumbers);
}

dupNumbers();
