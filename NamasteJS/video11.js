function x()
{
    for(var i=1; i<=5; i++)    //use let instead of var while using setTimeouts
    {
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }

    console.log("namaste js");

}

x();