// // object Literals
// const create={
//     name:"Ashu",
//     "Full name": "Ashutosh singh", // never accessed using  . method (!create.Full name)
//     Age:23,
//     location: "Ranchi",
//     Email: "singh6776@gmail.com"

    

// }
// // Access
// console.log(create.Age);// access using dot 
// //but when object create as a string "fullname"  
// console.log(create["Full name"]);// string type
// console.log(create["location"]); 

// // change object value...
// create.Age=24;
// // console.log(create);

//  // .............how can freez the object.............
//  Object.freeze(create) // using this the object will lock... nothing change . 
//   create.Email= "king@gmail.com"
//   console.log(create);


//   //.........................Singleton object.............................

//   const tinderUser =new Object()// this singleton object
//   tinderUser.name="Ashutosh"

//   console.log(tinderUser);

 //>>>>>>>>>>>>>>>>>>.....Nested Objects....<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//  const newthing={
//     email:
//     {
//         first: "SinghAshutosh@gmail.com",
//         SecondEmail : "Singh@gmailcom12309"
//     },
//     Address2: 
//     {
//         currentAddress:{
//             locations:"ranchi",
//             permanent:{
//                 location2:"Banglore"

//             }

//         }

//     }
//  }
//  console.log(newthing.email.SecondEmail.first.Address2.locations); // using dot for  nesting (opening the objects)

 //object spread mostly using this only
 let hello={1:"hello",2:"hey"}
 let bye={2:"seeYou",3:"bye"}
 let greet={5:"goodmorning",6:"goodAfternoon"}

 let contain ={...hello,...bye,...greet}
 console.log(contain);


 //.....................................de-structure.........................................................

// create a object
// objects is refrence data type not premetive data type.. 
const course={
    CrName: "java Fullsatck",
    price :"999",
    crInstrcturtor:"AShutosh"

    
}
//const {crInstrcturtor:Techer}=course 
 // is called de-structuring when the orignal value stores in  another objct or rename...

//console.log(Techer);
course.strength = 200;

// dynamic object..(provide reusibliti)
console.log(course);



 

  

 









