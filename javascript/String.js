
// what is string 
//* What is a String?

//? A string is a sequence of characters (letters, numbers, symbols, spaces) enclosed in quotes.

// How to Create a String

// You can create strings using:

// Single quotes ' '

// Double quotes " "

// Backticks ` ` (template literals)



// var name="Naman"

// // length 
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt(0)) // starting
// console.log(name.charAt(name.length-1)) // last index character
// console.log(name.charAt(parseInt(name.length/2))) // mid

// var name="Naman sharma"


// for(var i=0;i<name.length;i++){
//     console.log(name.charAt(i))
// }

// console.log(name.charAt(0))
// console.log(name.charAt(1))
// console.log(name.charAt(2))
// console.log(name.charAt(3))
// console.log(name.charAt(4))


// var intro="my name is abhishek. i am from indore";

// // get one by  one character
// var count=0;
// for(var i=0;i<intro.length;i++){
//     if(intro.charAt(i)=="a"){
//         count++;
//     }
// }

// console.log(count)







// var name="           abhishek"
// var surname="gUrJar"
// // var full_name=name+surname
// var num="6786"

// // var full_name=name.concate(surname)

// console.log(name)
// console.log(name.trim())
// console.log(num.padStart(10,"Y"))
// console.log(num.padEnd(10,"Y"))
// console.log(num.repeat(5))
// console.log(name.replace("h","Z"))
// console.log(name.replaceAll("h","Z"))

// console.log(name.charAt(2))
// console.log(name.at(2))
// console.log(name.charCodeAt(2))
// console.log(name[2])

// console.log(name.slice(2,5)) // starting index , end index
// console.log(name.substring(2,5)) // starting index , end index
// console.log(name.substr(2,5)) // starting index , how many character

// console.log(name.toUpperCase())
// console.log(surname.toLowerCase())


// write a progam to change lower case to upper case and upper case to lower case 

// var str = "My NamE IS AbHIshEK";

// //output:-  mY nAMe is aBhiSHek
// var newstr = "";

// for (var i = 0; i < str.length; i++) {
//     var char = str[i];
//     if (str.charCodeAt(i) >= "65" && str.charCodeAt(i) <= "90") {
//         newstr += char.toLowerCase();
//     }
//     else if (str.charCodeAt(i) >= "97" && str.charCodeAt(i) <= "122") {
//         newstr += char.toUpperCase();
//     }
//     else{
//         newstr += char;
//     }
// }

// console.log(newstr)



// write a prgram to check how mnay digit are digiviable by 2;
var num = "2345897892045";


// get one by one character
// convert every character into digit
// check it is divible by 2 or not
// if divisible inrec the count 
// var count = 0

// for (var i = 0; i < num.length; i++) {
//     var digit = parseInt(num.charAt(i))
    
//     if (digit % 2 == 0 && digit != 0) {
//         count++;
//     }
// }
// console.log(count)


// whole string convert into number
// get one by one digit
// check it is divible by 2 or not
// if divisible inrec the count

// var new_number=parseInt(num);
// var new_number=2345897892045;
// var count=0;
// while(new_number>0){
//     var digit=new_number%10;
//     if(digit%2==0 && digit!=0){
//         count++;
//     }
//     new_number=parseInt(new_number/10)
// }

// console.log(count)



// write a program to reverse a string

// var str="neelam"
// var reverse="";

// for(var i=0;i<str.length;i++){
//     reverse=str.charAt(i)+reverse
// }
// // for(var i=str.length-1;i>=0;i--){
// //     reverse+=str.charAt(i);
// // }
// console.log(reverse)


// write a program to check number is palidrom or not

// naman





// write a program to find the duplicate character in a string

// var str="zbhishek gurjar";
// var repeat="";
// var non_repeat=""
// // output : ahr

// for(var i=0;i<str.length;i++){
//     var char=str.charAt(i);
//     var exist=false;
//     for(var j=0;j<non_repeat.length;j++){
//         if(char==non_repeat.charAt(j)){
//             exist=true;
//         }
//     }
//     if(exist==true){
//         repeat+=char;
//     }
//     else{
//         non_repeat+=char
//     }
// }

// console.log(repeat)
// console.log(non_repeat)
// console.log(str)


//? Find Longest Word in a Sentence Return the longest word without splitting the string.
// var str="my name is abhishek gurjar."


//? Compress a String (Basic Encoding)Example: "aaabbc" → "a3b2c1"


// var str="hshsyhhsiii"
// output: h4s3y1i3

//? Count Frequency of Each Character (Print Output)Print character frequencies without storing them in arrays or maps.


// var number=[145,75,'abhishek',102,true,false,85,"6",5]

// // console.log(number.length)
// // console.log(number[0])
// // number[3]=1;

// // for(var i=0;i<number.length;i++){
// //     console.log(number[i])
// // }
// console.log(number)
// console.log(number.toString())



// var names=["abhi","jay","ram","aman","riya","suhani"]

// for(var i=0;i<names.length;i++){
//     console.log(names[i].charAt(parseInt(names[i].length/2)))
// }


// var names=["abhishek gurjar" ,"naman rajput" ,"jay singh" ,"aman chhalotre"];

// // output: AG
//         // NR 
//         // JS 
//         // AC 
//         names.pop();
//         names.push("123")
//         console.log(names)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0);
// console.log(fruits)

// const fruits = ["Banana", "Orange","Lemon", "Apple", "Mango"];
// fruits.splice(3, 1,  "Kiwi");

// const fruits = ["ABanana", "Orange", "AApple", "Mango"];

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits)







var number=[74,7,8,15,4,5,41,9,6,10,4]
