// Define a function named right_three with parameter str
function right_three(str) {
    // Check if the length of the string is greater than 1
    if (str.length > 1) {
        // Return the last three characters concatenated with the substring excluding the last three characters
        return str.slice(-3) + str.slice(0, -3);
    }
    // Return the string as is if its length is not greater than 1
    return str;
}

// Call the function with sample arguments and log the results to the console
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi")); 
