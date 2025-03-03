let arr = [3,4];

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