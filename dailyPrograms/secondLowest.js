// Define a function named Second_Greatest_Lowest that finds the second smallest and second largest numbers in an array
function Second_Greatest_Lowest(arr_num) {
    // Sort the array in ascending order 
    arr_num.sort(function(x, y) {
      return x - y;
    });
  
    
    var uniqa = [arr_num[0]];
    
    var uniq ;
    
    var result = [];
  
    for (var j = 1; j < arr_num.length; j++) {
      if (arr_num[j - 1] !== arr_num[j]) {
        uniqa.push(arr_num[j]);
      }
    }
  
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
  
    return result.join(',');
  }
  
  console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5])); 
  