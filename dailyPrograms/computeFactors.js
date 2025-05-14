
function factors(n) {
  
  var num_factors = [], i;

  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
    // Check if i is a factor of n
    if (n % i === 0) {
      num_factors.push(i);

      if (n / i !== i)
        // Push n divided by i to the factors array
        num_factors.push(n / i);
    }
  }

  num_factors.sort(function(x, y) {
    return x - y;
  });

  // Return the sorted array of factors
  return num_factors;
}

console.log(factors(15));  // [1,3,5,15] 

console.log(factors(16));  // [1,2,4,8,16] 

console.log(factors(17));  // [1,17] 
