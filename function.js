// ...............First type

// function Myname(Fname,Lname){
//   console.log(Fname+Lname);
    
// }
// // Myname("Ashutosh"," Singh")// using string

// // sum of two numbers
// function SumOfTwoNo(num1,num2)// this is parameter 
// {
// console.log(num1+num2)
// }
// SumOfTwoNo(55,55)// this is arrguments...

//2ndtype
// function addTwoNo(x,y)
// {
//   //  let ans=x+y (Indirect)
//     return x+y //direct
// }
// const ans=addTwoNo(3,5)
// //console.log("Ans", ans);

//...........................Advanced...........................................//

function IsloginUserMessege(username)
{
    if(username===undefined) // undefined is false value in js   
    {
        console.log("Enter the username");
        return // this time return behave like a fullstop

    }
    return `${username} Just Logged in` 
}
console.log(IsloginUserMessege("Ashu")); // value will be passed 
// let check when didn't give any arggrument
console.log(IsloginUserMessege());

