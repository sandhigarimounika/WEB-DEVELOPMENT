// generatig 5 numbers using for loop

for (var i=0; i<5; i++){
    console.log(i)
}


// print a number is prime or not

 var num =125
 var fc=0
for (var i=2; i<num; i++){
    if (num%i==0){
        fc++
    }
}if (fc==0){
    console.log(num+" is a prime number")
}else{
    console.log(num+" is not a prime number")
}


// another method
function is_prime(p){
    fc=0
    for(i=2; i<Math.sqrt(p)+1;i++){
        if (p%i==0){
            return false
        }
    }return true

    }

var p=125
if(is_prime(p)){
    console.log(p+" is a prime")
}else{
    console.log(p+" is not a prime")
}

// print given number is palindrome or not

var pal=121
var rev=0
var t=pal
while(t>0){
    r=t%10
    rev=rev*10+r
    t=Math.floor(t/10)

}if (rev==pal){
    console.log(pal+" is a palindrome")
}else{
    console.log(pal+" is not a palindrome")
}