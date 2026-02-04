
// // non-pramatrize function
// function abc(){
//     if(10>4){
//         console.log("hello")
//     }
//     else{
//         console.log("bye")
//     }
// }

// // pramatrize function
// function xyz(a,b){
//     if(a>b){
//         console.log("hello")
//     }
//     else{
//         console.log("bye")
//     }
// }

// abc()

// xyz(4,9)
// xyz(10,9)
// xyz(1,9)


// // return function
// function getresult(a,b,c){
//     var result=a+b*c;
//     return result
// }

// console.log(getresult(2,4,2))

// Function Expression
// var abc=function(a, b) {
//   return a * b;
// };

// console.log(abc(45,2))



//! function is a block of code that is exicute when you want to call





// function sumEvenOdd(arr,add=10,sub=12) {

    
//     var sum_even = 0;
//     var sum_odd = 0;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             sum_even += arr[i]
//         }
//         else {
//             sum_odd += arr[i]
//         }
//     }

//     console.log("sum of even number in array", sum_even+add)
//     console.log("sum of odd number in array", sum_odd-sub)


// }

// sumEvenOdd([41, 78, 5, 4, 96, 6, 4, 2, 55, 59])
// sumEvenOdd([41, 7, 2, 55, 59],15,10)
// sumEvenOdd([41, 2, 55, 59])
// sumEvenOdd([41, 78, 5, 4, 96, 6,])


// function abc(a){
//     console.log(a)
// }

// abc()
// abc(12)


// var car={
//     "name":"i10",
//     "color":"white",
//     "model":2015,
//     "price":250000
// }

// var student={
//     name:"abhi",
//     company:"shanti infosoft",
//     skills:["html","css","js","react","node"],
//     address:{
//         city:"indore",
//         state:"mp",
//         pincode:452021,

//     }
// }

// var students=[
//     {
//     name:"abhi",
//     company:"shanti infosoft",
//     skills:["html","css","js","react","node"],
//     address:{
//         city:"indore",
//         state:"mp",
//         pincode:452021,

//     }
// },
// {
//     name:"ram",
//     company:" infosoft",
//     skills:["react","node"],
//     address:{
//         city:"bhopal",
//         state:"mp",
//         pincode:451545,

//     }
// }
// ]

// console.log(students[1].skills[0])



// console.log(student.name)
// console.log(student.skills[0])
// console.log(student.address.city)


var student={
    name:"abhi",
    company:"shanti infosoft",
    skills:["html","css","js","react","node"],
    address:{
        city:"indore",
        state:"mp",
        pincode:452021,

    }
}


student.name="abhishek"
student.dob="20-02-2000"
student["surname"]="gurjar"

console.log(student)