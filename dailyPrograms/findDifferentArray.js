// Function to find the difference of two arrays
function differenceOf2Arrays(array1, array2) {
    
    var temp = [];
  
    array1 = array1.toString().split(',').map(Number);
    
    \
    array2 = array2.toString().split(',').map(Number);
  
    // Iterate through each element in array1
    for (var i in array1) {
      // If the element is not found in array2, add it to the temp array
      if (array2.indexOf(array1[i]) === -1)
        temp.push(array1[i]);
    }
  
    
    for (i in array2) {
      // If the element is not found in array1, add it to the temp array
      if (array1.indexOf(array2[i]) === -1)
        temp.push(array2[i]);
    }
  
    
    return temp.sort((a, b) => a - b);
  }
  
 
  console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
  console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
  