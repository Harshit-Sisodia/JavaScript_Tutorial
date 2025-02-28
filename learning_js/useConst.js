

const PI = 3.1415;

let radius;
let circumference;

// radius = Number(radius);



document.getElementById("mySubmit").onclick = function(){
    radius= document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myCir").textContent = circumference;

}


