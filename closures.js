function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    y();
}
var z = x();



// corner cases
// expecting 1, 2, 3, 4, 5 as ouput (1 after 1second, 2 after 2seconds....)


//output : 6 will be printed 6 times, because i value will be updated to 6 in the memory and will be used.
function closures(){
    for(i=1; i<=5; i++){
        setTimeout(()=> {
            console.log(i)
        }, i*1000)
    }
}
//closures();

// fix : using let can fix this because every time loop runs fresh i value will be created in the memory.
function closures2(){
    for (let i =1; i<=5; i++){
        setTimeout(()=> {
            console.log(i)
        }, i * 1000)
    }
}
closures2();





function c(){
    for(var i=1; i<=5; i++){
        function d(x){
            setTimeout(() => {
                console.log(x)
            }, x * 1000)
        }
        d(i)
    }
}

// c();