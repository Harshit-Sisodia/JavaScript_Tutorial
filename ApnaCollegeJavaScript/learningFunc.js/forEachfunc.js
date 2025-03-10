let arr = [3,4,45,65,3,2,];

// arr.forEach ((num) => {
//     console.log(num*num);
// });

    // arr.map((val)=>{                  //use of map
    //     console.log(val**2);
    // })



let newarr = [2,4,5,6,74,4,22,3,57,27];

let even = newarr.filter((val)=>{
    return val%2==0;
})

console.log(even);

//using reduce method

let red = arr.reduce((val, res)=>{
    return (val + res)/arr.length;
})


console.log(red);


//finding the largest of the elements from the array

let largest = arr.reduce((prev, curr)=> {
    return prev > curr ? prev: curr;
})

console.log("The largest element is",largest);