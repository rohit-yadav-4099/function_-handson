
// Q1....

function hello(){
    console.log("hello PrepBytes")
    }
    hello();

// Q.2.....

function sum(a,b){
    return a+b;  
    }
    let c=sum(3,4);
    console.log(c)


// Q3......

display=(a,b)=>{
    return a+b;
    }
    var result=display(10,20)
    console.log(result)


// Q.4.....
var x = 21;
var girl = function () {
console.log(x);
var x = 20;
};
girl ();

// Q.5...... 

var x = 21;
girl ();
console.log(x)
function girl() {
console.log(x);
var x = 20;
};


// Q6.....
var x = 21;
a();
b();

function a() {
    
x = 20;
console.log(x);
};
function b() {
    
x = 40;
console.log(x);
};


// Q7.....

function fact(n){
    if (n<0){
        return -1;
    }
    else
    {
    let count=1;
    for(let i=1; i <= n; i++){
        
        count*=i
    }
    return count;
    }
    
    }
    var result=fact(5);
    console.log(result);
    



          // ********************************************************************************
            //      ***************    Day-2   ***************
           // ********************************************************************************      
                   
           
// Q.1......
   
function FindSum(a, b){
    return a + b;
    }

    function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
    }

    DisplayData("PrepBytes", FindSum(10, 9));


// Q.2.....
Abc();
const Abc = function(){
let value = 20;
console.log(value);
}

// Q.3........
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();
//Q.4
const greet =  function(name){
    return function(m){
   
    console.log(`Hi!! ${name}, ${m}`);
       }
    }  
    const greet_message = greet('EA19');
    greet_message("Welcome To PrepBytes")

