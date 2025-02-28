let arr = ["ironman", "spiderman", "superman"];
let arr2 = [2,4,5,7,4];

console.log(arr);
// console.log(arr2);
console.log(typeof(arr));

//use of for loop in arrays
for(let i=0; i<arr.length;i++)
{
    console.log(arr[i]);
}

//use of for of loop
for (let el of arr)   //here el is the element
{
    console.log(el);
}

let a= [34,5,34,23,54,65];
let sum =0;
let avg;

// for(let i=0; i< a.length; i++)
// {
//     sum = sum + a[i];
// }
// avg = sum/a.length;

// console.log("the average = "+ avg);

// changing the values of the elements of the array by 30% off
// console.log(a);
// let rev;
// for(let i =0 ; i<a.length; i++)
// {
//     a[i] = a[i]- ((a[i]*30)/100);
// }
// console.log(a);

let fooditems =["banana", "papaya","mango","apple"];
let ano = ["we","are","one"];

fooditems.splice(1,2,"orange","scbd");
console.log(fooditems);

// fooditems = fooditems.concat(ano);
// console.log(fooditems);
// // fooditems.pop();
// let deleted= fooditems.pop();
// console.log(fooditems);  //after the deletion
// console.log("the deleted item: " +deleted);
