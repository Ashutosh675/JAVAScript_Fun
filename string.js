const name ="Ashutosh"
//console.log("hello"+ name);

// string is primetive data type..
const gameName=new String('Ashutosh')
console.log(gameName.length) // lenght of the string 
console.log(gameName._proto_)
console.log(gameName.toUpperCase); // to converted into capital >> doesnot change the orignal value.

console.log(gameName.charAt(3)) // to find index value like whats character in 3 value ("Ashtosh") o/p = t.
console.log(gameName.indexOf('u')) // find index No...>>

const newString =gameName.substring(0,4) //mean print the only value 0th index to 4 the index..
console.log(newString)
 

const newString1= gameName.slice(-2,4)// when give it posititve o/p is ash...when give in put in negative the print reverse

 



