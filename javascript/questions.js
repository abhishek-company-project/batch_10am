
// var char="f";

// if(char=="a" || char=="A" || char=="e"){
//     console.log(char, "is a vowel")
// }
// else{
//     console.log(char,"is a consonant")
// }

// var a=10;
// var b=40;

// a>b ? console.log("a is greater than b") : console.log("b is greater than a")


// // switch(value){
// //     case :
// // }


// var angle1=65;
// var angle2=28;
// var angle3=90;


// if(angle1==angle2 && angle1==angle3){
//     console.log("this is a equria")
// }
// else if(angle1==angle2 || angle2==angle3 || angle1==angle3)



// var button="widhraw"

// var amount=1999;
// var deposit=800;
// var widhraw=1200;

// switch (button) {
//     case "check":
//         console.log("your total amount is",amount)
//         break;
//     case "deposit":
//         console.log(deposit,"deposit successfully")
//         amount+=deposit;
//         console.log("your total amount is",amount)
//         break;
//     case "widhraw":
//         console.log(widhraw,"deposit successfully")
//         amount-=widhraw;
//         console.log("your total amount is",amount)
//         break;

//     default:
//         console.log("click on right button")
//         break;
// }


// var num=4;
// for(var i=1;i<=10;i++){
//     // console.log(num,"*",i,"=",num*i)
//     console.log(`${num} * ${i} = ${num*i}`)
// }

// write a prgram to rpint the sum of digit
// var num=8909;
// var sum=0;
// if(num>10){
//     a=num%10;
//     sum+=a;
//     num=num/10;
// }



// write a program to print the sum of even number
//  and sum of odd number form 1 to 50

// var even=0;
// var odd=0;
// for(var i=1;i<=50;i++){
//     if(i%2==0){
//         even+=i;
//     }
//     else{
//         odd+=i;
//     }
// }
// console.log(even)
// console.log(odd)



// write a program to print the sum of digit

// var num=4231
// var sum=0;
// for(var i=0;i<4;i++){
//     var digit=num%10;
//     sum+=digit;
//     num=parseInt(num/10)
// }


// write a program to print the sum of every second digit in a number

// var num=3546234;
// var sum=0;
// for(var i=0;i<4;i++){
//     var digit=num%10;
//     sum+=digit;
//     num=parseInt(num/100)
// }



// var num="10"

// console.log(10+3)
// console.log(num+4)
// console.log(4+"10")
// console.log(4+10)
// console.log(num+"a")


// write a program to heck number is palidrom or not;

// var num=23423;  //"32432"
// var sum="";

// digit=num%10;
// sum+=digit


// pahel 3 ko nikale ge
// ek string variable ke andar rakhe ge
// 3 ko remove

// var num=121;
// var original=num;
// var reverse="";

// for(var i=0;i<3;i++){
//     var digit=num%10;
//     reverse+=digit;
//     num=parseInt(num/10);
// }

// console.log(reverse)

// if(original==parseInt(reverse)){
//     console.log("number is palindrom")
// }
// else{
//     console.log("numer is not palindrom")
// }



// write a program to check number is prime or not

// flag aproach

// var count=0;
// for (var j = 1; j <= 50; j++) {


//     var num = j;
//     var is_prime = true;

//     for (var i = 2; i < num; i++) {
//         if (num % i == 0) {
//             is_prime = false;
//             break;
//         }

//     }


//     if (is_prime == true) {
//         console.log(num, "is prime")
//         count++;
//     }
//     // else {
//     //     console.log(num, "is not prime")
//     // }
// }
// console.log("total prime number bt 1 t 100",count)







// var num=5;
// var pattern=""
// for(var i=0;i<num;i++){
//     for(var j=0;j<num-i-1;j++){
//             // console.log("-")
//             pattern+="  "
//     }
//     for(var k=0;k<=i;k++){
//         if(i==0 || i==num-1 ||k==0 || k==i){
//             pattern+="* "
//         } 
//         else{
//             pattern+="  "
//         }
//     }
//     pattern+="\n"
// }

// console.log(pattern)