// Functions

// console.log(myfun(1,1));
// function myfun(num1,num2){
//     return num1-num2
// }
// function myfun(num1,num2){
//     return num1+num2
// }   


// function myfun(num1,num2){
//     return num1-num2
// }
// function myfun(num1,num2){
//     return num1+num2
// }
// console.log(myfun(1,1));



// function myfun(num1,num2){
//     return num1+num2
// }
// function myfun(num1,num2){
//     return num1-num2
// }
// console.log(myfun(1,1));


// switch operator
let num1=10;
let num2=20;
let op="+"
switch (op) {
    case '+':
        console.log(num1+num2)
        break;
    case '-':
        console.log(num1-num2)
        break
    default:
        console.log("invalid operator")
            
        break;
}


// Types of functions

// 1.function declaration
function myfun(num1,num2){
    return num1-num2

}
console.log(myfun(6,4))

//2. function expression
// const fun=function(num1,num2){
//     return num1+num2
// }
// console.log(fun(3,3));


// 3. Arrow function
// const fun=(num1,num2)=>{
//     return num1+num2
// }
// console.log(fun(2,2));


// 4.anynomus function
// const fun=(num1,num2)=>num1+num2
// console.log(fun(1,1));