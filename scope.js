//  // Block Scope And Global Scope
//  // Scope is just using block {}..
//  const z=20
//   let a=10
//   var b=5
//    if(true)
//    {
//     let a=200
//     const z=900
//     var b=1900
//     // is block of code means block scope
//     // calling the refrence value in under the block is called block Scope.

//     console.log("Inside: ", a); 
//     console.log(b);
//     console.log(z);
//    }

   
//    console.log("outer:", z) 

//>>>>>>>>>>>>>>>>>>>>Version_2
// function one(){
//     const username = "Ashutosh"

//     function two(){
//         const website = "Vscode"
//         console.log(username);
//         console.log(website);
//     }
//     // console.log(website);

//      two()

// }

// // one()

// if (true) {
//     const username = "Ashutosh"
//     if (username === "Ashutosh") {
//         const website = " Vscode"
//          console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// //addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }

// global scope can be accssed with  let,and const also?
// Answer is No
  
let globalSope =10;
const GlobalScope =20;
function exampleFunction()
{
    console.log(globalScope);
    console.log(GlobalScope);
    // exampleFunction();
}
// Outer 
//exampleFunction(); not Allowed...
console.log(globalSope)
console.log(GlobalScope)

