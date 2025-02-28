
// function printer(num)
// {
//     let n1 = num*num;
//     return n1;
// }

// let  n = 3;
// let print = printer(n);

// console.log("currently we are in",print);
// function sum(x,y)
// {
//     // console.log(x+y);
//     return (x+y);
// }
// let a=3, b=4;
// let add= sum(a,b);
// console.log(`the sum of ${a} and ${b} is`,add);

let x=4, y=8;
let sum = (a,b) => {

    return a+b;
}

let sumVal = sum(x,y);
console.log("the value of sum is",sumVal);