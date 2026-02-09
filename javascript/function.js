
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


// student.name="abhishek"
// student.dob="20-02-2000"
// student["surname"]="gurjar"

// console.log(student)




// var a=23.5;
// console.log(Math.ceil(23.5))

// console.log(Math.floor(Math.random()*1000000))

// var date=new Date();
// console.log(date)
// // const d = new Date("2022-03-25");
// // const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// const d = new Date(2018, 11);
// console.log(d)
// var course={
//     name:"web development",
//     disc:"this curse for creating a website , or reponsive and fully functionally application",
//     price:12000,
//     duration:"60days",
//     slot:8,
//     createdBy:"abhishek",
//     language:["html","css","js"]
// }

// console.log(course)
// console.log(course.language[2])
// course.isActive=false;
// console.log(course)


// var user = {name:"Amit", age:22, city:"Noida"}; // global

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));



// 5. Object.freeze()
// Definition:

// Prevents any changes in object

// Object.freeze(user);

// user.age = 30;   // will NOT change


// 6. Object.seal()
// Definition:

// Allows updating existing properties but no new property can be added

// Object.seal(user);

// user.age = 40;    // allowed
// user.country = "India"; // NOT allowed


// 7. hasOwnProperty()
// Definition:

// Check if property exists

// console.log(user.hasOwnProperty("college"));




// var course = {
//     // Basic Info
//     id: "C001",
//     name: "Web Development",
//     description: "This course teaches how to create responsive and fully functional websites and web applications.",
//     category: "Programming",
//     subCategory: "Web Development",
//     level: "Beginner to Advanced",
//     price: 12000,
//     maxStudents: 50,
//     enrolledStudents: 12,
//     rating: 4.5,
//     reviewsCount: 25,
//     duration: "60 days",
//     totalHours: 120,
//     dailyHours: 2,
//     slot: 38,
//     language: ["HTML", "CSS", "JavaScript"],
//     topics: [
//         "HTML Basics",
//         "CSS Styling",
//         "Responsive Design",
//         "JavaScript Fundamentals",
//         "DOM Manipulation",
//         "Projects"
//     ],
//     getCourseDetails:function(){
//         return `this course for ${this.name} , it is a ${this.duration} course , only reamining slot ${this.maxStudents - course.slot}`
//     },
//     getAllLanguage:function(){
//         for(var i=0;i<this.language.length;i++){
//             console.log(this.language[i])
//         }
//     }

// };


// // console.log(course.getCourseDetails())
// course.getAllLanguage()




// var course={
//     name:"web development",
//     disc:"this curse for creating a website , or reponsive and fully functionally application",
//     price:12000,
//     duration:"60days",
//     slot:8,
//     createdBy:"abhishek",
//     language:["html","css","js"]
// }


// for(var i=0;i<7;i++){
//     console.log(i)
// // }

// var date=new Date();
// console.log(date)
// console.log(date.getDate())


// var a=10; // global
// let b=23; // global

// function abc(){
//     var c=3; // function scop // block scop

//     console.log(a+b+c)
// }

// console.log(c)

// abc();

// var , let , cost

// var a=10;
// var a=20;
// console.log(a)


// let a;
//  a=20;

// console.log(a)

const a=10;
 a=20;

console.log(a)

// | Feature                        | Global Scope                                     | Function Scope                                  | Block Scope                                           |
// | ------------------------------ | ------------------------------------------------ | ----------------------------------------------- | ----------------------------------------------------- |
// | Where variables are accessible | Everywhere in the program                        | Only inside the function where defined          | Only inside `{ }` block                               |
// | Created by                     | Variables declared outside any function or block | Variables declared with `var` inside a function | Variables declared with `let` or `const` inside `{ }` |
// | Accessible outside its area?   | Yes                                              | No                                              | No                                                    |
// | Example keywords               | `var`, `let`, `const` (outside)                  | `var` inside function                           | `let`, `const` inside block                           |
// | Lifetime                       | Exists while page/program runs                   | Exists only while function runs                 | Exists only inside block                              |



// | Feature            | var                                  | let                                              | const                                            |
// | ------------------ | ------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
// | Scope              | Function scope                       | Block scope                                      | Block scope                                      |
// | Can be redeclared? | Yes                                  | No                                               | No                                               |
// | Can be reassigned? | Yes                                  | Yes                                              | No                                               |
// | Hoisting           | Hoisted and initialized as undefined | Hoisted but not initialized (Temporal Dead Zone) | Hoisted but not initialized (Temporal Dead Zone) |
// | Introduced in      | ES5                                  | ES6                                              | ES6                                              |
// | Best used for      | Old JS code (not recommended now)    | Variables that may change                        | Values that must not change                      |
